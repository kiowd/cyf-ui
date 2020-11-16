import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

library.add(faSmile, faMeh, faFrown);

export const BaseEmoji = styled(FontAwesomeIcon)`
  color: yellow;
  font-size: 24px;
  back
  border-radius: 100px;
  border: 3px solid gray;
`;

export const SmileEmoji = () => <BaseEmoji icon={faSmile} />;

export const MehEmoji = () => <BaseEmoji icon={faMeh} />;

export const FrownEmoji = () => <BaseEmoji icon={faFrown} />;
