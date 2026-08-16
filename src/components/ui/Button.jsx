import { motion } from 'framer-motion';
import styles from './Button.module.css';

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * Renders an <a> when `href` is passed, otherwise a <button>.
 */
export default function Button({
  variant = 'primary',
  href,
  icon,
  className = '',
  children,
  ...rest
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  const Component = motion[href ? 'a' : 'button'];

  return (
    <Component
      className={classes}
      href={href}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      <span>{children}</span>
      {icon}
    </Component>
  );
}
