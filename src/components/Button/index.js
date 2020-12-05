import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 21px;
  color: white;
`;

export const StyledPrimaryButton = styled.button`
  background: #3455db;
  border: 3px solid #3455db;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const StyledSecondaryButton = styled.button`
  width: 135.88px;
  height: 70px;
  left: 2144px;
  top: 1410px;

  background: #3455db;
`;

export const StyledDangerButton = styled.button`
  width: 284.36px;
  height: 27.65px;
  left: 2354px;
  top: 1432px;
`;

export const StyledOutlinedButton = styled.button`
  color: blue;
  font-size: 24px;
`;

export const PrimaryButton = () => (
  <StyledPrimaryButton>Primary </StyledPrimaryButton>
);

export const SecondaryButton = () => (
  <StyledSecondaryButton>Secondary </StyledSecondaryButton>
);

export const DangerButton = () => (
  <StyledDangerButton>Danger </StyledDangerButton>
);

export const OutlinedButton = () => (
  <StyledOutlinedButton> Outlined </StyledOutlinedButton>
);
