import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <motion.button
      type="button"
      className={styles.toggle}
      onClick={toggleMode}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ y: -14, opacity: 0, rotate: -60 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 60 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={styles.icon}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
