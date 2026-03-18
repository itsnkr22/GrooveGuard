import { generatePageMetadata } from '@/lib/metadata'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import {
  ShoppingCart,
  Package,
  Headphones,
  Star,
  Mail,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  AlertTriangle,
  Layers,
  Settings,
  Target,
  Brain,
} from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'The Complete Guide to AI Automation for E-Commerce Brands (2025)',
  description:
    'Learn how AI automation can transform e-commerce operations. Covers product listings, customer support, inventory management, and more.',
  path: '/resources/ecommerce-ai-guide',
  type: 'article',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to AI Automation for E-Commerce Brands (2025)',
  description:
    'Learn how AI automation can transform e-commerce operations. Covers product listings, customer support, inventory management, and more.',
  datePublished: '2025-01-15',
  author: {
    '@type': 'Organization',
    name: 'GrooveGuard',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
}

export default function EcommerceAIGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────────────── Hero Section ───────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/8 via-purple-600/5 to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeInOnScroll direction="up">
            <Badge variant="emerald">Free Guide</Badge>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold font-heading md:text-5xl lg:text-6xl gradient-text leading-tight">
              The Complete Guide to AI Automation for E-Commerce Brands (2025)
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed max-w-2xl mx-auto">
              A practical, no-fluff blueprint for e-commerce operators who want to automate
              product listings, customer support, inventory management, marketing, and
              competitive intelligence — without hiring an engineering team.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted font-body">
              <Clock size={16} />
              <span>15 min read</span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── Introduction ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold font-heading text-white mb-6">
                Why E-Commerce Brands That Automate Outscale Everyone Else
              </h2>

              <div className="space-y-5 text-text-secondary font-body leading-relaxed">
                <p>
                  The e-commerce landscape in 2025 is defined by one brutal truth: margins are
                  shrinking, customer expectations are rising, and the brands that win are not
                  the ones with the biggest teams — they are the ones with the most efficient
                  operations. While your competitors are still manually writing product
                  descriptions, copy-pasting tracking numbers into emails, and refreshing
                  inventory spreadsheets, a new generation of e-commerce operators is using AI
                  and workflow automation to run leaner, faster, and more profitably than ever
                  before.
                </p>

                <p>
                  This is not about replacing people with robots. It is about freeing your team
                  from the repetitive, low-leverage tasks that consume 60-70% of their working
                  hours — product data entry, responding to &quot;where is my order?&quot;
                  messages, reconciling stock across channels, manually segmenting email lists —
                  so they can focus on strategy, brand building, and growth. The difference
                  between a brand doing $2 million a year and one doing $20 million is rarely
                  the product. It is almost always operational leverage.
                </p>

                <p>
                  This guide walks through the six highest-impact workflows you can automate
                  today, explains the technology stack in plain language, provides an ROI
                  framework so you can calculate the financial impact for your specific
                  business, and gives you a 30-day implementation roadmap to get started. Whether
                  you are running a single Shopify store or managing a multi-channel operation
                  across Amazon, WooCommerce, and your own DTC site, every section is designed
                  to be immediately actionable.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── The Cost of Manual Operations ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="The Cost of Manual E-Commerce Operations"
              subtitle="Before we talk solutions, let's quantify the problem. These are the real-world benchmarks we see across hundreds of e-commerce brands still running on manual processes."
              align="center"
            />
          </FadeInOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShoppingCart,
                label: 'Product Listing Creation',
                stat: '20-30 min per SKU',
                detail:
                  'Writing titles, descriptions, bullet points, and SEO tags manually for every product. At 100 new SKUs per month, that is 50+ hours of repetitive copywriting.',
              },
              {
                icon: Headphones,
                label: 'Customer Support Response',
                stat: '4-6 hours average',
                detail:
                  'Without AI triage, the average first-response time for e-commerce support tickets sits between 4 and 6 hours — long enough for customers to leave a negative review or buy elsewhere.',
              },
              {
                icon: Package,
                label: 'Inventory Discrepancies',
                stat: '8% average error rate',
                detail:
                  'Manual stock tracking across multiple channels leads to overselling, stockouts, and costly emergency reorders. An 8% error rate translates directly into lost revenue and damaged customer trust.',
              },
              {
                icon: Star,
                label: 'Review Management',
                stat: '2-3 hours/day',
                detail:
                  'Monitoring reviews across Amazon, Google, Trustpilot, and social media, then crafting individual responses. Most brands either ignore reviews entirely or spend hours each day reacting.',
              },
              {
                icon: Mail,
                label: 'Email Campaign Creation',
                stat: '5-8 hours per campaign',
                detail:
                  'Segmenting audiences, writing copy, designing templates, scheduling sends, and analysing results. By the time one campaign is done, the next one is already overdue.',
              },
              {
                icon: TrendingUp,
                label: 'Competitor Monitoring',
                stat: 'Rarely done or 3+ hrs/week',
                detail:
                  'Tracking competitor pricing, new launches, and market trends is critical but rarely prioritised because it requires so much manual effort. Most brands only check competitors sporadically.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <FadeInOnScroll key={item.label} direction="up" delay={index * 0.08}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                      <Icon size={24} className="text-accent-blue" />
                    </div>
                    <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-2xl font-bold font-heading text-white mb-3">
                      {item.stat}
                    </p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed mt-auto">
                      {item.detail}
                    </p>
                  </div>
                </FadeInOnScroll>
              )
            })}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 rounded-2xl border border-accent-amber/30 bg-accent-amber/5 p-6 flex gap-4">
              <AlertTriangle size={24} className="text-accent-amber shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold font-heading text-white mb-1">
                  The compounding cost
                </p>
                <p className="text-sm text-text-secondary font-body leading-relaxed">
                  These inefficiencies do not exist in isolation. A slow support response leads
                  to a negative review, which you do not catch because review monitoring is
                  manual, which lowers your listing ranking, which means you need to spend more
                  on ads, which compresses your margin further. Every manual process is a thread
                  you can pull to unravel your profitability.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── 6 Workflows You Can Automate Today ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="6 Workflows You Can Automate Today"
              subtitle="Each of these workflows addresses a specific operational bottleneck. We break down the problem, how the automation works step by step, the tools involved, and the measurable outcome."
              badge="Workflows"
              badgeVariant="cyan"
              align="center"
            />
          </FadeInOnScroll>

          {/* Workflow 1: Product Listing Automation */}
          <FadeInOnScroll direction="up">
            <div className="mt-16 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                  <ShoppingCart size={24} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-blue font-body uppercase tracking-wider mb-1">
                    Workflow 1
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    AI-Powered Product Listing Automation
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Creating product titles, descriptions, bullet points, and SEO metadata for
                    hundreds or thousands of SKUs is one of the most time-consuming tasks in
                    e-commerce. A single well-optimised listing can take 20-30 minutes to write
                    manually. Multiply that across your catalogue and you are looking at weeks of
                    full-time copywriting just to get products live — before you even think about
                    optimising existing listings for better conversion. The quality also varies
                    wildly depending on who writes each listing and how much time they have.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'Product data (specifications, images, category, brand guidelines) is ingested from a spreadsheet, PIM system, or supplier feed via API or file upload.',
                      'An LLM generates optimised product titles, descriptions, and bullet points tailored to each target marketplace (Amazon, Shopify, WooCommerce, eBay). Each marketplace has different character limits, keyword strategies, and formatting conventions — the AI handles all of this automatically.',
                      'SEO keywords are researched and embedded into the copy using search volume data and competitor analysis. The system can pull from tools like Helium 10, Jungle Scout, or Google Keyword Planner APIs.',
                      'The completed listings are pushed directly to the relevant marketplace via API (Amazon SP-API, Shopify Storefront API, WooCommerce REST API). A human reviewer is notified and can approve, edit, or reject before final publish if you prefer a human-in-the-loop workflow.',
                      'Performance data (click-through rate, conversion rate, search ranking) feeds back into the system so the LLM can learn which copy patterns perform best for your specific brand and category.',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-xs font-bold text-accent-cyan">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'GPT-4 / Claude', 'Amazon SP-API', 'Shopify API', 'PIM Integration', 'Keyword Research APIs'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      Product listings created 10x faster with consistent quality and SEO
                      optimisation across all channels. Brands typically see a 15-25% improvement
                      in organic search ranking within the first 60 days of deploying AI-generated
                      listings, because every single product gets the same level of keyword research
                      and copy quality — not just the hero SKUs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Workflow 2: AI Customer Support Agent */}
          <FadeInOnScroll direction="up">
            <div className="mt-8 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/15 border border-accent-cyan/30">
                  <Headphones size={24} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-cyan font-body uppercase tracking-wider mb-1">
                    Workflow 2
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    AI Customer Support Agent
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Support teams in e-commerce are overwhelmed by volume. The vast majority of
                    incoming tickets — typically 60-80% — are routine, repetitive queries: where
                    is my order, how do I return this, what size should I get, do you ship to my
                    country. These queries are straightforward to answer, but they bury your team
                    in volume and push response times into the hours (or days) range. Meanwhile,
                    the genuinely complex issues — damaged goods, billing disputes, product
                    defects — wait in queue behind dozens of &quot;where is my order?&quot;
                    messages.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'A customer message arrives via email, live chat widget, social media DM (Instagram, Facebook Messenger), or marketplace messaging (Amazon Buyer-Seller Messages). All channels are unified into a single processing pipeline.',
                      'The AI agent classifies the query into categories: order status, return/refund request, product question, shipping inquiry, complaint, or escalation-required. Classification accuracy typically exceeds 95% after the first week of training on your historical ticket data.',
                      'For routine queries, the AI drafts and sends a response using real-time data from your order management system. For example, an order status query triggers a lookup against your OMS/3PL API, retrieves the tracking number and estimated delivery date, and generates a friendly, on-brand response.',
                      'For complex or sensitive queries, the AI escalates to a human agent with a full context summary — previous order history, customer lifetime value, sentiment analysis of the current message, and a suggested response draft. The human agent resolves the issue in a fraction of the time because they do not need to do any research.',
                      'All interactions are logged, categorised, and analysed. The system generates weekly reports showing ticket volume by category, resolution rates, average response time, customer satisfaction scores, and emerging issues (e.g., sudden spike in complaints about a specific product).',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-xs font-bold text-accent-cyan">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'GPT-4 / Claude', 'Zendesk / Gorgias / Freshdesk', 'Order Management API', 'Slack / Email Alerts'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      70% of support tickets resolved without human intervention. Average first-response
                      time drops from 4-6 hours to under 60 seconds. Human agents handle only the
                      20-30% of tickets that genuinely require judgement, and they resolve those
                      faster because the AI provides full context upfront. Customer satisfaction
                      scores typically increase by 20-30% within the first month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Workflow 3: Inventory & Order Workflow Automation */}
          <FadeInOnScroll direction="up">
            <div className="mt-8 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-amber/15 border border-accent-amber/30">
                  <Package size={24} className="text-accent-amber" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-amber font-body uppercase tracking-wider mb-1">
                    Workflow 3
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Inventory & Order Workflow Automation
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Managing inventory across multiple sales channels — your own website, Amazon,
                    eBay, wholesale partners — while coordinating fulfilment through one or more
                    warehouses and 3PLs is where most e-commerce operations start to crack. The
                    classic symptoms are overselling (selling a product that is already out of
                    stock on another channel), stockouts (failing to reorder in time), and
                    mis-routed shipments (sending an order to the wrong fulfilment centre). Each
                    of these costs money directly through cancelled orders, emergency air
                    freight, and customer churn. An 8% inventory error rate — the industry
                    average for manual tracking — can translate to hundreds of thousands in lost
                    revenue annually for a mid-size brand.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'Inventory levels are synced in real-time across all sales channels via API connections to Shopify, Amazon, WooCommerce, and any additional platforms. When a sale occurs on one channel, stock is decremented across all channels within seconds — eliminating overselling.',
                      'When stock for any SKU hits a configurable threshold, the system automatically generates a purchase order draft populated with supplier details, unit costs, lead times, and optimal order quantities (calculated from historical sales velocity). The procurement team receives a Slack or email notification with the PO attached for approval.',
                      'Incoming orders are automatically routed to the optimal fulfilment centre or 3PL based on customer location, stock availability at each location, and shipping cost. This logic replaces the manual process of checking which warehouse has stock and which shipping option is cheapest.',
                      'Once an order ships, tracking information is pushed to the customer via email and SMS. If a shipment is delayed or shows an exception (stuck at customs, failed delivery attempt), the system proactively notifies the customer before they have to ask.',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-amber/15 border border-accent-amber/30 text-xs font-bold text-accent-amber">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'ERP / Inventory System API', '3PL Integration (ShipBob, ShipStation)', 'Email / SMS (Klaviyo, Twilio)'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      Zero stockouts from oversight. Inventory error rate drops from 8% to near
                      zero. Fulfilment routing is optimised automatically, reducing average
                      shipping cost by 10-15%. Proactive shipping notifications reduce &quot;where
                      is my order&quot; support tickets by 40-50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Workflow 4: Review & Feedback Management */}
          <FadeInOnScroll direction="up">
            <div className="mt-8 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-emerald/15 border border-accent-emerald/30">
                  <Star size={24} className="text-accent-emerald" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-emerald font-body uppercase tracking-wider mb-1">
                    Workflow 4
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Review & Feedback Management
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Customer reviews are scattered across Amazon, Google Business Profile,
                    Trustpilot, your Shopify store, social media, and industry-specific review
                    platforms. Positive reviews are not being leveraged for marketing and social
                    proof. Negative reviews sit unanswered for days — or worse, permanently.
                    Most brands either ignore reviews entirely (damaging reputation over time) or
                    assign someone to manually check each platform daily, which is tedious and
                    inconsistent. Without systematic review analysis, you also miss product
                    improvement signals hiding in customer feedback patterns.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'Reviews are aggregated automatically from all platforms (Amazon, Google, Trustpilot, Shopify, social media) into a centralised database. New reviews are fetched every 15-30 minutes via API or web scraping where APIs are not available.',
                      'Each review is analysed by an LLM for sentiment (positive, neutral, negative), topic categorisation (product quality, shipping speed, customer service, sizing/fit, packaging), and urgency scoring. A 1-star review mentioning a safety concern is flagged differently from a 3-star review about slow shipping.',
                      'Negative reviews trigger an immediate Slack or email alert to the relevant team member, along with a suggested response draft that acknowledges the issue, offers a resolution, and matches your brand voice. The team member can approve, edit, or override the draft.',
                      'Positive reviews above a certain rating threshold are automatically flagged for social proof usage — they can be pushed to your website testimonial section, included in email campaigns, or queued for UGC social media posts.',
                      'A weekly sentiment report is generated automatically, showing overall rating trends, most common complaint categories, emerging issues, and a comparison with previous periods. Product teams use these reports to prioritise improvements.',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-emerald/15 border border-accent-emerald/30 text-xs font-bold text-accent-emerald">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'Review Platform APIs', 'GPT-4 / Claude', 'Google Sheets / Looker Dashboard', 'Slack Alerts'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      90% faster response to negative reviews. Consistent brand voice across all
                      platforms. Product improvement signals surfaced automatically from
                      aggregated feedback data. Positive reviews systematically converted into
                      marketing assets instead of sitting unused on third-party platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Workflow 5: Dynamic Email & SMS Marketing Automation */}
          <FadeInOnScroll direction="up">
            <div className="mt-8 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                  <Mail size={24} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-blue font-body uppercase tracking-wider mb-1">
                    Workflow 5
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Dynamic Email & SMS Marketing Automation
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Email and SMS remain the highest-ROI marketing channels for e-commerce, but
                    most brands are barely scratching the surface of what is possible. Campaigns
                    are created manually — a marketer writes generic copy, applies basic
                    segmentation (last purchase date, total spend), and sends the same message to
                    thousands of people. Abandoned cart sequences use the same template for
                    everyone. Post-purchase flows are generic. Win-back campaigns are sent at
                    arbitrary intervals. The result: mediocre open rates, low click-throughs, and
                    revenue left on the table. Each campaign takes 5-8 hours to conceptualise,
                    write, design, segment, and schedule.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'Customer purchase history, browsing behaviour, email engagement data, and demographic information are analysed to create dynamic micro-segments. Instead of broad segments like "customers who bought in the last 30 days," the system creates granular segments like "customers who bought running shoes in the last 30 days, browsed insoles but did not purchase, and typically open emails between 7-9am."',
                      'An LLM generates personalised email and SMS copy for each segment and flow type: abandoned cart recovery, post-purchase upsell, product launch announcements, seasonal campaigns, win-back sequences, and review requests. Each message is tailored to the recipient\'s purchase history, browsing behaviour, and previous engagement patterns.',
                      'Send time is optimised per individual recipient based on their historical open and click data. Instead of sending a blast at 10am for everyone, each recipient gets the message at their optimal engagement window.',
                      'A/B test variations (subject lines, body copy, CTAs, send times) are generated and deployed automatically. The system runs tests, measures results, and rolls out winners without manual intervention.',
                      'Campaign performance data feeds back into the segmentation and content generation models. The system learns which messaging angles, tones, and offers resonate best with each segment over time, continuously improving performance.',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-blue/15 border border-accent-blue/30 text-xs font-bold text-accent-blue">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'GPT-4 / Claude', 'Klaviyo / Mailchimp', 'Shopify / WooCommerce API', 'Twilio (SMS)'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      35% average increase in email-attributed revenue. Abandoned cart recovery
                      rates improve by 20-40%. Campaign creation time drops from 5-8 hours to
                      under 30 minutes of review and approval. Every customer receives genuinely
                      personalised messaging instead of one-size-fits-all blasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Workflow 6: Competitor Price & Market Intelligence */}
          <FadeInOnScroll direction="up">
            <div className="mt-8 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/15 border border-accent-cyan/30">
                  <TrendingUp size={24} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent-cyan font-body uppercase tracking-wider mb-1">
                    Workflow 6
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Competitor Price & Market Intelligence
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                    The Problem
                  </p>
                  <p className="text-text-secondary font-body leading-relaxed">
                    Knowing what your competitors are doing — their pricing, new product
                    launches, promotional strategies, and market positioning — is critical for
                    informed decision-making. But competitive intelligence is one of the first
                    things that gets deprioritised because it is so labour-intensive. Someone has
                    to manually visit competitor websites, check their Amazon listings, monitor
                    their social media, and track their pricing. This either does not happen at
                    all, or it happens sporadically and inconsistently. The result is that
                    pricing decisions are made based on gut feel rather than data, and you miss
                    competitive threats until they have already taken market share.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                    How It Works
                  </p>
                  <div className="space-y-3">
                    {[
                      'Competitor product pages, marketplace listings, and pricing data are monitored daily via automated web scraping and API calls. The system tracks a configurable list of competitors and SKUs, checking prices, stock availability, listing changes, and new product launches.',
                      'An LLM analyses the collected data to identify meaningful changes: price drops, new product launches, changes in product descriptions or positioning, promotional campaigns, and shifts in customer review sentiment for competitor products.',
                      'Real-time alerts fire when actionable events occur — a direct competitor undercuts your price on a top-selling SKU, launches a product in your category, or runs a major promotion. Alerts are delivered via Slack, email, or SMS with full context and recommended actions.',
                      'A weekly intelligence report is generated automatically, summarising competitive landscape changes, pricing trends, market opportunities, and strategic recommendations. The report includes data visualisations and is formatted for executive consumption.',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-xs font-bold text-accent-cyan">
                          {i + 1}
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-semibold text-text-muted font-body uppercase tracking-wider w-full mb-1">
                    Tools
                  </p>
                  {['n8n / Make', 'Web Scraping (Apify, Bright Data)', 'GPT-4 / Claude', 'Dashboard (Looker, Google Sheets)', 'Slack / Email Alerts'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-xs font-body text-text-secondary"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>

                <div className="rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4 flex gap-3">
                  <CheckCircle2 size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white font-body mb-1">Outcome</p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      Always-on competitive intelligence without any manual research. Pricing
                      decisions backed by real-time data instead of gut feel. Competitive threats
                      identified and responded to within hours instead of weeks. Strategic
                      planning informed by continuous market monitoring rather than quarterly
                      snapshot reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── The Technology Stack Explained ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="The Technology Stack Explained"
              subtitle="You do not need to be an engineer to understand how these automations work. Here is a plain-language breakdown of each layer in the stack."
              badge="Tech Stack"
              badgeVariant="blue"
              align="center"
            />
          </FadeInOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Layers,
                title: 'Marketplace & Platform APIs',
                description:
                  'APIs (Application Programming Interfaces) are the connectors that let your automation tools talk to your e-commerce platforms. Amazon SP-API lets you read and write product listings, pull order data, and manage inventory on Amazon. Shopify Storefront API and WooCommerce REST API do the same for your own stores. Think of APIs as a standardised language that software systems use to communicate with each other — they are how data flows between your store, your automation workflows, and your AI models without any manual intervention.',
              },
              {
                icon: Headphones,
                title: 'Helpdesk & Communication Integrations',
                description:
                  'Tools like Zendesk, Gorgias, Freshdesk, and Intercom provide APIs that let your AI agent read incoming support tickets, classify them, draft responses, and post replies. Social media platforms (Instagram, Facebook, Twitter) also have messaging APIs. The automation layer connects to all of these, creating a unified inbox where every customer interaction — regardless of channel — is processed by the same AI logic. This eliminates the need for agents to switch between platforms.',
              },
              {
                icon: Package,
                title: 'Inventory & Fulfilment Systems',
                description:
                  'Your ERP, inventory management system (TradeGecko, Cin7, Linnworks), or 3PL provider (ShipBob, ShipStation, Deliverr) all expose APIs that report stock levels, accept purchase orders, and provide shipment tracking. The automation layer connects to these systems to create a real-time, multi-channel inventory sync. When a sale happens on Amazon, stock is decremented on Shopify within seconds — not hours or days.',
              },
              {
                icon: Brain,
                title: 'Large Language Models (LLMs)',
                description:
                  'LLMs like GPT-4 and Claude are the AI engines that power the "intelligent" parts of your automation: writing product descriptions, analysing customer messages, generating email copy, summarising reviews, and creating competitive intelligence reports. They are not databases and they do not store your data. They process text input and generate text output. Your automation workflow sends data to the LLM (e.g., product specifications), gets back generated content (e.g., a product description), and routes that output to the next step (e.g., publishing to Shopify).',
              },
              {
                icon: Settings,
                title: 'Workflow Orchestration (n8n / Make)',
                description:
                  'n8n and Make are the "central nervous system" that ties everything together. They are visual workflow builders that let you create automated processes by connecting triggers, actions, and conditional logic. For example: "When a new order comes in (trigger), check inventory levels (action), if stock is below threshold (condition), generate a purchase order and send it to the supplier (action)." These tools require no coding to use and can connect to hundreds of APIs out of the box.',
              },
              {
                icon: BarChart3,
                title: 'Dashboards & Reporting',
                description:
                  'Google Sheets, Looker, Data Studio, and custom dashboard tools display the data generated by your automations. Weekly reports, real-time KPI dashboards, review sentiment charts, and competitive intelligence summaries all live here. The automation layer pushes data to these tools automatically — no one needs to manually compile a report again. Most e-commerce brands start with Google Sheets for speed and migrate to Looker or a custom dashboard as they scale.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <FadeInOnScroll key={item.title} direction="up" delay={index * 0.08}>
                  <div className="glass rounded-2xl p-6 h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                      <Icon size={24} className="text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── ROI Calculator Framework ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="ROI Calculator Framework"
              subtitle="Use this framework to estimate the financial impact of automation for your specific business. We have pre-filled an example for a mid-size e-commerce brand doing $3M-$5M in annual revenue."
              badge="ROI"
              badgeVariant="emerald"
              align="center"
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up">
            <div className="mt-12 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Example: Mid-Size E-Commerce Brand
              </h3>
              <p className="text-sm text-text-secondary font-body leading-relaxed mb-8">
                500 SKUs, 3 sales channels, 200 support tickets/day, 4 email campaigns/month,
                $3.5M annual revenue, 8-person operations team.
              </p>

              <div className="space-y-4">
                {[
                  {
                    area: 'Product Listing Creation',
                    manualCost: '120 hrs/month at $25/hr = $3,000/month',
                    automatedCost: '12 hrs/month (review only) = $300/month',
                    monthlySaving: '$2,700',
                  },
                  {
                    area: 'Customer Support',
                    manualCost: '3 FTE agents at $3,500/month = $10,500/month',
                    automatedCost: '1 FTE agent + AI = $4,200/month (agent + tooling)',
                    monthlySaving: '$6,300',
                  },
                  {
                    area: 'Inventory Management',
                    manualCost: 'Stockout losses + emergency reorders = $4,000/month avg',
                    automatedCost: 'Tooling cost = $500/month, stockout losses near zero',
                    monthlySaving: '$3,500',
                  },
                  {
                    area: 'Review Management',
                    manualCost: '50 hrs/month at $25/hr = $1,250/month',
                    automatedCost: '5 hrs/month (review escalations) = $125/month',
                    monthlySaving: '$1,125',
                  },
                  {
                    area: 'Email Marketing',
                    manualCost: '32 hrs/month at $35/hr = $1,120/month',
                    automatedCost: '4 hrs/month (approval + strategy) = $140/month',
                    monthlySaving: '$980',
                  },
                  {
                    area: 'Competitive Intelligence',
                    manualCost: 'Rarely done; opportunity cost of uninformed pricing = $2,000+/month',
                    automatedCost: 'Tooling cost = $300/month',
                    monthlySaving: '$1,700+',
                  },
                ].map((row) => (
                  <div
                    key={row.area}
                    className="rounded-xl border border-border bg-bg-primary/50 p-5"
                  >
                    <p className="text-sm font-bold font-heading text-white mb-3">
                      {row.area}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                          Manual Cost
                        </p>
                        <p className="text-sm text-text-secondary font-body">
                          {row.manualCost}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                          Automated Cost
                        </p>
                        <p className="text-sm text-text-secondary font-body">
                          {row.automatedCost}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                          Monthly Saving
                        </p>
                        <p className="text-sm font-bold text-accent-emerald font-body">
                          {row.monthlySaving}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-accent-blue/5 border border-accent-blue/20 p-6 text-center">
                <p className="text-sm text-text-muted font-body uppercase tracking-wider mb-2">
                  Total Estimated Monthly Saving
                </p>
                <p className="text-4xl font-bold font-heading gradient-text mb-2">
                  $16,305+
                </p>
                <p className="text-sm text-text-secondary font-body">
                  That is approximately <span className="text-white font-semibold">$195,660 per year</span> in
                  direct cost savings and recovered revenue — before accounting for the compounding
                  benefits of faster growth, better customer retention, and improved search rankings.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs text-text-muted font-body leading-relaxed">
                  Note: These figures are based on averages across our client base and publicly
                  available benchmarks. Your actual ROI will depend on your specific operations,
                  team costs, order volume, and current level of manual process. We provide
                  custom ROI projections as part of our free automation audit.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── 30-Day Roadmap ───────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="Getting Started: 30-Day E-Commerce Automation Roadmap"
              subtitle="You do not need to automate everything at once. Here is a week-by-week plan to systematically introduce AI automation into your e-commerce operations without disrupting your existing workflows."
              badge="Roadmap"
              badgeVariant="amber"
              align="center"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-6">
            {[
              {
                week: 'Week 1',
                title: 'Audit & Quick Wins',
                icon: Target,
                color: 'accent-blue',
                tasks: [
                  'Map every manual process in your e-commerce operations: product listing creation, customer support workflow, inventory management, marketing campaign creation, review monitoring, and competitive research.',
                  'Quantify the time and cost of each process using the ROI framework above. Identify the top 2-3 highest-impact workflows to automate first.',
                  'Set up your automation platform (n8n or Make) and connect it to your primary e-commerce platform (Shopify, WooCommerce, or Amazon Seller Central).',
                  'Deploy one "quick win" automation: automated order confirmation emails with tracking, or a Slack notification when a negative review is posted. This builds internal confidence in the technology.',
                ],
              },
              {
                week: 'Week 2',
                title: 'Customer Support AI Deployment',
                icon: Headphones,
                color: 'accent-cyan',
                tasks: [
                  'Export your last 90 days of support ticket data. Categorise tickets by type (order status, returns, product questions, complaints, other). This data trains your AI agent on your most common query patterns.',
                  'Build your AI support agent using your LLM of choice. Start with the highest-volume, lowest-complexity ticket category (usually order status inquiries). Connect it to your helpdesk and order management system.',
                  'Run the AI agent in "shadow mode" for 3-5 days: it generates response drafts but a human reviews and sends every response. This validates accuracy before going fully autonomous.',
                  'Go live with autonomous responses for the validated category. Set up escalation rules for edge cases. Monitor accuracy and customer satisfaction daily.',
                ],
              },
              {
                week: 'Week 3',
                title: 'Product Listings & Review Management',
                icon: ShoppingCart,
                color: 'accent-emerald',
                tasks: [
                  'Set up the product listing automation pipeline. Connect your product data source (PIM, spreadsheet, or supplier feed) to the LLM-powered content generation workflow.',
                  'Generate listings for 20-30 products as a test batch. Compare AI-generated listings against your best manually-written listings for quality, SEO keyword coverage, and brand voice consistency.',
                  'Refine the prompts and templates based on test results. Deploy at scale for all new product onboarding.',
                  'Simultaneously, deploy the review aggregation and sentiment analysis system. Connect all review platforms and set up negative review alerts. Start building your weekly sentiment report.',
                ],
              },
              {
                week: 'Week 4',
                title: 'Inventory, Marketing & Competitive Intelligence',
                icon: BarChart3,
                color: 'accent-amber',
                tasks: [
                  'Deploy real-time inventory syncing across all sales channels. Set up low-stock alerts and automated purchase order generation. Test the system by manually adjusting stock levels and verifying that sync, alerts, and PO drafts trigger correctly.',
                  'Build your first AI-powered email campaign. Create dynamic segments based on purchase behaviour, generate personalised copy with the LLM, and deploy with send-time optimisation. Compare performance against your last manually-created campaign.',
                  'Set up competitor monitoring for your top 5-10 competitors and their key SKUs. Configure price-change alerts and schedule the weekly intelligence report.',
                  'Review all automations deployed in weeks 1-3 for accuracy, edge cases, and optimisation opportunities. Document learnings and plan the next phase of automation expansion.',
                ],
              },
            ].map((week, index) => {
              const Icon = week.icon
              return (
                <FadeInOnScroll key={week.week} direction="up" delay={index * 0.08}>
                  <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-${week.color}/15 border border-${week.color}/30`}
                      >
                        <Icon size={24} className={`text-${week.color}`} />
                      </div>
                      <div>
                        <p
                          className={`text-xs font-semibold text-${week.color} font-body uppercase tracking-wider mb-1`}
                        >
                          {week.week}
                        </p>
                        <h3 className="text-xl font-bold font-heading text-white">
                          {week.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {week.tasks.map((task, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle2
                            size={18}
                            className={`text-${week.color} shrink-0 mt-0.5`}
                          />
                          <p className="text-sm text-text-secondary font-body leading-relaxed">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )
            })}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-6 flex gap-4">
              <ArrowRight size={24} className="text-accent-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold font-heading text-white mb-1">
                  What happens after 30 days?
                </p>
                <p className="text-sm text-text-secondary font-body leading-relaxed">
                  By the end of week four, your core e-commerce operations are running on
                  automated workflows. Your support team is handling 70% fewer tickets. Product
                  listings are being generated in minutes instead of hours. Inventory is synced
                  in real-time. Reviews are monitored and responded to automatically. Email
                  campaigns are personalised and optimised without manual effort. And you have
                  always-on competitive intelligence for the first time. From here, the focus
                  shifts to optimisation — refining prompts, expanding to additional channels,
                  building more sophisticated segmentation, and identifying the next layer of
                  automation opportunities.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────── CTA Section ───────────────────── */}
      <CTASection
        headline="Ready to Automate Your E-Commerce Operations?"
        subtext="Book a free 30-minute automation audit. We will map your current workflows, identify the highest-impact automation opportunities, and show you exactly how much time and money you can save."
        buttonLabel="Book Your Free E-Commerce Audit"
        buttonHref="/contact"
      />
    </>
  )
}
