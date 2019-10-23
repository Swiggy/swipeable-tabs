import React, {
  useCallback,
  useRef,
  memo,
  useEffect,
  FunctionComponentElement
} from "react";
import {
  TabsList,
  TabSelector as TabInkBar,
  TabGroupContainer,
  TabPane as TabsNavbar,
  ViewPane
} from "./styles";
import SwipeableViews from "./SwipeableTabs";
import Tab, { TabHeader, TabProps } from "./Tab";

type TabGroupProps = {
  value: number;
  defaultValue?: string;
  size?: "large" | "medium" | "small";
  tabBarStyle?: Object;
  tabPosition?: "top" | "bottom";
  onChange: (selectedTabKey: string) => void;
  children: Array<FunctionComponentElement<TabProps>>;
};

const TabGroup: React.FC<TabGroupProps> = ({
  children = [],
  value,
  onChange,
  size = "medium",
  tabPosition = "top"
}) => {
  const styleProps = {
    size,
    tabPosition
  };
  const inkBarRef = useRef<HTMLHRElement>(null);

  const handleTabClick = useCallback(
    (index: number) => () => {
      onChange("" + index);
      if (!inkBarRef.current) return;
      const inkBarStyle = inkBarRef.current.style;
      inkBarStyle.transition = "none";
      inkBarStyle.marginLeft = `${(index / children.length) * 100}%`;
      inkBarStyle.transition = "0.1s ease-in-out";
    },
    [onChange, children]
  );

  /** Verify that valid <Tab/> children are being passed */
  useEffect(() => {
    if (children.some(child => !(child.type === Tab))) {
      const error = new Error("TabsGroup children need to be of <Tab> type");
      error.name = "Invalid Children";
      throw error;
    }
  }, [children]);

  return (
    <TabGroupContainer>
      <TabsNavbar styleProps={styleProps}>
        <TabsList size={size}>
          {children.map((child, index) => (
            <TabHeader
              index={index}
              onClick={handleTabClick(index)}
              width={100 / children.length}
              label={child.props.label}
              isSelected={value === index}
              key={index}
            />
          ))}
        </TabsList>
        <TabInkBar
          selectedTab={value}
          tabCount={children.length}
          ref={inkBarRef}
        />
      </TabsNavbar>
      <ViewPane>
        <SwipeableViews
          views={children}
          onSwipe={onChange}
          selectedTab={value}
          inkBarRef={inkBarRef}
        />
      </ViewPane>
    </TabGroupContainer>
  );
};

export default memo(TabGroup);
