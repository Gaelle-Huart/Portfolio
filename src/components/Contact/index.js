import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Info from '../Info';


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "988dabbb-3e86-4e36-84d6-d6f888ec4791");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      {Info('sent')}
    };
  }  

  return (
    <section className={styles.section}>
      <div className={styles.contactContainer}>
        <Heading id='contact' as='h2' className={styles.title}>Contact</Heading>
        <form onSubmit={onSubmit} className={styles.contactForm}>
          <div className={styles.fieldContainer}>
              <label htmlFor='name'>Full Name</label>
              <input id='name' type='text' className={styles.field} placeholder='Enter your name' name='name' required></input>
          </div>
          <div className={styles.fieldContainer}>
              <label htmlFor='email'>Email adress</label>
              <input id='email' type='text' className={styles.field} placeholder='Enter your email' name='email' required></input>
          </div>
          <div className={styles.fieldContainer}>
              <label htmlFor='message'>Your message</label>
              <textarea id='message' className={`${styles.field} ${styles.message}`} placeholder='Enter your message' name='message' required></textarea>
          </div>
          <button type='submit' onClick={Info}>Send Message</button>
          <div className={styles.info} role='status'>
            <span id='sent' className={styles.success}>Message sent successfully!</span>
            <span id='cant' className={styles.error}>Fields can't be empty!</span>
          </div>
        </form>
      </div>
    </section>
  )
}