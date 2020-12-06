import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Li = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  margin-right: 0.5rem;
  background-color: lightgrey;
  color: #074a95;
  font-weight: 700;
  padding: 1rem 1.5rem;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
      border: 1px solid rgb(246, 245, 247);
      border-width: 1px 1px 0 1px;
    `}
`;

const Tab = ({ clickTabItem, activeTab, label }) => {
  return (
    <Li
      active={activeTab === label}
      onClick={() => clickTabItem(label)}
      aria-hidden="true"
    >
      {label}
    </Li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickTabItem: PropTypes.func.isRequired,
};

export default Tab;
