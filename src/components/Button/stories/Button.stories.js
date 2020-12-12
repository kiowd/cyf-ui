import React from "react";
import { Button } from "..";

export default {
  title: "Components/Button",
  component: Button,
};

// eslint-disable-next-line no-console
const onClick = () => console.log("click me");

export const Primary = () => (
  <Button variant="primary" onClick={onClick}>
    Primary
  </Button>
);
Primary.storyName = "Primary";

export const Secondary = () => (
  <Button variant="secondary" onClick={onClick}>
    Secondary
  </Button>
);
Secondary.storyName = "Secondary";

export const Danger = () => (
  <Button variant="danger" onClick={onClick}>
    Danger
  </Button>
);
Danger.storyName = "Danger";

export const Outline = () => (
  <Button variant="outline" onClick={onClick}>
    Outline
  </Button>
);
Outline.storyName = "Outline";
