import React from "react";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  OutlinedButton,
} from "..";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    color: { control: "color" },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const PrimaryButtonStory = (args) => <PrimaryButton {...args} />;
PrimaryButtonStory.storyName = "Primary";
PrimaryButtonStory.args = {
  label: "Primary",
  backgroundColor: "#00a3ff",
  color: "#ffffff",
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const SecondaryButtonStory = (args) => <SecondaryButton {...args} />;
SecondaryButtonStory.storyName = "Secondary";
SecondaryButtonStory.args = {
  label: "Secondary",
  backgroundColor: "#28a745",
  color: "#ffffff",
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const DangerButtonStory = (args) => <DangerButton {...args} />;
DangerButtonStory.storyName = "Danger";
DangerButtonStory.args = {
  label: "Danger",
  backgroundColor: "#dc3545",
  color: "#ffffff",
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const OutlineButtonStory = (args) => <OutlinedButton {...args} />;
OutlineButtonStory.storyName = "Outline";
OutlineButtonStory.args = {
  label: "Outline",
  backgroundColor: "#ffffff",
  color: "#007bff",
};
