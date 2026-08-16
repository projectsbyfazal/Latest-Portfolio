import { Mail, MapPin, Phone } from 'lucide-react';
import { footer, nav, site, socials } from '../../../config/content';
import Container from '../../ui/Container';
import SocialIcon from '../../ui/SocialIcon';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              {site.name}
              <span className="gradient-text">.</span>
            </span>
            <p className={styles.blurb}>{footer.blurb}</p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3>Navigation</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail size={15} /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  <Phone size={15} /> {site.phone}
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={15} /> {site.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{footer.copyright}</p>
          <p>
            Built with <span className="gradient-text">🤍</span> By Yasir Khan.
          </p>
        </div>
      </Container>
    </footer>
  );
}
