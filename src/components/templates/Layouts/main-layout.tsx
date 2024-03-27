'use client';

import {PropsWithChildren} from "react";
import {Toast} from "@/components/templates/providers/toast";
import dynamic from "next/dynamic";

const Topbar = dynamic(
    () => import('@/components/organisms/topbar/index').then((mod) => mod.Topbar),
    {ssr: false},
);
const MainLayout = ({children}: PropsWithChildren) => {

    return (
        <>

            <div className="">
                <Topbar/>
                {children}
                <Toast/>
            </div>
        </>
    );
};

export default MainLayout;
