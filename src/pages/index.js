import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import Projects from '@site/src/components/Projects';
import Skills from '@site/src/components/Skills';
import Record from '@site/src/components/Record';
import Contact from '@site/src/components/Contact';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <p className={styles.about}>Hi, I'm Gaelle. Welcome on my portfolio! After completing my web integrator training at OpenClassrooms, I am now able to create effective and engaging web projects. Please, have a look around. And don't hesitate to contact me!</p>
      </div>
    </header>
  );
}

/* Dans la partie Hero, rajouter quatre boutons '+' ronds (fond sombre, signe clair) qui lorsqu'on clique dessus font apparaître un autre morceau de texte en remplacement de celui de base. Un cinquième bouton, ciglé à l'éffigie de Github, est un lien qui renvoie à mon profil sur github... À essayer. */

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <Projects />
        <Skills />
        <Record />
        <Contact />
      </main>
    </Layout>
  );
}
