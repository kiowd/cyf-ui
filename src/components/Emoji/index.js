import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSmile,
  faPhone,
  faMeh,
  faFrown,
} from "@fortawesome/free-solid-svg-icons";
import { BaseEmoji, BaseSmileyEmoji } from "./BaseEmoji";

library.add(faSmile, faMeh, faFrown);

const baseEmojiPropTypes = {
  color: PropTypes.string,
};

const baseEmojiDefaultPropTypes = {
  color: "#1B365D",
};

export const CallEmoji = ({ color }) => (
  <BaseEmoji icon={faPhone} color={color} />
);
CallEmoji.propTypes = baseEmojiPropTypes;
CallEmoji.defaultProps = baseEmojiDefaultPropTypes;

export const SmileEmoji = () => <BaseSmileyEmoji icon={faSmile} />;

export const MehEmoji = () => <BaseSmileyEmoji icon={faMeh} />;

export const FrownEmoji = () => <BaseSmileyEmoji icon={faFrown} />;
