"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/translations";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function PastEventsPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const events = [
    {
      year: 2023,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023.jpg-NBedEi6GigVL3uZUQwFLytJkh2Fvid.jpeg",
          alt: t.pastEvents.imageDescriptions.view,
          description: t.pastEvents.imageDescriptions.view,
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023a.jpg-KlRAUv4iXI5yLHxStB3IRG8EbiSQ8T.jpeg",
          alt: t.pastEvents.imageDescriptions.harbor,
          description: t.pastEvents.imageDescriptions.harbor,
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023b.jpg-zKbVkeooqUzCedtSPLHNmPsD3qFf0C.jpeg",
          alt: t.pastEvents.imageDescriptions.cultural,
          description: t.pastEvents.imageDescriptions.cultural,
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023c.jpg-CYwFbaeq8uDc2jDoRfPJC4xqPnmbR3.jpeg",
          alt: t.pastEvents.imageDescriptions.performance,
          description: t.pastEvents.imageDescriptions.performance,
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023d.jpg-w27PheZwVFdFgpGkfFXdBo0w0NHxE7.jpeg",
          alt: t.pastEvents.imageDescriptions.flags,
          description: t.pastEvents.imageDescriptions.flags,
        },
      ],
    },
    {
      year: 2014,
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080030.JPG-yIvSFPOUf3jECuLtbZbz0zmHWjcvq9.jpeg",
          alt: "レース中の乗組員",
          description: "乗組員たちが笑顔で手を振る様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080028.JPG-nUhCOqnZdvKIkB10dUYEqu3R3Cf9NM.jpeg",
          alt: "ヨットの側面",
          description: "白いヨットの側面から撮影された航行シーン",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080035.JPG-JkNco6xUJChF0CugGb4ASIb5of8DMz.jpeg",
          alt: "レース艇VISION",
          description: "8番の赤い旗を掲げて航行するVISION",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080033.JPG-i25P91AiREMebbJtgJ6xKWHgKyoboM.jpeg",
          alt: "レース中のヨット",
          description: "乗組員全員で操船する白いヨット",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080034.JPG-Mhk4gLuQmrvf1fvRu9RQejHrQiHRwQ.jpeg",
          alt: "乗組員たち",
          description: "オレンジのライフジャケットを着た乗組員たち",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080031.JPG-L4N6MhcpErmc2utfgNICXehxjE2hvH.jpeg",
          alt: "操船シーン",
          description: "3名の乗組員による操船の様子",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1080032.JPG-Xvru5DCH4gimkLS5FddOkvO3q9lw2U.jpeg",
          alt: "レース艇の全景",
          description: "白い船体と帆が印象的なレース艇",
        },
      ],
    },
  ];

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
              <span>{t.pastEvents.title}</span>
            </div>
          </div>
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">
              {t.pastEvents.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">{t.pastEvents.video2023}</h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  controls
                  className="w-full h-full"
                  poster="/placeholder.svg?height=720&width=1280"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-ljulk3KYtyAcqc210AdO1eiO9ePJts.mp4"
                    type="video/mp4"
                  />
                  {t.pastEvents.loadingVideo}
                </video>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                {t.pastEvents.videoCaption}
              </p>
            </div>
          </section>

          {events.map((event) => (
            <section key={event.year} className="space-y-6">
              <h2 className="text-2xl font-bold">
                {event.year === 2023
                  ? t.pastEvents.event2023
                  : t.pastEvents.event2014}
              </h2>
              <div className="grid gap-6">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={setApi}
                  className="w-full max-w-5xl mx-auto px-12"
                >
                  <CarouselContent>
                    {event.images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
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
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="sr-only">
                                {event.year}年大会の写真
                              </DialogTitle>
                              <DialogDescription>
                                {image.description}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="aspect-video relative">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-center mt-4">
                              {image.description}
                            </p>
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
  );
}
