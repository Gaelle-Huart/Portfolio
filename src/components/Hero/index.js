import clsx from 'clsx';
import {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


/* simplifier la liste */
const aboutLines = [
  { 
    id: "firstLine", 
    text: "Hello, I am Gaelle Huart, an Integrator developer passionate about the connection between web design and efficiency. ►" 
  },
  { 
    id: "secondLine", 
    text: "Formerly a painter/illustrator, I discovered web development through an OpenClassrooms course, where I realized that my artistic eye and technical logic are a powerful duo. ►" 
  },
  { 
    id: "thirdLine", 
    text: "I am proficient in React, JavaScript and Sass, with particular expertise in design and interactivity, developed from the very beginning of my learning curve. ►" 
  },
  { 
    id: "fourthLine", 
    text: "My approach combines Agile methodology and great attention to detail, because I believe that elegant code and perfect UX should walk hand in hand. ►" 
  },
  { 
    id: "fifthLine", 
    text: "My goal is to specialize in Python and contribute to the architecture of scalable solutions while developing my own projects." 
  }
];

const linkSVG = [
  {
    Svg: require('@site/static/img/Github-logo.svg').default,
    alt: 'Github Profile',
  }
]

function Link({ Svg, alt }) {
  return(
    <a target="_blank" aria-label="GitHub Profile - new window" title={alt} className={styles.githubLink} href='https://github.com/Gaelle-Huart'>
      <Svg className={styles.linkSvg} role="img" alt={alt} />
      <span className="sr-only">Link to GitHub Profile</span>
    </a>
  )
}

export default function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const defaultLine = "firstLine";
  const [activeLine, setActiveLine] = useState(defaultLine);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
      </div>
      <div className="container" aria-live="polite">
        {aboutLines.map(line => (
          <p
            key={line.id}
            className={clsx(styles.about, activeLine === line.id && styles.isActive)}
          >
            {line.text}
          </p>
        ))}
      </div>

      <div className={styles.heroControls}>
        {["firstLine","secondLine","thirdLine","fourthLine","fifthLine"].map((id, i) => (
          <button
            key={id}
            className={clsx(
              styles.heroButton,
              activeLine === id && styles.active
            )}
            onClick={() => setActiveLine(id)}
          >
            {i + 1}
          </button>
        ))}
        {linkSVG.map((props, idx) => (
          <Link key={idx} {...props} />
        ))}
      </div>
    </header>
  );
}