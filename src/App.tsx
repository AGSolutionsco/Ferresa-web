import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PrivacyPage,
  ProjectDetailPage,
  ProjectsPage,
  ServicesPage,
  TermsPage,
} from '@/pages'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="privacidad" element={<PrivacyPage />} />
          <Route path="terminos" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
