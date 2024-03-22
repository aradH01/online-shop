'use client'
import styled from "@emotion/styled";
import React, {forwardRef} from "react";
import {InputProps} from "@/types/components-types";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";


const Wrapper = styled.div`
`
const Container = styled.div`
  width: 100%;
  text-align: right;
`


const StyledInput = styled.input`
  &:-moz-placeholder {
    padding-right: 1rem;
    text-align: right;
  }
  &:-ms-input-placeholder {
    padding-right: 1rem;
    text-align: right;
  }
  &::-webkit-input-placeholder {
    text-align: right;
    padding-right: 1rem;
  }
  width: 100%;
  height: 56px;
  padding: 16px 0 16px 16px;
  border-radius: 14px;
  display: block;
  text-align: right;
  border: 1px solid transparent;
  box-shadow: -3px -3px 10px 0px #FFFFFFBF;
  box-shadow: 3px 3px 4px 0px #00000040;
  transition: all ease 500ms;
  &.disabled{
    background: #1C1B1F1F;
    box-shadow: 1px 1px 4px 0px #00000040;
  cursor: not-allowed !important;
    pointer-events: none;
  }
  &.error{
    box-shadow: 1px 1px 4px 0px #00000040;
    border: 1px solid ${({theme})=>theme.font.danger};
  }
  &:hover {
    border: 1px solid #184D47;
    box-shadow: 0px 1px 5px 1px #00000033;
    box-shadow: 0px 0px 4px 0px #184D47 inset;
    transition: all ease 500ms;
  }
  &:focus, &:valid {
    outline: none;
    border: 1px solid #96BB7C;
    box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.6);
    transition: all ease 500ms;
  }
`
const PassIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-15px, -50%);

`
const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  transform: translate(15px, -50%);

  ~ input {
    padding: 18px 10px 7px 300px !important;
  }
`
const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  pointer-events: none;
  transition: 300ms ease all;
  top: 32%;
  left: 28px;
  color: ${({theme}) => theme.font.grayMedium};
`
const ErrorText = styled.div`
  span {
    color: ${({theme}) => theme.font.danger};
    margin: 5px 24px;
    font-size: 12px;
  }
`
export const Input = forwardRef<HTMLInputElement, InputProps>(({
                                                                   className,
                                                                   placeHolder,
                                                                   label,
                                                                   type,
                                                                   icon,
                                                                   error,
    disabled,
                                                                   ...rest
                                                               }, ref) => {

        return (
            <Wrapper className={className}>
                <Container className="relative">
                    <Label>{label}</Label>
                    <StyledInput className={addClass(disabled ? "disabled" : '' , error ? "error" : '')} disabled={disabled} placeholder={placeHolder} required ref={ref} type={type} {...rest}/>
                    {icon ? <StyledIcon>
                        <Icon  name={icon || "Empty"}/>
                    </StyledIcon> : ''}
                </Container>
                <ErrorText>
                    {error &&
                        <Typography.Text color="danger">
                            {error}
                        </Typography.Text>
                    }
                </ErrorText>
            </Wrapper>
        )
    }
)
Input.displayName = "Input"
