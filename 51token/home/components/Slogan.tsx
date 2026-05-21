import type { SloganConfig } from '@/types/site'

export function Slogan({ slogan }: { slogan: SloganConfig }) {
  return (
    <section className="slogan">
      <h2>
        {slogan.titleSegments?.map((segment) => (
          <span className={segment.accent ? 'heading-accent' : undefined} key={segment.text}>
            {segment.text}
          </span>
        )) ?? slogan.title}
      </h2>
      <p>{slogan.body}</p>
      <div className="metric-row">
        {slogan.metrics.map((metric) => (
          <strong key={metric.label}>
            <span className="metric-value">{metric.value}</span>
            {metric.unit ? <span className="metric-unit">{metric.unit}</span> : null}
            <span className="metric-label">{metric.label}</span>
          </strong>
        ))}
      </div>
    </section>
  )
}
