"use client"

import Link from "next/link"
import { ChevronRight, Download, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SailingInstructionsPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const documents = [
    {
      title: t.sailingInstructions.mainDocument.title,
      description: t.sailingInstructions.mainDocument.description,
      filename: t.sailingInstructions.mainDocument.filename,
      url: "https://docs.google.com/document/d/1SjxaOUVKDcmdoj2fM0NOeIMxeErQfHO8/edit?usp=sharing&ouid=113400986111964475930&rtpof=true&sd=true",
    },
    {
      title: t.sailingInstructions.declarationForm.title,
      description: t.sailingInstructions.declarationForm.description,
      filename: t.sailingInstructions.declarationForm.filename,
      url: "https://drive.google.com/file/d/1eWdcikyiU2feC7mHuwEEpszMkM6Omhso/view?usp=sharing",
    },
  ]

  return (
    <>
      <div className="bg-sky-900 text-white">
        <div className="container mx-auto px-4">
          <div className="py-4 text-sm text-sky-100">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                {t.navigation.home}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{t.sailingInstructions.title}</span>
            </div>
          </div>
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{t.sailingInstructions.title}</h1>
          </div>
        </div>
      </div>

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
                    <span>{t.notice.downloadButton}</span>
                    <span className="text-sm text-sky-200">({doc.filename})</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>{t.sailingInstructions.note}</p>
          <p className="mt-2">
            <Link href="/contact" className="text-sky-600 hover:underline">
              {t.sailingInstructions.contactLink}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

