import clsx from 'clsx';
import { useState } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';
import Tag from '../Tags';
import Modal from '../Modal';

const ProjectsList = [
  {
    title: 'OhmyFood',
    square: require('/static/img/Ohmyfood_square.png').default,
    wide: require('/static/img/Ohmyfood_wide.png').default,
    resume: 'Mobile first website for a gourmet application...',
    description: (
      <>
        This mobile first website is showcasing the front end of a gourmet application allowing the users to select a restaurant, take an order online and eat their meal as soon as they step foot into it.
      </>
    ),
    tags: ['HTML', 'SASS', 'Figma', 'Responsive'],
    more: 'A filter system could be a good addition to the project, allowing the users to sort the restaurants by cuisine, price or rating in addition to the location.',
    url: 'https://github.com/Gaelle-Huart/OpenClassrooms_OhmyFood'
  },
  {
    title: 'Sophie Bluel',
    square: require('/static/img/SophieBluel_square.png').default,
    wide: require('/static/img/SophieBluel_wide.png').default,
    resume: 'Portfolio website for an interior designer...',
    description: (
      <>
        A protfolio website for an interior designer meant to be both reactive and intuitive. The project include an administrator interface allowing the designer to modify it with simplicity.
      </>
    ),
    tags: ['SASS', 'JavaScript'],
    more: 'This project could be improved by adding a dark mode toggle that allows the user to switch between light and dark themes.',
    url: 'https://github.com/Gaelle-Huart/OC_Sophie_Bluel'
  },
  {
    title: 'Kasa',
    square: require('/static/img/Kasa_square.png').default,
    wide: require('/static/img/Kasa_wide.png').default,
    resume: 'Rental application with a lot of design elements...',
    description: (
      <>
        Kasa is a rental application showcasing many features. The properties to rent are given a lot of design elements that allow the final user to browse seamlessly and in style.
      </>
    ),
    tags: ['React', 'SASS'],
    more: 'The project could be improved by adding a search bar to allow the users to find the property they are looking for more easily.',
    url: 'https://github.com/Gaelle-Huart/Kasa'
  },
  {
    title: 'Nina Carducci',
    square: require('/static/img/NinaCarducci_square.png').default,
    wide: require('/static/img/NinaCarducci_wide.png').default,
    resume: 'Optimization of a photographer website...',
    description: (
      <>
        A project focusing on optimization. The photographer had a slow and poorly optimized website which was making its loading rather long. Potential visitors would leave without looking. Post optimization, everything is smooth and fast.
      </>
    ),
    tags: ['JavaScript', 'SASS', 'SEO', 'Accessibility'],
    more: 'The project could be improved by adding a dark mode that would not only highlight the content but also enhance the user experience.',
    url: 'https://github.com/Gaelle-Huart/Nina_Carducci'
  },
  {
    title: '724Events',
    square: require('/static/img/724events_square.png').default,
    wide: require('/static/img/724events_wide.png').default,
    resume: 'Debugging and testing of a website...',
    description: (
      <>
        This project involves an event manager website. After installing React Developer Tools, the task was to fix multiple bugs, create and run many tests to make sure everything was working properly and write the associated documentation.
      </>
    ),
    tags: ['JavaScript', 'Debbugging', 'Unit Testing'],
    more: 'The project could be improved by adding a feature allowing the customers to suggest new events.',
    url: 'https://github.com/Gaelle-Huart/724events'
  },
  {
    title: 'ArgentBank',
    square: require('/static/img/ArgentBank_square.png').default,
    wide: require('/static/img/ArgentBank_wide.png').default,
    resume: 'Frontend of an online banking application...',
    description: (
      <>
        In the project, the goal was to implement the frontend of an online banking application with the help of React. Interactivity and reactivity were the main objectives for me, as well as security.
      </>
    ),
    tags: ['React', 'JavaScript', 'SASS', 'Redux'],
    more: 'This app could be improved by adding a feature allowing the customers to set up notifications for their transactions.',
    url: 'https://github.com/Gaelle-Huart/ArgentBank-Frontend'
  },
];

function Project({ square, title, resume, tags, onClick }) {
  return (
    <div className={clsx('col col--4')}>
      <Card className={styles.cardContainer} onClick={onClick} backgroundImg={square} alt={title}>
        <div className={styles.dusk}>
          <div className={styles.content}>
            <Heading as="h3" className={styles.title}>{title}</Heading>
            <p className={styles.summary}>{resume}</p>
            <div className="text--center padding-horiz--lw padding-vertic--lw">
              {tags.map((tag) => (
                <Tag key={tag} tagName={tag} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.projectsContainer)}>
        <Heading id="projects" as="h2" className={styles.title}>Projects</Heading>
        <div className="row">
          {ProjectsList.map((project, idx) => (
            <Project key={idx} {...project} onClick={() => setActiveProject(project)} />
          ))}
        </div>
      </div>
      
      <Modal isOpen={activeProject !== null} onClose={() => setActiveProject(null)}>
        {activeProject && (
          <>
            <Heading as="h3">{activeProject.title}</Heading>
            <img
              src={activeProject.wide}
              className={`${styles.wideImg} shadow--tl text--center`}
              alt={activeProject.title}
            />
            <p className='text--justify'>
              <strong>Description:</strong> {activeProject.description}
            </p>
            <div className="text--center">
              {activeProject.tags.map(tag => (
                <Tag key={tag} tagName={tag} />
              ))}
            </div>
            <p className="text--justify">
              <strong>Improvement:</strong> {activeProject.more}
            </p>
            <a className={styles.seeButton} href={activeProject.url} target="_blank" rel="noopener noreferrer">See</a>
          </>
        )}
      </Modal>
    </section>
  );
}