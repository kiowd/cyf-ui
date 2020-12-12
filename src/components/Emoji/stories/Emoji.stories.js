import React from "react";
import { CallEmoji, SmileEmoji, MehEmoji, FrownEmoji } from "../index";
import { BaseEmoji } from "../BaseEmoji";

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

export const CallEmojiStory = () => <CallEmoji />;
CallEmojiStory.storyName = "CallEmoji";

export const CallEmojiStoryBlue = () => <CallEmoji color="#3455DB" />;
CallEmojiStory.storyName = "CallEmoji Custom Color";
