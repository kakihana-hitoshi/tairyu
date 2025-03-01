"use client"
import { useState } from "react"
import type { Dictionary } from "@/types/dictionary"

interface PastEventsClientProps {
  dict: Dictionary
  lang: string
}

export function PastEventsClient({ dict, lang }: PastEventsClientProps) {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  // Rest of the component remains the same
}

