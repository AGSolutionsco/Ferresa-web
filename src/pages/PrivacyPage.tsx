import { privacyPolicy } from '@/data/legal'
import { pageSeo } from '@/data/seo'
import { LegalPage } from './LegalPage'

export function PrivacyPage() {
  return <LegalPage document={privacyPolicy} seo={pageSeo.privacy} />
}
