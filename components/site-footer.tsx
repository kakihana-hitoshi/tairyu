"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"

export function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const navigationItems = [
    { href: "/", label: t.navigation.home },
    { href: "/notice", label: t.navigation.notice },
    { href: "/sailing-instructions", label: t.navigation.sailingInstructions },
    { href: "/participants", label: t.navigation.participants },
    { href: "/past-events", label: t.navigation.pastEvents },
    { href: "/contact", label: t.navigation.contact },
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-irkXlOqUxOVAWV8zQIk2gp4zLndFmC.jpeg"
              alt="Logo"
              width={180}
              height={120}
              className="w-auto h-14 mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">{t.footer.description}</p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tairyu-tJ1GIuLxlxSXyqsdmlchZXbhQi5D0X.png"
              alt="台琉"
              width={100}
              height={50}
              className="w-auto h-10"
            />
          </div>
          <div>
            <h5 className="font-bold mb-4">{t.footer.links}</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">{t.footer.contact}</h5>
            <p className="text-sm text-gray-400">{t.footer.contactText}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

