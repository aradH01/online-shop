'use client';
import {MantineProvider} from '@mantine/core';
import type {PropsWithChildren} from 'react';
import {ThemeProvider} from "@emotion/react";
import {Themes} from "@/styles/Themes";


export function MantineRootProvider({children}: PropsWithChildren) {

    return (
        <ThemeProvider theme={Themes.light}>
            <MantineProvider>
                {children}
            </MantineProvider>
        </ThemeProvider>
    );
}
