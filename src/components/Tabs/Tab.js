import React from "react";
import PropTypes from "prop-types";

const Tab = ({ clickTabItem, activeTab, label }) => {
  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li
      className={className}
      onClick={() => clickTabItem(label)}
      aria-hidden="true"
    >
      {label}
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickTabItem: PropTypes.func.isRequired,
};

export default Tab;
