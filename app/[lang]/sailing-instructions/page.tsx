import Link from "next/link"
import { ChevronRight, Download, FileText } from "lucide-react"
import { getDictionary } from "../dictionaries"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function SailingInstructionsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  const documents = [
    {
      title: dict.sailingInstructions.fullText,
      description: dict.sailingInstructions.fullTextDesc,
      filename: lang === "ja" ? "2025帆走指示書(全文).pdf" : "2025帆船指導書(全文).pdf",
      url: "https://docs.google.com/document/d/1SjxaOUVKDcmdoj2fM0NOeIMxeErQfHO8/edit?usp=sharing&ouid=113400986111964475930&rtpof=true&sd=true",
    },
    {
      title: dict.sailingInstructions.selfDeclaration,
      description: dict.sailingInstructions.selfDeclarationDesc,
      filename: lang === "ja" ? "自我申告書Self Declaration Form.pdf" : "自我申報表Self Declaration Form.pdf",
      url: "https://drive.google.com/file/d/1eWdcikyiU2feC7mHuwEEpszMkM6Omhso/view?usp=sharing",
    },
  ]

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
              <span>{dict.sailingInstructions.title}</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{dict.sailingInstructions.title}</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc) => (
            <Card key={doc.filename} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-sky-600" />
                  {doc.title}
                </CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 group-hover:bg-sky-700">
                    <Download className="h-4 w-4" />
                    <span>{dict.sailingInstructions.download}</span>
                    <span className="text-sm text-sky-200">({doc.filename})</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>{dict.sailingInstructions.contactText}</p>
          <p className="mt-2">
            <Link href={`/${lang}/contact`} className="text-sky-600 hover:underline">
              {dict.sailingInstructions.contactLink}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

