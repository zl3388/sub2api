import Link from 'next/link'
import { messages } from '@/i18n/messages'

const localeRedirectScript = `
(() => {
  const stored = localStorage.getItem('locale')
  const browser = navigator.language || ''
  const locale = stored || (browser.toLowerCase().startsWith('zh') ? 'zh' : 'en')
  location.replace('/' + locale + '/' + location.hash)
})()
`

export default function LocaleEntryPage() {
  return (
    <main className="locale-entry">
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      <p>{messages.zh.intro.choosing}</p>
      <p>{messages.zh.intro.fallback}</p>
      <div>
        <Link href="/zh/">简体中文</Link>
        <Link href="/en/">English</Link>
      </div>
    </main>
  )
}
