import React from "react";
import { Button } from "antd";
import styled from "styled-components";

type TextType = {
  text: string;
};

const StyledButton = styled(Button)`
  &:where(.css-dev-only-do-not-override-1xusghl).ant-btn-default:not(
      :disabled
    ):hover {
    border: none;
    color: white;
  }
  background-color: #00b578;
  color: white;
  font-family: NotoSansKR-500;
  width: 200px;
  border-radius: 20px;
`;

function MyButton({ text }: TextType) {
  return <StyledButton>{text}</StyledButton>;
}

export default MyButton;
