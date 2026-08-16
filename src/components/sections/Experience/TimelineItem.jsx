import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import styles from './Experience.module.css';

export default function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.item} ${isEven ? styles.itemLeft : styles.itemRight}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.dot} />
      <div className={styles.card}>
        <span className={styles.period}>{item.period}</span>
        <h3>{item.role}</h3>
        <div className={styles.company}>
          <Briefcase size={14} /> {item.company}
          <span className={styles.dividerDot} />
          <MapPin size={14} /> {item.location}
        </div>
        <p>{item.description}</p>
        <div className={styles.stack}>
          {item.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
