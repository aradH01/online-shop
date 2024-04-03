import '../globals.css'
import type {Metadata} from 'next'
import {MantineRootProvider} from "@/components/templates/providers/MantineProvider";
import '@mantine/carousel/styles.css';
import {Montserrat, Open_Sans} from "next/font/google"
import {addClass} from "@/utils/classNames";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="fa" dir="rtl">
      <body>
      <MantineRootProvider>
        <main className={addClass( "w-full min-h-screen ")}>
            {children}
        </main>

      </MantineRootProvider>
      </body>
      </html>
  )
}