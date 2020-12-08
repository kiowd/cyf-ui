import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => css`
    color: #ffffff;
    background: #3455db;
    width: 135.88px;
    width: 182px;
    height: 60px;
    left: 108px;
    top: 612px;
    box-sizing: border-box;
    border-radius: 2px;
    border: none;
    padding: 0.375rem 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: center;

    ${variant === "secondary" &&
    css`
      background: #28a228;
    `}

    ${variant === "danger" &&
    css`
      background: #d3273e;
    `}

    ${variant === "outline" &&
    css`
      color: #3455db;
      border: 1px solid #3455db;
      background: none;
    `}
  `}
`;
