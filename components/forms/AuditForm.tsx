'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

const COMMISSION_OPTIONS = [
  'Under $500k',
  '$500k\u2013$1M',
  '$1M\u2013$1.5M',
  'Over $1.5M',
] as const

const COMMERCIAL_MIX_OPTIONS = [
  'Under 60% commercial',
  '60\u201380% commercial',
  '80%+ commercial',
] as const

const AMS_OPTIONS = [
  'EZLynx',
  'Applied Epic',
  'HawkSoft',
  'AMS360',
  'NowCerts',
  'Other AMS',
  'No AMS / Spreadsheets',
] as const

const PAIN_POINT_OPTIONS = [
  'Certificate of Insurance (COI) processing',
  'Renewal stewardship (90\u2013120 day)',
  'New business submission packaging',
  'Lost-quote / abandoned-lead follow-up',
  'Cross-sell identification from book data',
  'Direct-bill reconciliation',
  'Claims status updates to clients',
  'Other',
] as const

type FormState = {
  firstName: string
  lastName: string
  agencyName: string
  email: string
  phone: string
  commissionVolume: string
  commercialMix: string
  ams: string
  painPoint: string
  message: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  agencyName: '',
  email: '',
  phone: '',
  commissionVolume: '',
  commercialMix: '',
  ams: '',
  painPoint: '',
  message: '',
}

export default function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center rounded-2xl p-10 text-center"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-accent)',
        }}
      >
        <div
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            backgroundColor: 'rgba(232, 160, 32, 0.1)',
            border: '1.5px solid var(--color-accent)',
          }}
        >
          <CheckCircle2 className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
        </div>
        <h3
          className="mb-3 text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          Done.
        </h3>
        <p
          className="max-w-md text-base leading-relaxed"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
        >
          We&rsquo;ll be in touch within one business day to confirm your audit time.
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-bg)',
    border: '1px solid var(--color-border-accent)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
  }

  const labelStyle: React.CSSProperties = {
    color: 'var(--color-text-secondary)',
    fontFamily: 'var(--font-body)',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium" style={labelStyle}>
            First Name <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium" style={labelStyle}>
            Last Name <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="agencyName" className="mb-2 block text-sm font-medium" style={labelStyle}>
          Agency Name <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <input
          id="agencyName"
          name="agencyName"
          type="text"
          required
          value={form.agencyName}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
          style={inputStyle}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium" style={labelStyle}>
            Work Email <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium" style={labelStyle}>
            Phone <span style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="commissionVolume"
            className="mb-2 block text-sm font-medium"
            style={labelStyle}
          >
            Annual Commission Income <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <select
            id="commissionVolume"
            name="commissionVolume"
            required
            value={form.commissionVolume}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          >
            <option value="" disabled>
              Select a range
            </option>
            {COMMISSION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="commercialMix"
            className="mb-2 block text-sm font-medium"
            style={labelStyle}
          >
            Commercial Mix <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <select
            id="commercialMix"
            name="commercialMix"
            required
            value={form.commercialMix}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            style={inputStyle}
          >
            <option value="" disabled>
              % of book in commercial P&amp;C
            </option>
            {COMMERCIAL_MIX_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ams" className="mb-2 block text-sm font-medium" style={labelStyle}>
          Agency Management System <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <select
          id="ams"
          name="ams"
          required
          value={form.ams}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
          style={inputStyle}
        >
          <option value="" disabled>
            Select your AMS
          </option>
          {AMS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="painPoint" className="mb-2 block text-sm font-medium" style={labelStyle}>
          Primary Pain Point <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <select
          id="painPoint"
          name="painPoint"
          required
          value={form.painPoint}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
          style={inputStyle}
        >
          <option value="" disabled>
            Select your biggest workflow pain point
          </option>
          {PAIN_POINT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium" style={labelStyle}>
          Anything else we should know?{' '}
          <span style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-md px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
          style={inputStyle}
        />
      </div>

      {status === 'error' && (
        <div
          className="flex items-start gap-3 rounded-md p-4 text-sm"
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#B91C1C',
            fontFamily: 'var(--font-body)',
          }}
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>
            {errorMsg ||
              'Something went wrong. Please try again.'}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: '#FAF8F3',
          fontFamily: 'var(--font-body)',
        }}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending&hellip;
          </>
        ) : (
          <>Request My Free Audit &rarr;</>
        )}
      </button>

      <p
        className="text-center text-xs"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
      >
        We&rsquo;ll respond within one business day. No spam, no sales pressure.
      </p>
    </form>
  )
}
