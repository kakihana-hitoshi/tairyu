import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { navigationItems } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
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
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-irkXlOqUxOVAWV8zQIk2gp4zLndFmC.jpeg"
                  alt="台湾友好親善国際ヨットレース"
                  width={180}
                  height={120}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <h1 className="text-lg font-bold hidden md:block">第21回台琉友好親善国際</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm hover:text-sky-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/sailing-instructions">
              <Button className="hidden md:flex">エントリー受付中</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

