import "server-only"

export type Dictionary = {
  navigation: {
    home: string
    notice: string
    sailingInstructions: string
    participants: string
    pastEvents: string
    contact: string
  }
  header: {
    menuTitle: string
    languageSwitch: string
    entryOpen: string
  }
  footer: {
    links: string
    contactUs: string
    contactText: string
    copyright: string
  }
  home: {
    mainTitle: string
    subtitle: string
    slogan: string
    eventDate: string
    applyButton: string
    detailsButton: string
    latestNews: string
    newsCategory: {
      announcement: string
      event: string
    }
    overview: string
    schedule: string
    venue: string
    contact: string
  }
  notice: {
    title: string
    downloadButton: string
  }
  sailingInstructions: {
    title: string
    fullText: string
    fullTextDesc: string
    selfDeclaration: string
    selfDeclarationDesc: string
    download: string
    contactText: string
    contactLink: string
  }
  participants: {
    title: string
    japanese: string
    international: string
    preparingInfo: string
    noticeTitle: string
  }
  pastEvents: {
    title: string
    videoTitle: string
    videoDesc: string
    browserNotSupported: string
  }
  contact: {
    title: string
    loading: string
  }
  common: {
    breadcrumbHome: string
  }
}

const dictionaries = {
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  "zh-TW": () => import("./dictionaries/zh-TW.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const validLocale = locale in dictionaries ? locale : "ja"
  return dictionaries[validLocale as keyof typeof dictionaries]()
}

