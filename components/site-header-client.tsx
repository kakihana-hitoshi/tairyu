"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Menu } from "lucide-react"
import type { Dictionary } from "@/types/dictionary"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface SiteHeaderClientProps {
  dict: Dictionary
  lang: string
}

export function SiteHeaderClient({ dict, lang }: SiteHeaderClientProps) {
  const localizedNavItems = [
    { href: `/${lang}`, label: dict.navigation.home },
    { href: `/${lang}/notice`, label: dict.navigation.notice },
    { href: `/${lang}/sailing-instructions`, label: dict.navigation.sailingInstructions },
    { href: `/${lang}/participants`, label: dict.navigation.participants },
    { href: `/${lang}/past-events`, label: dict.navigation.pastEvents },
    { href: `/${lang}/contact`, label: dict.navigation.contact },
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
                  <span className="sr-only">{dict.header.menuTitle}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>{dict.header.menuTitle}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  {localizedNavItems.map((item) => (
                    <Link key={item.label} href={item.href} className="text-lg hover:text-sky-600 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center">
              <Link href={`/${lang}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-irkXlOqUxOVAWV8zQIk2gp4zLndFmC.jpeg"
                  alt="台湾友好親善国際ヨットレース"
                  width={180}
                  height={120}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <h1 className="text-lg font-bold hidden md:block">
              {lang === "ja" ? "台湾友好親善国際ヨットレース" : "台琉友好親善國際帆船賽"}
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {localizedNavItems.map((item) => (
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
                  <span className="sr-only">{dict.header.languageSwitch}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link
                    href={`/ja${lang === "ja" ? "" : window.location.pathname.substring(6)}`}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japan-ZjjRh2S1CZZpI6oujbZLS8QbPxaerf.png"
                      alt="日本"
                      width={20}
                      height={15}
                      className="h-3.5 w-auto object-contain"
                    />
                    日本語
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/zh-TW${lang === "zh-TW" ? "" : window.location.pathname.substring(3)}`}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taiwan-MzMeJIyeE7y9UGZS4BsZ26hNK4paF3.png"
                      alt="台湾"
                      width={20}
                      height={15}
                      className="h-3.5 w-auto object-contain"
                    />
                    台灣華語
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href={`/${lang}/sailing-instructions`}>
              <Button asChild className="hidden md:block">
                <span>{dict.header.entryOpen}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

