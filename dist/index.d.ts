
declare type SwipeViewProps = {
    views: JSX.Element[];
    onSwipe: (selectedTab: number) => void;
    blacklistedElement?: string;
    inkBarRef: any;
    selectedView: number;
};
export interface ISwipeContainer {
    transform: string;
    viewCount: number;
}
export declare const SwipeableContainer: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, ISwipeContainer, object>;
export declare const SwipeableViews: React.NamedExoticComponent<SwipeViewProps>;

export declare type TabProps = {
    label: string;
    index: string | number;
    width: number;
    onClick: (e?: React.MouseEvent) => void;
    isSelected: boolean;
    styleProps: TabBarStyle;
    tabItemCSS?: string;
};
export declare const TabHeader: React.FC<TabProps>;
export declare const Tab: React.FC<Pick<TabProps, "label">>;

declare type TabGroupProps = {
    value: string;
    styleProps?: TabBarStyle;
    onChange: (selectedTab: {
        label: string;
        key: string | number;
    }) => void;
    children: Array<React.FunctionComponentElement<TabProps>>;
    tabBarCSS?: string;
    tabItemCSS?: string;
};
export declare const Tabs: React.NamedExoticComponent<TabGroupProps>;

export * from "./Tab";
export * from "./Tabs";
export * from "./SwipeableTabs";

/**
 * @param object
 * @param path
 * @param defaultVal
 * Gets the value at path of object.
 * If the resolved value is undefined, the defaultVal is returned in its place.
 * Path can be passed in one of the below notations:
 * Example:
 * object = {a:[{b:{c:4}}]}
 *
 * path: ['a',0,'b'] ==> {c:4}
 * path: "a.1.b.c" ==> defaultVal
 * path: ["a", 0, "b", "c"] ==> 3
 * path: "a.0.b.c" ==> 3
 * path: "a[0]b.c" ==> 3
 * path: "a[0].b.c" ==> 3
 */
declare type ObjectType = Array<any> | {
    [key: string]: any;
} | undefined;
declare function getProp(object: ObjectType, path: Array<string | number> | string, defaultVal?: any): any;
export default getProp;

/// <reference types="react" />
/// <reference types="@emotion/core" />
export declare const defaultTabBarStyle: {
    fontFamily: string;
    barColor: string;
    headerTextColor: string;
    selectedHeaderTextColor: string;
    alignHeader: string;
    showInkBar: boolean;
    inkBarColor: string;
    activeInkBarColor: string;
    size: string;
    tabPosition: string;
    justifyTabs: string;
};
export declare type TabBarStyle = {
    fontFamily?: string;
    barColor?: string;
    headerTextColor?: string;
    selectedHeaderTextColor?: string;
    alignHeader?: "left" | "center" | "right";
    showInkBar?: boolean;
    inkBarColor?: string;
    activeInkBarColor?: string;
    size?: "large" | "medium" | "small";
    tabPosition?: "top" | "bottom";
    justifyTabs?: "start" | "space-evenly";
};
export interface ITabsList {
    styleProps?: TabBarStyle;
    tabBarCSS: string;
}
interface ITab {
    isSelected: boolean;
    width: number;
    styleProps: TabBarStyle;
    tabItemCSS: string;
}
interface IStyleProps {
    styleProps?: TabBarStyle;
}
interface ITabGroup {
    styleProps: TabBarStyle;
}
interface ITabHighlight {
    selectedTab: number;
    tabCount: number;
    styleProps: TabBarStyle;
}
export declare const TabPane: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IStyleProps, object>;
export declare const ViewPane: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onClick" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, object>;
export declare const TabsList: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, ITabsList, object>;
export declare const TabGroupContainer: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ITabGroup, object>;
export declare const TabItem: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, ITab, object>;
export declare const TabSelector: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, ITabHighlight, object>;
