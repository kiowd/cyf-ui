import React from "react";
import { Button } from "..";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
Primary.storyName = "Primary";

export const Secondary = () => <Button variant="secondary">Secondary</Button>;
Secondary.storyName = "Secondary";

export const Danger = () => <Button variant="danger">Danger</Button>;
Danger.storyName = "Danger";

export const Outline = () => <Button variant="outline">Outline</Button>;
Outline.storyName = "Outline";
