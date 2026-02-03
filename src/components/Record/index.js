import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Card from '../Card';


const timelineData = [
  {
    title: 'Web Integrator studies',
    text: 'Nine months course, OpenClassrooms',
    date: '2025-2026',
  },
  {
    title: 'Painter',
    text: 'In my own workshop.',
    date: '2020-2025',
  },
  {
    title: 'Illustrator',
    text: 'Making many projects.',
    date: '2012-2020',
  },
  {
    title: 'Higher art studies',
    text: 'ESMI, Bordeaux.',
    date: '2008-2012',
  },
  {
    title: 'Contemporary literature',
    text: 'Bordeaux III University.',
    date: '2006-2008',
  },
  {
    title: 'High school',
    text: 'Max Linder, Libourne.',
    date: '2001-2006',
  }
]

function TimelineItem({ title, text, date }) {
  return (
    <div className={styles.timelineItem}>
      <Card className={styles.cardContainer}>
        <div className={styles.itemContent}>
          <h3 className={styles.recordTitle}>{title}</h3>
          <p className={styles.recordText}>{text}</p>
          <time className={styles.recordTime}>{date}</time>
        </div>
      </Card>
    </div>
  )
}

export default function Record() {
  return (
    <section className={styles.section}>
      <div className={styles.recordContainer}>
        <Heading id="record" as="h2" className={styles.title}>Record</Heading>
        <div className={styles.timelineContainer}>
          {timelineData.map((props, idx) => (
            <TimelineItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}