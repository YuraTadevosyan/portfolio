import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"
import { Navbar, Hero, Footer } from '@/components'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: "Yura's app",
  description: "Yura Tadevosyan's Portfolio app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={`${poppins.className} relative z-0 bg-primary`}
        suppressHydrationWarning={true}
      >
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
