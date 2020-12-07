import React from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => css`
    color: ${(props) => (props.color ? props.color : `#ffffff`)};
    background-color: ${(props) =>
      props.background ? props.background : `#00a3ff`};
    border-color: #00a3ff;
    width: 135.88px;
    left: 2354px;
    top: 1432px;
    height: 42px;n
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    ${
      variant === "secondary" &&
      css`
        color: ${(props) => (props.color ? props.color : `#ffffff`)};
        background-color: ${(props) =>
          props.background ? props.background : `#28a745`};
        border-color: #28a745;
      `
    }

    ${
      variant === "danger" &&
      css`
        color: ${(props) => (props.color ? props.color : `#ffffff`)};
        background-color: ${(props) =>
          props.background ? props.background : `#dc3545`};
        border-color: #28a745;
      `
    }

      // Here the style that differ in the secondary
    ${
      variant === "outline" &&
      css`
        color: ${(props) => (props.color ? props.color : `#007bff`)};
        background-color: ${(props) =>
          props.background ? props.background : `#ffffff`};
        border-color: ${(props) => (props.color ? props.color : `#007bff`)};
      `
    }
  `}
`;

export const PrimaryButton = ({ ...args }) => (
  <Button
    variant="primary"
    background={args.backgroundColor}
    color={args.color}
  >
    {args.label}
  </Button>
);

export const SecondaryButton = ({ ...args }) => (
  <Button
    variant="secondary"
    background={args.backgroundColor}
    color={args.color}
  >
    {args.label}
  </Button>
);

export const DangerButton = ({ ...args }) => (
  <Button variant="danger" background={args.backgroundColor} color={args.color}>
    {args.label}
  </Button>
);

export const OutlinedButton = ({ ...args }) => (
  <Button
    variant="outline"
    background={args.backgroundColor}
    color={args.color}
  >
    {args.label}
  </Button>
);
