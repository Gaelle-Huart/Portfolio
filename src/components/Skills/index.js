const SkillsList = [
  {
    title: 'HTML5',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  },
]

function Skill({Svg, title, description, tags}) {
  return (
    <div className={clsx('col col--4')}>
      <Card shadow='tl' className={styles.cardContainer}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="padding-horiz--md">
          <Heading as="h3" className='text--center'>{title}</Heading>
          <p className='text--justify'>{description}</p>
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

export default function Skills() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading id="projects" as="h2" className={styles.title}>Projects</Heading>
        <div className="row">
          {SkillsList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
