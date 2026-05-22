import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Background } from '@/components/Background'
import { CodeDemo } from '@/components/CodeDemo'
import { CostCalculator } from '@/components/CostCalculator'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ModelGrid } from '@/components/ModelGrid'
import { Slogan } from '@/components/Slogan'
import { SiteInteractions } from '@/components/SiteInteractions'
import { SupportSection } from '@/components/SupportSection'
import { TrustSection } from '@/components/TrustSection'
import { messages } from '@/i18n/messages'
import { isLocale, locales, type Locale } from '@/i18n/locales'
import { siteContent } from '@/data/site'
import type { CalculatorLabels, CodeDemoLabels, ControlLabels } from '@/types/site'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()

  const locale: Locale = rawLocale
  setRequestLocale(locale)
  const content = siteContent[locale]
  const localeMessages = messages[locale]

  return (
    <main className="site-shell">
      <Background />
      <Header labels={localeMessages.controls as ControlLabels} site={content.site} nav={content.nav} locale={locale} />
      <Hero hero={content.hero}>
        <CodeDemo labels={localeMessages.codeDemo as CodeDemoLabels} samples={content.codeSamples} />
      </Hero>
      <ModelGrid heading={content.modelsHeading} models={content.models} />
      <TrustSection heading={content.trustHeading} cards={content.trustCards} />
      <Slogan slogan={content.slogan} />
      <CostCalculator
        heading={content.calculatorHeading}
        labels={localeMessages.calculator as CalculatorLabels}
        models={content.pricingModels}
      />
      <SupportSection heading={content.supportHeading} cards={content.supportCards} />
      <Footer closeLabel={localeMessages.controls.modalClose} site={content.site} legalModals={content.legalModals} />
      <SiteInteractions />
    </main>
  )
}
