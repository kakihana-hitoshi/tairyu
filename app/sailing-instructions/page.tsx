import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Globe, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function SailingInstructionsPage() {
  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/notice", label: "公示" },
    { href: "/sailing-instructions", label: "帆走指示書" },
    { href: "#", label: "参加艇" },
    { href: "#", label: "過去大会の様子" },
    { href: "#", label: "お問い合わせ" },
  ]

  const documents = [
    {
      title: "2023帆走指示書",
      description: "帆走指示書の全文PDFです。",
      filename: "2023帆走指示書(全文).pdf",
    },
    {
      title: "Self Declaration Form",
      description: "自我申告書のPDFフォームです。",
      filename: "自我申告書Self Declaration Form.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-sky-900 dark:to-slate-900">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">メニューを開く</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>メニュー</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-6">
                    {navigationItems.map((item) => (
                      <Link key={item.label} href={item.href} className="text-lg hover:text-sky-600 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-uQf9XmUeup0K8BgEmCpFPSjefxGJsC.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold hidden md:block">Taiwan Ryukyu Regatta</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm hover:text-sky-600 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">言語切替</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>日本語</DropdownMenuItem>
                  <DropdownMenuItem>繁體中文</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="hidden md:flex">エントリー受付中</Button>
            </div>
          </div>
        </div>
      </header>

      {/* パンくずリストとページヘッダー */}
      <div className="bg-sky-900 text-white">
        <div className="container mx-auto px-4">
          {/* パンくずリスト */}
          <div className="py-4 text-sm text-sky-100">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>帆走指示書</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">帆走指示書</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc) => (
            <Card key={doc.filename} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-sky-600" />
                  {doc.title}
                </CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2 group-hover:bg-sky-700">
                  <Download className="h-4 w-4" />
                  <span>ダウンロード</span>
                  <span className="text-sm text-sky-200">({doc.filename})</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>帆走指示書に関するご質問は、大会事務局までお問い合わせください。</p>
          <p className="mt-2">
            <Link href="/contact" className="text-sky-600 hover:underline">
              お問い合わせはこちら
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

