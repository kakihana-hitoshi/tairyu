"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, Send } from "lucide-react"
import Link from "next/link"

import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // フォーム送信のシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-sky-900 dark:to-slate-900">
      <MainNav />

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
              <span>お問い合わせ</span>
            </div>
          </div>
          {/* ページヘッダー */}
          <div className="py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold">お問い合わせ</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>
                第21回台琉友好親善国際ヨットレースに関するお問い合わせは、以下のフォームよりお願いいたします。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    お名前
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="name" name="name" required placeholder="山田 太郎" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    メールアドレス
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" required placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    お問い合わせ内容
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>送信中...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>送信する</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-6 text-center text-gray-600 dark:text-gray-400">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">お電話でのお問い合わせ</h2>
              <p>TEL: 000-0000-0000（平日 9:00-17:00）</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">メールでのお問い合わせ</h2>
              <p>Email: info@taiwan-ryukyu-regatta.com</p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

