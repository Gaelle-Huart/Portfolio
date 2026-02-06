import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/Hero';
import Projects from '@site/src/components/Projects';
import Skills from '@site/src/components/Skills';
import Record from '@site/src/components/Record';
import Contact from '@site/src/components/Contact';
import BackToTop from '@site/src/components/BackToTop';

/* Dans la partie Hero, rajouter quatre boutons '+' ronds (fond sombre, signe clair) qui lorsqu'on clique dessus font apparaître un autre morceau de texte en remplacement de celui de base. Un cinquième bouton, ciglé à l'éffigie de Github, est un lien qui renvoie à mon profil sur github... À essayer. */

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div id='top' />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <Record />
        <Contact />
      </main>
      <BackToTop />
    </Layout>
  );
}
