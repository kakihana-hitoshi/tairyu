import Link from "next/link"
import { ChevronRight, Info } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ParticipantsPage() {
  return (
    <>
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
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              参加艇の情報は準備中です
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
              参加艇の皆様へ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-center text-muted-foreground">
            情報は準備中です
          </CardContent>
        </Card>
      </div>
    </>
  )
}

