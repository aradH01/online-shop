'use client'


import styled from "@emotion/styled";
import {useState} from "react";
import {Typography} from "@/components/atoms/Typography";

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background: ${({theme}) => theme.components.background};
  color: ${({theme}) => theme.font.black};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 500ms;
  &:disabled{
    border: none !important;
    cursor: not-allowed !important;
    background: ${({theme}) => theme.components.disabled}!important;
    filter: blur(1px);
    transition: all ease-out 500ms;
  }
  &:hover {
    box-shadow: 4px 4px 8px 2px #00000040 inset;
  }
`
export default function AddButtons() {
    const [count, setCount] = useState<number>(1);
    return (
        <div className="flex items-center gap-4">
            <StyledButton onClick={() => setCount(prevState => prevState + 1)}>
                <Typography.Paragraph size="sm" weight="semiBold" color="black">+</Typography.Paragraph>
            </StyledButton>
            <Typography.Text size="lg" weight="semiBold" color="black">{count}</Typography.Text>
            <StyledButton disabled={count===1} onClick={() => setCount(prevState => prevState - 1)}>
                <Typography.Paragraph size="sm" weight="semiBold" color="black">-</Typography.Paragraph>
            </StyledButton>
        </div>
    )
}
