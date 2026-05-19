import type { CSSProperties } from 'react'

type CountUpProps = {
  value: string
  className?: string
  style?: CSSProperties
}

export default function CountUp({ value, className, style }: CountUpProps) {
  return (
    <span className={className} style={style}>
      {value}
    </span>
  )
}
