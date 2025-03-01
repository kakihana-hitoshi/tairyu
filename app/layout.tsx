import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "第21回台湾友好親善国際ヨットレース",
  description: "基隆市・宮古島市姉妹都市交流事業として開催される国際ヨットレース大会の公式サイトです。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-sky-900 dark:to-slate-900">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}



import './globals.css'