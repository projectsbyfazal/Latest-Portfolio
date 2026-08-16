import { useState } from 'react';
import { Send } from 'lucide-react';
import { contact, site } from '../../../config/content';
import Container from '../../ui/Container';
import RevealOnScroll from '../../ui/RevealOnScroll';
import Button from '../../ui/Button';
import styles from './Contact.module.css';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    window.location.href = `mailto:${site.email}?subject=Project inquiry&body=Hi Yasir, my email is ${email}. `;
  };

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <RevealOnScroll className={styles.card}>
          <div className={styles.blob} aria-hidden="true" />
          <h2 className={styles.title}>
            {contact.heading} <span className="gradient-text">{contact.highlight}</span>
          </h2>
          <p className={styles.body}>{contact.body}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />
            <Button type="submit" icon={<Send size={16} />}>
              Send
            </Button>
          </form>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
