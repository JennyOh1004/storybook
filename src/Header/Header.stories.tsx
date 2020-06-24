import React from "react";
import Header from "./Header";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Title from "../Title/Title";
import { sizes } from "../Button/Button.stories";

export default {
  title: "components|Header",
  component: Header,
  decorators: [withKnobs],
};

export const header = () => {
  return (
    <Header
      actionTitle="로그인 하기"
      onAction={() => console.log("action")}
      onPrev={() => console.log("action")}
    >
      Sign Up
    </Header>
  );
};

header.story = {
  name: "Default",
};
