import { ActionAnchor } from '@/components/ActionAnchor'
import type { HeroConfig } from '@/types/site'

export function Hero({ hero, children }: { hero: HeroConfig; children: React.ReactNode }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <div className="eyebrow"><i />{hero.eyebrow}</div>
        <h1 className="hero-title">
          {hero.title}<span>{hero.highlightedTitle}</span>{hero.suffixTitle}
        </h1>
        <p className="hero-lead">{hero.description}</p>
        <p className="origin-proof">{hero.originProof}</p>
        <div className="hero-ctas">
          {hero.actions.map((action, index) => (
            <ActionAnchor key={action.label} action={action} className={index === 0 ? 'primary' : 'secondary'} />
          ))}
        </div>
        <div className="proof-strip">{hero.proofs.map((proof) => <span key={proof}>{proof}</span>)}</div>
      </div>
      {children}
    </section>
  )
}
