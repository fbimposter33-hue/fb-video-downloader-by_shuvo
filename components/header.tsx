"use client"
import { Menu, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  onMenuClick: () => void
  onProfileClick: () => void
  onNavigate?: (page: string) => void
}

export function Header({ onMenuClick, onProfileClick, onNavigate }: HeaderProps) {
  const navBtn = "font-body font-semibold text-muted-foreground hover:text-[#FF2E7E] transition-colors hover-lift hidden md:inline-flex"
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#E1DAD0] bg-[#FBF8F1]/85 shadow-[0_6px_24px_rgba(46,27,51,0.06)] backdrop-blur-[18px]">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <button onClick={() => onNavigate?.("home")} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-2 border-[#2E1B33] bg-[#FF2E7E] shadow-hard-sm md:h-11 md:w-11">
            <span className="font-display text-sm font-extrabold text-white md:text-base">FB</span>
          </span>
          <span className="truncate font-display text-lg font-extrabold text-foreground md:text-2xl">
            SHUVO <span className="text-[#FF2E7E]">Facebook</span> Downloader
          </span>
        </button>

        <nav className="flex shrink-0 items-center gap-1 md:gap-2">
          <Button variant="ghost" onClick={() => onNavigate?.("home")} className={`${navBtn} text-foreground`}>Home</Button>
          <Button variant="ghost" onClick={() => onNavigate?.("help")} className={navBtn}>Help</Button>
          <Button variant="ghost" onClick={() => onNavigate?.("about")} className={navBtn}>About</Button>
          <Button variant="ghost" onClick={() => onNavigate?.("contact")} className={navBtn}>Contact</Button>

          <a href="https://t.me/shuvon1ss" target="_blank" rel="noopener noreferrer" className="ml-1 hidden items-center gap-1.5 rounded-full border-2 border-[#2E1B33] bg-[#2E1B33] px-4 py-2 font-body text-sm font-bold text-white shadow-[3px_3px_0_0_#FF2E7E] transition-all hover:-translate-y-0.5 sm:inline-flex">
            <Send className="h-4 w-4" /> Telegram
          </a>

          <Button variant="ghost" size="sm" onClick={onProfileClick} className="flex items-center gap-2 px-2 hover-lift md:px-3">
            <Avatar className="h-7 w-7 border-2 border-[#2E1B33] md:h-8 md:w-8">
              <AvatarImage src="https://trickbd.com/wp-content/uploads/2025/08/03/cropped-ssstik.io_1754157026441-300x300.jpeg" alt="Profile" />
              <AvatarFallback className="text-xs">H</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-semibold md:inline">Profile</span>
          </Button>

          <Button variant="ghost" size="sm" onClick={onMenuClick} className="hover-lift md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  )
}
