import styles from './Container.module.css';

/**
 * Max-width layout wrapper used by every section for consistent horizontal
 * padding/gutters across breakpoints.
 */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
