import React, { useCallback, useRef, memo, useEffect } from "react";
import {
  TabsList,
  TabSelector as TabInkBar,
  TabGroupContainer,
  TabPane as TabsNavbar,
  ViewPane,
  defaultTabBarStyle,
  TabBarStyle
} from "./styles";
import { SwipeableViews } from "./SwipeableTabs";
import { Tab, TabHeader, TabProps } from "./Tab";

type TabGroupProps = {
  value: string;
  styleProps?: TabBarStyle;
  onChange: (selectedTab: { label: string; key: string | number }) => void;
  children: Array<React.FunctionComponentElement<TabProps>>;
  tabBarCSS?: string;
  tabItemCSS?: string;
  blacklistedElement?: {
    identifierType: "className" | "id" | "nodeName";
    identifierName: string;
  };
};

const TabGroup: React.FC<TabGroupProps> = ({
  children = [],
  value,
  onChange,
  styleProps = {},
  tabBarCSS = "",
  tabItemCSS = "",
  blacklistedElement = undefined
}) => {
  const inkBarRef = useRef<HTMLHRElement>(null);
  const tabLabels = useRef<Array<string>>([]);
  const handleSwipe = useCallback(
    (selectedTab: number) => {
      onChange({
        label: tabLabels.current[selectedTab],
        key: children[selectedTab].key || selectedTab
      });
    },
    [tabLabels, children]
  );
  const handleTabClick = useCallback(
    (tabName: string, tabKey: number | string) => () => {
      const tabIndex = tabLabels.current.indexOf(tabName);
      onChange({ label: tabName, key: tabKey });
      if (!inkBarRef.current) return;
      const inkBarStyle = inkBarRef.current.style;
      inkBarStyle.transition = "none";
      inkBarStyle.marginLeft = `${(tabIndex / children.length) * 100}%`;
      inkBarStyle.transition = "0.1s ease-in-out";
    },
    [onChange, children, tabLabels.current, inkBarRef]
  );

  useEffect(() => {
    tabLabels.current = children.map(child => child.props.label);
  }, []);

  /** Verify that valid <Tab/> children are being passed */
  // useEffect(() => {
  //   if (children.some(child => !(child.type === Tab))) {
  //     const error = new Error("TabsGroup children need to be of <Tab> type");
  //     error.name = "Invalid Children";
  //     throw error;
  //   }
  // }, [children]);
  return (
    <TabGroupContainer styleProps={styleProps}>
      <TabsNavbar styleProps={styleProps} tabBarCSS={tabBarCSS}>
        <TabsList styleProps={styleProps}>
          {children.map((child, index) => (
            <TabHeader
              index={child.key || index}
              onClick={handleTabClick(child.props.label, child.key || index)}
              width={100 / children.length}
              label={child.props.label}
              isSelected={value === child.props.label}
              key={child.props.label}
              styleProps={styleProps}
              tabItemCSS={tabItemCSS}
            />
          ))}
        </TabsList>
        <TabInkBar
          selectedTab={children.map(child => child.props.label).indexOf(value)}
          tabCount={children.length}
          ref={inkBarRef}
          styleProps={styleProps}
        />
      </TabsNavbar>
      <ViewPane>
        <SwipeableViews
          views={children}
          onSwipe={handleSwipe}
          selectedView={children.map(child => child.props.label).indexOf(value)}
          inkBarRef={inkBarRef}
          blacklistedElement={blacklistedElement}
          // selectedTabName={value}
          // tabLabels={tabLabels}
        />
      </ViewPane>
    </TabGroupContainer>
  );
};

export const Tabs = memo(TabGroup);
