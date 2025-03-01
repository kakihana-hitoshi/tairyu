import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  breadcrumb: string
}

export function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-sky-900 text-white">
      <div className="container mx-auto px-4">
        {/* パンくずリスト */}
        <div className="py-4 text-sm text-sky-100">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{breadcrumb}</span>
          </div>
        </div>
        {/* ページヘッダー */}
        <div className="py-8 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  )
}

