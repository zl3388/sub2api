import { Brand } from '@/components/Brand'
import type { Locale } from '@/i18n/locales'
import type { ControlLabels, NavItem, SiteInfo } from '@/types/site'

export function Header({
  site,
  nav,
  locale,
  labels,
}: {
  site: SiteInfo
  nav: NavItem[]
  locale: Locale
  labels: ControlLabels
}) {
  return (
    <header className="topbar">
      <Brand site={site} />
      <nav className="nav-links" data-nav-links aria-label={labels.primaryNav}>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="toolbar" aria-label={labels.preferences}>
        <button
          className="theme-switch"
          data-theme-dark={labels.dark}
          data-theme-light={labels.light}
          data-theme-toggle
          type="button"
          aria-label={labels.theme}
        >
          <svg viewBox="0 0 48 24" aria-hidden="true" focusable="false">
            <rect width="48" height="24" rx="12" />
            <circle cx="12" cy="12" r="7" />
            <path d="M35 6.5a5.5 5.5 0 1 0 5.5 5.5 7 7 0 0 1-5.5-5.5z" />
          </svg>
          <span data-theme-label>{labels.dark}</span>
        </button>
        <div className="locale-menu" data-locale-menu>
          <button
            className="locale-trigger"
            data-locale-trigger
            type="button"
            aria-expanded="false"
            aria-haspopup="menu"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 5h10M9 3v2m1.5 0c-.8 3-2.8 5.6-6.5 7.8M6.5 8.2c1.3 2.1 3 3.6 5.3 4.7M14 21l4.3-10h.9L23 21m-7.4-3.2h5.6" />
            </svg>
            <span data-locale-current>{locale === 'zh' ? '简体中文' : 'English'}</span>
            <i />
          </button>
          <div className="locale-panel" data-locale-panel role="menu" hidden>
            <button className={locale === 'zh' ? 'active' : ''} data-locale-option="zh" type="button" role="menuitem">
              <strong>简</strong>
              <span>简体中文</span>
            </button>
            <button className={locale === 'en' ? 'active' : ''} data-locale-option="en" type="button" role="menuitem">
              <strong>En</strong>
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
      <div className="nav-actions">
        <a href={site.loginPath} target="_top">{labels.login}</a>
        <a className="nav-cta" href={site.loginPath} target="_top">{labels.cta}</a>
      </div>
      <button
        className="menu-button"
        data-menu-toggle
        type="button"
        aria-expanded="false"
        aria-label={labels.menu}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
