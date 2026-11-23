"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SideMenu } from "@/components/side-menu"
import { ProfileModal } from "@/components/profile-modal"
import { LoadingBar } from "@/components/loading-bar"
import { UrlInput } from "@/components/url-input"
import { VideoPreview } from "@/components/video-preview"
import { DownloadLoading } from "@/components/download-loading"
import { Notification, type NotificationType } from "@/components/notification"
import { HelpPage } from "@/components/pages/help-page"
import { AboutPage } from "@/components/pages/about-page"
import { ContactPage } from "@/components/pages/contact-page"
import { PrivacyPolicyPage } from "@/components/pages/privacy-policy-page"
import { TermsPage } from "@/components/pages/terms-page"
import { DisclaimerPage } from "@/components/pages/disclaimer-page"
import { DownloadsPage } from "@/components/pages/downloads-page"
import { Download, ArrowUp, Zap, Shield, Link2, MousePointerClick, BadgeCheck, Sparkles } from "lucide-react"
import { MarqueeBand, MoreDownloaders, DeveloperSection } from "@/components/more-downloaders"
import { Button } from "@/components/ui/button"
import { downloadFacebookVideo, type FacebookVideoData, type FacebookMedia } from "@/lib/facebook-api"
import { isValidFacebookUrl } from "@/lib/utils"

interface NotificationState {
  isVisible: boolean
  type: NotificationType
  title: string
  message: string
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Download system state
  const [url, setUrl] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)
  const [videoData, setVideoData] = useState<FacebookVideoData | null>(null)
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    type: "success",
    title: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showNotification = (type: NotificationType, title: string, message: string) => {
    setNotification({
      isVisible: true,
      type,
      title,
      message,
    })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }))
  }

  const handleNavigation = (page: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 800)
  }

  const handleDownloadRequest = async () => {
    if (!url.trim()) {
      showNotification("warning", "URL Required", "Please enter a Facebook video URL")
      return
    }

    if (!isValidFacebookUrl(url)) {
      showNotification("error", "Invalid URL", "Please enter a valid Facebook video URL")
      return
    }

    setIsDownloading(true)
    setVideoData(null)

    try {
      const data = await downloadFacebookVideo(url)
      setVideoData(data)
      showNotification("success", "Video Found!", "Your Facebook video is ready for download")
    } catch (error) {
      console.error("Download error:", error)
      showNotification(
        "error",
        "Download Failed",
        error instanceof Error ? error.message : "Failed to fetch Facebook video. Please try again.",
      )
    } finally {
      setIsDownloading(false)
    }
  }

  const handleMediaDownload = async (media: FacebookMedia) => {
    try {
      // Create filename with quality indicator
      const filename = `facebook-video-${media.quality.toLowerCase()}.${media.extension}`

      // Use our proxy route to download the video
      const proxyUrl = `/api/proxy-download?url=${encodeURIComponent(media.url)}&filename=${encodeURIComponent(filename)}`

      // Create download link using our proxy
      const link = document.createElement("a")
      link.href = proxyUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      showNotification("success", "Download Started", `Your ${media.extension.toUpperCase()} file download has started`)
    } catch (error) {
      console.error("Download error:", error)
      showNotification("error", "Download Failed", "Failed to start download. Please try again.")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "help":
        return <HelpPage onBack={() => handleNavigation("home")} />
      case "about":
        return <AboutPage onBack={() => handleNavigation("home")} />
      case "contact":
        return <ContactPage onBack={() => handleNavigation("home")} />
      case "privacy":
        return <PrivacyPolicyPage onBack={() => handleNavigation("home")} />
      case "terms":
        return <TermsPage onBack={() => handleNavigation("home")} />
      case "disclaimer":
        return <DisclaimerPage onBack={() => handleNavigation("home")} />
      case "downloads":
        return <DownloadsPage />
      default:
        return (
          <>
            <MarqueeBand />

            <main className="container mx-auto px-4 md:px-6 py-8">
              <div className="text-center space-y-8">
                <div className="space-y-5 pt-4 md:pt-8">
                  <span className="chip-sticker -rotate-1 bg-white text-foreground animate-fade-in-up">
                    <Sparkles className="w-4 h-4 text-[#FF2E7E]" /> Free Facebook &amp; Reels Downloader
                  </span>
                  <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.04] text-foreground text-balance animate-fade-in-up">
                    Download Facebook <span className="text-gradient-pink">Videos</span> in HD
                  </h1>
                  <p
                    className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Paste any Facebook video or reel link and save it in high quality — fast, free, and no login needed.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2.5 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <span className="chip-sticker bg-[#FFE3EF]">HD Quality</span>
                    <span className="chip-sticker rotate-1 bg-[#FFEFC7]">100% Free</span>
                    <span className="chip-sticker -rotate-1 bg-[#D9F8E6]">No Login</span>
                    <span className="chip-sticker rotate-1 bg-[#2E1B33] text-white">Reels + Videos</span>
                  </div>
                </div>

                <div
                  className="max-w-3xl mx-auto rounded-[28px] border-2 border-[#F3E7D3] bg-white p-6 md:p-9 shadow-hard-lg shadow-pink-glow animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="space-y-6">
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-card-foreground">Paste Facebook URL Below</h2>

                    <div className="space-y-4">
                      <UrlInput
                        value={url}
                        onChange={setUrl}
                        onSubmit={handleDownloadRequest}
                        isLoading={isDownloading}
                      />

                      <Button
                        onClick={handleDownloadRequest}
                        disabled={!url.trim() || !isValidFacebookUrl(url) || isDownloading}
                        className="w-full h-14 md:h-16 rounded-2xl border-2 border-[#2E1B33] bg-[#FF2E7E] text-base md:text-lg font-display font-extrabold text-white shadow-hard flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-hard-lg disabled:opacity-60"
                        size="lg"
                      >
                        {isDownloading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            Download Video
                          </>
                        )}
                      </Button>
                    </div>

                    {isDownloading && <DownloadLoading />}

                    {videoData && !isDownloading && (
                      <VideoPreview videoData={videoData} onDownload={handleMediaDownload} isDownloading={false} />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
                  {[
                    {
                      icon: Download,
                      title: "High Quality",
                      desc: "Download Facebook videos in original quality with multiple format options",
                    },
                    {
                      icon: Zap,
                      title: "Fast & Reliable",
                      desc: "Quick processing with Facebook API for maximum uptime",
                    },
                    {
                      icon: Shield,
                      title: "Safe & Secure",
                      desc: "No registration required. Your privacy is our priority",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border-2 border-[#F3E7D3] bg-white p-6 text-center space-y-3 shadow-hard-sm transition-all hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-hard animate-fade-in-up"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-14 h-14 rounded-2xl border-2 border-[#2E1B33] bg-[#FF2E7E] shadow-hard-sm mx-auto flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm text-pretty">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <section className="mx-auto mt-20 max-w-5xl">
                <div className="space-y-3 text-center">
                  <span className="chip-sticker rotate-1 bg-[#FFB020] text-[#2E1B33]">How It Works</span>
                  <h2 className="font-display text-3xl font-extrabold text-foreground md:text-5xl">Download in <span className="text-gradient-pink">3 Easy Steps</span></h2>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    { icon: Link2, step: "Step 1", title: "Copy the Link", desc: "Open Facebook, tap Share on any video or reel and copy its link." },
                    { icon: MousePointerClick, step: "Step 2", title: "Paste & Download", desc: "Paste the link in the box above and press the big Download button." },
                    { icon: BadgeCheck, step: "Step 3", title: "Pick Your Quality", desc: "Choose HD or SD quality and the file saves straight to your device." },
                  ].map((s, i) => (
                    <div key={i} className="relative rounded-[28px] border-2 border-[#F3E7D3] bg-white p-6 pt-8 text-center shadow-hard-sm transition-all hover:-translate-y-1.5 hover:shadow-hard">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 rounded-full border-2 border-[#2E1B33] bg-[#FF2E7E] px-3 py-0.5 text-xs font-bold whitespace-nowrap text-white shadow-hard-sm">{s.step}</span>
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2E1B33] bg-[#FFB020] shadow-hard-sm"><s.icon className="h-7 w-7 text-[#2E1B33]" /></div>
                      <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mx-auto mt-16 max-w-5xl">
                <div className="grid grid-cols-2 gap-4 rounded-[28px] border-2 border-[#2E1B33] bg-[#2E1B33] px-6 py-8 shadow-hard-pink md:grid-cols-4">
                  {[
                    { value: "HD", label: "Max Quality" },
                    { value: "100%", label: "Free Forever" },
                    { value: "0", label: "Login Needed" },
                    { value: "24/7", label: "Always Online" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-extrabold text-[#FFB020] md:text-4xl">{stat.value}</div>
                      <div className="mt-1 font-body text-xs font-bold tracking-[0.14em] text-white/70 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <MoreDownloaders />
            <DeveloperSection />

            <Footer onNavigate={handleNavigation} />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <LoadingBar isLoading={isLoading} />

      <Header
        onMenuClick={() => setIsMenuOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
        onNavigate={handleNavigation}
      />

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={handleNavigation} />

      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      <Notification
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      {renderCurrentPage()}

      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full border-2 border-[#2E1B33] bg-[#FFB020] hover:bg-[#FF2E7E] hover:text-white text-[#2E1B33] shadow-hard z-30 transition-all duration-300 animate-bounce-in"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
