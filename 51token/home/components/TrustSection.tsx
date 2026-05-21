import { SectionHeading } from '@/components/SectionHeading'
import type { SectionHeading as SectionHeadingConfig, TrustCard } from '@/types/site'

const iconPaths = [
  'M20 6 9 17l-5-5',
  'M4 19V5m8 14V5m8 14V5M4 12h16',
  'M12 3l7 4v5c0 4.5-2.9 7.4-7 9-4.1-1.6-7-4.5-7-9V7l7-4z',
  'M13 2 4 14h7l-1 8 10-13h-7l0-7z',
]

function TrustIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={iconPaths[index % iconPaths.length]} />
    </svg>
  )
}

export function TrustSection({
  heading,
  cards,
}: {
  heading: SectionHeadingConfig
  cards: TrustCard[]
}) {
  return (
    <section className="trust" id="trust">
      <SectionHeading heading={heading} />
      <div className="trust-grid">
        {cards.map((card, index) => (
          <article className="trust-card" key={card.title}>
            <div className="trust-mark">
              <TrustIcon index={index} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
