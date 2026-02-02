import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Card from '../Card';


const timelineData = [
  {
    text: 'Studying with OpenClassrooms, in the Web Integrator course.',
    date: '2025-2026',
  },
  {
    text: 'Working as a self employed painter.',
    date: '2020-2025',
  },
  {
    text: 'Making many projects as an Illustrator.',
    date: '2012-2020',
  },
  {
    text: 'Higher art study at ESMI, Bordeaux, sanctionned by a diploma.',
    date: '2008-2012',
  },
  {
    text: 'Contemporary literature studies at Bordeaux III University.',
    date: '2006-2008',
  },
  {
    text: 'Graduated from Max Linder, Libourne.',
    date: '2001-2006',
  }
]

function TimelineItem({ text, date }) {
  return (
    <div className={styles.timelineItem}>
      <Card shadow='md' className={styles.cardContainer}>
        <div className={styles.itemContent}>
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