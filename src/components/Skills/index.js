import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';


export default function Skills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading id="projects" as="h2" className={styles.title}>Skills</Heading>
        <div className="inline">
          <Card shadow='tl' className={styles.cardContainer}>
            <img
              src={require('@site/static/img/HTML5.png').default}
              alt="HTML5"
            />
          </Card>
          <Card shadow='tl' className={styles.cardContainer}>
              <img
                src={require('@site/static/img/CSS3.png').default}
                alt="CSS3"
              />
          </Card>
          <Card shadow='tl' className={styles.cardContainer}>
            <img
              src={require('@site/static/img/JavaScript-logo.png').default}
              alt="JavaScript"
            />
          </Card>
          <Card shadow='tl' className={styles.cardContainer}>
            <img
              src={require('@site/static/img/React-icon.svg').default}
              alt="React"
            />
          </Card>
          <Card shadow='tl' className={styles.cardContainer}>
            <img
              src={require('@site/static/img/redux-logo.png').default}
              alt="Redux"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
