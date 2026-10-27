import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CaseStudies from '@/components/CaseStudies';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Process from '@/components/Process';
import Estimator from '@/components/Estimator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Skills />
        <Experience />
        <Process />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
