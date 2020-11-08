import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  font-style: bold;
  font-weight: 600;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  padding: 8px 50px;
  color: white;
  border: none;
  background-color: limegreen;
`;

const Submit = ({ children }) => <StyledButton>{children}</StyledButton>;

Submit.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Submit;
