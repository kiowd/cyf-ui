import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  color: blue;
  font-size: 24px;
`;

export const Button2 = ({ children }) => (
  <StyledButton>{children} </StyledButton>
);

Button2.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.string,
};
