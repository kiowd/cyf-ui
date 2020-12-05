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
    color: { control: "color" },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const PrimaryButtonStory = (args) => (
  <PrimaryButton
    label={args.label}
    background={args.backgroundColor}
    color={args.color}
  />
);
PrimaryButtonStory.storyName = "Primary";
PrimaryButtonStory.args = {
  label: "Primary",
  backgroundColor: "#00a3ff",
  color: "#ffffff",
};

export const SecondaryButtonStory = (args) => (
  <SecondaryButton
    label={args.label}
    background={args.backgroundColor}
    color={args.color}
  />
);
SecondaryButtonStory.storyName = "Secondary";
SecondaryButtonStory.args = {
  label: "Secondary",
  backgroundColor: "#28a745",
  color: "#ffffff",
};

export const DangerButtonStory = (args) => (
  <DangerButton
    label={args.label}
    background={args.backgroundColor}
    color={args.color}
  />
);
DangerButtonStory.storyName = "Danger";
DangerButtonStory.args = {
  label: "Danger",
  backgroundColor: "#dc3545",
  color: "#ffffff",
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const OutlineButtonStory = (args) => (
  <OutlinedButton
    label={args.label}
    background={args.backgroundColor}
    color={args.color}
  />
);
OutlineButtonStory.storyName = "Outline";
OutlineButtonStory.args = {
  label: "Outline",
  backgroundColor: "#ffffff",
  color: "#007bff",
};
