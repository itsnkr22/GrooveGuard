'use client';

import { useEffect, useRef, useCallback } from 'react';

interface NodeGraphProps {
  nodeCount?: number;
  connectionDistance?: number;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

export default function NodeGraph({
  nodeCount = 40,
  connectionDistance = 150,
  className,
}: NodeGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const initNodes = useCallback(
    (w: number, h: number) => {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      return nodes;
    },
    [nodeCount]
  );

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      const parent = svg.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      sizeRef.current = { w: width, h: height };
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.setAttribute('width', String(width));
      svg.setAttribute('height', String(height));

      if (nodesRef.current.length === 0) {
        nodesRef.current = initNodes(width, height);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    if (svg.parentElement) resizeObserver.observe(svg.parentElement);

    const tick = (time: number) => {
      const { w, h } = sizeRef.current;
      const nodes = nodesRef.current;
      if (!w || !h || nodes.length === 0) {
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges with padding
        if (node.x < -10) node.x = w + 10;
        if (node.x > w + 10) node.x = -10;
        if (node.y < -10) node.y = h + 10;
        if (node.y > h + 10) node.y = -10;
      }

      // Build SVG content
      let linesMarkup = '';
      let nodesMarkup = '';

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            linesMarkup += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="url(#line-grad)" stroke-width="0.5" opacity="${opacity.toFixed(3)}"/>`;
          }
        }
      }

      // Draw nodes
      const timeSec = time * 0.001;
      for (const node of nodes) {
        const pulse = Math.sin(timeSec * 1.5 + node.pulsePhase) * 0.5 + 0.5;
        const glowRadius = node.radius + pulse * 2;
        const opacity = 0.3 + pulse * 0.4;

        // Glow
        nodesMarkup += `<circle cx="${node.x}" cy="${node.y}" r="${glowRadius}" fill="url(#node-glow)" opacity="${(opacity * 0.3).toFixed(3)}"/>`;
        // Core
        nodesMarkup += `<circle cx="${node.x}" cy="${node.y}" r="${node.radius}" fill="url(#node-grad)" opacity="${opacity.toFixed(3)}"/>`;
      }

      svg.innerHTML = `
        <defs>
          <radialGradient id="node-glow">
            <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#06B6D4" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="node-grad">
            <stop offset="0%" stop-color="#06B6D4"/>
            <stop offset="100%" stop-color="#3B82F6"/>
          </radialGradient>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#06B6D4"/>
          </linearGradient>
        </defs>
        ${linesMarkup}
        ${nodesMarkup}
      `;

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
    };
  }, [initNodes, connectionDistance]);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}
