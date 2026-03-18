import { generatePageMetadata } from '@/lib/metadata';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import {
  BarChart3,
  FileText,
  Target,
  Share2,
  Activity,
  UserPlus,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Zap,
  Layers,
  Calendar,
  DollarSign,
  Cpu,
  PlugZap,
  BookOpen,
} from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'The Complete Guide to AI Automation for Marketing Agencies (2025)',
  description:
    'Learn how AI automation transforms marketing agency operations. Covers client reporting, content pipelines, lead nurturing, and more.',
  path: '/resources/marketing-ai-guide',
  type: 'article',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to AI Automation for Marketing Agencies (2025)',
  description:
    'Learn how AI automation transforms marketing agency operations. Covers client reporting, content pipelines, lead nurturing, and more.',
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
};

const costMetrics = [
  {
    icon: BarChart3,
    label: 'Client Reporting',
    stat: '5-10 hrs/client/mo',
    description:
      'Account managers spend entire days pulling numbers from Google Analytics, Meta Ads, email platforms, and CRMs — then formatting everything into branded decks. Multiply that by 15 or 20 clients and you have full-time roles consumed entirely by reporting.',
  },
  {
    icon: FileText,
    label: 'Content Production Cycle',
    stat: '2+ weeks',
    description:
      'From initial ideation and briefing, through drafting, internal review, client approval, design, and finally publishing — content bottlenecks at every handoff. Most agencies have content sitting in approval limbo for days at a time.',
  },
  {
    icon: Target,
    label: 'Lead Follow-Up Delay',
    stat: '24-48 hrs avg',
    description:
      'Research consistently shows that responding to a lead within 5 minutes makes you 21x more likely to qualify them. Yet most agencies take a full day or more to follow up — by which point the prospect has already spoken to a competitor.',
  },
  {
    icon: Share2,
    label: 'Social Media Management',
    stat: '10+ hrs/week',
    description:
      'Creating platform-specific captions, sourcing hashtags, scheduling posts across multiple client accounts, and then monitoring engagement. Per client. It adds up fast, especially when you are managing a dozen or more brands.',
  },
  {
    icon: Activity,
    label: 'Campaign Monitoring',
    stat: 'Issues caught days late',
    description:
      'An ad set burns through budget on a broken landing page. A CPA spikes because audience fatigue set in. By the time someone checks the dashboard and notices, hundreds or thousands have been wasted. Manual monitoring simply cannot keep up with always-on campaigns.',
  },
  {
    icon: UserPlus,
    label: 'Client Onboarding',
    stat: '1-2 weeks per client',
    description:
      'Setting up project management boards, creating report templates, configuring tracking pixels, requesting platform access, sending welcome emails, and assigning internal tasks. Every new client means rebuilding the same infrastructure from scratch.',
  },
];

const workflows = [
  {
    icon: BarChart3,
    title: 'Automated Client Reporting',
    problem:
      'Your account team spends 5 to 10 hours per client, per month, pulling data from Google Analytics, Google Ads, Meta Ads Manager, email platforms like Mailchimp or Klaviyo, and CRM tools. They copy numbers into spreadsheets, format them into branded slide decks, write commentary explaining what happened, and email the final PDF to the client. This process is repeated for every single client, every single month. It is the single largest non-billable time sink in most agencies.',
    steps: [
      'Connect all data sources via APIs — Google Analytics 4, Google Ads, Meta Ads, LinkedIn Ads, email marketing platforms, and CRM. Each connection is authenticated once and pulls data on a schedule (daily, weekly, or monthly).',
      'Raw data is normalised and mapped to a standardised metrics framework. Impressions, clicks, conversions, revenue, ROAS, CPA, and custom KPIs are calculated and stored in a structured format.',
      'An LLM (GPT-4 or Claude) receives the structured data along with previous period comparisons. It generates natural-language performance commentary — highlighting wins, flagging concerns, and suggesting optimisations. The tone matches your agency brand voice.',
      'The compiled data, charts, and AI-generated commentary are injected into a branded report template. This can be a PDF, a Google Slides deck, or a live dashboard hosted in Data Studio or a custom portal.',
      'The finished report is automatically emailed to the client contact on a set schedule. A real-time dashboard link is also included, giving clients self-service access to their data between formal reports.',
    ],
    tools: [
      'n8n or Make for orchestration',
      'Platform APIs (GA4, Google Ads, Meta Marketing API)',
      'LLM (GPT-4 / Claude) for commentary',
      'Google Sheets or PostgreSQL for data storage',
      'Google Data Studio or custom dashboard',
      'PDF generation library',
      'Email delivery (SendGrid / SMTP)',
    ],
    outcome:
      'Reports that used to take 5 to 10 hours are generated in under 5 minutes. A 20-client agency reclaims 100 to 200 hours per month — enough to serve more clients without hiring, or to reinvest that time into higher-value strategic work that actually grows accounts.',
  },
  {
    icon: FileText,
    title: 'Content Pipeline Automation',
    problem:
      'Content production involves a chain of handoffs: strategist creates a brief, writer produces a draft, editor reviews, designer adds visuals, client approves, and finally someone publishes. At every stage, the piece sits idle waiting for the next person to pick it up. Status tracking lives in Slack threads, email chains, and shared documents. Deadlines slip, publishing calendars fall behind, and content quality suffers from rushed turnarounds when everything lands at once.',
    steps: [
      'A content calendar is maintained in your project management tool — Notion, Asana, Monday, or ClickUp. Each piece has a due date, assigned owner, target keyword, and brief. When the creation date arrives, the automation kicks off.',
      'The AI receives the content brief, including target keyword, audience persona, brand voice guidelines, competitor references, and desired word count. It generates a structured first draft complete with headings, meta description, and internal link suggestions.',
      'The draft is automatically routed to the assigned editor or client for review. Automated notifications are sent via Slack or email. If no action is taken within 48 hours, a reminder is triggered. Approval status is tracked in the PM tool.',
      'Once approved, the content is auto-formatted for each publishing destination. Blog posts are pushed to your CMS (WordPress, Webflow, or Contentful). Social snippets are generated and queued in your scheduling tool. Email newsletter versions are created and staged.',
      'After publishing, performance metrics (traffic, engagement, conversions) are tracked automatically and fed back into the content strategy. The system identifies which topics, formats, and distribution channels drive the best results.',
    ],
    tools: [
      'n8n or Make for workflow orchestration',
      'LLM for draft generation and repurposing',
      'CMS API (WordPress REST API, Webflow CMS API)',
      'PM tool API (Notion, Asana, Monday)',
      'Social scheduling API (Buffer, Hootsuite)',
      'Slack or email for notifications',
    ],
    outcome:
      'The average content production cycle drops from 2 or more weeks down to 3 days. Publishing calendars stay on track. Writers spend their time refining and adding strategic depth rather than staring at blank pages. Zero missed publishing dates.',
  },
  {
    icon: Target,
    title: 'Lead Capture & Nurture Sequences',
    problem:
      'Leads arrive from multiple channels — website contact forms, landing pages, paid ad campaigns, webinar registrations, social media DMs, and referral links. The data lands in different places: a spreadsheet here, a CRM field there, an email inbox somewhere else. Follow-up is inconsistent. Hot leads go cold because no one acted fast enough. The agency has no systematic way to score, segment, and nurture leads based on their behaviour and profile.',
    steps: [
      'All lead capture points are connected to a central CRM. Website forms, ad platform lead forms (Meta Lead Ads, LinkedIn Lead Gen), webinar platforms (Zoom, Livestorm), and manual entries all flow into one unified pipeline via webhooks and API integrations.',
      'Each lead is automatically enriched with available data — company size, industry, job title, website, social profiles — using enrichment APIs. The AI then scores the lead based on fit criteria (company size, industry, budget signals) and intent signals (pages visited, content downloaded, webinar attended).',
      'Based on the lead score and segment, a personalised nurture sequence is triggered. High-intent leads receive a direct booking link and a personalised email from the assigned sales rep within minutes. Medium-intent leads enter an educational drip sequence. Low-intent leads receive a long-term brand awareness nurture.',
      'When a lead reaches a threshold score or takes a high-intent action (requests a proposal, visits the pricing page three times, replies to a nurture email), they are flagged as sales-ready. The assigned team member receives a Slack notification with full lead context, enrichment data, and engagement history.',
      'Leads that do not convert within the initial nurture window are not abandoned. They are recycled into a long-term nurture campaign with monthly value-driven content, case studies, and re-engagement offers. When they re-engage, the scoring restarts.',
    ],
    tools: [
      'n8n or Make for orchestration',
      'CRM (HubSpot, Pipedrive, Salesforce)',
      'Lead enrichment APIs (Clearbit, Apollo)',
      'LLM for personalised email generation',
      'Email platform (Mailchimp, ActiveCampaign, SendGrid)',
      'Slack for internal notifications',
    ],
    outcome:
      'Speed-to-lead drops from 24 to 48 hours down to under 5 minutes. Lead conversion rates increase by 30 to 50 percent. No lead falls through the cracks, regardless of which channel they arrived from. Your agency demonstrates the same lead management excellence to clients that it practices internally.',
  },
  {
    icon: Share2,
    title: 'Social Media Management Automation',
    problem:
      'Managing social media for multiple clients means creating unique, platform-specific content across Instagram, LinkedIn, Twitter/X, Facebook, and TikTok. Each platform has different ideal formats, character limits, hashtag strategies, and posting times. Account managers spend hours each week writing captions, sourcing visuals, scheduling posts, and then checking engagement metrics across scattered dashboards. The repetitive nature of the work leads to creative burnout and inconsistent quality.',
    steps: [
      'A content calendar triggers the workflow when a social post is due. The system receives the content topic, key message, brand voice guidelines, and any associated blog post or campaign asset to reference.',
      'The LLM generates platform-specific versions of the content. A LinkedIn post might be a 200-word thought leadership piece. A Twitter/X post might be a punchy one-liner with a thread option. An Instagram caption includes relevant emojis and a call to action. Each version is tailored to the platform algorithm preferences.',
      'Hashtag research is automated based on the topic, niche, and current trending tags. The system analyses competitor hashtag usage and historical performance data to select the optimal mix of reach hashtags, niche hashtags, and branded hashtags.',
      'All posts are scheduled across platforms simultaneously using social media API integrations or scheduling tool APIs. Posting times are optimised based on historical engagement data for each client account.',
      'Engagement metrics — likes, comments, shares, saves, profile visits, link clicks — are aggregated from all platforms into a single dashboard. The system identifies top-performing content formats, topics, and posting times, feeding these insights back into the content strategy.',
    ],
    tools: [
      'n8n or Make for orchestration',
      'LLM for caption and content generation',
      'Social media APIs (Meta Graph API, LinkedIn API, Twitter API)',
      'Buffer, Hootsuite, or Later for scheduling',
      'Analytics aggregation dashboard',
    ],
    outcome:
      'Social media management time is reduced by 70 percent. Posting consistency improves dramatically — no more gaps in the calendar because someone forgot or got pulled into other work. Content quality increases because the AI handles the repetitive scaffolding while human creatives focus on strategic messaging and visual storytelling.',
  },
  {
    icon: Activity,
    title: 'Campaign Performance Monitoring & Alerts',
    problem:
      'Marketing campaigns run 24/7 across Google Ads, Meta Ads, LinkedIn Ads, email platforms, and organic channels. Performance data lives in separate dashboards. By the time someone logs in and notices that a CPA has doubled, an audience is fatigued, or a landing page is returning 404 errors, significant budget has already been wasted. Weekly reporting catches problems days too late. Real-time monitoring requires a human watching dashboards constantly, which is not scalable.',
    steps: [
      'Campaign data from all active ad platforms and channels is aggregated into a unified data layer. API connections pull spend, impressions, clicks, conversions, revenue, and custom events on an hourly or real-time basis.',
      'You define performance thresholds and rules for each campaign or client. For example: alert if CPA exceeds target by 25 percent, alert if daily spend exceeds budget by 15 percent, alert if conversion rate drops below a set floor, alert if a landing page returns a non-200 status code.',
      'An anomaly detection layer (statistical or AI-driven) monitors for unusual patterns beyond simple threshold breaches. This catches gradual performance degradation, day-of-week anomalies, and sudden changes in competitor behaviour that affect your metrics.',
      'When an alert is triggered, a notification fires to the relevant team member via Slack or email. The notification includes a plain-language summary of what happened, the severity level, affected campaigns, and a recommended first action — all generated by an LLM that has context on the account history.',
      'A weekly performance digest is auto-generated for each client and for internal leadership. This digest includes key metric trends, notable events, optimisation actions taken, and strategic recommendations for the coming week.',
    ],
    tools: [
      'n8n or Make for orchestration and scheduling',
      'Ad platform APIs (Google Ads, Meta Marketing, LinkedIn Marketing)',
      'LLM for alert summaries and weekly digests',
      'Slack and email for alert delivery',
      'Custom dashboard or Data Studio for visualisation',
    ],
    outcome:
      'Campaign issues are caught within hours, not days. Budget waste is reduced by 30 percent or more. Account managers shift from reactive firefighting to proactive optimisation. Clients see faster responses to performance changes, which builds trust and strengthens retention.',
  },
  {
    icon: UserPlus,
    title: 'Client Onboarding Automation',
    problem:
      'Every new client means a flurry of manual setup work. Someone creates a project management workspace. Someone else builds a reporting dashboard. Tracking pixels need configuring. Platform access credentials need collecting. Welcome emails and onboarding documents need sending. Internal team members need briefing. The entire process takes 1 to 2 weeks, involves multiple people, and is riddled with inconsistencies because it depends on whoever happens to be running it. Worse, a slow or disorganised onboarding sets a poor first impression that can colour the entire client relationship.',
    steps: [
      'A new client intake form captures essential information: company name, industry, services engaged, ad platform credentials, brand guidelines, key contacts, billing details, and goals. Submitting this form triggers the full onboarding automation.',
      'A project management workspace is auto-created from a master template in your PM tool (Asana, Monday, Notion, or ClickUp). This includes pre-built task lists for each service area, milestone dates calculated from the start date, and assigned owners for each task.',
      'Reporting dashboards are cloned from a template and pre-configured with the new client data sources. API connections are established for their Google Analytics, Google Ads, Meta Ads, and email platform accounts using the credentials provided during intake.',
      'An automated email sequence is sent to the client contact: a welcome email with key information, a link to a shared drive with brand guidelines and templates, access links to the project management board and reporting dashboard, and a calendar link to book the kickoff call.',
      'Internal kickoff tasks are automatically assigned to the relevant team members — account manager, strategist, media buyer, content lead — with deadlines and context. A Slack notification alerts the team that a new client has been onboarded and provides links to all relevant resources.',
    ],
    tools: [
      'n8n or Make for workflow orchestration',
      'PM tool API (Asana, Monday, Notion)',
      'Dashboard template cloning',
      'CRM for client record creation',
      'Email for welcome sequences',
      'Slack for internal notifications',
      'Google Drive or Dropbox for shared assets',
    ],
    outcome:
      'Client onboarding is compressed from 1 to 2 weeks down to 1 to 2 days. Every client receives the same thorough, professional setup experience. Nothing is forgotten or inconsistent. The speed and polish of the onboarding itself becomes a competitive advantage that wins referrals.',
  },
];

const roadmap = [
  {
    week: 'Week 1',
    title: 'Audit & Prioritise',
    tasks: [
      'Map every recurring manual task across your agency operations — reporting, content production, lead management, social media, campaign monitoring, onboarding, and internal communications.',
      'Quantify the time cost of each task: hours per week, people involved, error rate, and impact on client satisfaction.',
      'Score each task on automation potential (high, medium, low) based on three criteria: is it repetitive, is it rule-based or pattern-based, and does it involve digital tools with API access.',
      'Select your first automation target — typically client reporting, because it offers the highest time savings with the most straightforward implementation.',
    ],
  },
  {
    week: 'Week 2',
    title: 'Build Your First Workflow',
    tasks: [
      'Set up your automation platform (n8n for self-hosted control, or Make for a managed SaaS experience).',
      'Connect your first data sources: Google Analytics 4, Google Ads, and one additional platform relevant to your first workflow.',
      'Build the data extraction, transformation, and loading pipeline. Ensure data is normalised across platforms.',
      'Configure the LLM integration for generating commentary, summaries, or content — depending on your chosen first workflow.',
      'Test the workflow end-to-end with one client or one internal use case. Iterate on output quality and reliability.',
    ],
  },
  {
    week: 'Week 3',
    title: 'Expand & Integrate',
    tasks: [
      'Roll out the first workflow to all relevant clients or team members. Monitor for edge cases and failures.',
      'Begin building your second automation — typically content pipeline or lead nurture, depending on your agency priorities.',
      'Connect additional tools: CRM, email platform, project management tool, and social scheduling tool.',
      'Set up monitoring and error handling: automatic retries for failed API calls, Slack alerts for workflow failures, and logging for audit trails.',
    ],
  },
  {
    week: 'Week 4',
    title: 'Measure, Optimise & Plan',
    tasks: [
      'Calculate the time savings from your first two automations. Compare against baseline metrics from Week 1.',
      'Gather feedback from your team: what is working, what is clunky, what is missing.',
      'Optimise LLM prompts for better output quality. Fine-tune data pipelines for accuracy and speed.',
      'Create your 90-day automation roadmap: prioritise remaining workflows, estimate build time, and assign ownership.',
      'Document your automation architecture — what connects to what, where data flows, and who owns each workflow. This becomes your operational playbook.',
    ],
  },
];

export default function MarketingAIGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeInOnScroll direction="up">
            <Badge variant="cyan">Free Guide</Badge>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold font-heading text-white md:text-5xl lg:text-6xl">
              The Complete Guide to{' '}
              <span className="gradient-text">AI Automation</span> for Marketing
              Agencies
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed max-w-2xl mx-auto">
              A practical, no-fluff blueprint for eliminating the manual
              operations that drain your agency&apos;s time, margin, and growth
              potential. From client reporting to content pipelines, lead nurturing
              to campaign monitoring — this is everything you need to know.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary font-body">
              <Clock size={16} className="text-accent-cyan" />
              <span>15 min read</span>
              <span className="mx-2 text-border">|</span>
              <Calendar size={16} className="text-accent-cyan" />
              <span>Updated January 2025</span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────────── Introduction ───────────────────────── */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary font-body leading-relaxed">
                Marketing agencies are in a paradox. You sell efficiency,
                performance, and results to your clients — yet internally, your
                own operations run on manual processes, spreadsheets, and sheer
                willpower. Your account managers spend more time assembling
                reports than analysing them. Your content teams wait days for
                approvals that should take hours. Your lead follow-up process is
                &quot;whoever remembers to check the inbox.&quot; And every new
                client means rebuilding the same infrastructure from scratch.
              </p>

              <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed">
                This is not sustainable. Agencies that continue operating this
                way face a ceiling: they cannot scale beyond a certain number of
                clients without linearly increasing headcount, which compresses
                margins and introduces more complexity. Meanwhile, competitors
                who have embraced AI and automation are delivering faster, more
                consistent results with leaner teams — and winning the retainers
                your agency is pitching for.
              </p>

              <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed">
                This guide is your roadmap out of that trap. We will walk through
                the six highest-impact workflows you can automate, the specific
                tools and integrations involved, how to calculate the ROI, and a
                practical 30-day plan to get started. No theory. No vague
                promises. Just the operational blueprint that the fastest-growing
                agencies are already using.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────── The Cost of Manual Marketing Operations ───────── */}
      <section className="relative py-16 lg:py-24 bg-bg-primary">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="The Cost of Manual Marketing Operations"
              subtitle="Before diving into solutions, let us be honest about the problem. These are the real numbers agencies deal with every day — and most have accepted them as normal."
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {costMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <FadeInOnScroll key={metric.label} direction="up" delay={index * 0.08}>
                  <div className="glass rounded-2xl border border-border p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                        <Icon size={24} className="text-accent-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-secondary font-body uppercase tracking-wider">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-2xl font-bold font-heading text-white">
                          {metric.stat}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-text-secondary font-body leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-12 glass rounded-2xl border border-accent-amber/30 p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="mt-0.5 shrink-0 text-accent-amber" />
                <div>
                  <p className="font-semibold font-heading text-white">
                    The compound effect
                  </p>
                  <p className="mt-2 text-sm text-text-secondary font-body leading-relaxed">
                    These numbers do not exist in isolation. A slow content
                    pipeline delays campaign launches. Delayed campaigns mean
                    delayed reporting. Manual reporting consumes time that should
                    be spent on strategy. Poor strategy leads to underperforming
                    campaigns. Underperforming campaigns cause client churn. Client
                    churn increases the pressure to win new business — which
                    requires an onboarding process that is itself manual and slow.
                    The entire system reinforces itself. Fixing one workflow in
                    isolation helps. Automating the system as a whole transforms
                    the agency.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ────────── 6 Workflows You Can Automate Today ────────── */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="6 Workflows You Can Automate Today"
              subtitle="Each of these workflows addresses a specific operational bottleneck. We cover the problem, the step-by-step automation, the tools involved, and the measurable outcome."
              badge="Workflows"
              badgeVariant="cyan"
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-16">
            {workflows.map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <FadeInOnScroll key={workflow.title} direction="up">
                  <div className="glass rounded-2xl border border-border p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/15 border border-accent-cyan/30">
                        <Icon size={24} className="text-accent-cyan" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-accent-cyan font-body uppercase tracking-wider">
                          Workflow {index + 1}
                        </p>
                        <h3 className="text-xl lg:text-2xl font-bold font-heading text-white">
                          {workflow.title}
                        </h3>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                        The Problem
                      </p>
                      <p className="text-text-secondary font-body leading-relaxed">
                        {workflow.problem}
                      </p>
                    </div>

                    {/* Steps */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-4">
                        How It Works
                      </p>
                      <ol className="space-y-4">
                        {workflow.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="flex gap-4">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-blue/15 border border-accent-blue/30 text-xs font-bold text-accent-blue">
                              {stepIdx + 1}
                            </span>
                            <p className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tools */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                        Tools & Integrations
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {workflow.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-bg-secondary border border-border px-3 py-1 text-xs font-medium text-text-secondary font-body"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="rounded-xl bg-accent-emerald/10 border border-accent-emerald/25 p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-emerald" />
                        <div>
                          <p className="text-xs font-semibold text-accent-emerald font-body uppercase tracking-wider mb-1">
                            Outcome
                          </p>
                          <p className="text-sm text-text-secondary font-body leading-relaxed">
                            {workflow.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────── The Technology Stack Explained ──────── */}
      <section className="relative py-16 lg:py-24 bg-bg-primary">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="The Technology Stack Explained"
              subtitle="Understanding the tools behind marketing automation helps you make informed decisions about what to build, buy, or integrate."
              badge="Tech Stack"
              badgeVariant="blue"
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-8">
            <FadeInOnScroll direction="up">
              <div className="glass rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <PlugZap size={22} className="text-accent-blue" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    Ad Platform APIs
                  </h3>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  Google Ads API, Meta Marketing API, LinkedIn Marketing API, and
                  Twitter Ads API all provide programmatic access to campaign
                  data, ad management, and audience insights. These are the
                  foundation of automated reporting and campaign monitoring. The
                  Google Ads API gives you access to over 100 report types. The
                  Meta Marketing API provides granular breakdown data that goes
                  beyond what the Ads Manager UI shows. Each platform has its own
                  authentication model (OAuth2 for most), rate limits, and data
                  freshness guarantees. A well-built integration handles
                  pagination, rate limiting, and error recovery automatically — so
                  your automations run reliably at scale.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.1}>
              <div className="glass rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Layers size={22} className="text-accent-cyan" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    CMS Integrations
                  </h3>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  WordPress REST API, Webflow CMS API, Contentful Management API,
                  and Strapi all allow you to create, update, and publish content
                  programmatically. This is essential for content pipeline
                  automation. Rather than logging into a CMS dashboard, copying in
                  formatted text, uploading images, setting metadata, and hitting
                  publish — the automation does all of this in seconds. The key
                  consideration is content modelling: your CMS needs a clear,
                  consistent content structure (title, body, featured image, meta
                  description, categories, tags) that the automation can
                  populate. Most modern CMSs support this natively through their
                  API. For WordPress specifically, Advanced Custom Fields (ACF)
                  extends the REST API to support any custom content structure
                  your agency needs.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.2}>
              <div className="glass rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={22} className="text-accent-emerald" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    CRM Connections
                  </h3>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  HubSpot, Pipedrive, Salesforce, and GoHighLevel all offer APIs
                  that allow you to create contacts, update deal stages, trigger
                  workflows, and sync data bidirectionally. For lead nurture
                  automation, the CRM is the single source of truth. Every lead
                  interaction — form submission, email open, link click, meeting
                  booked, proposal viewed — is logged against the contact record.
                  The automation reads this history to make intelligent decisions
                  about what message to send next, when to escalate to a human,
                  and when to move a lead from one pipeline stage to another.
                  HubSpot and Pipedrive offer the most automation-friendly APIs,
                  with webhook support for real-time event triggers and
                  well-documented endpoints for every object type.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.3}>
              <div className="glass rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu size={22} className="text-accent-amber" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    LLMs for Content & Analysis
                  </h3>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  Large language models — GPT-4, Claude, and Gemini — are the
                  engine behind content generation, report commentary, lead
                  email personalisation, and alert summaries. The key to getting
                  high-quality output is prompt engineering and context
                  management. A report commentary prompt, for example, should
                  include the current metrics, the previous period comparison,
                  the client industry context, the agency brand voice guidelines,
                  and examples of good commentary. Content generation prompts
                  should include target keywords, audience persona details,
                  competitor content analysis, and brand tone instructions. The
                  most effective implementations use structured output formats
                  (JSON mode) so the LLM response can be parsed and injected
                  directly into templates, dashboards, or CMS fields without
                  manual formatting. Cost-wise, these integrations are remarkably
                  affordable: a typical report commentary costs less than one
                  pence in API usage. Even at scale — 100 reports per month —
                  LLM costs remain negligible compared to the human time saved.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.4}>
              <div className="glass rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={22} className="text-accent-blue" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    Orchestration Platforms
                  </h3>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  n8n, Make (formerly Integromat), and Zapier are the workflow
                  automation platforms that connect everything together. They
                  provide visual workflow builders, pre-built connectors for
                  hundreds of tools, scheduling, error handling, and logging. n8n
                  stands out for agencies that want full control: it is
                  self-hosted, open-source, and has no per-execution pricing — so
                  your costs do not scale linearly with usage. Make is the best
                  managed option for teams that want power without infrastructure
                  responsibility. Zapier is the simplest but becomes expensive at
                  scale and has limited complexity tolerance. For most marketing
                  agencies, we recommend n8n or Make as the primary orchestration
                  layer, with direct API calls for high-frequency or
                  latency-sensitive operations.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ────────── ROI Calculator Framework ────────── */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="ROI Calculator Framework"
              subtitle="The business case for automation is straightforward when you quantify the hours. Here is a framework you can apply to your own agency."
              badge="ROI"
              badgeVariant="emerald"
              align="left"
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-12 glass rounded-2xl border border-border p-8 lg:p-10">
              <h3 className="text-lg font-bold font-heading text-white mb-6">
                How to Calculate Your Automation Savings
              </h3>

              <div className="space-y-6">
                <div className="rounded-xl bg-bg-secondary border border-border p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign size={20} className="text-accent-emerald" />
                    <p className="font-semibold font-heading text-white">
                      Step 1: Quantify current time costs
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    For each workflow, calculate: (hours per task) x (frequency
                    per month) x (number of clients or instances) x (blended hourly
                    cost of the team member performing it). Include not just the
                    direct task time, but also context-switching overhead,
                    communication time, and error correction. A task that
                    &quot;takes 2 hours&quot; often consumes 3 hours of real
                    calendar time when you account for interruptions and rework.
                  </p>
                </div>

                <div className="rounded-xl bg-bg-secondary border border-border p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp size={20} className="text-accent-emerald" />
                    <p className="font-semibold font-heading text-white">
                      Step 2: Estimate automation efficiency
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    Most well-implemented automations eliminate 80 to 95 percent
                    of the manual time. Client reporting typically goes from 5 to
                    10 hours to near-zero (with 15 to 30 minutes for review and
                    customisation). Content first-draft generation reduces
                    writing time by 60 to 70 percent. Lead follow-up goes from
                    hours of delay to immediate. Be conservative in your
                    estimates — even at 70 percent efficiency, the ROI is
                    compelling.
                  </p>
                </div>

                <div className="rounded-xl bg-bg-secondary border border-border p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 size={20} className="text-accent-emerald" />
                    <p className="font-semibold font-heading text-white">
                      Step 3: Factor in secondary benefits
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    Beyond direct time savings, automation delivers: reduced
                    errors (no more wrong numbers in reports), faster speed-to-lead
                    (higher conversion rates), consistent client experience
                    (better retention), ability to take on more clients without
                    hiring (improved margins), and team satisfaction (people work
                    on strategy and creative instead of data entry). These
                    secondary benefits often exceed the primary time savings in
                    long-term business impact.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="mt-8 glass rounded-2xl border border-accent-cyan/30 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={22} className="text-accent-cyan" />
                <h3 className="text-lg font-bold font-heading text-white">
                  Example: 15-Person Marketing Agency
                </h3>
              </div>

              <p className="text-sm text-text-secondary font-body leading-relaxed mb-6">
                Consider a mid-sized marketing agency with 15 staff, 25 active
                clients, and a blended team cost of $50 per hour. Here is
                what the numbers look like before and after automation.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-left font-semibold text-text-secondary uppercase tracking-wider text-xs">
                        Workflow
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-text-secondary uppercase tracking-wider text-xs">
                        Before (hrs/mo)
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-text-secondary uppercase tracking-wider text-xs">
                        After (hrs/mo)
                      </th>
                      <th className="py-3 pl-4 text-left font-semibold text-text-secondary uppercase tracking-wider text-xs">
                        Saved (hrs/mo)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Client reporting (25 clients)</td>
                      <td className="py-3 px-4">175</td>
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">163</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Content production</td>
                      <td className="py-3 px-4">120</td>
                      <td className="py-3 px-4">45</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">75</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Lead management</td>
                      <td className="py-3 px-4">60</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">52</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Social media management</td>
                      <td className="py-3 px-4">80</td>
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">60</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Campaign monitoring</td>
                      <td className="py-3 px-4">40</td>
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">35</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Client onboarding (3 new/mo)</td>
                      <td className="py-3 px-4">45</td>
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 pl-4 text-accent-emerald font-semibold">39</td>
                    </tr>
                    <tr className="font-semibold text-white">
                      <td className="py-3 pr-4">Total</td>
                      <td className="py-3 px-4">520</td>
                      <td className="py-3 px-4">96</td>
                      <td className="py-3 pl-4 text-accent-emerald">424</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-accent-emerald/10 border border-accent-emerald/25 p-4 text-center">
                  <p className="text-2xl font-bold font-heading text-white">424 hrs</p>
                  <p className="text-xs text-text-secondary font-body mt-1">
                    Saved per month
                  </p>
                </div>
                <div className="rounded-xl bg-accent-emerald/10 border border-accent-emerald/25 p-4 text-center">
                  <p className="text-2xl font-bold font-heading text-white">~2.7 FTEs</p>
                  <p className="text-xs text-text-secondary font-body mt-1">
                    Equivalent headcount
                  </p>
                </div>
                <div className="rounded-xl bg-accent-emerald/10 border border-accent-emerald/25 p-4 text-center">
                  <p className="text-2xl font-bold font-heading text-white">~$250K/yr</p>
                  <p className="text-xs text-text-secondary font-body mt-1">
                    Annual cost savings
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-text-secondary font-body leading-relaxed">
                At 424 hours saved per month and a blended cost of $50
                per hour, this agency saves approximately $21,200 per
                month — over $250,000 per year. The automation platform
                costs, API fees, and LLM usage combined typically run between
                $500 and $1,500 per month. That is a 10x to 30x return on
                investment. And this calculation does not even account for the
                revenue growth from being able to take on more clients, the
                improved retention from better reporting, or the higher close
                rates from faster lead follow-up.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─────── 30-Day Marketing Automation Roadmap ─────── */}
      <section className="relative py-16 lg:py-24 bg-bg-primary">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              title="Getting Started: 30-Day Marketing Automation Roadmap"
              subtitle="You do not need to automate everything at once. Follow this week-by-week plan to build momentum, prove value, and expand systematically."
              badge="Roadmap"
              badgeVariant="amber"
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-8">
            {roadmap.map((phase, index) => (
              <FadeInOnScroll key={phase.week} direction="up" delay={index * 0.1}>
                <div className="glass rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-amber/15 border border-accent-amber/30">
                      <span className="text-sm font-bold text-accent-amber font-heading">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent-amber font-body uppercase tracking-wider">
                        {phase.week}
                      </p>
                      <h3 className="text-lg font-bold font-heading text-white">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex gap-3">
                        <ArrowRight size={16} className="mt-1 shrink-0 text-accent-amber/70" />
                        <p className="text-sm text-text-secondary font-body leading-relaxed">
                          {task}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-12 glass rounded-2xl border border-accent-blue/30 p-8">
              <div className="flex items-start gap-4">
                <Zap size={24} className="mt-0.5 shrink-0 text-accent-blue" />
                <div>
                  <p className="font-semibold font-heading text-white">
                    Why 30 days is enough to see real results
                  </p>
                  <p className="mt-2 text-sm text-text-secondary font-body leading-relaxed">
                    You are not building a spaceship. Most marketing automation
                    workflows use existing APIs, proven orchestration tools, and
                    well-documented LLM integrations. The first workflow — typically
                    client reporting — can be live within a week. By day 30, you
                    will have two or three workflows running in production,
                    measurable time savings, and a clear roadmap for the next
                    quarter. The agencies that move fastest are the ones that start
                    with a focused scope and expand from proven success rather than
                    trying to automate everything at once.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="mt-8 glass rounded-2xl border border-border p-8">
              <h3 className="text-lg font-bold font-heading text-white mb-4">
                Common Mistakes to Avoid
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    <span className="font-semibold text-white">
                      Automating a broken process.
                    </span>{' '}
                    If your reporting workflow is disorganised manually, automating
                    it will produce disorganised reports faster. Fix the process
                    logic first, then automate.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    <span className="font-semibold text-white">
                      Skipping the human review step.
                    </span>{' '}
                    AI-generated content and report commentary should always be
                    reviewed before reaching clients. Automation removes the grunt
                    work — human judgment adds the strategic layer.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    <span className="font-semibold text-white">
                      Ignoring error handling.
                    </span>{' '}
                    APIs fail. Rate limits are hit. Data formats change. Build
                    retry logic, failure alerts, and fallback paths into every
                    workflow from day one.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    <span className="font-semibold text-white">
                      Building in isolation.
                    </span>{' '}
                    Involve the people who currently do the manual work. They know
                    the edge cases, exceptions, and client-specific quirks that no
                    process document captures. Their input makes the automation
                    robust.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    <span className="font-semibold text-white">
                      Over-engineering the first version.
                    </span>{' '}
                    Ship a working automation that handles 80 percent of cases, then
                    iterate. Perfectionism is the enemy of progress in automation
                    projects. You will learn more from running a live workflow for
                    a week than from planning for a month.
                  </p>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <CTASection
        headline="Ready to Automate Your Marketing Operations?"
        subtext="Book a free 30-minute automation audit. We will map your agency workflows and show you exactly where AI can save time, reduce errors, and grow your margins."
        buttonLabel="Book Your Free Marketing Audit"
        buttonHref="/contact"
      />
    </>
  );
}
