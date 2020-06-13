import React from "react";
import PrevIcon from "../assets/prev-icon.png";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../Button/Button";
type HeaderProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onAction?: (e?: React.MouseEvent<HTMLDivElement>) => void;

  /** 버튼의 생김새를 설정합니다. */
  onPrev: (e?: React.MouseEvent<HTMLDivElement>) => void;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Header = ({ children, onAction, onPrev }: HeaderProps) => {
  return (
    <div>
      <div className="action">
        {onPrev && <img src={PrevIcon} />}
        {/* {onAction && "!!"} */}
      </div>
      <div>{children}</div>
      {/* <div>
        <Title size="h1">{children}</Title>
      </div> */}
    </div>
  );
};

Header.defaultProps = {};

export default Header;
