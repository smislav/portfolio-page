import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import portfolio from "@/app/config/portfolio.config";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: portfolio.about.name,
  description: 'Personal portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
