'use client'
import styled from '@emotion/styled';
import Image from "next/image";
import Close from "@/images/close.svg";
import AppLogo from "@/images/AppLogo.png";
import {Button} from "@/components/molecules/Button/Buttom";
import {SidebarProps} from "@/types/components-types";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
  width: 290px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({theme}) => theme.background};
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
  100%, 0.075),
  0 0 0 1px hsla(0, 0%, 0%, 0.05),
  0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
  0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
  0 3.5px 6px hsla(0, 0%, 0%, 0.09);
  padding: 1.5rem 0;
  border-radius: 0 10px 10px 0;
  transition: 500ms ease all;
  transform: translateX(-100%);

  &.show {
    transform: translateX(0) !important;
    z-index: 100;
    transition: 500ms ease all;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 1rem;
  overflow: hidden auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    margin-top: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.components.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.components.primary};
  }
  .close-icon {

    @media all and (max-width: 768px) {
      display: unset;
      margin-left: 0.6rem;
    }
  }
`
const DashboardTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% - 10rem);
`;
const Title = styled.div`
  color: ${({theme}) => theme.font.white};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-left: 1.5rem;
`
const Progress = styled.div`
  border-top: 1px solid ${({theme}) => theme.components.white};
  padding-top: 0.6rem;
`
const SideBarLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.components.white};
  justify-content: center;
  padding-bottom: 1.5rem;
`

export const Sidebar = ({show}: SidebarProps) => {
    const [showMenu, setShowMenu] = useState(show);
    useEffect(() => {
        setShowMenu(show)
    }, [show]);
    window.onscroll = function (e) {
        setShowMenu(false)
    }
    const data = [
        {id: 1, href: '/', title: 'test'},
        {id: 2, href: '/', title: 'test Link'},
        {id: 3, href: '/', title: 'test down'},
    ]
    return (
        <Wrapper id="sidebar" className={`${showMenu ? 'show' : ''}`}>
            <Image src={Close} alt="Close" className="ml-8 w-[35px]" onClick={() => setShowMenu(false)}/>
            <Container>
                <SideBarLogo>
                    <div className='w-[200px]'>
                        <Image src={AppLogo} alt="logo"/>
                    </div>
                </SideBarLogo>
                <DashboardTabs>
                    <div className="flex flex-col items-center">
                       header dropdown buttons
                       header dropdown buttons
                    </div>
                    <div className="flex items-center justify-end gap-[24px]">
                        <Button title="Donate" outlined className="!w-[30%] min-w-[120px]"/>
                        <Button title="Buy tickets" className="!w-[30%] min-w-[120px]"/>

                    </div>
                </DashboardTabs>
                <Progress>
                </Progress>
            </Container>
        </Wrapper>

    );
};
