"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Globe, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "@/components/ui/use-toast"

export const navigationItems = [
  { href: "/", label: "HOME" },
  { href: "/notice", label: "公示" },
  { href: "/sailing-instructions", label: "帆走指示書" },
  { href: "/participants", label: "参加艇" },
  { href: "/past-events", label: "過去大会の様子" },
  { href: "/contact", label: "お問い合わせ" },
]

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  // シートの開閉状態を管理
  let sheetOpen = false
  const setSheetOpen = (open: boolean) => {
    sheetOpen = open
  }

  // ナビゲーションの処理
  const handleNavigation = (href: string) => {
    // シートが開いている場合は閉じる
    if (sheetOpen) {
      setSheetOpen(false)
    }
    // 現在のパスと異なる場合のみ遷移
    if (pathname !== href) {
      router.push(href)
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.href)}
                      className={`text-left text-lg hover:text-sky-600 transition-colors ${
                        pathname === item.href ? "text-sky-600 font-medium" : ""
                      }`}
                    >
                      {item.label}
                    </button>
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
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm hover:text-sky-600 transition-colors ${
                  pathname === item.href ? "text-sky-600 font-medium" : ""
                }`}
              >
                {item.label}
              </button>
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
  )
}

