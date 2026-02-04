import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const linkSVG = [
  {
    Svg: require('@site/static/img/Github-logo.svg').default,
    alt: 'Github',
  }
]

function Link({ Svg, alt }) {
  return(
    <a target="_blank" aria-label="Profil GitHub" className={styles.githubLink} href='https://github.com/Gaelle-Huart'>
      <Svg className={styles.linkSvg} role="img" alt={alt} />
    </a>
  )
}

export default function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
      </div>
      <div className="container">
        <p className={styles.about}>Hello, I am Gaelle Huart, an Integrator developer passionate about the connection between web design and efficiency.</p>
      </div>
      <div className={styles.heroControls}>
        <button className={styles.heroButton}>1</button>
        <button className={styles.heroButton}>2</button>
        <button className={styles.heroButton}>3</button>
        <button className={styles.heroButton}>4</button>
        {linkSVG.map((props, idx) => (
          <Link key={idx} {...props} />
        ))}
      </div>
    </header>
  );
}