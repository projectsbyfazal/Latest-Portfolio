import { motion } from 'framer-motion';

const DIRECTIONS = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

/**
 * Thin wrapper around framer-motion's whileInView used across every
 * section for a consistent scroll-reveal animation.
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  once = true,
  ...rest
}) {
  const Component = motion[as] ?? motion.div;
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
