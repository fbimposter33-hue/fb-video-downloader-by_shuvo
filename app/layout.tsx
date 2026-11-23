import type React from "react"
import type { Metadata } from "next"
import { Baloo_Da_2, Hind_Siliguri, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const baloo = Baloo_Da_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-baloo",
})

const hind = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "SHUVO Facebook Downloader - Download FB Videos in High Quality",
  description:
    "Download Facebook videos, reels, and posts in high quality for free. Fast, secure, and easy-to-use Facebook video downloader with no registration required.",
  keywords:
    "facebook video downloader, download facebook videos, fb video downloader, facebook reels downloader, facebook video download, social media downloader",
  authors: [{ name: "Shuvo Ahmed" }],
  creator: "Shuvo Ahmed",
  publisher: "SHUVO Facebook Downloader",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fb-video-downloader-byshuvo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SHUVO Facebook Downloader - Download FB Videos in High Quality",
    description:
      "Download Facebook videos, reels, and posts in high quality for free. Fast, secure, and easy-to-use Facebook video downloader.",
    url: "https://fb-video-downloader-byshuvo.vercel.app",
    siteName: "SHUVO Facebook Downloader",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHUVO Facebook Downloader - Download FB Videos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHUVO Facebook Downloader - Download FB Videos in High Quality",
    description:
      "Download Facebook videos, reels, and posts in high quality for free. Fast, secure, and easy-to-use Facebook video downloader.",
    images: ["/og-image.png"],
    creator: "@shuvon1ss",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${baloo.variable} ${hind.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
