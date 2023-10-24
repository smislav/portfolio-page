import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import portfolio from "@/app/config/portfolio.config";
import {ThemeModeButton} from "@/app/components/ThemeButton/ThemeModeButton";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

const userName = portfolio?.about?.name;

export const metadata: Metadata = {
  title: userName ? `Portfolio | ${userName}` : "Portfolio",
  description: 'My personal portfolio, showcasing my work and achievements. Explore my projects and get in touch for collaborations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " relative bg-gray-100 dark:bg-gray-900"}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <div className={"z-10 absolute top-8 right-5 sm:top-10 sm:right-10 "}>
          <ThemeModeButton/>
        </div>
        {children}
      </body>
    </html>
  )
}
