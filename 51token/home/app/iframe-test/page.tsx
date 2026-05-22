export default function IframeTestPage() {
  return (
    <main className="iframe-test-shell">
      <section className="iframe-test-panel">
        <p className="iframe-test-kicker">IFRAME INTEGRATION TEST</p>
        <h1>51Token embedded page test</h1>
        <p>
          This route embeds the static landing page in an iframe so local dev can reproduce the same behavior as the
          deployed parent page. Use the controls inside the iframe, not this parent panel.
        </p>
        <div className="iframe-test-grid">
          <article>
            <strong>1</strong>
            <span>Theme toggle should switch dark/light inside the iframe.</span>
          </article>
          <article>
            <strong>2</strong>
            <span>Language menu should open and switch between /zh/ and /en/ inside the iframe.</span>
          </article>
          <article>
            <strong>3</strong>
            <span>Terms / Privacy / SLA buttons should open modal dialogs inside the iframe.</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Any /login CTA should navigate the top window, using this parent page origin.</span>
          </article>
        </div>
      </section>

      <section className="iframe-stage">
        <div className="iframe-device-bar">
          <span>Parent route: /iframe-test/</span>
          <span>Iframe src: /zh/</span>
        </div>
        <iframe
          title="51Token embedded landing page"
          src="/zh/"
          className="iframe-preview"
          allow="clipboard-write"
        />
      </section>
    </main>
  )
}
