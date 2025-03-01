import Image from "next/image"
import Link from "next/link"

import { navigationItems } from "@/config/navigation"

export function SiteFooter() {
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
            <p className="text-sm text-gray-400">
              台湾琉球国際ヨットレースは、基隆市と宮古島市の姉妹都市交流事業として開催されます。
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">リンク</h5>
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
            <h5 className="font-bold mb-4">お問い合わせ</h5>
            <p className="text-sm text-gray-400">
              大会に関するお問い合わせは、お問い合わせフォームよりお願いいたします。
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Copyright © 2025 Taiwan Ryukyu Regatta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

