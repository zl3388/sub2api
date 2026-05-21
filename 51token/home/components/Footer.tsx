import { Brand } from '@/components/Brand'
import type { LegalModal, SiteInfo } from '@/types/site'

export function Footer({ site, legalModals, closeLabel }: { site: SiteInfo; legalModals: LegalModal[]; closeLabel: string }) {
  return (
    <>
      <footer className="footer">
        <div>
          <Brand site={site} />
          <p>{site.description}</p>
        </div>
        <div className="footer-links">
          {legalModals.map((modal) => (
            <button data-modal-open={modal.id} type="button" key={modal.id}>
              {modal.triggerLabel}
            </button>
          ))}
        </div>
      </footer>
      {legalModals.map((modal) => (
        <div className="modal-backdrop" data-modal={modal.id} hidden key={modal.id}>
          <dialog open className="modal">
            <button className="modal-close" data-modal-close type="button" aria-label={closeLabel}>
              ×
            </button>
            <h2>{modal.title}</h2>
            {modal.sections.map((section) => (
              <section key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </dialog>
        </div>
      ))}
    </>
  )
}
