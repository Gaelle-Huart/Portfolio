import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';
import Tag from '../Tags';


const tags = ["React", "SASS", "JavaScript", "HTML", "CSS", "Redux", "Debbugging", "Unit Testing", "SEO", "Accessibility", "Responsive Design", "Figma"];

const ProjectsList = [
  {
    title: 'OhmyFood',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This mobile first website is showcasing the front end of a gourmet application allowing the users to select a restaurant, take an order online and eat their meal as soon as they step foot into it.
      </>
    ),
    tags: [3, 1, 10, 11]
  },
  {
    title: 'Sophie Bluel',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A protfolio website for an interior designer meant to be both reactive and intuitive. The project include an administrator interface allowing the designer to modify it with simplicity.
      </>
    ),
    tags: [1, 2]
  },
  {
    title: 'Kasa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kasa is a rental application showcasing many features. The properties to rent are given a lot of design elements that allow the final user to browse efficiently.
      </>
    ),
    tags: [0, 1]
  },
  {
    title: 'Nina Carducci',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A project focusing on optimization. The photographer had a slow and poorly optimized website which was making its loading rather long. Post optimization, everything is smooth and fast.
      </>
    ),
    tags: [2, 3, 8, 9]
  },
  {
    title: '724Events',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        After installing React Developer Tools, the task was to fix multiple bugs, create and run many tests to make sure everything was working properly and write the associated documentation.
      </>
    ),
    tags: [2, 6, 7],
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
    tags: [0, 1, 2, 5]
  },
];

function Project({Svg, title, description, tags}) {
  return (
    <div className={clsx('col col--4')}>
      <Card shadow='tl' className={styles.cardContainer}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="padding-horiz--md">
          <Heading as="h3" className='text--center'>{title}</Heading>
          <p className='text--justify summary'>{description}</p>
        </div>
        <div className="text--center padding-horiz--md padding-vertic--md">
          <Tag>
            {tags}
          </Tag>
        </div>
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading id="projects" as="h2" className={styles.title}>Projects</Heading>
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
