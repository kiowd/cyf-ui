import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BaseEmoji = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  background-color: transparent;
  border-radius: 100px;
  color: ${({ color }) => color || "#1B365D"};
`;

export const BaseSmileyEmoji = styled(FontAwesomeIcon)`
  color: white;
  font-size: 34px;
  background-color: gray;
  border-radius: 100px;
  border: 3px solid gray;
`;
