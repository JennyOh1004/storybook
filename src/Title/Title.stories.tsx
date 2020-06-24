import React from "react";
import Title from "./Title";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|Title",
  component: Title,
  decorators: [withKnobs],
};

export const title = () => {
  const size = select("size", ["h1", "h2", "h3", "paragraph"], "h1");
  const title = text("title", "Login");
  return <Title size={size}>{title}</Title>;
};

title.story = {
  name: "Default",
};

export const sizes = () => {
  return (
    <div>
      <div>
        <Title size="h1">h1</Title>
      </div>

      <div>
        <Title size="h2">h2</Title>
      </div>

      <div>
        <Title size="h3">h3</Title>
      </div>

      <div>
        <Title size="paragraph">paragraph</Title>
      </div>
    </div>
  );
};
