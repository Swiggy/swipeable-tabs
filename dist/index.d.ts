
declare type BlackListHint = {
    identifierType: "className" | "id" | "nodeName";
    identifierName: string;
};
declare type SwipeViewProps = {
    views: JSX.Element[];
    onSwipe: (selectedTab: number) => void;
    blacklistedElement?: BlackListHint[] | BlackListHint;
    inkBarRef: any;
    selectedView: number;
};
export interface ISwipeContainer {
    transform: string;
    viewCount: number;
}
export declare const SwipeableContainer: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: React.ElementType<any> | undefined;
} & ISwipeContainer, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
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
    blacklistedElement?: {
        identifierType: "className" | "id" | "nodeName";
        identifierName: string;
    };
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
}
interface ITab {
    isSelected: boolean;
    width: number;
    styleProps: TabBarStyle;
    tabItemCSS: string;
}
interface IStyleProps {
    styleProps?: TabBarStyle;
    tabBarCSS?: string;
}
interface ITabGroup {
    styleProps: TabBarStyle;
}
interface ITabHighlight {
    selectedTab: number;
    tabCount: number;
    styleProps: TabBarStyle;
}
export declare const TabPane: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
} & IStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ViewPane: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TabsList: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
} & ITabsList, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const TabGroupContainer: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
} & ITabGroup, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TabItem: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
} & ITab, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const TabSelector: import("@emotion/styled").StyledComponent<{
    theme?: any;
    as?: import("react").ElementType<any> | undefined;
} & ITabHighlight, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, {}>;
