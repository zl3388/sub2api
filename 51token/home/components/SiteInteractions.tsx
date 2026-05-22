import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const interactionScript = readFileSync(join(process.cwd(), 'public', 'site-interactions.js'), 'utf8')

export function SiteInteractions() {
  return <script dangerouslySetInnerHTML={{ __html: interactionScript }} />
}
