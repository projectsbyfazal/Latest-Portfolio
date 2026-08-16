import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { site, socials } from '../../../config/content';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SocialIcon from '../../ui/SocialIcon';
import styles from './Hero.module.css';
import yasirPhoto from "../../../assets/images/yasir-fazal.png"

export default function Hero() {
  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.blobs} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.blobOne} />
        <span className={styles.blobTwo} />
      </div>

      <Container className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>
            <Sparkles size={14} /> Available for new projects
          </span>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className="gradient-text">{site.name}</span>
            <br />
            {site.role}
          </h1>

          <p className={styles.tagline}>{site.tagline}</p>

          <div className={styles.actions}>
            <Button href="#contact" icon={<ArrowRight size={17} />}>
              Let&apos;s Talk
            </Button>
            <Button href={site.resumeUrl} variant="secondary">
              Download CV
            </Button>
          </div>

          <div className={styles.meta}>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {Array.from({ length: site.rating }).map((_, index) => (
                  <Star key={index} size={16} fill="var(--accent)" color="var(--accent)" />
                ))}
              </div>
              <span>Highly recommended</span>
            </div>

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
                  <SocialIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.frame}>
            {/* <span className={styles.initials}>
              {initials}
              </span> */}
              <img src={yasirPhoto} />
          </div>

          <motion.div
            className={styles.floatCardTop}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>{site.yearsExperience}+</strong>
            <span>Years Experience</span>
          </motion.div>

          <motion.div
            className={styles.floatCardBottom}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <strong>{site.projectsCompleted}+</strong>
            <span>Projects Done</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
