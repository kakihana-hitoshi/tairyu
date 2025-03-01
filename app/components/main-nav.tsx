"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export const navigationItems = [
  { href: "/", label: "HOME" },
  { href: "/notice", label: "公示" },
  { href: "#", label: "帆走指示書" },
  { href: "#", label: "参加艇" },
  { href: "#", label: "過去大会の様子" },
  { href: "#", label: "お問い合わせ" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <>
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
              <Link
                key={item.label}
                href={item.href}
                className={`text-lg hover:text-sky-600 transition-colors ${
                  pathname === item.href ? "text-sky-600 font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden md:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-sm hover:text-sky-600 transition-colors ${
              pathname === item.href ? "text-sky-600 font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  )
}

