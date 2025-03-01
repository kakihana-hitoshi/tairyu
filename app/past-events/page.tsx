import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function PastEventsPage() {
  const video = {
    year: 2023,
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-Ozn8IUQoS9t9eDSqMj04f3TbKMPP6T.mp4",
  }

  const events = [
    {
      year: 2023,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023a.jpg-frQL47mBCcZOJEd1Dm3d9d9J8wV9ks.jpeg",
          alt: "宮古島マリーナに停泊するヨット",
          description: "宮古島マリーナに停泊する参加艇の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023e.jpg-5mzCbh0fRQOVny7oAmsQguX0Ig9h7Y.jpeg",
          alt: "基隆港に停泊するヨット",
          description: "基隆港に集結した参加艇の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023d.jpg-sWx5eIuxeUs5PmcL7MUTyDkI66A6bK.jpeg",
          alt: "台湾琉球レガッタの旗とヨット",
          description: "台湾琉球レガッタの旗を掲げる参加艇",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023c.jpg-HBYNU90AHwHClyYgJqtbBsUmNMh3f0.jpeg",
          alt: "開会式での獅子舞パフォーマンス",
          description: "開会式での伝統的な獅子舞パフォーマンス",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023b.jpg-I9ivw4Ja8YR3SRDTwMJc5qx4Q847ph.jpeg",
          alt: "大会関係者の握手",
          description: "大会関係者による友好の握手",
        },
      ],
    },
    {
      year: 2014,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080028.JPG-XN36nonri64S797gv6VCKoM9kmJ8Gs.jpeg",
          alt: "レース中のヨット",
          description: "2014年大会での航行の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080031.JPG-nU7n2PVSoTB0OW6AkDus4lVDjxCHfz.jpeg",
          alt: "クルーメンバー",
          description: "熱心にレースに挑むクルーメンバー",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080032.JPG-pCfcbSVGz3JDgVGo4cfC880obe9d2y.jpeg",
          alt: "レース中のヨット全景",
          description: "白い船体が特徴的な参加艇",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080030.JPG-mCsA1b1I0E9wipadCEm1XkyFesVqAf.jpeg",
          alt: "手を振るクルーメンバー",
          description: "笑顔で手を振るクルーメンバー",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080033.JPG-Rs11qmyC93idijW5KDuz0wiGAkairk.jpeg",
          alt: "ナンバー8の旗を掲げた艇",
          description: "8番艇のレース中の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080048.JPG-GyH3XkDXpYymzbWjG7Xj18wvWVcGbB.jpeg",
          alt: "怡然号の航行シーン",
          description: "怡然号のクルーメンバーによる操船",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080043.JPG-8gbHSaNI1nx1ZMNdnCErnQFfUai8JD.jpeg",
          alt: "台湾海洋大学の参加艇",
          description: "台湾海洋大学の47番艇とクルーメンバー",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080045.JPG-WuSROqMHZvmJXVAhVK9lBRT71TMzkj.jpeg",
          alt: "TREASUREヨット",
          description: "TREASURE号の航行シーン",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080046.JPG-n2kQXkiaU5FiL9YQbKqkUQO5SSwV2o.jpeg",
          alt: "TREASUREヨットの別角度",
          description: "赤い2番旗を掲げるTREASURE号",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080044.JPG-EYk94PjVaziKaDgBXYiszXq1H5AD8q.jpeg",
          alt: "台湾海洋大学ヨットのクローズアップ",
          description: "台湾海洋大学艇のデッキの様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080355.JPG-sXjfF6t2LdteJgxOPyqRPMWWj72IBE.jpeg",
          alt: "レセプションパーティーの様子",
          description: "大会後の交流会での参加者たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080352.JPG-aJIvNnCf3DjgTqIpa3KWfC0KfqOtTG.jpeg",
          alt: "表彰式のプレゼンテーション",
          description: "台琉国際帆船賽の表彰式",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080357.JPG-9JtHdI8UAa9K7emWAysg9zK2ibDxjA.jpeg",
          alt: "優勝チームの表彰",
          description: "トロフィーを手にする優勝チーム",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080353.JPG-a4ZcMJ4SqFUnZiMwAZQCPsYeAuFlpW.jpeg",
          alt: "レセプションディナーの様子",
          description: "参加者が集うレセプションディナー",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080356.JPG-AYK2Bw58UFn5hnkfR2Sgbb0R17HmnV.jpeg",
          alt: "表彰式の集合写真",
          description: "表彰式での受賞者たちの集合写真",
        },
      ],
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
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>過去大会の様子</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">過去大会の様子</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        {/* ビデオセクション */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">2023年大会動画</h2>
          <div className="w-full max-w-4xl mx-auto aspect-video relative">
            <video controls className="w-full h-full rounded-lg" poster="/placeholder.svg?height=720&width=1280">
              <source src={video.url} type="video/mp4" />
              お使いのブラウザは動画の再生に対応していません。
            </video>
          </div>
        </section>
        <div className="space-y-12">
          {events.map((event) => (
            <section key={event.year} className="space-y-6">
              <h2 className="text-2xl font-bold">{event.year}年大会</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {event.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden group cursor-pointer">
                        <CardContent className="p-0 relative">
                          <div className="aspect-video relative">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 text-white">
                            <p className="text-sm">{image.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video relative">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                      </div>
                      <p className="text-center mt-4">{image.description}</p>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

