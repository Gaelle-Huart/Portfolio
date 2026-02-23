import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/Hero';
import Projects from '@site/src/components/Projects';
import Skills from '@site/src/components/Skills';
import Record from '@site/src/components/Record';
import Contact from '@site/src/components/Contact';
import BackToTop from '@site/src/components/BackToTop';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Gaelle Huart's portfolio website, web dev junior. Discover my projects, skills and professional record. Contact me to collaborate or learn more about my work.">
      <main>
        <Hero id='top' />
        <Projects />
        <Skills />
        <Record />
        <Contact />
      </main>
      <BackToTop />
    </Layout>
  );
}
