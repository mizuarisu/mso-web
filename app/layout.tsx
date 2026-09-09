import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Roboto, Lora, PT_Sans, Geist, Geist_Mono, DM_Sans, JetBrains_Mono, Fira_Sans, Source_Sans_3, Lato, Open_Sans, Inter } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lora = Lora({ subsets: ['latin'] })
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })
const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })
const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marine Special Operations | CUSA',
  description: 'Special Operations for the CUSA Marine Corps.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
