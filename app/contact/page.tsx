import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
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
              <span>お問い合わせ</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">お問い合わせ</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent>
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "832px" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe7i8gXSLZzMtyFsSCSpT3H5MHNUXzxTFkNU67TSao8kJKKvw/viewform?embedded=true"
                width="640"
                height="832"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="お問い合わせフォーム"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                読み込んでいます…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

