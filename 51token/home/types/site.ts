export type NavItem = { label: string; href: string }
export type ActionLink = { label: string; href: string; external?: boolean; targetTop?: boolean }
export type SiteInfo = { name: string; domainSuffix: string; logoSrc: string; repositoryUrl: string; loginPath: string; description: string }
export type HeroConfig = { eyebrow: string; title: string; highlightedTitle: string; suffixTitle: string; description: string; originProof: string; actions: ActionLink[]; proofs: string[] }
export type CodeSample = { id: string; label: string; language: string; code: string; response: string; latency: string; cost: string }
export type CodeDemoLabels = { demo: string; tabs: string; latency: string; billing: string }
export type HighlightSegment = { text: string; accent?: boolean }
export type SectionHeading = { kicker: string; title: string; segments?: HighlightSegment[]; description?: string }
export type ModelCard = { icon: string; name: string; price: string; latency: string }
export type TrustCard = { title: string; body: string }
export type Metric = { value: string; unit?: string; label: string }
export type SloganConfig = { title: string; titleSegments?: HighlightSegment[]; body: string; metrics: Metric[] }
export type PricingModel = { id: string; label: string; description: string; officialInput: number; officialOutput: number; platformInput: number; platformOutput: number }
export type CalculatorLabels = { chooseModel: string; modelTabs: string; inputTokens: string; outputTokens: string; millionTokens: string; costCompare: string; officialCost: string; platformCost: string; savings: string; savePrefix: string }
export type SupportCard = { title: string; body: string; action: ActionLink }
export type ModalSection = { heading: string; body: string }
export type LegalModal = { id: string; triggerLabel: string; title: string; sections: ModalSection[] }
export type SiteContent = {
  site: SiteInfo
  nav: NavItem[]
  hero: HeroConfig
  codeSamples: CodeSample[]
  modelsHeading: SectionHeading
  models: ModelCard[]
  trustHeading: SectionHeading
  trustCards: TrustCard[]
  slogan: SloganConfig
  calculatorHeading: SectionHeading
  pricingModels: PricingModel[]
  supportHeading: SectionHeading
  supportCards: SupportCard[]
  legalModals: LegalModal[]
}
