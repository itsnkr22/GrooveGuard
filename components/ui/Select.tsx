'use client';

import React, { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder,
      className = '',
      containerClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-text-secondary font-body"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full appearance-none rounded-xl px-4 py-2.5 pr-10
              bg-bg-tertiary/60 border border-border
              text-text-primary text-sm font-body
              outline-none
              transition-all duration-200
              focus:border-accent-blue/60
              focus:ring-2 focus:ring-accent-blue/20
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : ''}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
            size={16}
          />
        </div>
        {error && (
          <p className="text-xs text-red-400 font-body">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
