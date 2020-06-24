import React from "react";
import PrevIcon from "../assets/prev-icon.png";
import Title from "../Title/Title";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Button from "../Button/Button";

type HeaderProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onAction?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /** 액션 타이틀 */
  actionTitle?: string;
  /** 버튼의 생김새를 설정합니다. */
  onPrev: (e?: React.MouseEvent<HTMLDivElement>) => void;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Header = ({ children, onAction, actionTitle, onPrev }: HeaderProps) => {
  return (
    <Wrapper>
      <Actions className="action">
        <div>{onPrev && <img src={PrevIcon} />}</div>
        <div>{onAction && actionTitle}</div>
      </Actions>
      <Title size="h1">{children}</Title>
    </Wrapper>
  );
};

Header.defaultProps = {};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
