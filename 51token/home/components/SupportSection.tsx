import { ActionAnchor } from '@/components/ActionAnchor'
import { SectionHeading } from '@/components/SectionHeading'
import type { SectionHeading as SectionHeadingConfig, SupportCard } from '@/types/site'

export function SupportSection({ heading, cards }: { heading: SectionHeadingConfig; cards: SupportCard[] }) {
  return <section className="support" id="support"><SectionHeading heading={heading} /><div className="support-grid">{cards.map((card) => <article key={card.title}><h3>{card.title}</h3><p>{card.body}</p><ActionAnchor action={card.action} /></article>)}</div></section>
}
