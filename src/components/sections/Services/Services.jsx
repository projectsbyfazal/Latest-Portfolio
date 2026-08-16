import { services } from '../../../config/content';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <SectionHeading eyebrow="What I Do" title="My" highlight="Services" />
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
