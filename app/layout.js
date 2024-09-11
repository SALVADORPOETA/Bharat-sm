import { Tiro_Devanagari_Hindi } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// localFont
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const tiroDevanagariHindi = Tiro_Devanagari_Hindi({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-tiro-devanagari-hindi',
})

export const metadata = {
  title: 'Bharat',
  description: 'Web Site about India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiroDevanagariHindi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
