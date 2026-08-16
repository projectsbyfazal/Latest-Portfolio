import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { nav, site } from '../../../config/content';
import { useActiveSection } from '../../../hooks/useActiveSection';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Navbar.module.css';

const sectionIds = nav.map((item) => item.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Container className={styles.inner}>
          <a href="#home" className={styles.logo}>
            {site.name.split(' ')[0]}
            <span className="gradient-text">.</span>
          </a>

          <nav className={styles.links}>
            {nav.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = id === activeId;
              return (
                <a key={item.href} href={item.href} className={styles.link}>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={styles.underline}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <Button href="#contact" className={styles.cta}>
              Hire Me
            </Button>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} activeId={activeId} />}
      </AnimatePresence>
    </>
  );
}
