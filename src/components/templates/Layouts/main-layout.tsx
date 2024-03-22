'use client';

import {PropsWithChildren} from "react";
import {Toast} from "@/components/templates/providers/toast";

const MainLayout = ({children}: PropsWithChildren) => {

    return (
        <>

            <div className="">
                {children}
                <Toast/>
            </div>
        </>
    );
};

export default MainLayout;
