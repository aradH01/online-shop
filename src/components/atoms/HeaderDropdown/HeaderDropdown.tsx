"use client"
import styled from "@emotion/styled";
import React, {useState} from "react";
import {HeaderDropdownProps} from "@/types/components-types";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";
import {Typography} from "@/components/atoms/Typography";
import {Path} from "@/constants/enums";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {AvatarWithLabel} from "@/components/atoms/AvatarWithLabel";


const Wrapper = styled.div`
  width: fit-content;
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  background: ${({theme}) => theme.components.linearButton};
  border-radius: 100%;
`
const DropdownItem = styled.div`
  opacity: 0;
  background: linear-gradient(122deg, rgba(0, 0, 0, 0.2) -0.97%, rgba(0, 0, 0, 0.40) 98.77%);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  z-index: 1;
  padding: 1rem;
  margin-top: 2rem;
  min-width: max-content;
  width: 15rem;
  pointer-events: none;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
  100%, 0.075),
    /* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
    /* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
  0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
  0 3.5px 6px hsla(0, 0%, 0%, 0.09);
  border-radius: 7px;
  flex-direction: column;
  transition: all ease-out 300ms;
  transform: translateY(-30px) translateX(45%);
  &.show {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(-20px) translateX(45%);
    transition: all ease-out 300ms;
  }

  div {

    a {
      color: white;
      padding: 0 16px 0 16px;
      text-decoration: none;
      display: block;
      font-weight: normal;
      font-size: 14px;
    }
  }

  @media all and (max-width: 376px) {
    left: -40px;
  }
`
const DropdownButton = styled.button`
  color: ${({theme}) => theme.font.primary};
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrow-icon {
    @media all and (max-width: 376px) {
      display: none;
    }
  }

  > span {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 16px;
    font-weight: 600;
  }

  div span {
    color: ${({theme}) => theme.font.primary};
  }

`
const Widget = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.3rem;
  width: 100%;
  border-bottom: 1px solid transparent;
  transition: all ease-out 500ms;
  &:hover {
    border-bottom: 1px solid #6d6262;
    transition: all ease-out 500ms;
    border-radius: 15px;
  }
`
export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({data, contentClass, title, className, onClick}) => {
    const [show, setShow] = useState(false)

    function openDropdown() {
        setShow(!show)
    }

    const router = useRouter()
    return (
        <>
            <Wrapper className={className} onClick={onClick}>
                <Dropdown data-show={show} className="data-[show=true]:z-20 transition-all">
                    <DropdownButton onClick={openDropdown}>

                        <AvatarWithLabel title={title} avatar="" avatarClass="[&>div]:!bg-transparent"/>
                    </DropdownButton>
                    <DropdownItem className={addClass(contentClass, show && "show")}>
                        <div className="flex w-full gap-4 flex-col items-center">
                            <AvatarWithLabel title={title} avatar=""/>
                            <Link href={Path.Dashboard} className="!flex items-center gap-4 ">
                                <Icon name="LeftArrow" className="rotate-180 w-3 h-3"/>
                                <Typography.Paragraph size="sm" weight="medium" color="black">{title}</Typography.Paragraph>
                            </Link>
                        </div>
                        {data?.map((link) => {
                            return <Widget href={link.href} key={link.id} onClick={async () => {
                                router.push(`${link.href}`)
                            }}>
                                <div >
                                    {link.title}
                                </div>
                                <Icon name={link.icon || "Empty"} className="[&>path]:!stroke-2 w-6 h-6"/>
                            </Widget>
                        })}
                        <Link href="/" className="flex border-t border-solid border-black pt-2 gap-[6px] flex-row-reverse w-full items-center justify-center">
                            <Icon name="Logout" className="w-6 h-6"/>
                            <Typography.Paragraph size="sm" weight="semiBold" color="darkDanger">خروج</Typography.Paragraph>
                        </Link>
                    </DropdownItem>

                </Dropdown>
                {show && <div onClick={openDropdown}
                              className="fixed bg-slate-700 bg-opacity-10 w-screen h-screen top-0 left-0 z-10"></div>}
            </Wrapper>
        </>

    )
}
