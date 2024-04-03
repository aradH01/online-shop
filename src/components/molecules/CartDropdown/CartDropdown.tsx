"use client"
import styled from "@emotion/styled";
import React, {useState} from "react";
import {CartDropdownProps} from "@/types/components-types";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Button} from "@/components/molecules/Button/Buttom";
import Image from "next/image";
import Picture2 from "@/images/pic4.jpg";
import {Typography} from "@/components/atoms/Typography";
import {Path} from "@/constants/enums";

const Wrapper = styled(Link)`
  width: fit-content;
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
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
    transform: translateY(10px) translateX(45%);
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
const Content=styled.div`
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
    margin-top: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.components.lightPrimary};
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.components.lightPrimary};
  }
`
const Widget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.3rem;
  width: 100%;
  border-right: 2px solid transparent;
  transition: all ease-out 500ms;
  &:hover {
    border-right: 2px solid ${({theme}) => theme.components.lightGray};
    transition: all ease-out 500ms;
    border-radius: 15px;
  }
`
export const CartDropdown: React.FC<CartDropdownProps> = ({data, contentClass, className, onClick}) => {
    const [show, setShow] = useState(false)

    function openDropdown() {
        setShow(!show)
    }

    const router = useRouter()
    return (
        <>
            <Wrapper href={Path.Cart} className={className} onClick={onClick} >
                <Dropdown data-show={show} className="data-[show=true]:z-20 transition-all" onMouseLeave={()=>setShow(false)} onMouseEnter={()=>setShow(true)}>
                        <DropdownButton className="group" >
                            <Icon name="Basket" className="w-8 h-8"/>
                        </DropdownButton>
                    <DropdownItem className={addClass(contentClass, show && "show")}>
                      <Content className="max-h-[200px] overflow-auto">
                          {data?.map((item) => {
                              return <Widget key={item.id} className="gap-[6px]">
                                  <div className="w-[90px] h-[90px] max-h-[95px] relative">
                                      <Image src={item.image} alt="Slider image" fill className="rounded-[8px] object-cover" quality={80}
                                             priority={false}/>
                                  </div>
                                  <div className="flex flex-col items-start">
                                      <Typography.Text className="!text-[13px]" weight="semiBold" color="white">{item.name}</Typography.Text>
                                      <Typography.Text className="!text-[12px]" weight="medium" color="white">{(item.fee).toLocaleString()} تومان </Typography.Text>
                                      <Typography.Text className="!text-[12px]" weight="medium" color="white">{item.count} عدد </Typography.Text>
                                  </div>
                              </Widget>
                          })}
                      </Content>
                        <Link href="/" className="rounded-[100px] flex pt-2 gap-[6px] flex-row-reverse w-full items-center justify-center">
                            <Button title="ادامه خرید" className="!w-[85%]" icon="Basket"/>
                        </Link>
                    </DropdownItem>

                </Dropdown>
                {show && <div onClick={openDropdown}
                              className="fixed bg-slate-700 bg-opacity-10 w-screen h-screen top-0 left-0 z-10"></div>}
            </Wrapper>
        </>

    )
}
