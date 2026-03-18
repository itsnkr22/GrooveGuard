'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface WorkflowNode {
  id: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
}

interface WorkflowDiagramProps {
  nodes: WorkflowNode[];
  className?: string;
}

const nodeColors = (index: number, total: number) => {
  if (index === 0) {
    return {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/40',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
      dotColor: '#3B82F6',
    };
  }
  if (index === total - 1) {
    return {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
      dotColor: '#10B981',
    };
  }
  // Alternate between purple and cyan for middle nodes
  if (index % 2 === 1) {
    return {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/40',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
      dotColor: '#A855F7',
    };
  }
  return {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/40',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
    dotColor: '#06B6D4',
  };
};

function ConnectorLine({
  from,
  to,
  index,
  vertical,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  index: number;
  vertical: boolean;
}) {
  const pathD = vertical
    ? `M ${from.x} ${from.y} C ${from.x} ${from.y + 30}, ${to.x} ${to.y - 30}, ${to.x} ${to.y}`
    : `M ${from.x} ${from.y} C ${from.x + 40} ${from.y}, ${to.x - 40} ${to.y}, ${to.x} ${to.y}`;

  return (
    <g>
      <path
        d={pathD}
        fill="none"
        stroke="url(#connector-gradient)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="20"
          to="0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      {/* Animated particle dot */}
      <circle r="2.5" fill="#06B6D4" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}>
          <mpath href={`#connector-path-${index}`} />
        </animateMotion>
      </circle>
      <path id={`connector-path-${index}`} d={pathD} fill="none" />
    </g>
  );
}

function Tooltip({ text, visible }: { text: string; visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 4,
        scale: visible ? 1 : 0.95,
      }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-bg-secondary/95 px-3 py-2 text-xs text-text-secondary shadow-xl backdrop-blur-sm"
    >
      {text}
      <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-bg-secondary/95" />
    </motion.div>
  );
}

export default function WorkflowDiagram({
  nodes,
  className,
}: WorkflowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px 0px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isVertical, setIsVertical] = useState(false);
  const [nodePositions, setNodePositions] = useState<
    { x: number; y: number }[]
  >([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updatePositions = useCallback(() => {
    const container = containerRef.current;
    if (!container || nodeRefs.current.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const positions: { x: number; y: number }[] = [];

    for (const el of nodeRefs.current) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      positions.push({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    }

    setNodePositions(positions);
  }, []);

  useEffect(() => {
    const checkVertical = () => {
      setIsVertical(window.innerWidth < 768);
    };
    checkVertical();
    window.addEventListener('resize', checkVertical);
    return () => window.removeEventListener('resize', checkVertical);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    // Wait for entrance animations to settle before measuring
    const timer = setTimeout(updatePositions, 800);
    window.addEventListener('resize', updatePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePositions);
    };
  }, [isInView, updatePositions, isVertical]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className ?? ''}`}
    >
      {/* SVG Connectors */}
      {nodePositions.length > 1 && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="connector-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          {nodePositions.slice(0, -1).map((pos, i) => {
            const next = nodePositions[i + 1];
            if (!next) return null;

            const from = isVertical
              ? { x: pos.x, y: pos.y + 32 }
              : { x: pos.x + 80, y: pos.y };
            const to = isVertical
              ? { x: next.x, y: next.y - 32 }
              : { x: next.x - 80, y: next.y };

            return (
              <ConnectorLine
                key={i}
                from={from}
                to={to}
                index={i}
                vertical={isVertical}
              />
            );
          })}
        </svg>
      )}

      {/* Nodes */}
      <div
        className={`flex items-center gap-8 md:gap-12 ${
          isVertical
            ? 'flex-col'
            : 'flex-row justify-center'
        }`}
      >
        {nodes.map((node, index) => {
          const colors = nodeColors(index, nodes.length);
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              ref={(el) => {
                nodeRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative flex min-w-[140px] cursor-default flex-col items-center rounded-xl border px-5 py-4 shadow-lg transition-shadow duration-300 ${colors.bg} ${colors.border} ${
                hoveredId === node.id ? `shadow-xl ${colors.glow}` : ''
              }`}
              style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)' }}
            >
              {node.description && (
                <Tooltip
                  text={node.description}
                  visible={hoveredId === node.id}
                />
              )}

              {Icon && (
                <div className={`mb-2 ${colors.text}`}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              )}

              <span className={`text-sm font-medium ${colors.text}`}>
                {node.label}
              </span>

              {/* Step indicator dot */}
              <div
                className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: colors.dotColor }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
