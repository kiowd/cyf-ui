import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ variant }) => css`
    box-sizing: border-box;
    border-radius: 2px;
    border: none;
    padding: 0.575rem 0.85rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
    background: #3455db;

    &:active {
      transform: translateY(1px);
    }
    &:active,
    &:hover {
      background: #ffffff;
      color: #3455db;
      border: 2px solid #3455db;
    }

    transition: background 0.5s ease-in-out;
    transition: color 0.1s ease-in-out;

    ${variant === "secondary" &&
    css`
      background: #28a228;

      &:active,
      &:hover {
        background: #ffffff;
        color: #28a228;
        border: 2px solid #28a228;
      }
    `}

    ${variant === "danger" &&
    css`
      background: #d3273e;
      &:active,
      &:hover {
        background: #ffffff;
        color: #d3273e;
        border: 2px solid #d3273e;
      }
    `}

    ${variant === "outline" &&
    css`
      color: #3455db;
      border: 2px solid #3455db;
      background: none;

      &:active,
      &:hover {
        background: #3455db;
        color: #ffffff;
      }
    `}
  `}
`;
