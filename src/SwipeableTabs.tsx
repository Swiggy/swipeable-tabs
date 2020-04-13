import React, { useRef, useEffect, useCallback, memo } from "react";
import styled from "@emotion/styled";
import safeGet from "./safeGet";

type ITouchData = {
  target: HTMLElement;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
  velocityX: number;
  velocityY: number;
  isTargetBlacklisted: boolean;
  startTime: number;
  currentTime: number;
  deltaTime: number;
  pointerActive: boolean;
};

type SwipeViewProps = {
  views: JSX.Element[];
  onSwipe: (selectedTab: number) => void;
  blacklistedElement?: {
    identifierType: "className" | "id" | "nodeName";
    identifierName: string;
  };
  inkBarRef: any;
  selectedView: number;
  // tabLabels: React.MutableRefObject<string[]>;
  // selectedTabName: string;
};

export interface ISwipeContainer {
  transform: string;
  viewCount: number;
}

export const SwipeableContainer = styled.section<ISwipeContainer>`
  width: ${({ viewCount }) => `${viewCount * 100}%`};
  display: flex;
  position: relative;
  height: inherit;
  transform: ${({ transform }) => transform};
  /* transition: 0.5s ease-in-out; */
`;

const SwipeView = styled.section<{ viewCount }>`
  width: ${({ viewCount }) => `${viewCount ? 100 / viewCount : 0}%`};
  position: relative;
  min-height: 100%;
  user-select: none;
  overflow-y: auto;
`;

const SwipeableViewsComponent: React.FC<SwipeViewProps> = (
  props: SwipeViewProps
) => {
  const { views, onSwipe, inkBarRef: hrRef, selectedView } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const touchData = useRef<ITouchData>();
  const isExtreme = useCallback(
    e => {
      if (!touchData.current) return;
      // const selectedTab = tabLabels.current.indexOf(selectedTabName);
      if (
        (selectedView === 0 &&
          Math.abs(touchData.current.deltaX) /
            safeGet(touchData, "current.deltaX", 1) ===
            1) ||
        (selectedView === views.length - 1 &&
          Math.abs(touchData.current.deltaX) /
            safeGet(touchData, "current.deltaX", 1) ===
            -1)
      )
        return true;
      return false;
    },
    [selectedView, views, touchData]
  );

  const isTargetBlacklisted = useCallback(
    e => {
      if (!props.blacklistedElement) return false;
      const isBlocked = e.path.filter(
        item =>
          safeGet(item, `${props.blacklistedElement!.identifierType}`) ===
          props.blacklistedElement!.identifierName
      );
      return isBlocked.length > 0;
    },
    [props.blacklistedElement]
  );

  const handlePanStart = useCallback(
    (e: TouchEvent | PointerEvent | MouseEvent) => {
      let currentX, currentY;
      if (e.type === "touchstart") {
        currentX = (e as TouchEvent).changedTouches[0].pageX;
        currentY = (e as TouchEvent).changedTouches[0].pageY;
      } else {
        currentX = (e as PointerEvent).pageX;
        currentY = (e as PointerEvent).pageY;
      }
      touchData.current = {
        target: e.target as HTMLElement,
        startX: currentX,
        startY: currentY,
        currentX,
        currentY,
        deltaX: 0,
        deltaY: 0,
        velocityX: 0,
        velocityY: 0,
        isTargetBlacklisted: isTargetBlacklisted(e),
        startTime: e.timeStamp,
        currentTime: e.timeStamp,
        deltaTime: 0,
        pointerActive: true
      };
      const el = containerRef.current;
      if (!el) return;
      el.style.transition = `none`;
    },
    [touchData, containerRef]
  );

  const handlePanMove = useCallback(
    (e: TouchEvent | PointerEvent | MouseEvent) => {
      //   e.preventDefault();
      if (!safeGet(touchData, "current.pointerActive", false)) return;
      let currentX, currentY;
      if (e.type === "touchmove") {
        currentX = (e as TouchEvent).changedTouches[0].pageX;
        currentY = (e as TouchEvent).changedTouches[0].pageY;
      } else {
        currentX = (e as PointerEvent).pageX;
        currentY = (e as PointerEvent).pageY;
      }
      // const selectedTab = tabLabels.current.indexOf(selectedTabName);

      if (!touchData.current) return;
      if (touchData.current.isTargetBlacklisted) return;
      touchData.current = {
        ...touchData.current,
        target: e.target as HTMLElement,
        currentX: currentX,
        currentY: currentY,
        deltaX: currentX - touchData.current.startX,
        deltaY: currentY - touchData.current.startY,
        velocityX:
          (currentX - touchData.current.startX) /
          (e.timeStamp - touchData.current.startTime),
        velocityY:
          (currentY - touchData.current.startY) /
          (e.timeStamp - touchData.current.startTime),
        currentTime: e.timeStamp,
        deltaTime: e.timeStamp - touchData.current.startTime,
        isTargetBlacklisted: isTargetBlacklisted(e)
      };
      if (
        Math.abs(touchData.current.velocityX) <
        Math.abs(touchData.current.velocityY)
      ) {
        return;
      }
      const el = containerRef.current;
      if (!el || isExtreme(e)) {
        return;
      }
      const viewWidth =
        safeGet(containerRef, "current.clientWidth", 0) / views.length;

      const currentOffset = viewWidth * selectedView;
      el.style.transform = `translateX(-${currentOffset -
        touchData.current.deltaX}px)`;
      if (hrRef) {
        hrRef.current.style.transition = "none";
        hrRef.current.style.marginLeft = `${((currentOffset -
          touchData.current.deltaX) /
          viewWidth) *
          hrRef.current.clientWidth}px`;
        hrRef.current.style.transition = "0.1s ease-in-out";
      }
    },
    [touchData, containerRef, selectedView, views, isExtreme, hrRef]
  );

  const handlePanEnd = useCallback(
    (e: TouchEvent | PointerEvent | MouseEvent) => {
      //   e.preventDefault();
      let currentX, currentY;
      if (e.type === "touchend" || e.type === "touchcancel") {
        currentX = (e as TouchEvent).changedTouches[0].pageX;
        currentY = (e as TouchEvent).changedTouches[0].pageY;
      } else {
        currentX = (e as PointerEvent).pageX;
        currentY = (e as PointerEvent).pageY;
      }
      // const selectedTab = tabLabels.current.indexOf(selectedTabName);
      if (!touchData.current) return;
      if (touchData.current.isTargetBlacklisted) return;
      touchData.current = {
        ...touchData.current,
        target: e.target as HTMLElement,
        currentX: currentX,
        currentY: currentY,
        deltaX: currentX - touchData.current.startX,
        deltaY: currentY - touchData.current.startY,
        velocityX:
          (currentX - touchData.current.startX) /
          (e.timeStamp - touchData.current.startTime),
        velocityY:
          (currentY - touchData.current.startY) /
          (e.timeStamp - touchData.current.startTime),
        currentTime: e.timeStamp,
        deltaTime: e.timeStamp - touchData.current.startTime,
        pointerActive: false,
        isTargetBlacklisted: isTargetBlacklisted(e)
      };
      if (!(e.type === "touchend" || e.type === "mouseup") &&
        Math.abs(touchData.current.velocityX) <
        Math.abs(touchData.current.velocityY)
      ) {
        return;
      }
      const el = containerRef.current;
      if (!el || isExtreme(e)) return;
      el.style.transition = `0.1s ease-in-out`;

      const viewWidth =
        safeGet(containerRef, "current.clientWidth", 0) / views.length;
      if (Math.abs(touchData.current.deltaX) > viewWidth / 3) {
        const direction =
          touchData.current.deltaX / Math.abs(touchData.current.deltaX);
        const updatedPage = selectedView - direction;
        onSwipe(updatedPage);
        el.style.transform = `translateX(-${(updatedPage / views.length) *
          100}%)`;
        if (hrRef) {
          hrRef.current.style.marginLeft = `${(updatedPage / views.length) *
            100}%`;
        }
      } else {
        el.style.transform = `translateX(-${(selectedView / views.length) *
          100}%)`;
        if (hrRef) {
          hrRef.current.style.marginLeft = `${(selectedView / views.length) *
            100}%`;
        }
      }
    },
    [touchData, containerRef, views, selectedView, onSwipe, isExtreme, hrRef]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // const selectedTab =  tabLabels.current.indexOf(selectedTabName);
    el.style.transform = `translateX(-${(selectedView / views.length) * 100}%)`;
    el.style.transition = "0.1s ease-in-out";
  }, [selectedView, containerRef, views]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("touchstart", handlePanStart, false);
    el.addEventListener("touchend", handlePanEnd, false);
    el.addEventListener("touchcancel", handlePanEnd, false);
    el.addEventListener("touchmove", handlePanMove, false);
    el.addEventListener("mousedown", handlePanStart, false);
    el.addEventListener("mouseup", handlePanEnd, false);
    el.addEventListener("mousemove", handlePanMove, false);
    // el.addEventListener("mouseout", handlePanEnd, false);
    return () => {
      el.removeEventListener("touchstart", handlePanStart, false);
      el.removeEventListener("touchend", handlePanEnd, false);
      el.removeEventListener("touchcancel", handlePanEnd, false);
      el.removeEventListener("touchmove", handlePanMove, false);
      el.removeEventListener("mousedown", handlePanStart, false);
      el.removeEventListener("mouseup", handlePanEnd, false);
      el.removeEventListener("mousemove", handlePanMove, false);
      // el.removeEventListener("mouseout", handlePanEnd, false);
    };
  }, [containerRef, handlePanStart, handlePanMove, handlePanEnd]);

  return (
    <SwipeableContainer
      ref={containerRef}
      transform={`translateX(-${(selectedView / views.length) * 100}%)`}
      viewCount={safeGet(props, "views.length", 0)}
    >
      {props.views.map((view, index) => {
        return (
          <SwipeView key={index} viewCount={safeGet(props, "views.length", 0)}>
            {view}
          </SwipeView>
        );
      })}
    </SwipeableContainer>
  );
};

export const SwipeableViews = memo(SwipeableViewsComponent);
