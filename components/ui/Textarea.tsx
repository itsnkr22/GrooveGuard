'use client';

import React, { forwardRef, useId } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', containerClassName = '', id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-text-secondary font-body"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full rounded-xl px-4 py-2.5
            bg-bg-tertiary/60 border border-border
            text-text-primary text-sm font-body
            placeholder:text-text-muted
            outline-none resize-y min-h-[100px]
            transition-all duration-200
            focus:border-accent-blue/60
            focus:ring-2 focus:ring-accent-blue/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400 font-body">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
