import styles from './Badge.module.css';

export default function Badge({ children, active = false, as: Tag = 'span', className = '', ...rest }) {
  return (
    <Tag className={`${styles.badge} ${active ? styles.active : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
