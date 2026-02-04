import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '../Card/index';


const SkillList = [
  {
    title: 'HTML 5',
    Svg: require('@site/static/img/HTML5_logo.svg').default,
    alt: 'HTML 5',
  },
  {
    title: 'CSS 3',
    Svg: require('@site/static/img/CSS3_logo.svg').default,
    alt: 'CSS 3',
  },
  {
    title: 'SEO',
    Svg: require('@site/static/img/seo.svg').default,
    alt: 'SEO',
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/JavaScript_logo.svg').default,
    alt: 'JavaScript',
  },
  {
    title: 'React',
    Svg: require('@site/static/img/React-icon.svg').default,
    alt: 'React',
  },
  {
    title: 'Debug',
    Svg: require('@site/static/img/debug.svg').default,
    alt: 'Debug',
  },
  {
    title: 'Redux',
    Svg: require('@site/static/img/redux-logo.svg').default,
    alt: 'Redux',
  },
  {
    title: 'Accessibility',
    Svg: require('@site/static/img/accessibility.svg').default,
    alt: 'Accessibility',
  },
  {
    title: 'Git',
    Svg: require('@site/static/img/Git_icon.svg').default,
    alt: 'Git',
  },
  {
    title: 'Github',
    Svg: require('@site/static/img/Github-logo.svg').default,
    alt: 'Github',
  },
  {
    title: 'Sass',
    Svg: require('@site/static/img/Sass_Logo_Color.svg').default,
    alt: 'Sass',
  },
  {
    title: 'Responsive',
    Svg: require('@site/static/img/responsive.svg').default,
    alt: 'Responsive',
  },
]

function Skill({ title, Svg, alt }) {
  return (
    <div className='skill'>
      <Card className={styles.skillContainer}>
        <Svg className={styles.skillSvg} role="img" title={title} alt={alt} />
      </Card>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.allSkillsContainer}>
        <Heading id='skills' as="h2" className={styles.title}>Skills</Heading>
        <div className={styles.inlineSkills}>
          {SkillList.map((props, idx) => (
            <Skill key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
