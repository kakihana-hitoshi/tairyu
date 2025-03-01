"use client"

import Link from "next/link"
import { ChevronRight, Info } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ParticipantsPage() {
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
              <span>{t.participants.title}</span>
            </div>
          </div>
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">{t.participants.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="japanese" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="japanese">{t.participants.japaneseBoats}</TabsTrigger>
            <TabsTrigger value="international">{t.participants.internationalBoats}</TabsTrigger>
          </TabsList>

          <TabsContent value="japanese">
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              {t.participants.preparingMessage}
            </div>
          </TabsContent>

          <TabsContent value="international">
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              {t.participants.preparingMessage}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-sky-600" />
              {t.participants.noticeTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-center text-muted-foreground">
            {t.participants.preparingMessage}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

