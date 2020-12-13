import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "./TabLabel";

const TabList = styled.ol`
  border-bottom: 1px solid rgb(188, 185, 190);
  padding-left: 0;
`;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const clickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <TabList>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              clickTabItem={clickTabItem}
            />
          );
        })}
      </TabList>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
