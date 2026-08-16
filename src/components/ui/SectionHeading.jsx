import RevealOnScroll from './RevealOnScroll';
import styles from './SectionHeading.module.css';

/**
 * "Eyebrow" + "Title <accent>Highlight</accent>" heading pattern reused by
 * every section, with a consistent scroll-reveal animation.
 */
export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  return (
    <RevealOnScroll className={`${styles.wrap} ${align === 'left' ? styles.left : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </RevealOnScroll>
  );
}
