import { experience } from '../../../config/content';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import TimelineItem from './TimelineItem';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.blobOne} />
        <span className={styles.blobTwo} />
        <span className={styles.blobThree} />
        <span className={styles.orbit} />
      </div>

      <Container className={styles.inner}>
        <SectionHeading eyebrow="Career Path" title="Work" highlight="Experience" />

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />
          {experience.map((item, index) => (
            <TimelineItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
