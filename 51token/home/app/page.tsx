import { messages } from '@/i18n/messages'

const localeRedirectScript = `
(() => {
  let stored = null
  try {
    stored = window.localStorage?.getItem('locale')
  } catch {}
  const browser = navigator.language || ''
  const locale = stored || (browser.toLowerCase().startsWith('zh') ? 'zh' : 'en')
  location.replace(locale + '/' + location.hash)
})()
`

export default function LocaleEntryPage() {
  return (
    <main className="locale-entry">
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      <p>{messages.zh.intro.choosing}</p>
      <p>{messages.zh.intro.fallback}</p>
      <div>
        <a href="zh/">简体中文</a>
        <a href="en/">English</a>
      </div>
    </main>
  )
}
