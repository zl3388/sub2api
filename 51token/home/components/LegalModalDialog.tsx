import type { LegalModal } from '@/types/site'

export function LegalModalDialog({ modal, onClose }: { modal: LegalModal; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog open className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭弹窗">
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
  )
}
