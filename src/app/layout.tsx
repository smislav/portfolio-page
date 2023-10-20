import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import portfolio from "@/app/config/portfolio.config";
import {ThemeModeButton} from "@/app/components/ThemeButton/ThemeModeButton";

const inter = Inter({ subsets: ['latin'] })

const userName = portfolio?.about?.name;

export const metadata: Metadata = {
  title: userName ? `Portfolio | ${userName}` : "Portfolio",
  description: 'Personal portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " relative bg-gray-100 dark:bg-gray-900"}>
        <div className={"z-10 absolute top-10 right-10 "}>
          <ThemeModeButton/>
        </div>
        {children}
      </body>
    </html>
  )
}
