import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, Smartphone } from 'lucide-react';
import styles from './Services.module.css';

const ICONS = {
  globe: Globe,
  'layout-dashboard': LayoutDashboard,
  smartphone: Smartphone,
};

export default function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] ?? Globe;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.iconWrap}>
        <Icon size={26} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
}
