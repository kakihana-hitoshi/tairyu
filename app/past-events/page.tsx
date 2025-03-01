"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

export default function PastEventsPage() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  const events = [
    {
      year: 2023,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023.jpg-NBedEi6GigVL3uZUQwFLytJkh2Fvid.jpeg",
          alt: "レース中のヨットからの眺め",
          description: "日の丸と大会旗を掲げて航行する参加艇からの美しい眺望",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023a.jpg-KlRAUv4iXI5yLHxStB3IRG8EbiSQ8T.jpeg",
          alt: "基隆港のヨット群",
          description: "基隆港のマリーナに集結した参加艇たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023b.jpg-zKbVkeooqUzCedtSPLHNmPsD3qFf0C.jpeg",
          alt: "文化交流イベントの様子",
          description: "大会関係者による記念撮影",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023c.jpg-CYwFbaeq8uDc2jDoRfPJC4xqPnmbR3.jpeg",
          alt: "獅子舞パフォーマンス",
          description: "台湾伝統の獅子舞による歓迎パフォーマンス",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023d.jpg-w27PheZwVFdFgpGkfFXdBo0w0NHxE7.jpeg",
          alt: "レース旗を掲げる参加艇",
          description: "大会旗を掲げて停泊中の参加艇たち",
        },
      ],
    },
    {
      year: 2014,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080301.JPG-UnupuEf3VVJO6O7cY8IicUFYf3N7c2.jpeg",
          alt: "歓迎会での若い参加者たち",
          description: "歓迎会で交流を楽しむ若い参加者たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080302.JPG-HDwTNaM4IDknzjsY7dGrfKumJd3NF5.jpeg",
          alt: "交流会のテーブルシーン",
          description: "円卓を囲んで和やかに交流する参加者たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080303.JPG-AeIp33OgSYiDYJI9L22Od98mu9RF9B.jpeg",
          alt: "乾杯シーン",
          description: "日台の参加者による和やかな乾杯の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080304.JPG-gS6uEA89rGu1VMCCcTuqxFc6Jmdwp7.jpeg",
          alt: "ステージでの盛り上がり",
          description: "ステージ上で盛り上がる若い参加者たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080310.JPG-kj103Snj6ieIVYS6zVya62myEmZV12.jpeg",
          alt: "大会関係者のスピーチ",
          description: "台琉国際帆船賽の横断幕の下でのスピーチの様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080319.JPG-4F7CF5094ih1vyiQ7yfM39RNLCPanC.jpeg",
          alt: "若者たちの交流",
          description: "笑顔で交流する若い参加者たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080320.JPG-UY62SyvUeT43YshtVE5MJlgivLO4SX.jpeg",
          alt: "歓迎会での交流",
          description: "歓迎会での和やかな交流シーン",
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
        <div className="space-y-12">
          {/* 2023年大会動画 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">2023年大会動画</h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video controls className="w-full h-full" poster="/placeholder.svg?height=720&width=1280">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-ljulk3KYtyAcqc210AdO1eiO9ePJts.mp4"
                    type="video/mp4"
                  />
                  お使いのブラウザは動画の再生に対応していません。
                </video>
              </div>
              <p className="text-center mt-4 text-muted-foreground">2023年台湾琉球国際ヨットレースのハイライト映像</p>
            </div>
          </section>

          {/* 各年の写真カルーセル */}
          {events.map((event) => (
            <section key={event.year} className="space-y-6">
              <h2 className="text-2xl font-bold">{event.year}年大会</h2>
              <div className="grid gap-6">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={setApi}
                  className="w-full max-w-5xl mx-auto px-12"
                  current={current}
                  onSelect={(index) => setCurrent(index)}
                >
                  <CarouselContent>
                    {event.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Dialog>
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
                            <DialogDescription className="sr-only">{image.description}</DialogDescription>
                            <div className="aspect-video relative">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-center mt-4">{image.description}</p>
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

