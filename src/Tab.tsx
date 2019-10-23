import React, { FC } from "react";
import { TabItem } from "./styles";

export type TabProps = {
  label: string;
  index: number;
  width?: number;
  onClick: (e?: React.MouseEvent) => void;
  isSelected?: boolean;
};

export const TabHeader = ({ index, onClick, width, label, isSelected }) => (
  <TabItem
    key={index}
    onClick={onClick}
    data-item={index}
    isSelected={isSelected}
    width={width}
  >
    {label}
  </TabItem>
);

const Tab: React.FC<Pick<TabProps, "label">> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
