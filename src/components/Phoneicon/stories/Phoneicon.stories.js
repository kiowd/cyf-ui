import React from "react";
import { PhoneEmoji, CallEmoji } from "..";

export default {
  title: "Components/Phoneicon",
  component: PhoneEmoji,
};
export const CallEmojiStory = () => <CallEmoji />;
CallEmojiStory.storyName = "Phone Emoji Gray";

export const CallEmojiStoryBlue = () => <CallEmoji variant="secondary" />;
CallEmojiStoryBlue.storyName = "Phone Emoji Blue";
