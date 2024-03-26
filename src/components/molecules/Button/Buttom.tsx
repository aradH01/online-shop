import styled from "@emotion/styled";
import React from "react";
import {Themes} from "@/styles/Themes";
import {getSize} from "@/styles/globals";
import {ButtonProps} from "@/types/components-types";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";
import {LoadingCircle} from "@/components/atoms/LoadingCircle/LoadingCircle";

export const StyledButton = styled.button<StyledButtonType>`
  border: 0;
  border-radius: 12px;
  height: 48px;
  background: ${({theme}) => theme.components.primary};
  color: ${({theme}) => theme.font.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms ease all;
  width: fit-content;
  padding: 0 32px;
svg{
  path{
    fill:#fff;
    stroke: #fff;
  }
}
  ${({size, width}) => getSize(size, width)}
  &:hover {
    box-shadow: 4px 4px 8px 2px #00000040 inset;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  &.text {
    background: none;
    color: ${({theme}) => theme.font.primary};

    &:hover {
      box-shadow: none;
    }
  }

  &.linked {
    background: none;
    transition: 500ms all ease-out;
    span {
      color: ${({theme}) => theme.font.primary} !important;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      padding-bottom: 8px;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-color: ${({theme}) => theme.font.primary};
    }

    &:hover {
      box-shadow: none;
      transition: 500ms all ease-out;
    }
  }

  &.loading {
    border: none !important;
    cursor: not-allowed !important;
    background: ${({theme}) => theme.components.lightPrimary}!important;
  transition: 500ms all ease-out;
    &:hover {
      box-shadow: none !important;
    }

    span {
      border-color: #B1ADA9 !important;
      border-bottom-color: #fff !important;
    }
  }

  &.outlined {
    border-width: 1px 2px 1px 2px !important;
    border-style: solid !important;
    border-color: ${({theme}) => theme.components.primary} !important;
    color: transparent !important;
    background-color: transparent !important;
    transition: 500ms all ease-out !important;
    &.disabled{
      border-width: 1px 2px 1px 2px !important;
      border-style: solid !important;
      background-color: transparent !important;
      border-color: ${({theme}) => theme.components.disabled} !important;
    }
    &.loading {
      border-width: 1px 2px 1px 2px;
      border-style: solid;
      border-color: ${({theme}) => theme.components.primary};
      color: transparent !important;
      background-color: transparent !important;
      svg{
        path{
          fill: #000!important;
        }
      }
    }
    svg{
      path{
        stroke: #000!important;
      }
    }
    a {
      color: #B1ADA9;
      text-decoration: none;
    }

    &:hover {
      border-width: 1px 2px 1px 2px;
     border-radius: 5% !important;
      border-collapse: separate;
      border-style: solid;
      background-clip: content-box, border-box;
      border-image: linear-gradient(104.81deg, #70B47B 35.71%, #184D47 53.17%) 1;
      box-shadow: 0 0 6px 0 #0000004D;
    }
    
  }

  &:disabled {
    border: none !important;
    cursor: not-allowed !important;
    background: ${({theme}) => theme.components.disabled}!important;
    filter: blur(1px);
    transition: 500ms all ease-out;
    span{
      color: #1C1B1F61 !important;
    }
    svg {
      animation: none;
    }

    &:hover {
      box-shadow: none !important;
    }
  }
`

type StyledButtonType = Pick<
    ButtonProps,
    | 'size'
    | 'width'
>;
export const Button: React.FC<ButtonProps> = ({
                                                  loading,
                                                  onClick,
                                                  icon,
                                                  text,
                                                  size,
                                                  width,
                                                  outlined,
                                                  disabled,
                                                  className,
                                                  title,
                                                  type,
                                                  linked,
    arrow,
                                                  ...props
                                              }) => {
    return (
        <StyledButton
            className={`app-button ${className ?? ''} ${loading ? "loading" : ''} ${text ? "text" : ''} ${linked ? "linked" : ''} ${outlined ? "outlined" : ''} ${disabled ? "disabled" : ''}`}
            disabled={disabled}
            size={size}
            width={width}
            type={type}
            onClick={onClick}
            {...props}
        >
            {loading ?
                <LoadingCircle
                    opacity={1}
                    color={Themes.dark.font.nonActive}
                    size="md"
                /> : ''}
            <div className="flex items-center flex-row-reverse gap-[10px]">
                <Icon name={icon || 'Empty'}
                      className={addClass( "w-[24px] h-[24px]")}/>
                <Typography.Text size="xsm" weight="normal"
                                 color={(outlined || text) ? "primary" : "white"}>{loading ? "" : title}</Typography.Text>
                {
                    arrow && <Icon name="LinkArrow"/>
                }
            </div>
        </StyledButton>
    )
}
