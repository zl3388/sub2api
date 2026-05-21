import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, isLocale } from '@/i18n/locales'
import { messages } from '@/i18n/messages'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = isLocale(requested) ? requested : defaultLocale

  return {
    locale,
    messages: messages[locale],
  }
})
