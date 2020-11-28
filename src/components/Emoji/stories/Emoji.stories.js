import React from "react";
import { BaseEmoji, SmileEmoji, MehEmoji, FrownEmoji } from "../index";

export default {
  title: "Components/Emoji",
  component: BaseEmoji,
};

export const SmileEmojiStory = () => <SmileEmoji />;
SmileEmojiStory.storyName = "Smile Emoji";

export const MehEmojiStory = () => <MehEmoji />;
MehEmojiStory.storyName = "Meh Emoji";

export const FrownEmojiStory = () => <FrownEmoji />;
FrownEmojiStory.storyName = "Frown Emoji";
