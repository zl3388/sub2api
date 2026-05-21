import type { SectionHeading as SectionHeadingConfig } from '@/types/site'

export function SectionHeading({ heading, compact = false }: { heading: SectionHeadingConfig; compact?: boolean }) {
  return (
    <div className={compact ? 'section-heading compact' : 'section-heading'}>
      <p>{heading.kicker}</p>
      <h2>
        {(heading.segments ?? [{ text: heading.title }]).map((segment) => (
          <span className={segment.accent ? 'heading-accent' : undefined} key={segment.text}>
            {segment.text}
          </span>
        ))}
      </h2>
      {heading.description ? <span>{heading.description}</span> : null}
    </div>
  )
}
