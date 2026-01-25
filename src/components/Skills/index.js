import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';


const SkillList = [
  {
    Svg:require('@site/static/img/HTML5_logo.svg').default
  },
  {
    Svg:require('@site/static/img/CSS3_logo.svg').default
  },
  {
    Svg:require('@site/static/img/JavaScript_logo.svg').default
  },
  {
    Svg:require('@site/static/img/React-icon.svg').default
  },
  {
    Svg:require('@site/static/img/redux-logo.svg').default
  },
  {
    Svg:require('@site/static/img/Git_icon.svg').default
  },
  {
    Svg:require('@site/static/img/github-noir.svg').default
  },
  {
    Svg:require('@site/static/img/Sass_Logo_Color.svg').default
  },
]

function Skill({Svg}) {
  return (
    <div className='skill'>
      <Card shadow='tl' className={styles.skillContainer}>
        <Svg className={styles.skillSvg} role="img" />
      </Card>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading id="projects" as="h2" className={styles.title}>Skills</Heading>
        <div className="inlineSkills">
          {SkillList.map((props, idx) => (
            <Skill key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
