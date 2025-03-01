import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "../dictionaries"

export default async function ContactPage({
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
              <span>{dict.contact.title}</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{dict.contact.title}</h1>
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
                title={dict.contact.title}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                {dict.contact.loading}
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

