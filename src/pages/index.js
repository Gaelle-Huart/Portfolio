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
      description="Site protfolio de Gaelle Huart, développeuse web junior. Découvrez mes projets, compétences et parcours professionnel. Contactez-moi pour collaborer ou en savoir plus sur mon travail.">
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
