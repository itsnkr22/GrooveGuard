'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

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
  service: 'AI Content Engine',
  message: '',
}

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
    <form
      onSubmit={handleSubmit}
      className="card-lift rounded-2xl p-6 md:p-8"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Name
          </span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
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
            className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
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
            Startup or company
          </span>
          <input
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
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
            What do you want to build?
          </span>
          <select
            value={form.service}
            onChange={(event) => updateField('service', event.target.value)}
            className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
            }}
          >
            <option>AI Content Engine</option>
            <option>AI-Powered MVP</option>
            <option>Both services</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Project context
        </span>
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          rows={6}
          className="mt-2 w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
          }}
          placeholder="Share your content sources, MVP idea, target users, current workflow, timeline, or what you want to validate first."
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: '#FAF8F3',
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
            Request AI Project Audit <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {status === 'success' && (
        <div
          className="mt-5 flex items-start gap-2 rounded-lg px-4 py-3 text-sm"
          style={{
            backgroundColor: 'rgba(19, 122, 75, 0.1)',
            color: 'var(--color-success)',
          }}
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
          Thanks. Your request is in, and Drrizo will review the project context next.
        </div>
      )}

      {status === 'error' && (
        <p className="mt-5 text-sm" style={{ color: 'var(--color-danger)' }}>
          Something went wrong while sending the request. Please try again.
        </p>
      )}
    </form>
  )
}
