import React from "react";
import styled from "styled-components";

export const Button2 = styled.button`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 21px;
  color: white;
`;

export const StyledPrimaryButton = styled.button`
  width: 363.35px;
  height: 80.31px;
  left: 578.87px;
  top: 2054.69px;
  background: #28a228;
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

// /* primary buttons styling */
// const btnPrimary = {
//   name: "btnPrimary",
//   color: "#ffffff",
//   background: "#2196f3",
// };

// /* secondary buttons styling */
// const btnSecondary = {
//   name: "btnSecondary",
//   color: "#ffffff",
//   background: "#4CAF50",
// };

// const btnOutline = {
//   name: "btnOutline",
//   color: "#4CAF50",
//   background: "#ffffff",
//   border: "2px solid #4CAF50",
// };

// /* error buttons styling */
// const btnDanger = {
//   name: "btnDanger",
//   color: "#ffffff",
//   background: "#f44336",
// };

// // Add all buttons different  objects here
// const buttonTypes = [
//   btnPrimary,
//   btnOutline,

//   btnSecondary,

//   btnDanger,

// ];

// // Return the wanted button styles according the type props that send to the component
// const getSelectedButtonStyle = (variant) =>
//   buttonTypes.find((btn) => btn.name === variant);

// // The button styled component
// const StyledButton = styled.button`
//   font-style: normal;
//   font-weight: 600;
//   font-size: ${(props) => props.variant.fontSize || "14px"};
//   font-family: "Open Sans", sans-serif;
//   line-height: 14px;
//   color: ${(props) => props.variant.color};
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: 0.75px;
//   text-transform: capitalize;
//   padding: ${(props) => props.variant.padding || "8px 32px"};
//   box-shadow: ${(props) => props.variant.boxShadow || "none"};
//   border: ${(props) => props.variant.border || "none"};
//   background: ${(props) => props.variant.background};
//   opacity: ${(props) => props.variant.opacity || "initial"};
//   border-radius: ${(props) => props.variant.borderRadius || "5px"};
// `;

// const Button = ({ variant, children, onClick }) => (
//   <StyledButton onClick={onClick} variant={getSelectedButtonStyle(variant)}>
//     {children}
//   </StyledButton>
// );

// Button.propTypes = {
//   children: PropTypes.any.isRequired,
//   variant: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default Button;
