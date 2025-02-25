import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Globe, Info, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ParticipantsPage() {
  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/notice", label: "公示" },
    { href: "/sailing-instructions", label: "帆走指示書" },
    { href: "/participants", label: "参加艇" },
    { href: "#", label: "過去大会の様子" },
    { href: "#", label: "お問い合わせ" },
  ]

  const japaneseParticipants = [
    { id: 1, teamName: "AQUARIUS 6", shipType: "X362", sailNo: "機材トラブルにより不参加" },
    { id: 2, teamName: "TIDAagain 2", shipType: "MUMM36", sailNo: "JPN5495" },
    { id: 3, teamName: "夢ひょうたん", shipType: "TAYLOA47.5", sailNo: "JPN5559" },
    { id: 4, teamName: "シーサー2", shipType: "LIDGARD38", sailNo: "JPN2634" },
    { id: 5, teamName: "MINNIE（ミニー）", shipType: "ラグーン41", sailNo: "機材トラブルにより不参加" },
    { id: 6, teamName: "ACADIA NANA", shipType: "ラグーン45", sailNo: "" },
    { id: 7, teamName: "GEFION", shipType: "バルチック35", sailNo: "JPN5955" },
    { id: 8, teamName: "ニライカナイ", shipType: "ピーターソン37", sailNo: "" },
    { id: 9, teamName: "有明丸", shipType: "ファースト34.7", sailNo: "JPN6349" },
    { id: 10, teamName: "AOBA", shipType: "クラブスワン42", sailNo: "台風の影響により不参加" },
    { id: 11, teamName: "HERIOS", shipType: "ラグーン50", sailNo: "" },
    { id: 12, teamName: "チームZX", shipType: "POGO12", sailNo: "台風の影響により不参加" },
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
              <span>参加艇</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">参加艇</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="japanese" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="japanese">日本参加艇</TabsTrigger>
            <TabsTrigger value="international">海外参加艇</TabsTrigger>
          </TabsList>

          <TabsContent value="japanese">
            <div className="rounded-lg border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Type of ship</TableHead>
                    <TableHead>Sail No</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {japaneseParticipants.map((participant) => (
                    <TableRow key={participant.id}>
                      <TableCell>{participant.id}</TableCell>
                      <TableCell>{participant.teamName}</TableCell>
                      <TableCell>{participant.shipType}</TableCell>
                      <TableCell>{participant.sailNo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="international">
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              参加艇の情報は準備中です
            </div>
          </TabsContent>
        </Tabs>

        {/* 注意事項 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-sky-600" />
              日本参加艇の皆様へ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <p>
              1、燃料補給が必要な場合、各船舶は自分たちで燃料代を用意してください。6月10日（土）に大会は給油車を桟橋に手配しますので、各船舶は指定された場所に燃料缶を置いて給油してください。各船舶は必要な燃料量を予想し、事前に大会にリットル数を登録してください。燃料の統計は6月6日（火）18:00までとします。
            </p>
            <p>
              現金で燃料代をお支払いいただき、また、給油車の運転手の休日残業手当は全ての給油船舶と分担してください。
            </p>
            <p>
              2、6月10日（土）の船長会議は午後4時から始まります。場所は岩砂漁港の乾燥船です。各チームは必ず2人の代表を派遣して出席してください。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

