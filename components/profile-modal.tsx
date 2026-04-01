"use client"

import { X, Facebook, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import type { ComponentType } from "react"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

/* ---------------- ICON TYPE ---------------- */

type IconType = ComponentType<{ className?: string }>

/* ---------------- TIKTOK ICON (FIXED) ---------------- */

const TikTokIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 8.5a7.5 7.5 0 01-4.5-1.5v6.75a6.25 6.25 0 11-6.25-6.25c.25 0 .5.02.75.05v3.1a3.25 3.25 0 103.25 3.25V0h3a4.5 4.5 0 003.75 3.75v4.75z" />
  </svg>
)

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null

  const contactLinks: {
    icon: IconType
    label: string
    href: string
    color: string
    glow: string
  }[] = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/shuvo.ahmead.7543",
      color: "text-blue-600",
      glow: "hover:shadow-blue-500/30",
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      href: "https://www.tiktok.com/@shuvonx9",
      color: "text-black dark:text-white",
      glow: "hover:shadow-white/20",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/shuvo_9882",
      color: "text-sky-500",
      glow: "hover:shadow-sky-500/30",
    },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Premium Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-full max-w-md mx-4
        rounded-2xl
        bg-white/70 dark:bg-black/40
        backdrop-blur-xl
        border border-border
        shadow-2xl
        z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-lg">Profile</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Avatar */}
          <div className="text-center space-y-4">
            <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20">
              <AvatarImage src="https://image2url.com/r2/default/images/1775036582768-005b356d-66f2-4ff9-bbcb-b06d387c8a50.jpg" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-xl font-bold">SHUVO AHMED</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer passionate about modern web apps using
                React & Next.js.
              </p>
            </div>
          </div>

          {/* Premium Social Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Connect with me</h4>

            <div className="grid gap-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl
                    border border-border
                    bg-muted/40 backdrop-blur
                    transition-all duration-300
                    hover:shadow-lg ${link.glow}`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-background ${link.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-medium">{link.label}</span>

                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Thanks for using our TikTok downloader ✨
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
