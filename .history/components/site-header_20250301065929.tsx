"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const navigationItems = [
    { href: "/", label: t.navigation.home },
    { href: "/notice", label: t.navigation.notice },
    { href: "/sailing-instructions", label: t.navigation.sailingInstructions },
    { href: "/participants", label: t.navigation.participants },
    { href: "/past-events", label: t.navigation.pastEvents },
    { href: "/contact", label: t.navigation.contact },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t.header.menuTitle}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>{t.header.menuTitle}</SheetTitle>
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
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-irkXlOqUxOVAWV8zQIk2gp4zLndFmC.jpeg"
                  alt={language === "ja" ? "台湾友好親善国際ヨットレース" : "台琉友好親善國際帆船賽"}
                  width={180}
                  height={120}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <h1 className="text-lg font-bold hidden md:block">
              {language === "ja" ? "台湾友好親善国際ヨットレース" : "台琉友好親善國際帆船賽"}
            </h1>
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
                  <span className="sr-only">{t.header.languageSwitch}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("ja")} className="flex items-center gap-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japan-ZjjRh2S1CZZpI6oujbZLS8QbPxaerf.png"
                    alt="日本"
                    width={20}
                    height={15}
                    className="h-3.5 w-auto object-contain"
                  />
                  日本語
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("zh-TW")} className="flex items-center gap-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taiwan-MzMeJIyeE7y9UGZS4BsZ26hNK4paF3.png"
                    alt="台湾"
                    width={20}
                    height={15}
                    className="h-3.5 w-auto object-contain"
                  />
                  台灣華語
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/sailing-instructions">
              <Button asChild className="hidden md:block">
                <span>{t.header.entryOpen}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

