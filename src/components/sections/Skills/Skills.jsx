import { skillTags } from '../../../config/content';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import RevealOnScroll from '../../ui/RevealOnScroll';
import TechMarquee from './TechMarquee';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <Container>
        <SectionHeading eyebrow="What I Know" title="Skills &" highlight="Tools" />

        <RevealOnScroll className={styles.tags}>
          {skillTags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </RevealOnScroll>
      </Container>

      <TechMarquee />
    </section>
  );
}
