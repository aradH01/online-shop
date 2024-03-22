import './globals.css'
import type {Metadata} from 'next'
import MainLayout from "@/components/templates/Layouts/main-layout";
import {MantineRootProvider} from "@/components/templates/providers/MantineProvider";
import {Montserrat, Open_Sans} from "next/font/google"
import {addClass} from "@/utils/classNames";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const openSans = Open_Sans({subsets: ['latin'], variable: '--OpenSans-font'})
const montserrat = Montserrat({subsets: ['latin'], variable: '--montserrat-font'})
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="fa" dir="rtl">
      <body>
      <MantineRootProvider>
        <main className={addClass(openSans.className, montserrat.className, "w-full min-h-screen")}>
          <MainLayout>
            {children}
          </MainLayout>
        </main>

      </MantineRootProvider>
      </body>
      </html>
  )
}
