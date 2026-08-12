import { lazy, Suspense } from 'react';
import { ScrollTop } from '@/components/common/ScrollTop';
import { SkipLink } from '@/components/common/SkipLink';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { useInitialHashNavigation } from '@/hooks/useInitialHashNavigation';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';
import './styles/classic.css';

const Projects = lazy(() => import('@/components/sections/Projects'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function SectionFallback() {
  return (
    <div className="section-fallback container" role="status">
      <span /> Carregando seção…
    </div>
  );
}

function App() {
  useInitialHashNavigation();

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Skills />
        <Education />
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
