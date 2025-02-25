import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Globe, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function NoticePage() {
  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/notice", label: "公示" },
    { href: "#", label: "帆走指示書" },
    { href: "#", label: "参加艇" },
    { href: "#", label: "過去大会の様子" },
    { href: "#", label: "お問い合わせ" },
  ]

  const sections = [
    {
      id: "organizers",
      title: "1. 共同主催",
      content: [
        "第19回台湾友好親善国際ヨットレース実行委員会",
        "宮古島市・宮古島市議会・宮古市議会",
        "宮古島ヨットクラブ・NPO法人 八重山ヨット協会",
        "中華民国帆船協会・国立台湾海洋大学・台北市帆船協会・宮古島青年会帆船委員会・宮古島体育会",
      ],
    },
    {
      id: "management",
      title: "1-1 レース主管",
      content: ["第19回台湾友好親善国際ヨットレース実行委員会", "宮古島ヨットクラブ・NPO法人八重山ヨット協会"],
    },
    {
      id: "sponsors",
      title: "1-2 特別協賛",
      content: [
        "勧商海浜開リゾート・竜ユニマットプレシャス・ヒルトン沖縄宮古島リゾート・三菱開発・朝日友・明２４°NORTH・新宮古島空管理センター・下地島エアポートマネジメント㈱・㈱宮古製糖パインサンダー・沖縄県・翁長家・小林・㈱DOUG'S BURGER・㈱HARRYS",
      ],
    },
    {
      id: "support",
      title: "1-3 後援",
      content: [
        "那覇市政観光協会・那覇市青年会所",
        "宮古テレビ㈱・宮古新報㈱・宮古毎日新聞・宮古民間放送会宮古局",
        "FM宮古",
      ],
    },
    {
      id: "cooperation",
      title: "1-4 協力",
      content: [
        "沖縄総合事務局平良港湾事務所・宮古島漁港湾・宮古島漁協会・(社)宮古安全海運輸協議会・JSA汐汲沖縄・第１１管区第１保安署(予定)",
        "宮島港務所・台湾コーストガード",
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
              <span>公示</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">公示</h1>
          </div>
        </div>
      </div>

      {/* 目次とコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>目次</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="grid gap-2">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm hover:text-sky-600 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{section.title}</span>
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* コンテンツ */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.content.map((item, index) => (
                      <div key={index}>
                        <p className="text-gray-600 dark:text-gray-300">{item}</p>
                        {index < section.content.length - 1 && <Separator className="my-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        {/* PDFダウンロードボタン */}
        <div className="mt-12 flex justify-center">
          <Button size="lg" className="gap-2">
            <span>公示PDFをダウンロード</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

