'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  /** Disable hover lift animation */
  disableHover?: boolean;
}

export default function Card({
  children,
  className = '',
  disableHover = false,
  ...props
}: CardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-bg-secondary/70 backdrop-blur-xl
        border border-border-glow
        transition-shadow duration-300
        ${className}
      `}
      whileHover={
        disableHover
          ? undefined
          : {
              y: -4,
              boxShadow:
                '0 8px 32px rgba(59,130,246,0.15), 0 0 0 1px rgba(59,130,246,0.3)',
            }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 pb-6 pt-2 ${className}`}>
      {children}
    </div>
  );
}
