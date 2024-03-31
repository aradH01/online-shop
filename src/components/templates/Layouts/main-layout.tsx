'use client';

import React, {PropsWithChildren} from "react";
import {Toast} from "@/components/templates/providers/toast";
import dynamic from "next/dynamic";
import {useThemeHeader} from "@/hooks/useHeaderPosition";
import {Icon} from "@/components/atoms/Icon";

const Topbar = dynamic(
    () => import('@/components/organisms/topbar/index').then((mod) => mod.Topbar),
    {ssr: false},
);
const Footer = dynamic(
    () => import('@/components/organisms/Footer/Footer')
);
const MainLayout = ({children}: PropsWithChildren) => {
    const theme = useThemeHeader();
    console.log(theme)
    return (
        <>

            <div  className="">
                <Topbar/>
                {children}
                <div data-theme={theme}
                    className="data-[theme='SubHeader']:opacity-100 data-[theme='SubHeader']:translate-x-0
                     fixed bottom-[5%] p-2 rounded-full bg-lightPrimary right-[3%]
                      data-[theme='Header']:opacity-0 data-[theme='Header']:translate-x-1/2
                        transition-all
                      ">
                    <Icon name="UpArrow" className="animate-bounce cursor-pointer stroke-white [&>path]:fill-white"
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
                </div>
                <Toast/>
                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;
