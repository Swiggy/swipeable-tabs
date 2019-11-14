import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import safeGet from "./safeGet";

const tabSizes = {
  large: {
    height: "60px",
    fontSize: "2em"
  },
  medium: { height: "40px", fontSize: "1em" },
  small: { height: "30px", fontSize: "1em" }
};

export const defaultTabBarStyle = {
  fontFamily: "sans-serif",
  barColor: "#8c7ae6",
  headerTextColor: "#fff",
  selectedHeaderTextColor: "#e6d5ec",
  alignHeader: "center",
  showInkBar: true,
  inkBarColor: "white",
  activeInkBarColor: "#82589F",
  size: "medium",
  tabPosition: "top",
  justifyTabs: "space-evenly"
};

export type TabBarStyle = {
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
  // tabBarCSS: string;
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
export const TabPane = styled.div<IStyleProps>`
  background-color: ${({ styleProps }) =>
    safeGet(styleProps, "barColor", defaultTabBarStyle.barColor)};
  height: ${({ styleProps }) =>
    tabSizes[safeGet(styleProps, "size", defaultTabBarStyle.size)].height};
  font-size: ${({ styleProps }) =>
    tabSizes[safeGet(styleProps, "size", defaultTabBarStyle.size)].fontSize};
  border-bottom: ${({ styleProps }) =>
    safeGet(styleProps, "showInkBar", true)
      ? `${safeGet(
          styleProps,
          "inkBarColor",
          defaultTabBarStyle.inkBarColor
        )} solid 1px`
      : "none"};
  ${({ tabBarCSS }) => tabBarCSS};
`;
export const ViewPane = styled.div`
  height: 100%;
`;

export const TabsList = styled.section<ITabsList>`
  width: ${tabGroupProps =>
    safeGet(tabGroupProps, "styleProps.width", "inherit")};
  display: flex;
  height: inherit;
  text-align: center;
`;

export const TabGroupContainer = styled.div<ITabGroup>`
  overflow-x: hidden;
  overflow-y: hidden;
  user-select: none;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  flex-flow: ${({ styleProps }) =>
    styleProps.tabPosition === "bottom" ? "column-reverse" : "column"};
`;

export const TabItem = styled.section<ITab>`
  color: ${({ isSelected, styleProps }) =>
    isSelected
      ? safeGet(
          styleProps,
          "selectedHeaderTextColor",
          defaultTabBarStyle.selectedHeaderTextColor
        )
      : safeGet(
          styleProps,
          "headerTextColor",
          defaultTabBarStyle.headerTextColor
        )};
  font-family: ${({ styleProps }) =>
    safeGet(styleProps, "fontFamily", defaultTabBarStyle.fontFamily)};
  width: ${({ width, styleProps }) =>
    safeGet(styleProps, "justifyTabs", defaultTabBarStyle.justifyTabs) ===
    "space-evenly"
      ? `${width}%`
      : "inherit"};
  height: inherit;
  padding: ${({ styleProps }) =>
    safeGet(styleProps, "justifyTabs", defaultTabBarStyle.justifyTabs) ===
    "space-evenly"
      ? `0`
      : " 0 20px"};

  cursor: pointer;
  line-height: ${({ styleProps }) =>
    tabSizes[styleProps.size || defaultTabBarStyle.size].height};
  text-align: ${({ styleProps }) =>
    styleProps.alignHeader || defaultTabBarStyle.alignHeader};
  ${({ tabItemCSS }) => tabItemCSS}
`;

export const TabSelector = styled.hr<ITabHighlight>`
  margin: 0px;

  width: ${props => `${100 / props.tabCount}%`};
  border: ${({ styleProps }) =>
    safeGet(styleProps, "showInkBar", true)
      ? `${safeGet(
          styleProps,
          "activeInkBarColor",
          defaultTabBarStyle.activeInkBarColor
        )} solid 1px`
      : "none"};
  margin-left: ${({ selectedTab, tabCount }) =>
    `${(100 / tabCount) * selectedTab}%`};
  transition: 0.1s ease-in-out;
  /* display:none; */
`;

/* margin-left: ${props =>
    `${(props.selectedTab / props.tabCount) * 100}%`}; */
