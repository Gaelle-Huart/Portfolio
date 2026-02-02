import styles from './styles.module.css';
import Heading from '@theme/Heading';


export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.contactContainer}>
        <Heading id='contact' as='h2' className={styles.title}>Contact</Heading>
        <form className={styles.contactForm}>
          <div className={styles.fieldContainer}>
              <label>Full Name</label>
              <input type='text' className={styles.field} placeholder='Enter your name' required></input>
          </div>
          <div className={styles.fieldContainer}>
              <label>Email adress</label>
              <input type='text' className={styles.field} placeholder='Enter your email' required></input>
          </div>
          <div className={styles.fieldContainer}>
              <label>Your message</label>
              <textarea className={`${styles.field} ${styles.message}`} placeholder='Enter your message' required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}