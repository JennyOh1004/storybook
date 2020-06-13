import React from "react";
import Button from "./Button";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["xsmall", "small", "medium", "big"], "medium");
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary", "social", "shop"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const width = text("width", "");

  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

export const socialButton = () => {
  return <Button theme="social">SOCIAL</Button>;
};

export const shopButton = () => {
  return <Button theme="shop">SHOP</Button>;
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled theme="primary">
          PRIMARY
        </Button>
      </div>

      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>

      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>

      <div>
        <Button disabled theme="social">
          SOCIAL
        </Button>
      </div>

      <div>
        <Button disabled theme="shop">
          SHOP
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Xsmall</div>
        <Button size="xsmall">BUTTON</Button>
      </div>

      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>

      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>

      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};