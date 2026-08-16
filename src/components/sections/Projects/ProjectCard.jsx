import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={styles.art}
        style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
      >
        {project.image && <img src={project.image} alt={project.title} className={styles.artImage} loading="lazy" />}
        <div
          className={styles.artTint}
          style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
        />
        {/* <span className={styles.artTitle}>{project.title}</span> */}
        <div className={styles.artOverlay}>
          <span className={styles.visit}>
            Visit project <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <h3>{project.title}</h3>
        {/* <p>{project.description}</p> */}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
