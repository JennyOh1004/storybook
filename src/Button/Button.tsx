import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;

  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "tertiary" | "social" | "shop";

  /** 버튼의 크기를 설정합니다 */
  size: "xsmall" | "small" | "medium" | "big";

  /** 버튼을 비활성화 합니다. */
  disabled?: boolean;

  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  children,
  theme,
  size,
  disabled,
  width,
  onClick,
}: ButtonProps) => {
  return (
    <button
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "big",
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #252947;
  color: #fff;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background: #252947;
    color: #fff;
    &:hover:enabled {
      background: #fff;
      color: #252947;
      border: solid 1px #252947;
      transition: linear all 0.2s;
    }
    &:active:enabled {
      background: #363950;
      color: #fff;
    }
    &:disabled {
      background: #a4a8ca;
    }
  `,
  secondary: css`
    background: #fff;
    color: #252947;
    border: solid 1px #252947;
    &:hover:enabled {
      background: #252947;
      color: #fff;
      transition: linear all 0.2s;
    }
    &:active:enabled {
      background: #f8f8f8;
      color: #252947;
    }
    &:disabled {
      background: #c6d3e1;
    }
  `,
  tertiary: css`
    background: #252947;
    color: #fff;
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
    &:disabled {
      background: #a4a8ca;
    }
  `,
  social: css`
    height: 48px;
    width: 80px;
    font-size: 0.6rem;
    padding: 0 1rem;
    border-radius: 20px;
    letter-spacing: 1.5px;
    background: #395185;
    color: #fff;
    &:hover:enabled {
      background: #fff;
      color: #395185;
      transition: linear all 0.3s;
      border: solid 1px #395185;
    }
    &:active:enabled {
      background: #395185;
      color: #fff;
    }
    &:disabled {
      background: #bcc7de;
    }
  `,
  shop: css`
    height: 48px;
    width: 80px;
    font-size: 0.6rem;
    padding: 0 1rem;
    border-radius: 20px;
    letter-spacing: 1.5px;
    background: #303b8a;
    color: #fff;
    &:hover:enabled {
      background: #fff;
      color: #395185;
      transition: linear all 0.3s;
      border: solid 1px #395185;
    }
    &:active:enabled {
      background: #303b8a;
      color: #fff;
    }
    &:disabled {
      background: #aab6ce;
    }
  `,
};

const sizes = {
  xsmall: css`
    width: 56px;
    height: 56px;
    padding: 0;
    border-radius: 50%;
    font-size: 0.1rem;
    letter-spacing: 1px;
  `,
  small: css`
    height: 1.75rem;
    width: 80px;
    font-size: 0.6rem;
    padding: 0 0.875rem;
    border-radius: 20px;
    letter-spacing: 1.5px;
  `,
  medium: css`
    height: 48px;
    width: 160px;
    font-size: 0.6rem;
    padding: 0 1rem;
    border-radius: 20px;
    letter-spacing: 1.5px;
  `,
  big: css`
    height: 48px;
    width: 327px;
    font-size: 0.6rem;
    padding: 0 1.5rem;
    border-radius: 20px;
    letter-spacing: 1.5px;
  `,
};

export default Button;
