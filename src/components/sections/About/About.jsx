import { CheckCircle2 } from 'lucide-react';
import { about, site } from '../../../config/content';
import Container from '../../ui/Container';
import RevealOnScroll from '../../ui/RevealOnScroll';
import Counter from '../../ui/Counter';
import styles from './About.module.css';
import yasirPhoto from "../../../assets/images/profile-photo.jpg"

const highlights = [
  'Clean, well-structured, reusable code',
  'Pixel-perfect, responsive interfaces',
  'Clear communication & on-time delivery',
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container className={styles.inner}>
        <RevealOnScroll direction="right" className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.avatar}>
              {/* {site.name
                .split(' ')
                .map((p) => p[0])
                .join('')} */}
                <img src={yasirPhoto}/>
            </div>
            <div>
              <strong>{site.name}</strong>
              <span>{site.role}</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="left" className={styles.copy}>
          <span className={styles.eyebrow}>About Me</span>
          <h2 className={styles.title}>
            Why <span className="gradient-text">Hire Me?</span>
          </h2>
          <p className={styles.body}>{about.body}</p>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.stats}>
            {about.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} className={styles.statValue} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
