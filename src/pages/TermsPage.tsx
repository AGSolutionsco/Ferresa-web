import { termsOfUse } from '@/data/legal'
import { pageSeo } from '@/data/seo'
import { LegalPage } from './LegalPage'

export function TermsPage() {
  return <LegalPage document={termsOfUse} seo={pageSeo.terms} />
}
