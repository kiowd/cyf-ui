import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Emoji from "..";

library.add(faSmile, faMeh, faFrown);

// const = styled.div`
//   .ferhat {
//     color: "yellow";
//     height: 200px;
//   }
// `;

const StyledIcon = styled(FontAwesomeIcon)`
  .icons {
    color: "yellow";
  }
`;

export default {
  title: "Components/Emoji",
  component: Emoji,
};

//
export const SmileEmoji = () => {
  return <StyledIcon icon="smile" style={{ color: "red" }} />;
};

export const MehEmoji = () => {
  return <StyledIcon icon="meh" className="icons" />;
};

export const FrownEmoji = () => {
  return <StyledIcon icon="frown" />;
};
