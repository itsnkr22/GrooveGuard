'use client';

import { useEffect, useRef } from 'react';
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from 'framer-motion';

interface CountUpMetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function CountUpMetric({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
  decimals = 0,
  className,
}: CountUpMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    });

    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [rounded, prefix, suffix]);

  return (
    <div ref={ref} className={className}>
      <motion.span
        ref={displayRef}
        className="block text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {prefix}0{suffix}
      </motion.span>

      {label && (
        <motion.span
          className="mt-2 block text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
