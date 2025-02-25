import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Globe, Menu, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function PastEventsPage() {
  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/notice", label: "公示" },
    { href: "/sailing-instructions", label: "帆走指示書" },
    { href: "/participants", label: "参加艇" },
    { href: "/past-events", label: "過去大会の様子" },
    { href: "#", label: "お問い合わせ" },
  ]

  const events = [
    {
      year: 2018,
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "海上でのヨットレースの様子",
          description: "台湾・宮古島間を結ぶレースの様子",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "文化交流イベントでの獅子舞",
          description: "開会式での伝統芸能パフォーマンス",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "レセプションの様子",
          description: "参加者交流会でのワイン展示",
        },
      ],
    },
    {
      year: 2014,
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "レース中のヨット",
          description: "接近戦を繰り広げる参加艇",
        },
      ],
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
              <span>過去大会の様子</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">過去大会の様子</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {events.map((event) => (
            <section key={event.year} className="space-y-6">
              <h2 className="text-2xl font-bold">{event.year}年大会</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {event.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden group cursor-pointer">
                        <CardContent className="p-0 relative">
                          <div className="aspect-video relative">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 text-white">
                            <p className="text-sm">{image.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video relative">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                      </div>
                      <p className="text-center mt-4">{image.description}</p>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

