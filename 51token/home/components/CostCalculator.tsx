import { SectionHeading } from '@/components/SectionHeading'
import type { CalculatorLabels, PricingModel, SectionHeading as SectionHeadingConfig } from '@/types/site'

export function CostCalculator({
  heading,
  models,
  labels,
}: {
  heading: SectionHeadingConfig
  models: PricingModel[]
  labels: CalculatorLabels
}) {
  const defaultModel = models[0]
  if (!defaultModel) return null

  return (
    <section className="calculator" data-calculator id="calculator">
      <SectionHeading heading={heading} />
      <div className="calc-panel">
        <div className="calc-controls">
          <label>
            {labels.chooseModel}<span data-calc-desc>{defaultModel.description}</span>
          </label>
          <div className="calc-tabs" role="tablist" aria-label={labels.modelTabs}>
            {models.map((model, index) => (
              <button
                aria-selected={index === 0}
                className={index === 0 ? 'active' : ''}
                data-calc-model={model.id}
                data-description={model.description}
                data-official-input={model.officialInput}
                data-official-output={model.officialOutput}
                data-platform-input={model.platformInput}
                data-platform-output={model.platformOutput}
                key={model.id}
                role="tab"
                type="button"
              >
                {model.label}
              </button>
            ))}
          </div>
          <label>
            {labels.inputTokens}<span><output data-input-value>50</output> {labels.millionTokens}</span>
          </label>
          <input data-input-tokens type="range" min="1" max="500" defaultValue="50" />
          <label>
            {labels.outputTokens}<span><output data-output-value>30</output> {labels.millionTokens}</span>
          </label>
          <input data-output-tokens type="range" min="1" max="500" defaultValue="30" />
        </div>
        <div className="calc-result">
          <p>{labels.costCompare}</p>
          <div>
            <span>{labels.officialCost}</span>
            <del data-official-cost>$600.00</del>
          </div>
          <div>
            <span>{labels.platformCost}</span>
            <strong data-platform-cost>$480.00</strong>
          </div>
          <section>
            <span>{labels.savings}</span>
            <b data-saved-cost>$120.00</b>
            <em data-saved-percent data-save-prefix={labels.savePrefix}>{labels.savePrefix}20%</em>
          </section>
        </div>
      </div>
    </section>
  )
}
