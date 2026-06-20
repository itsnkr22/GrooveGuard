'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'

type FormState = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  service: 'Free AI Mini Assessment',
  message: '',
}

const serviceOptions = [
  'Free AI Mini Assessment',
  'Paid AI Implementation',
  'Claude Cowork Setup',
  'Custom Claude Skill',
  'Not sure yet',
]

export default function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Unable to submit')
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bezel-shell">
      <div className="bezel-core p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Name
            </span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[var(--color-accent)]"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
              }}
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Email
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[var(--color-accent)]"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
              }}
              placeholder="you@company.com"
            />
          </label>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Business or team
            </span>
            <input
              value={form.company}
              onChange={(event) => updateField('company', event.target.value)}
              className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[var(--color-accent)]"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
              }}
              placeholder="Company name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              What should we explore?
            </span>
            <select
              value={form.service}
              onChange={(event) => updateField('service', event.target.value)}
              className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[var(--color-accent)]"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
              }}
            >
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-5 block">
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Assessment context
          </span>
          <textarea
            required
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            rows={6}
            className="mt-2 w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[var(--color-accent)]"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
            }}
            placeholder="Tell us what matters most: revenue, time, or happier customers. Then share your most repeated weekly task, where it stalls, and what would change if it ran itself tomorrow."
          />
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="group btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          style={{
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-text-inverse)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Book Free Assessment
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </span>
            </>
          )}
        </button>

        {status === 'success' && (
          <div
            className="mt-5 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm"
            style={{
              backgroundColor: 'rgba(34, 106, 74, 0.1)',
              color: 'var(--color-success)',
            }}
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={1.6} />
            Thanks. Your request is in, and Drrizo will review the bottleneck context next.
          </div>
        )}

        {status === 'error' && (
          <p className="mt-5 text-sm" style={{ color: 'var(--color-danger)' }}>
            Something went wrong while sending the request. Please try again.
          </p>
        )}
      </div>
    </form>
  )
}
