"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

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
              <span>{t.contact.title}</span>
            </div>
          </div>
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{t.contact.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <h2 className="text-center text-xl font-medium text-foreground">{t.contact.description}</h2>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "832px" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe7i8gXSLZzMtyFsSCSpT3H5MHNUXzxTFkNU67TSao8kJKKvw/viewform?embedded=true"
                width="640"
                height="832"
                className="absolute top-0 left-0 w-full h-full border-0"
                title={t.contact.title}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                {t.contact.loading}
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

