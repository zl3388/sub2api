import type { SiteInfo } from '@/types/site'

export function Brand({ site }: { site: SiteInfo }) {
  return (
    <a className="brand" href="#top" aria-label={`${site.name} home`}>
      <img src={site.logoSrc} alt={site.name} />
      <span>{site.name}<span>{site.domainSuffix}</span></span>
    </a>
  )
}
