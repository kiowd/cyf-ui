import React from "react";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  OutlinedButton,
} from "..";

// eslint-disable-next-line react/jsx-props-no-spreading

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
  },
  args: {
    label: "Primary",
  },
};

export const PrimaryButtonStory = () => <PrimaryButton />;
PrimaryButtonStory.storyName = "Primary";

export const SecondaryButtonStory = () => <SecondaryButton />;
SecondaryButtonStory.storyName = "Secondary";

export const DangerButtonStory = () => <DangerButton />;
DangerButtonStory.storyName = "Danger";

export const OutlineButtonStory = () => <OutlinedButton />;
OutlineButtonStory.storyName = "Outline";
