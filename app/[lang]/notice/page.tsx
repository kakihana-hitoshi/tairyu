import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getDictionary } from "../dictionaries"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default async function NoticePage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <>
      {/* パンくずリストとページヘッダー */}
      <div className="bg-sky-900 text-white">
        <div className="container mx-auto px-4">
          {/* パンくずリスト */}
          <div className="py-4 text-sm text-sky-100">
            <div className="flex items-center gap-2">
              <Link href={`/${lang}`} className="hover:text-white transition-colors">
                {dict.common.breadcrumbHome}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{dict.notice.title}</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{dict.notice.title}</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex justify-center py-8">
            <a
              href="https://docs.google.com/document/d/1SjxaOUVKDcmdoj2fM0NOeIMxeErQfHO8/edit?usp=sharing&ouid=113400986111964475930&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <span>{dict.notice.downloadButton}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

