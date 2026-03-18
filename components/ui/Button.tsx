'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-8 py-3.5 text-base rounded-xl gap-2.5',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue to-accent-cyan !text-white font-semibold shadow-lg',
  secondary:
    'bg-transparent border border-border text-text-primary hover:border-accent-blue/50',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-accent-blue/5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-body font-medium transition-colors duration-200 cursor-pointer select-none';

  const combined = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Link variant
  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link
          href={href}
          target={target}
          rel={rel}
          className={combined}
          {...rest}
        >
          {variant === 'primary' && <GlowOverlay />}
          {children}
        </Link>
      </motion.div>
    );
  }

  // Button variant
  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combined}
      {...buttonProps}
    >
      {variant === 'primary' && <GlowOverlay />}
      {children}
    </motion.button>
  );
}

function GlowOverlay() {
  return (
    <motion.span
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0"
      style={{
        boxShadow:
          '0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(6,182,212,0.2)',
      }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-hidden
    />
  );
}
