import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "CineInsight",
    template: "%s | CineInsight",
  },
  description: "AI-powered movie sentiment analysis and insights",
  keywords: ["movies", "AI analysis", "sentiment", "film", "reviews", "insights"],
  authors: [{ name: "CineInsight" }],
  creator: "CineInsight",
  publisher: "CineInsight",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cineinsight.vercel.app",
    siteName: "CineInsight",
    title: "CineInsight - AI-Powered Movie Analysis",
    description: "Discover deep insights and sentiment analysis for your favorite movies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CineInsight - Movie Analysis Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CineInsight - AI-Powered Movie Analysis",
    description: "Discover deep insights and sentiment analysis for your favorite movies",
    images: ["/og-image.png"],
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for browsers */}
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Basic meta tags */}
        <meta name="application-name" content="CineInsight" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CineInsight" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {/* Optional: Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-900 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <main id="main-content" className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
