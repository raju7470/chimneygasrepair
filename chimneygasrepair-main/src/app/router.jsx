import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const WhyUsPage = lazy(() => import('../pages/WhyUsPage'));
const HowItWorksPage = lazy(() => import('../pages/HowItWorksPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function withSuspense(Component) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'services', element: withSuspense(ServicesPage) },
      { path: 'why-us', element: withSuspense(WhyUsPage) },
      { path: 'how-it-works', element: withSuspense(HowItWorksPage) },
      { path: 'faq', element: withSuspense(FaqPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);
