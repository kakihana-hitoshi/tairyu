import { PastEventsClient } from "./past-events-client"
import { getDictionary } from "../dictionaries"

export default async function PastEventsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)
  return <PastEventsClient dict={dict} lang={lang} />
}

