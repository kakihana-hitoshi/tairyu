"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname()

  // Get the path without the language prefix
  const pathnameWithoutLang = pathname.substring(3) // Remove /ja or /zh

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{lang === "ja" ? "言語切替" : "切換語言"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/ja${pathnameWithoutLang}`} className="flex items-center gap-2">
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
          <Link href={`/zh-TW${pathnameWithoutLang}`} className="flex items-center gap-2">
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
  )
}

