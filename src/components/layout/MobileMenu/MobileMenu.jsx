import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { nav, site } from '../../../config/content';
import Button from '../../ui/Button';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ onClose, activeId }) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className={styles.drawer}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <span className={styles.logo}>
            {site.name.split(' ')[0]}
            <span className="gradient-text">.</span>
          </span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className={styles.links}>
          {nav.map((item, index) => {
            const id = item.href.replace('#', '');
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`${styles.link} ${id === activeId ? styles.active : ''}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </nav>

        <Button href="#contact" onClick={onClose} className={styles.cta}>
          Hire Me
        </Button>
      </motion.div>
    </>
  );
}
