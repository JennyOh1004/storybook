import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TitleProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 타이틀 클릭시 호출  */
  onTitle?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /** 타이틀의 사이즈 설정 */
  size: "h1" | "h2" | "h3" | "paragraph";
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Title = ({ children, onTitle, size }: TitleProps) => {
  return (
    <div>
      <div className="title" css={[sizes[size]]}>
        {onTitle}
        {size}
      </div>
    </div>
  );
};

Title.defaultProps = {
  size: "h1",
};

const sizes = {
  h1: css`
    font-size: 32px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.015em;
    display: flex;
    align-items: center;
    color: #252947;
  `,
  h2: css``,
  h3: css`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.085em;
    color: #252947;
  `,
  paragraph: css`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
  `,
};
export default Title;
