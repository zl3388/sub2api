(() => {
  const money = (value) => '$' + value.toFixed(2)
  const storage = {
    get(key) {
      try {
        return window.localStorage?.getItem(key)
      } catch {
        return null
      }
    },
    set(key, value) {
      try {
        window.localStorage?.setItem(key, value)
      } catch {
        // Third-party iframe storage can be blocked by browser tracking prevention.
      }
    },
  }

  function init() {
    if (window.__51tokenInteractionsReady) return
    window.__51tokenInteractionsReady = true

    function updateThemeButton() {
      const button = document.querySelector('[data-theme-toggle]')
      const label = document.querySelector('[data-theme-label]')
      if (!button || !label) return
      const isLight = document.documentElement.dataset.theme === 'light'
      label.textContent = isLight ? button.dataset.themeDark : button.dataset.themeLight
    }

    function applyTheme(theme) {
      document.documentElement.dataset.theme = theme
      storage.set('theme', theme)
      updateThemeButton()
    }

    function rememberLocaleFromPath() {
      const locale = location.pathname.split('/').filter(Boolean).find((part) => part === 'zh' || part === 'en')
      if (locale) {
        storage.set('locale', locale)
        document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
        document.documentElement.dataset.locale = locale
      }
    }

    function buildLocalePath(nextLocale) {
      const parts = location.pathname.split('/').filter(Boolean)
      const localeIndex = parts.findIndex((part) => part === 'zh' || part === 'en')
      if (localeIndex >= 0) {
        parts[localeIndex] = nextLocale
      } else {
        parts.push(nextLocale)
      }
      return '/' + parts.join('/') + '/' + location.hash
    }

    function parentRelativeUrl(href) {
      if (!href || href.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(href)) return href
      let parentOrigin = window.location.origin
      if (window.self !== window.top && document.referrer) {
        try {
          const referrerUrl = new URL(document.referrer)
          if (referrerUrl.protocol.startsWith('http')) parentOrigin = referrerUrl.origin
        } catch {
          parentOrigin = window.location.origin
        }
      }
      try {
        return parentOrigin + (href.startsWith('/') ? href : '/' + href)
      } catch {
        return href
      }
    }

    document.querySelectorAll('a[target="_top"][href^="/"]').forEach((anchor) => {
      const rewrittenHref = parentRelativeUrl(anchor.getAttribute('href'))
      anchor.setAttribute('href', rewrittenHref)
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        window.top.location.href = rewrittenHref
      })
    })

    document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
      const nav = document.querySelector('[data-nav-links]')
      if (!nav) return
      button.addEventListener('click', () => {
        const open = !nav.classList.contains('open')
        nav.classList.toggle('open', open)
        button.setAttribute('aria-expanded', String(open))
      })
      nav.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', () => {
          nav.classList.remove('open')
          button.setAttribute('aria-expanded', 'false')
        })
      })
    })

    document.querySelectorAll('[data-locale-menu]').forEach((menu) => {
      const trigger = menu.querySelector('[data-locale-trigger]')
      const panel = menu.querySelector('[data-locale-panel]')
      if (!trigger || !panel) return

      const close = () => {
        panel.hidden = true
        trigger.setAttribute('aria-expanded', 'false')
      }

      trigger.addEventListener('click', (event) => {
        event.stopPropagation()
        panel.hidden = !panel.hidden
        trigger.setAttribute('aria-expanded', String(!panel.hidden))
      })

      panel.querySelectorAll('[data-locale-option]').forEach((option) => {
        option.addEventListener('click', () => {
          const nextLocale = option.dataset.localeOption
          if (!nextLocale) return
          storage.set('locale', nextLocale)
          close()
          location.assign(buildLocalePath(nextLocale))
        })
      })

      document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) close()
      })
    })

    function playStream(panel) {
      const text = panel.querySelector('[data-stream-output]')
      const holder = panel.querySelector('[data-response]')
      if (!text || !holder) return
      const response = holder.dataset.response || ''
      let index = 0
      text.textContent = ''
      window.clearInterval(panel.__streamTimer)
      panel.__streamTimer = window.setInterval(() => {
        index += 2
        text.textContent = response.slice(0, index)
        if (index >= response.length) window.clearInterval(panel.__streamTimer)
      }, 28)
    }

    document.querySelectorAll('[data-code-demo]').forEach((demo) => {
      const tabs = [...demo.querySelectorAll('[data-code-tab]')]
      const panels = [...demo.querySelectorAll('[data-code-panel]')]
      const activate = (id) => {
        tabs.forEach((tab) => {
          const active = tab.dataset.codeTab === id
          tab.classList.toggle('active', active)
          tab.setAttribute('aria-selected', String(active))
        })
        panels.forEach((panel) => {
          const active = panel.dataset.codePanel === id
          panel.classList.toggle('active', active)
          if (active) playStream(panel)
        })
      }
      tabs.forEach((tab) => tab.addEventListener('click', () => activate(tab.dataset.codeTab)))
      activate(tabs[0]?.dataset.codeTab)
    })

    document.querySelectorAll('[data-calculator]').forEach((calc) => {
      const tabs = [...calc.querySelectorAll('[data-calc-model]')]
      const input = calc.querySelector('[data-input-tokens]')
      const output = calc.querySelector('[data-output-tokens]')
      const inputValue = calc.querySelector('[data-input-value]')
      const outputValue = calc.querySelector('[data-output-value]')
      const desc = calc.querySelector('[data-calc-desc]')
      const officialCost = calc.querySelector('[data-official-cost]')
      const platformCost = calc.querySelector('[data-platform-cost]')
      const savedCost = calc.querySelector('[data-saved-cost]')
      const savedPercent = calc.querySelector('[data-saved-percent]')
      let active = tabs[0]
      const update = () => {
        if (!active || !input || !output) return
        const inputTokens = Number(input.value)
        const outputTokens = Number(output.value)
        const official = inputTokens * Number(active.dataset.officialInput) + outputTokens * Number(active.dataset.officialOutput)
        const platform = inputTokens * Number(active.dataset.platformInput) + outputTokens * Number(active.dataset.platformOutput)
        const saved = official - platform
        const percent = Math.round((saved / official) * 100)
        const savePrefix = savedPercent?.dataset.savePrefix || ''
        if (inputValue) inputValue.textContent = String(inputTokens)
        if (outputValue) outputValue.textContent = String(outputTokens)
        if (desc) desc.textContent = active.dataset.description || ''
        if (officialCost) officialCost.textContent = money(official)
        if (platformCost) platformCost.textContent = money(platform)
        if (savedCost) savedCost.textContent = money(saved)
        if (savedPercent) savedPercent.textContent = savePrefix + percent + '%'
      }
      tabs.forEach((tab) => tab.addEventListener('click', () => {
        active = tab
        tabs.forEach((item) => {
          const selected = item === tab
          item.classList.toggle('active', selected)
          item.setAttribute('aria-selected', String(selected))
        })
        update()
      }))
      input?.addEventListener('input', update)
      output?.addEventListener('input', update)
      update()
    })

    document.querySelectorAll('[data-modal-open]').forEach((button) => {
      button.addEventListener('click', () => {
        const modal = document.querySelector('[data-modal="' + button.dataset.modalOpen + '"]')
        if (modal) modal.hidden = false
        document.body.style.overflow = 'hidden'
      })
    })

    document.querySelectorAll('[data-modal]').forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.closest('[data-modal-close]')) {
          modal.hidden = true
          document.body.style.overflow = ''
        }
      })
    })

    document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
      applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light')
    })

    rememberLocaleFromPath()
    applyTheme(storage.get('theme') || 'dark')
  }

  if (document.readyState === 'complete') {
    window.setTimeout(init, 150)
  } else {
    window.addEventListener('load', () => window.setTimeout(init, 150), { once: true })
  }
})()
