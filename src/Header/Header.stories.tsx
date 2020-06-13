import React from "react";
import Header from "./Header";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|Header",
  component: Header,
  decorators: [withKnobs],
};

export const header = () => {
  return (
    <Header
      onAction={() => console.log("action")}
      onPrev={() => console.log("action")}
    >
      Sign up
    </Header>
  );
};

header.story = {
  name: "Default",
};
