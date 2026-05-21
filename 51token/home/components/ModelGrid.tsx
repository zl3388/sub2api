import { SectionHeading } from '@/components/SectionHeading'
import type { ModelCard, SectionHeading as SectionHeadingConfig } from '@/types/site'

export function ModelGrid({ heading, models }: { heading: SectionHeadingConfig; models: ModelCard[] }) {
  return <section className="models" id="models"><SectionHeading heading={heading} compact /><div className="model-grid">{models.map((model) => <article className="model-card" key={model.name}><div className="model-icon">{model.icon}</div><div><h3>{model.name}</h3><p>{model.price}</p></div><span>{model.latency}</span></article>)}</div></section>
}
