import React from "react";
import {
  Button2,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  OutlinedButton,
} from "..";

export default {
  title: "Components/Button2",
  component: Button2,
};

export const PrimaryButtonStory = () => <PrimaryButton />;
PrimaryButtonStory.storyName = "Primary";

export const SecondaryButtonStory = () => <SecondaryButton />;
SecondaryButtonStory.storyName = "Secondary";

export const DangerButtonStory = () => <DangerButton />;
DangerButtonStory.storyName = "Danger";

export const OutlineButtonStory = () => <OutlinedButton />;
OutlineButtonStory.storyName = "Outline";
