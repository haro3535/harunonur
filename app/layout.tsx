import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harun Onur',
  description: 
      'Welcome to my personal webpage! I\'m a 3rd-year Computer Engineering student passionate about both frontend and backend development. Every day is an opportunity to learn and improve. Join me on this coding journey as I showcase my projects and continuous exploration in the tech world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
