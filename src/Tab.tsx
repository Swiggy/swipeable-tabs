import React, { FC, Component } from 'react';
import { TabItem, TabBarStyle } from './styles';

export type TabProps = {
  label: string;
  icon?: Component;
  index: string | number;
  width: number;
  onClick: (e?: React.MouseEvent) => void;
  isSelected: boolean;
  styleProps: TabBarStyle;
  tabItemCSS?: string;
};

export const TabHeader: FC<TabProps> = ({
  index,
  onClick,
  width,
  label,
  icon,
  isSelected,
  styleProps,
  tabItemCSS = '',
}) => {
  return (
    <TabItem
      key={index}
      onClick={onClick}
      data-item={index}
      isSelected={isSelected}
      width={width}
      styleProps={styleProps}
      tabItemCSS={tabItemCSS}
    >
      {icon ? icon : label}
    </TabItem>
  );
};

export const Tab: FC<Pick<TabProps, 'label'>> = ({ children }) => {
  return <>{children}</>;
};
