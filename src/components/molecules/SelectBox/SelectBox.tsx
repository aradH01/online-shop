"use client"
import styled from "@emotion/styled";
import {useState} from "react";
import {addClass} from "@/utils/classNames";

const StyledSelect = styled.select`

  background: transparent;
  min-width: 188px;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  text-align: center;
  gap:10px;
  &:focus-visible{
    outline: none !important;
  }
`
const Wrapper = styled.div`
  height: 48px;
  display: flex;
  background: transparent;
  width: 133px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme}) => theme.components.primary};
`
const StyledOption = styled.option`
  padding: 25px 0;
  &:hover{
    background-color: ${({theme}) => theme.font.grayLight} !important;
  }
  &.active{
    background: ${({theme}) => theme.font.grayLight};
  }
`
export default function SelectBox(props: { options: { value: number, label: string }[] }) {
    const [selectedValue, setSelectedValue] = useState<string>()
    return (
        <Wrapper>
            <StyledSelect onChange={(e) => setSelectedValue(e.target.value)} defaultValue="Filter by  date">
                <StyledOption value="0">Filter by date</StyledOption>
                {props.options.map((option) => (
                    <StyledOption className={addClass(Number(selectedValue) === option.value ? "active" : "")}
                                  key={option.value} value={option.value}>{option.label}</StyledOption>
                ))}
            </StyledSelect>
        </Wrapper>
    )
}
