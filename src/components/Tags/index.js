import styles from "./styles.module.css";


const tagColor = {
  React: styles.react,
  SASS: styles.sass,
  JavaScript: styles.javascript,
  HTML: styles.html,
  CSS: styles.css,
  Redux: styles.redux,
  Debbugging: styles.debbugging,
  'Unit Testing': styles.unit,
  SEO: styles.seo,
  Accessibility: styles.accessibility,
  'Responsive': styles.responsive,
  Figma: styles.figma,
}

export default function Tag({ tagName }) {
  const colorClass = tagColor[tagName] ?? styles.default ;
  return (
    <span className={`${styles.tag} ${colorClass}`}>
      {tagName}
    </span>
  )
}