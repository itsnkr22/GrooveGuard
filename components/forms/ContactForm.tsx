'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  industry: string;
  bottleneck: string;
  referralSource: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
}

const industryOptions = [
  { value: 'recruitment', label: 'Recruitment Agency' },
  { value: 'ecommerce', label: 'E-Commerce Brand' },
  { value: 'marketing', label: 'Marketing Agency' },
  { value: 'other', label: 'Other' },
];

const referralOptions = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'twitter', label: 'X (Twitter)' },
  { value: 'google', label: 'Google' },
  { value: 'referral', label: 'Referral' },
  { value: 'other', label: 'Other' },
];

const WEBHOOK_URL = 'https://hooks.example.com/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    industry: '',
    bottleneck: '',
    referralSource: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Silently handle - show success state regardless for demo
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5 rounded-2xl border border-accent-emerald/20 bg-bg-secondary/70 backdrop-blur-xl p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 12 }}
            >
              <CheckCircle size={56} className="text-accent-emerald" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-2xl font-bold font-heading text-white"
            >
              Thank you!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm text-text-secondary font-body"
            >
              We&apos;ll be in touch within 24 hours to schedule your free audit.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8"
          >
            <Input
              label="Full Name *"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              error={errors.fullName}
            />

            <Input
              label="Email *"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />

            <Input
              label="Company Name *"
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              error={errors.company}
            />

            <Select
              label="Industry"
              placeholder="Select your industry"
              options={industryOptions}
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
            />

            <Textarea
              label="Biggest Bottleneck"
              placeholder="What's the most time-consuming task in your workflow?"
              value={formData.bottleneck}
              onChange={(e) => handleChange('bottleneck', e.target.value)}
              rows={3}
            />

            <Select
              label="How did you hear about us?"
              placeholder="Select one"
              options={referralOptions}
              value={formData.referralSource}
              onChange={(e) => handleChange('referralSource', e.target.value)}
            />

            <div className="mt-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Book My Free Audit'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
