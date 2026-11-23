"use client"

import { Facebook, Instagram, Music2, Youtube, Sparkle, Send } from "lucide-react"

export function MarqueeBand() {
  const items = ["HD Quality", "100% Free", "No Login", "Reels + Videos", "Fast Download", "No Watermark"]
  return (
    <div aria-hidden="true" className="overflow-hidden border-b-2 border-[#2E1B33] bg-[#FF2E7E] py-2.5">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-6 pr-6 font-body text-[13px] font-bold tracking-[0.14em] whitespace-nowrap text-white uppercase">
                {item}
                <Sparkle className="h-3.5 w-3.5 fill-[#FFB020] text-[#FFB020]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const downloaders = [
  { key: "youtube", name: "YouTube Downloader", tagline: "HD video + MP3, merged in your browser", url: "https://saytd.vercel.app", Icon: Youtube, chip: "bg-[#FF0000]" },
  { key: "tiktok", name: "TikTok Downloader", tagline: "Videos, photos & user videos — no watermark", url: "https://tiktok-web-shuvo.vercel.app", Icon: Music2, chip: "bg-[#2E1B33]" },
  { key: "instagram", name: "Instagram Downloader", tagline: "Reels, photos & carousels in seconds", url: "https://sa-instagram-downloader.vercel.app", Icon: Instagram, chip: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600" },
  { key: "facebook", name: "Facebook Downloader", tagline: "Reels & videos in HD quality", url: null, Icon: Facebook, chip: "bg-[#FF2E7E]" },
] as const

export function MoreDownloaders() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 md:px-6 py-14">
      <div className="text-center space-y-3">
        <span className="chip-sticker -rotate-1 bg-[#FFB020] text-[#2E1B33]">More Downloaders</span>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground">Try My Other <span className="text-gradient-pink">Downloaders</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Free tools by Shuvo Ahmed — YouTube, TikTok, Instagram and Facebook, all in one family.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {downloaders.map(({ key, name, tagline, url, Icon, chip }) => {
          const inner = (
            <>
              {url === null && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 rounded-full border-2 border-[#2E1B33] bg-[#FF2E7E] px-3 py-0.5 text-xs font-bold whitespace-nowrap text-white shadow-hard-sm">You are here</span>
              )}
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2E1B33] shadow-hard-sm ${chip}`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
              <p className="text-center text-sm text-muted-foreground">{tagline}</p>
            </>
          )
          const cls = "relative flex flex-col items-center gap-3 rounded-[28px] border-2 border-[#F3E7D3] bg-white p-6 pt-8 shadow-hard-sm"
          return url === null ? (
            <div key={key} aria-current="page" className={`${cls} shadow-[4px_4px_0_0_#FF2E7E] ring-2 ring-[#FF2E7E]`}>{inner}</div>
          ) : (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={`${cls} transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-hard`}>{inner}</a>
          )
        })}
      </div>
    </section>
  )
}

export function DeveloperSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 md:px-6 pb-16">
      <div className="rounded-[28px] border-2 border-[#F3E7D3] bg-white p-8 shadow-hard flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] border-2 border-[#2E1B33] bg-[#FF2E7E] shadow-hard-sm">
          <span className="font-display text-2xl font-extrabold text-white">SA</span>
        </div>
        <div className="flex-1 space-y-1.5">
          <p className="font-body text-xs font-bold tracking-[0.16em] text-[#FF2E7E] uppercase">Developer</p>
          <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">Shuvo Ahmed</h2>
          <p className="text-sm text-muted-foreground md:text-base">Building free downloader tools and SHUVO Kids VPS for Bangladesh. Questions or feedback? Message me on Telegram.</p>
        </div>
        <a href="https://t.me/shuvon1ss" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#2E1B33] bg-[#2E1B33] px-5 py-3 font-body text-sm font-bold text-white shadow-[3px_3px_0_0_#FF2E7E] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#FF2E7E]">
          <Send className="h-4 w-4" /> @shuvon1ss
        </a>
      </div>
    </section>
  )
}
