import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';

const ProjectsList = [
  {
    title: 'OhmyFood',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    tags: (
      <>
        HTML / SASS / Responsive Design / Figma
      </>
    )
  },
  {
    title: 'Sophie Bluel',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Un site portfolio pour une architecte d'intérieur qui se veut réactif et intuitif. Le projet comprend une interface administrateur pour permettre à l'architecte de modifier son portfolio en toute simplicité.
      </>
    ),
    tags: (
      <>
        SASS / JavaScript
      </>
    )
  },
  {
    title: 'Kasa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kasa est une application de location de logements à l'interface claire et au design soigné. 
      </>
    ),
    tags: (
      <>
        React / SASS
      </>
    )
  },
  {
    title: 'Nina Carducci',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Un projet d'optimisation dédié aux sites vitrine. Ici, la photographe Nina Carducci avait un site plutôt lent et mal optimisé qui rendait le chargement des pages très longs. Après optimisation, tout et fluide et surtout rapide.
      </>
    ),
    tags: (
      <>
        JavaScript / SASS / SEO / Accessibility
      </>
    )
  },
  {
    title: '724Events',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    tags: (
      <>
        JavaScript / Debbugging / Unit Testing
      </>
    )
  },
  {
    title: 'ArgentBank',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    tags: (
      <>
        React / SASS / JavaScript / Redux
      </>
    )
  },
];

function Project({Svg, title, description, tags}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3" className='text--center'>{title}</Heading>
        <p className='text--justify'>{description}</p>
      </div>
      <div className="text--center padding-horiz--md">
        {tags}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.title}>Projets</Heading>
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
