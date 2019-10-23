import styled from "@emotion/styled";
import safeGet from "./safeGet";

const tabSizes = {
  large: {
    height: "60px",
    fontSize: "2em"
  },
  medium: { height: "40px", fontSize: "1em" },
  small: { height: "30px", fontSize: "1em" }
};

export interface ITabGroup {
  size?: string;
  tabPosition?: string;
  tabBarStyle?: {
    width?: string;
  };
  justifyTabs?: "start" | "space-evenly";
}
interface ITab {
  isSelected: boolean;
  width: number;
}
interface IStyleProps {
  styleProps: { size: "large" | "medium" | "small"; tabPosition: string };
}
interface ITabHighlight {
  selectedTab: number;
  tabCount: number;
}
export const TabPane = styled.div<IStyleProps>`
  background-color: lightgray;
  height: ${({ styleProps }) => tabSizes[styleProps.size].height};
  font-size: ${({ styleProps }) => tabSizes[styleProps.size].fontSize};
`;
export const ViewPane = styled.div``;
export const TabsList = styled.section<ITabGroup>`
  width: ${tabGroupProps =>
    safeGet(tabGroupProps, "tabBarStyle.width", "inherit")};
  display: flex;
  align-items: flex-start;
`;

export const TabGroupContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  user-select: none;
  width: inherit;
  height: inherit;
  display: grid;
  grid-template-rows: min-content auto;
`;

export const TabItem = styled.section<ITab>`
  color: ${({ isSelected }) => (isSelected ? "rgb(111, 110, 110)" : "white")};
  animation: textgrowth 1s infinite alternate;
  /* font-size: ${({ isSelected }) => (isSelected ? "16px" : "14px")}; */
  width: ${({ width }) => `${width}%`};
  font-weight: bold;
  height: inherit;
  padding: 10px 20px;
  cursor: pointer;
`;

export const TabSelector = styled.hr<ITabHighlight>`
  margin: 0px;
  /* margin-left: ${props =>
    `${(props.selectedTab / props.tabCount) * 100}%`}; */
  width: ${props => `${100 / props.tabCount}%`};
  border: rgb(111, 110, 110) solid 1px;
  transition: 0.1s ease-in-out;
  /* display:none; */
`;
