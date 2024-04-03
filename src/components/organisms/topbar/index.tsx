'use client';

import Link from 'next/link';
import {useThemeHeader} from "@/hooks/useHeaderPosition";
import AppLogo from '@/images/AppLogo.png'
import Image from "next/image";
import {Button} from "@/components/molecules/Button/Buttom";
import styled from "@emotion/styled";
import SearchBox from "@/components/atoms/SearchBox";
import React, {useState} from "react";
import LightMenu from '@/images/lightMenu.svg'
import {Sidebar} from "@/components/organisms/topbar/components/sidebar";
import {addClass} from "@/utils/classNames";
import {HeaderDropdown} from "@/components/atoms/HeaderDropdown/HeaderDropdown";
import {Icon} from "@/components/atoms/Icon";
import Picture2 from "@/images/pic4.jpg";
import {CartDropdown} from "@/components/molecules/CartDropdown/CartDropdown";
import {Path} from "@/constants/enums";

const StyledLink = styled(Link)`
  color: ${({theme}) => theme.font.primary};
  font-size: 16px;
  font-weight: 600;
  max-width: unset;
  @media all and (max-width: 1000px) {
    max-width: min-content;
  }
`
const StyledButton = styled(Button)`
  div {
    flex-direction: row-reverse;
  }

  svg {
    animation: none;

    path {
      fill: ${({theme}) => theme.components.primary};
    }
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #F5F5F7;
  padding: 1.5rem 0;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    color: ${({theme}) => theme.font.primary};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

    &.disable {
      color: #6E6E73;
      pointer-events: none;
    }

    &.link {
      color: #5E9CBF;
    }
  }
`;
const Row = styled.tr`
  a {
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    padding: 8px 0;
    border-bottom: 1px solid ${({theme}) => theme.components.primary};

    &:hover {
      box-shadow: inset 0 18px 15px -15px rgba(0, 0, 0, 0.48), inset 0px -18px 15px -15px rgba(255, 255, 255, 0.48);
      filter: brightness(0.9);
    }

    display: flex;
    gap: 6px;
    align-items: center;
    flex-direction: column;
  }

  text-align: center;
`
const SearchTable = styled.div`
  max-width: 15rem;
  height: 300px;
  overflow: auto;

  opacity: 0.85;
  background: linear-gradient(122deg, rgba(255,255,255,0.2) -0.97%, rgba(255, 255, 255, 0.57) 98.77%);
  backdrop-filter: blur(10px);
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
  100%, 0.075),
    /* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
    /* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
  0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
  0 3.5px 6px hsla(0, 0%, 0%, 0.09);
  border-radius: 7px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
    margin-top: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.components.grayMedium};
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.components.grayMedium};
  }
`
const Cart=styled.div`


`
const profileData=[
    {id:1 , href:Path.OrdersList , title:"سفارش ها", icon:"Bag"} as const,
    {id:2 , href:"" , title:"لیست ها", icon:"Heart"} as const,
    {id:3 , href:"" , title:"پیغام ها", icon:"Notification"} as const
]
const CartData=[
    {id:1 , name:"جد جوش سیمپل", image:Picture2 , count:2 , fee:"230000" },
    {id:2 , name:"جد جوش سیمپل", image:Picture2 , count:2 , fee:"230000" },
    {id:3 , name:"جد جوش سیمپل", image:Picture2 , count:2 , fee:"230000" },
    {id:4 , name:"جد جوش سیمپل", image:Picture2 , count:2 , fee:"230000" },

]
export const Topbar = () => {
    const theme = useThemeHeader();
    const [eventsSuggestion, setEventsSuggestion] = useState<boolean>(false)
    const [sidebar, setSidebar] = useState<boolean>(false)

    return (
        <>
            <header
                data-theme={theme}
                className={
                    "z-[10000] data-[theme='Header']:h-[6.25rem] data-[theme='SubHeader']:h-[5.31rem] md:h-[13.4rem] w-full bg-[#FCFCFC] transition-all sticky top-0 data-[theme='SubHeader']:shadow-[0_0_28px_11px_#ababab4a]"
                }
            >
                {theme === "Header" ?
                    <nav
                        className="relative w-[84rem] max-w-[95%] mx-auto h-full flex flex-row-reverse items-center justify-between transition-all">
                        <div className="text-black items-center flex flex-row gap-6">
                            <Link href="">محصولات آرایشی</Link>
                            <Link href="">محصولات بهداشتی</Link>
                            <Cart>
                                <CartDropdown data={CartData}/>
                            </Cart>
                        </div>
                        <Link prefetch={false} href={'/'} className="lt:mr-[40px] mr-0">
                            <div className='sm:w-[100px] w-[80px] text-black'>
                                <Image src={AppLogo} alt="logo"/>
                            </div>
                        </Link>
                        <div className="flex  items-center justify-start">

                            <div className="lt:flex flex-row-reverse hidden items-center justify-end gap-[24px]">
                                <label>
                                    <SearchBox
                                        onChange={(e) => {}}
                                        onFocus={() => setEventsSuggestion(true)}
                                        onBlur={() => setEventsSuggestion(false)}
                                        className="relative"
                                        id="inputt"
                                    />
                                    <SearchTable
                                        className={addClass(eventsSuggestion ? "opacity-100" : '!opacity-0 pointer-events-none', "absolute top-20% hover:!opacity-[0.85] hover:pointer-events-auto transition-all")}>
                                        <tbody className="border-collapse">
                                      {/*  {
                                            isHydrated && programs?.data?.result?.map((program) => (
                                                <Row key={program.id} className="">
                                                    <Link href={`/program-detail/${program.id}`} className="">
                                                        <td>
                                                            <div
                                                                className="w-[130px] max-w-[90%] h-[55px] max-h-[60px] relative">
                                                                <Image
                                                                    src={program.medias?.[0]?.media.file || PlaceHolder}
                                                                    alt="ProfileImage"
                                                                    fill
                                                                    className="object-cover rounded-[5px] border-solid border border-black"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Typography.Text size="md" weight="bold"
                                                                             color="primary">{program.title}</Typography.Text>
                                                        </td>
                                                    </Link>
                                                </Row>
                                            ))
                                        }*/}
                                        </tbody>
                                    </SearchTable>
                                </label>

                                <div>
                                        <HeaderDropdown title="Arad haghighy" data={profileData}/>
                                </div>

                            </div>

                        </div>
                        <div className="lt:hidden flex">
                            <div className="block lt:hidden">
                                <div>
                                    <SearchBox
                                        onChange={(e) => {}}
                                        onFocus={() => setEventsSuggestion(true)}
                                        onBlur={() => setEventsSuggestion(false)}
                                        className="relative"
                                        id="inputt"
                                    />
                                    <SearchTable
                                        className={addClass(eventsSuggestion ? "opacity-100" : '!opacity-0 pointer-events-none', "absolute top-20% hover:!opacity-[0.85] hover:pointer-events-auto transition-all")}>
                                        <tbody className="border-collapse">
                                        {/*  {
                                            isHydrated && programs?.data?.result?.map((program) => (
                                                <Row key={program.id} className="">
                                                    <Link href={`/program-detail/${program.id}`} className="">
                                                        <td>
                                                            <div
                                                                className="w-[130px] max-w-[90%] h-[55px] max-h-[60px] relative">
                                                                <Image
                                                                    src={program.medias?.[0]?.media.file || PlaceHolder}
                                                                    alt="ProfileImage"
                                                                    fill
                                                                    className="object-cover rounded-[5px] border-solid border border-black"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Typography.Text size="md" weight="bold"
                                                                             color="primary">{program.title}</Typography.Text>
                                                        </td>
                                                    </Link>
                                                </Row>
                                            ))
                                        }*/}
                                        </tbody>
                                    </SearchTable>
                                </div>
                            </div>
                            <Image src={LightMenu} alt="Menu" className="lt:hidden block xsm:mr-12 mr-6 w-[35px]"
                                   onClick={() => setSidebar(!sidebar)}/>
                        </div>
                        <Sidebar show={sidebar}/>
                    </nav>
                    :
                    <nav className="relative w-[84rem] max-w-[95%] mx-auto h-full flex flex-row-reverse items-center justify-between">
                        <div
                            className="lt:flex text-black items-center ipad:gap-[40px] gap-[30px] hidden">
                            sub header data
                        </div>
                        <Link prefetch={false} href={'/'} className="lt:mr-[40px] mr-0">
                            <div className='sm:w-[100px] w-[80px] text-black'>
                                 <Image src={AppLogo} alt="logo"/>
                            </div>
                        </Link>
                        <div className="flex flex-row-reverse items-center justify-center">
                            <div>
                                <HeaderDropdown title="Arad haghighy" data={profileData}/>
                            </div>

                        </div>
                        <Image src={LightMenu} alt="Menu" className="lt:hidden block xsm:mr-6 mr-4 w-[35px]"
                               onClick={() => setSidebar(!sidebar)}/>
                        <Sidebar show={sidebar}/>
                    </nav>
                }
            </header>
        </>
    );
};
