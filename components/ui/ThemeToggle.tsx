'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const options = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' },
  ]

  return (
    <div className="flex items-center rounded-lg border border-border bg-bg-secondary/50 p-0.5">
      {options.map((opt) => {
        const Icon = opt.icon
        const isActive = theme === opt.value
        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            className={`flex items-center justify-center rounded-md p-1.5 transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-accent-blue text-white shadow-sm'
                : 'text-text-muted hover:text-text-secondary'
            }`}
            aria-label={`${opt.label} theme`}
            title={`${opt.label} theme`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        )
      })}
    </div>
  )
}
