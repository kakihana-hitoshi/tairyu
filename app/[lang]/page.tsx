import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Globe, Mail } from "lucide-react"
import { getDictionary } from "./dictionaries"

import { Button } from "@/components/ui/button"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <>
      {/* メインビジュアル */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-70" />
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-5VBIDpZ7qND1wAJlR31MsD9IQMS29T.png"
            alt="Yacht race in Miyako Island"
            width={1600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">2025年</p>
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
                {dict.home.mainTitle}
              </h2>
              <p className="text-xl md:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{dict.home.subtitle}</p>
              <div className="pt-4 space-y-2">
                <p className="text-base md:text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{dict.home.slogan}</p>
                <p className="text-base md:text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{dict.home.eventDate}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href={`/${lang}/sailing-instructions`}>
                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                  {dict.home.applyButton}
                </Button>
              </Link>
              <Link href={`/${lang}/notice`}>
                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                  {dict.home.detailsButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ニュース */}
      <section className="py-16 container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">{dict.home.latestNews}</h3>
        <div className="grid gap-4">
          {[
            {
              date: "2025.2.1",
              title: lang === "ja" ? "参加申込受付を開始しました" : "報名開始接受",
              category: dict.home.newsCategory.announcement,
            },
            {
              date: "2025.1.15",
              title: lang === "ja" ? "大会スケジュールを公開しました" : "賽事日程已公布",
              category: dict.home.newsCategory.event,
            },
            {
              date: "2025.1.5",
              title: lang === "ja" ? "協賛企業の募集を開始します" : "開始招募贊助企業",
              category: dict.home.newsCategory.announcement,
            },
          ].map((news, i) => (
            <div
              key={i}
              className="group p-4 border rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <time className="text-sm text-gray-500 dark:text-gray-400">{news.date}</time>
                  <span className="px-2 py-1 text-xs rounded bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300">
                    {news.category}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-sky-600 transition-colors" />
              </div>
              <h4 className="mt-2 font-medium group-hover:text-sky-600 transition-colors">{news.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 開催概要 */}
      <section className="py-16 bg-gradient-to-b from-transparent to-sky-50 dark:to-sky-900/20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">{dict.home.overview}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <Calendar className="h-8 w-8 text-sky-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">{dict.home.schedule}</h4>
              <p className="text-gray-600 dark:text-gray-300">2025年6月7日（土）〜 6月12日（水）</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <Globe className="h-8 w-8 text-sky-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">{dict.home.venue}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {lang === "ja" ? "基隆市（台湾）・宮古島市（日本）" : "基隆市（台灣）・宮古島市（日本）"}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <Mail className="h-8 w-8 text-sky-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">{dict.home.contact}</h4>
              <p className="text-gray-600 dark:text-gray-300">{lang === "ja" ? "大会事務局" : "大會事務局"}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

