import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-uQf9XmUeup0K8BgEmCpFPSjefxGJsC.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 mb-4"
            />
            <p className="text-sm text-gray-400">
              台湾琉球国際ヨットレースは、基隆市と宮古島市の姉妹都市交流事業として開催されます。
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">リンク</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/notice" className="hover:text-white transition-colors">
                  公示
                </Link>
              </li>
              <li>
                <Link href="/sailing-instructions" className="hover:text-white transition-colors">
                  帆走指示書
                </Link>
              </li>
              <li>
                <Link href="/participants" className="hover:text-white transition-colors">
                  参加艇
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="hover:text-white transition-colors">
                  過去大会の様子
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">お問い合わせ</h5>
            <p className="text-sm text-gray-400">
              大会に関するお問い合わせは、以下のメールアドレスまでお願いいたします。
            </p>
            <p className="text-sm text-gray-400 mt-2">info@taiwan-ryukyu-regatta.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Copyright © 2025 Taiwan Ryukyu Regatta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

