import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
import Emoji from "..";

const EmojiStyle = {
  color: "white",
  fontSize: "40px",
  backgroundColor: "gray",
  borderRadius: "100px",
  border: "3px solid gray",
};

export default {
  title: "Components/Emoji",
  component: Emoji,
};

//
export const SmileEmoji = () => {
  return <FontAwesomeIcon icon={["fa", "smile"]} style={EmojiStyle} />;
};

export const MehEmoji = () => {
  return <FontAwesomeIcon icon={["fa", "meh"]} style={EmojiStyle} />;
};

export const FrownEmoji = () => {
  return <FontAwesomeIcon icon={["fa", "frown"]} style={EmojiStyle} />;
};
