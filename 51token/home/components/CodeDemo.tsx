import type { CodeDemoLabels, CodeSample } from '@/types/site'

export function CodeDemo({ samples, labels }: { samples: CodeSample[]; labels: CodeDemoLabels }) {
  if (samples.length === 0) return null

  return (
    <div className="ide-card reveal delay-1" data-code-demo aria-label={labels.demo}>
      <div className="ide-titlebar">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="tabs" role="tablist" aria-label={labels.tabs}>
          {samples.map((sample, index) => (
            <button
              aria-selected={index === 0}
              className={index === 0 ? 'active' : ''}
              data-code-tab={sample.id}
              key={sample.id}
              role="tab"
              type="button"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>
      {samples.map((sample, index) => (
        <section className={index === 0 ? 'code-panel active' : 'code-panel'} data-code-panel={sample.id} key={sample.id}>
          <pre className="code-block"><code>{sample.code}</code></pre>
          <div className="stream-box">
            <div className="stream-label">STREAMING RESPONSE</div>
            <p
              aria-live="polite"
              className="stream-text"
              data-latency={sample.latency}
              data-response={sample.response}
            >
              <span data-stream-output />
              <span className="cursor" />
            </p>
            <div className="perf-row">
              <span>{labels.latency} {sample.latency}</span>
              <span>{labels.billing} {sample.cost}</span>
              <strong>200 OK</strong>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
