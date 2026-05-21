import type { ActionLink } from '@/types/site'

export function ActionAnchor({ action, className }: { action: ActionLink; className?: string }) {
  return (
    <a className={className} href={action.href} target={action.targetTop ? '_top' : action.external ? '_blank' : undefined} rel={action.external ? 'noreferrer' : undefined}>
      {action.label}
    </a>
  )
}
