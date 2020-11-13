import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = ({ children }) => {
  const [state, setState] = useState({ activeTab: children[0].props.label });

  const clickTabItem = (tab) => {
    setState({ activeTab: tab });
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={state.activeTab}
              key={label}
              label={label}
              clickTabItem={clickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== state.activeTab) return undefined;
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
