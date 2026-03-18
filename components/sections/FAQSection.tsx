'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We have answers."
          />
        </FadeInOnScroll>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeInOnScroll key={index} direction="up" delay={index * 0.05}>
                <div className="rounded-xl border border-border bg-bg-secondary/50 backdrop-blur-sm overflow-hidden transition-colors hover:border-accent-blue/20">
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white font-body leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-text-muted">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-sm text-text-secondary font-body leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
