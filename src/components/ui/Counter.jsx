import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Animates from 0 up to `value` once it scrolls into view.
 * Supports decimals (e.g. 3.3) via `decimals`.
 */
export default function Counter({ value, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
