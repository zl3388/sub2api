import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '51Token Developer Center | AI Gateway',
  description: 'A highly available AI API gateway with transparent billing, resilient failover, and mainstream model access.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
