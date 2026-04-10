import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarifi Labs',
  description: 'Clarifi Labs - clarity-driven digital experiences',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
