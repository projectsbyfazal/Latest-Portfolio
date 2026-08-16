import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '../../config/content';
import styles from './LoadingScreen.module.css';

/**
 * Animated intro splash shown for a brief moment on first load, while the
 * randomly-picked accent color (see ThemeContext) is already applied — so
 * the loader itself always matches the site's current color roll.
 */
export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1500;

    const tick = (now) => {
      const elapsed = now - start;
      // ease-out curve so it feels fast at first, settles near 100%
      const linear = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - linear, 3);
      setProgress(Math.round(eased * 100));

      if (linear < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onFinish, 250);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <motion.div
      className={styles.screen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      <span className={styles.blobOne} aria-hidden="true" />
      <span className={styles.blobTwo} aria-hidden="true" />

      <div className={styles.center}>
        <motion.div
          className={styles.ring}
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        >
          <span className={styles.initials}>{initials}</span>
        </motion.div>

        <div className={styles.barTrack}>
          <motion.div
            className={styles.barFill}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: 'linear' }}
          />
        </div>

        <span className={styles.percent}>{progress}%</span>
      </div>
    </motion.div>
  );
}
