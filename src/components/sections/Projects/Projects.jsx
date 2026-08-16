import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectFilters, projects } from '../../../config/content';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Badge from '../../ui/Badge';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const [filter, setFilter] = useState('Websites');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.tags.includes(filter));
  }, [filter]);

  return (
    <section id="work" className={styles.projects}>
      <Container>
        <SectionHeading eyebrow="Portfolio" title="Some of" highlight="My Work" />

        <div className={styles.filters}>
          {projectFilters.map((label) => (
            <Badge key={label} as="button" active={filter === label} onClick={() => setFilter(label)}>
              {label}
            </Badge>
          ))}
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
