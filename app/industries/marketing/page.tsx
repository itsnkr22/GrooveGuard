import { generatePageMetadata } from '@/lib/metadata';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import WorkflowDetail from '@/components/sections/WorkflowDetail';
import ROISummary from '@/components/sections/ROISummary';
import CTASection from '@/components/sections/CTASection';

export const metadata = generatePageMetadata({
  title: 'AI Automation for Marketing Agencies | Workflow Solutions',
  description:
    'Automate reporting, content pipelines, and lead nurturing for marketing agencies. Save 40+ hours/week with custom AI workflows.',
  path: '/industries/marketing',
});

const painPoints = [
  'Client reporting consumes 5-10 hours per client per month',
  'Content production pipelines stall between ideation, creation, approval, and publishing',
  'Lead capture data sits in forms and spreadsheets — follow-up is delayed or forgotten',
  'Social media scheduling is manual and reactive',
  'Campaign performance data is scattered across Google Ads, Meta, Analytics, and email platforms',
  'Onboarding new clients requires rebuilding dashboards, templates, and workflows from scratch',
];

const workflows = [
  {
    title: 'Automated Client Reporting',
    problem:
      'Agencies spend hours pulling data from multiple platforms, formatting reports, and adding commentary — per client, per month.',
    steps: [
      'Data is pulled automatically from Google Analytics, Google Ads, Meta Ads, email platforms, and CRM',
      'Metrics are normalised and compiled into a branded report template',
      'LLM generates performance commentary, highlights, and recommendations',
      'Report is emailed to the client on a set schedule (weekly/monthly)',
      'Dashboard is updated in real-time for client self-service access',
    ],
    tools: [
      'n8n/Make',
      'Platform APIs (GA4, Google Ads, Meta)',
      'LLM',
      'Google Sheets/Data Studio',
      'PDF Generation',
      'Email',
    ],
    outcome:
      'Client reports delivered in 5 minutes instead of 5 hours. Agencies scale reporting without adding headcount.',
  },
  {
    title: 'Content Pipeline Automation',
    problem:
      'Content production involves multiple stakeholders (strategist → writer → designer → client → publisher) and bottlenecks at every handoff.',
    steps: [
      'Content calendar is maintained in a project management tool (Notion, Asana, Monday)',
      'When a content piece is due, AI generates a first draft based on the brief, brand voice guidelines, and SEO requirements',
      'Draft is routed to the editor/client for approval with automated notifications and reminders',
      'Approved content is auto-formatted and scheduled for publishing across platforms (blog, social, email)',
      'Post-publish performance is tracked and fed back into the content strategy',
    ],
    tools: ['n8n/Make', 'LLM', 'CMS (WordPress, Webflow)', 'Social Schedulers (Buffer, Hootsuite)', 'PM Tool API'],
    outcome: 'Content production cycle reduced from 2 weeks to 3 days. Zero missed publishing dates.',
  },
  {
    title: 'Lead Capture & Nurture Sequences',
    problem:
      'Leads from forms, landing pages, and ads are captured but not followed up consistently or quickly enough.',
    steps: [
      'Lead data from all sources (website forms, ads, landing pages, webinar registrations) flows into a central CRM',
      'AI scores and segments leads based on behaviour and profile',
      'Personalised nurture email/SMS sequences are triggered automatically based on segment',
      'Sales-ready leads are flagged and routed to the appropriate team member with context',
      'Non-converting leads are recycled into long-term nurture campaigns',
    ],
    tools: ['n8n/Make', 'CRM (HubSpot, Pipedrive)', 'LLM', 'Email Platform', 'Form/Landing Page Tools'],
    outcome: '50% faster speed-to-lead. No lead falls through the cracks.',
  },
  {
    title: 'Social Media Management Automation',
    problem:
      'Scheduling, creating captions, finding hashtags, and posting across multiple client accounts is tedious and repetitive.',
    steps: [
      'Content calendar triggers prompt LLM to generate platform-specific captions (Twitter/X, LinkedIn, Instagram, Facebook)',
      'Hashtag research is automated based on trending topics and niche relevance',
      'Posts are scheduled across all platforms simultaneously',
      'Engagement metrics are aggregated daily into a single dashboard',
      'Top-performing content formats are identified for replication',
    ],
    tools: ['n8n/Make', 'LLM', 'Social Media APIs', 'Buffer/Hootsuite', 'Analytics Dashboard'],
    outcome: 'Social media management time cut by 70%. Consistent posting without manual effort.',
  },
  {
    title: 'Campaign Performance Monitoring & Alerts',
    problem:
      'Campaign metrics are buried in platform dashboards. By the time underperformance is noticed, budget has been wasted.',
    steps: [
      'Campaign data from Google Ads, Meta Ads, LinkedIn Ads, and email platforms is aggregated in real-time',
      'AI monitors key metrics (CPA, ROAS, CTR, conversion rate) against set thresholds',
      'Anomaly detection flags sudden drops or spikes',
      'Alerts fire via Slack/email with a summary and recommended action',
      'Weekly performance digest is auto-generated for internal and client review',
    ],
    tools: ['n8n/Make', 'Ad Platform APIs', 'LLM', 'Slack/Email', 'Dashboard'],
    outcome: 'Issues caught in real-time, not end-of-month. Budget waste reduced by 30%+.',
  },
  {
    title: 'Client Onboarding Automation',
    problem:
      'Onboarding a new client means setting up dashboards, creating templates, configuring tracking, gathering access credentials — all manually.',
    steps: [
      'New client form triggers the onboarding workflow',
      'Project management workspace is auto-created from a template (Asana/Monday/Notion)',
      'Reporting dashboards are cloned and pre-configured with client data sources',
      'Access credential requests are sent to the client automatically',
      'Welcome sequence (emails + onboarding docs) is triggered',
      'Internal kickoff tasks are assigned to team members',
    ],
    tools: ['n8n/Make', 'PM Tool API', 'Dashboard Templates', 'Email', 'CRM'],
    outcome: 'Client onboarding compressed from 1-2 weeks to 1-2 days. Consistent, professional experience every time.',
  },
];

const roiMetrics = [
  { label: 'Reporting Time/Client', before: '5-10 hrs/mo', after: '5 min/mo' },
  { label: 'Content Cycle', before: '2 weeks', after: '3 days' },
  { label: 'Lead Response', before: '24+ hours', after: 'Within minutes' },
];

export default function MarketingPage() {
  return (
    <>
      <Hero
        headline="AI Automation for Marketing Agencies"
        subheadline="Automate reporting, content pipelines, lead nurturing, and campaign ops — so your team focuses on strategy and creative, not spreadsheets."
        primaryCTA={{ label: 'Book Your Marketing Automation Audit', href: '/contact' }}
        showWorkflow
      />

      <PainPoints
        title="The Marketing Agency Bottleneck"
        points={painPoints}
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
              6 AI Workflows That Transform Marketing Agency Operations
            </h2>
            <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
              Purpose-built automations that address your specific pain points — from
              reporting to content and everything in between.
            </p>
          </div>

          <div className="grid gap-8">
            {workflows.map((workflow, index) => (
              <WorkflowDetail
                key={workflow.title}
                index={index + 1}
                title={workflow.title}
                problem={workflow.problem}
                steps={workflow.steps}
                tools={workflow.tools}
                outcome={workflow.outcome}
              />
            ))}
          </div>
        </div>
      </section>

      <ROISummary metrics={roiMetrics} />

      <CTASection
        headline="Your Agency Should Spend Time on Strategy, Not Spreadsheets."
        subtext="Book a free 30-minute automation audit. We'll map your agency workflows and show you exactly where AI can save time and money."
        buttonLabel="Book Your Free Marketing Audit →"
        buttonHref="/contact"
      />
    </>
  );
}
