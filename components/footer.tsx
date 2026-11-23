"use client"

import { Heart, Download, Shield, Zap, Github, Mail, ExternalLink, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onNavigate?: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const features = [
    { icon: Download, text: "High Quality Downloads" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Safe & Secure" },
  ]

  const links = [
    { label: "Home", action: () => onNavigate?.("home") },
    { label: "Help", action: () => onNavigate?.("help") },
    { label: "About", action: () => onNavigate?.("about") },
    { label: "Contact", action: () => onNavigate?.("contact") },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/fbimposter33-hue", label: "GitHub" },
    { icon: Send, href: "https://t.me/shuvon1ss", label: "Telegram" },
    {
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://www.facebook.com/shuvo.ahmead.7543",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:nazirahmeds9876@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative mt-0 border-t-4 border-[#FF2E7E] bg-[#2E1B33] text-[#FBF8F1]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#FBF8F1] bg-[#FF2E7E] shadow-[3px_3px_0_0_#FFB020]">
                <span className="font-display text-base font-extrabold text-white">FB</span>
              </div>
              <h3 className="font-display text-xl font-extrabold text-white">SHUVO Facebook Downloader</h3>
            </div>
            <p className="text-sm text-[#FBF8F1]/70 text-pretty">
              Download your favorite Facebook videos and reels in high quality — fast, free and secure, with no registration required.
            </p>
            <div className="flex items-center space-x-1 text-sm text-[#FBF8F1]/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#FF2E7E] animate-pulse" />
              <span>by Shuvo Ahmed</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white">Features</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-sm text-[#FBF8F1]/70 transition-colors hover:text-white">
                  <feature.icon className="w-4 h-4 text-[#FFB020]" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <button onClick={link.action} className="group flex items-center space-x-2 text-sm text-[#FBF8F1]/70 transition-colors hover:text-[#FFB020]">
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white">Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-[#FBF8F1]/70">Follow for updates and support</p>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 rounded-2xl border-2 border-[#FBF8F1]/25 p-0 text-[#FBF8F1] transition-all duration-300 hover:scale-110 hover:border-[#FF2E7E] hover:bg-[#FF2E7E] hover:text-white"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
              <a href="https://t.me/shuvon1ss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FFB020] hover:text-[#FF2E7E]">@shuvon1ss on Telegram</a>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-[#FBF8F1]/15" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-center text-sm text-[#FBF8F1]/60 md:text-left">&copy; {currentYear} SHUVO Facebook Downloader. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <button onClick={() => onNavigate?.("privacy")} className="text-[#FBF8F1]/60 transition-colors hover:text-[#FFB020]">Privacy Policy</button>
            <button onClick={() => onNavigate?.("terms")} className="text-[#FBF8F1]/60 transition-colors hover:text-[#FFB020]">Terms of Service</button>
            <button onClick={() => onNavigate?.("disclaimer")} className="text-[#FBF8F1]/60 transition-colors hover:text-[#FFB020]">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
