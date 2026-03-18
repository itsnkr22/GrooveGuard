import { generatePageMetadata } from '@/lib/metadata';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import {
  Search,
  Calendar,
  BarChart3,
  Users,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Database,
  Brain,
  Link2,
  Mail,
  Bot,
} from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'The Complete Guide to AI Automation for Recruitment Agencies (2025)',
  description:
    'Learn how AI automation can transform recruitment operations. Covers candidate sourcing, interview scheduling, client reporting, and more.',
  path: '/resources/recruitment-ai-guide',
  type: 'article',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to AI Automation for Recruitment Agencies (2025)',
  description:
    'Learn how AI automation can transform recruitment operations. Covers candidate sourcing, interview scheduling, client reporting, and more.',
  datePublished: '2025-01-15',
  author: {
    '@type': 'Organization',
    name: 'GrooveGuard',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GrooveGuard',
    url: SITE_URL,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/resources/recruitment-ai-guide`,
  },
};

const costMetrics = [
  {
    icon: Clock,
    stat: '13 hrs/week',
    label: 'Average recruiter time spent on admin tasks',
    detail:
      'Data entry, formatting CVs, updating spreadsheets, chasing confirmations, and copying information between systems.',
  },
  {
    icon: Users,
    stat: '23 min/application',
    label: 'Manual candidate screening time',
    detail:
      'Reading CVs, cross-referencing requirements, checking LinkedIn profiles, and recording notes in your ATS.',
  },
  {
    icon: Mail,
    stat: '4-6 emails/interview',
    label: 'Scheduling coordination overhead',
    detail:
      'Back-and-forth between candidate, hiring manager, and recruiter to find a mutually available slot.',
  },
  {
    icon: BarChart3,
    stat: '3-5 hrs/client/month',
    label: 'Client reporting workload',
    detail:
      'Pulling data from your ATS, building pipeline summaries, writing commentary, formatting and sending reports.',
  },
  {
    icon: Database,
    stat: '5+ hrs/week',
    label: 'Data entry and CRM maintenance',
    detail:
      'Updating candidate records, logging activity, deduplicating contacts, and fixing data quality issues.',
  },
];

const workflows = [
  {
    icon: Search,
    title: 'Candidate Sourcing & Screening',
    problem:
      'Recruiters manually trawl LinkedIn, job boards, and internal databases for hours, only to surface candidates that may not match the brief. By the time a shortlist is ready, the best candidates have already been contacted by competitors.',
    steps: [
      'A new role is created or updated in your ATS (Bullhorn, JobAdder, Vincere, etc.), triggering the automation.',
      'An AI agent queries LinkedIn, Indeed, Reed, CV Library, and your internal database simultaneously, filtering by skills, experience, location, and salary band.',
      'An LLM scores each candidate against the role requirements, generating a fit-score (0-100) and a brief rationale summarising strengths and gaps.',
      'Top-scoring candidates are pushed to a shortlist in your ATS with the fit-score, summary, and a direct link to their profile — ready for human review.',
    ],
    tools: ['n8n / Make', 'GPT-4 / Claude', 'LinkedIn API', 'ATS Integration'],
    outcome:
      '80% reduction in initial sourcing time. Recruiters receive pre-qualified shortlists within hours instead of days, and spend their time on outreach rather than searching.',
  },
  {
    icon: Calendar,
    title: 'Interview Scheduling & Follow-Ups',
    problem:
      'Coordinating interview times between candidates, recruiters, and hiring managers involves dozens of emails, frequent reschedules, and a constant risk of double-bookings or no-shows.',
    steps: [
      'A candidate reaches the "interview" stage in your ATS, triggering the scheduling workflow.',
      'The automation checks real-time calendar availability for the interviewer(s) and the candidate via Google Calendar or Outlook.',
      'A scheduling link with available slots is sent to the candidate via email or SMS. If the candidate selects a time, the calendar event is created automatically.',
      'Automated reminders fire at 24 hours and 1 hour before the interview. Post-interview, a feedback request is sent to both the interviewer and the candidate.',
    ],
    tools: ['n8n / Make', 'Google Calendar / Outlook API', 'Twilio / SendGrid', 'ATS Webhook'],
    outcome:
      'Zero manual scheduling. Interview coordination drops from 15-20 minutes per booking to zero. No-show rates fall by up to 95% thanks to automated reminders.',
  },
  {
    icon: BarChart3,
    title: 'Client Reporting & Pipeline Dashboards',
    problem:
      'Account managers spend hours each week manually pulling data from the ATS, building pipeline summaries in Excel or Google Sheets, writing status updates, and formatting branded PDF reports for clients.',
    steps: [
      'A scheduled trigger (weekly, fortnightly, or monthly) pulls live data from your ATS: active roles, candidate pipeline stages, interview outcomes, placements, and time-to-fill metrics.',
      'An LLM generates a narrative summary of activity — highlighting wins, flagging bottlenecks, and recommending next steps in natural language.',
      'A real-time dashboard is updated with visual KPIs: submission-to-interview ratio, placement rate, average time-to-fill, and candidate funnel breakdowns.',
      'A branded PDF report is generated automatically and emailed to the client on schedule, with the option for the recruiter to review and approve before sending.',
    ],
    tools: ['n8n / Make', 'ATS API', 'LLM (GPT-4 / Claude)', 'Google Sheets / Airtable', 'PDF Generation'],
    outcome:
      'Client reports delivered in minutes instead of hours. Real-time dashboards give clients 24/7 visibility, building trust and improving retention.',
  },
  {
    icon: Users,
    title: 'Candidate Engagement & Nurture Sequences',
    problem:
      'Your database is full of strong candidates who were not placed last time around. Without consistent follow-up, they forget about your agency or accept roles through competitors. Recruiters simply do not have the bandwidth for manual re-engagement at scale.',
    steps: [
      'Candidates not placed are automatically tagged and segmented in your CRM based on availability, seniority, sector, and engagement history.',
      'Automated nurture sequences fire based on segment rules — for example, "available in 30 days," "passive but open to approach," or "previously shortlisted."',
      'An LLM generates personalised email or LinkedIn messages based on the candidate\u2019s profile, recent activity, and relevant new job openings in your pipeline.',
      'When a matching role opens, the system triggers a re-engagement notification to the recruiter with a summary of the candidate\u2019s history and fit-score.',
    ],
    tools: ['n8n / Make', 'CRM / ATS', 'LLM', 'Email Automation (Mailchimp / SendGrid)'],
    outcome:
      '3x increase in candidate re-engagement rates. Your passive talent pool stays warm without any recruiter effort, and you fill roles faster from your existing database.',
  },
  {
    icon: FileText,
    title: 'Job Description & Posting Automation',
    problem:
      'Writing job descriptions from scratch is tedious and inconsistent. Posting across multiple boards means logging into each platform separately, reformatting content, and manually tracking where each role is advertised.',
    steps: [
      'A recruiter inputs key role details into a simple form: job title, core requirements, salary band, location, and client name.',
      'An LLM generates an optimised job description — SEO-friendly, using inclusive language, tone-consistent with your brand, and structured for maximum applicant conversion.',
      'The JD is automatically published to selected job boards (Indeed, Reed, Totaljobs, LinkedIn, CV Library) via their respective APIs, formatted correctly for each platform.',
      'Applicant data from all boards is aggregated back into your ATS in real-time, with source tracking so you know which boards are performing.',
    ],
    tools: ['n8n / Make', 'LLM (GPT-4 / Claude)', 'Job Board APIs', 'ATS Integration'],
    outcome:
      'Job descriptions created in under 2 minutes. Multi-board posting happens in a single click. Recruiters reclaim hours previously spent on repetitive content creation and manual posting.',
  },
  {
    icon: Shield,
    title: 'Compliance & Document Automation',
    problem:
      'Recruitment agencies must manage contracts, offer letters, right-to-work checks, GDPR consent forms, and onboarding documents. Doing this manually is slow, error-prone, and creates compliance risk.',
    steps: [
      'A candidate reaches the "offer" stage in your ATS, automatically triggering the compliance workflow.',
      'A personalised contract or offer letter is generated from approved templates, pre-filled with candidate details, role information, and terms.',
      'A right-to-work document checklist is sent to the candidate via a secure upload portal, with automated reminders for outstanding items.',
      'GDPR consent forms are generated, sent for e-signature, and tracked automatically. All completed documents are filed in the candidate\u2019s ATS record with a full audit trail.',
    ],
    tools: ['n8n / Make', 'DocuSign / PandaDoc', 'Cloud Storage (Google Drive / SharePoint)', 'ATS Integration'],
    outcome:
      '90% reduction in onboarding admin time. Full compliance audit trail maintained automatically, reducing legal risk and improving candidate experience.',
  },
];

const techStack = [
  {
    icon: Zap,
    name: 'n8n',
    category: 'Workflow Automation',
    description:
      'An open-source workflow automation platform that connects your tools and orchestrates multi-step processes. Think of it as the central nervous system of your automation stack — it listens for triggers (e.g., a new candidate in your ATS), processes data, calls APIs, and executes actions across your entire tool ecosystem. Self-hosted for full data control.',
  },
  {
    icon: Link2,
    name: 'Make (formerly Integromat)',
    category: 'Workflow Automation',
    description:
      'A cloud-based automation platform with a visual builder. Ideal for agencies that want powerful automation without managing infrastructure. Make connects to 1,500+ apps out of the box and handles complex branching logic, error handling, and scheduling with minimal technical overhead.',
  },
  {
    icon: Brain,
    name: 'Large Language Models (LLMs)',
    category: 'AI Intelligence Layer',
    description:
      'Models like GPT-4 and Claude serve as the intelligence layer in your automations. They read and understand CVs, score candidates against job requirements, generate personalised emails, write job descriptions, summarise pipeline data into narrative reports, and handle any task that requires understanding natural language.',
  },
  {
    icon: Database,
    name: 'ATS & CRM Integrations',
    category: 'Data Layer',
    description:
      'Your ATS (Bullhorn, JobAdder, Vincere, Mercury, etc.) and CRM are the source of truth. We connect directly via APIs and webhooks so that automations are triggered by real events in your system — a new candidate, a stage change, a placement — and all outputs are written back to the correct records automatically.',
  },
  {
    icon: Bot,
    name: 'AI Agents',
    category: 'Autonomous Workflows',
    description:
      'AI agents go beyond simple automations. They can make decisions, handle multi-step processes autonomously, and adapt based on context. For example, an AI agent can source candidates, score them, draft outreach messages, and schedule follow-ups — all without human intervention, while flagging edge cases for review.',
  },
  {
    icon: Shield,
    name: 'Security & Compliance Tools',
    category: 'Data Protection',
    description:
      'Document generation (DocuSign, PandaDoc), secure file storage (Google Drive, SharePoint), and GDPR compliance tracking ensure that your automations meet regulatory requirements. All data flows are encrypted, audit trails are maintained, and candidate consent is tracked automatically.',
  },
];

const roiExamples = [
  {
    task: 'Candidate Screening',
    hoursPerWeek: 15,
    hourlyCost: 25,
    automationReduction: 80,
  },
  {
    task: 'Interview Scheduling',
    hoursPerWeek: 8,
    hourlyCost: 25,
    automationReduction: 95,
  },
  {
    task: 'Client Reporting',
    hoursPerWeek: 6,
    hourlyCost: 30,
    automationReduction: 85,
  },
  {
    task: 'Data Entry & CRM',
    hoursPerWeek: 10,
    hourlyCost: 22,
    automationReduction: 90,
  },
  {
    task: 'Job Posting',
    hoursPerWeek: 4,
    hourlyCost: 25,
    automationReduction: 75,
  },
  {
    task: 'Compliance Admin',
    hoursPerWeek: 3,
    hourlyCost: 30,
    automationReduction: 90,
  },
];

const roadmapSteps = [
  {
    week: 'Week 1',
    title: 'Audit Current Workflows',
    tasks: [
      'Map every repeatable process in your recruitment cycle end-to-end',
      'Log time spent on each task across the team for 5 working days',
      'Identify the top 5 time-consuming activities that do not directly generate revenue',
      'Document the tools and systems currently used at each stage',
      'Calculate the true cost of each manual process (time x staff cost)',
    ],
  },
  {
    week: 'Week 2',
    title: 'Prioritise Top 2-3 Automations',
    tasks: [
      'Score each process on two axes: time consumed and ease of automation',
      'Select the 2-3 workflows that offer the highest ROI with the lowest implementation risk',
      'Define success metrics for each automation (e.g., hours saved, error reduction, speed improvement)',
      'Confirm integration requirements with your existing ATS and tool stack',
      'Create a project brief for each automation with clear inputs, outputs, and expected outcomes',
    ],
  },
  {
    week: 'Week 3',
    title: 'Build and Test',
    tasks: [
      'Build automation workflows in n8n or Make, connected to your live systems via staging/sandbox environments',
      'Configure LLM prompts for tasks like candidate scoring, email generation, and report writing',
      'Run end-to-end tests with real (anonymised) data to validate accuracy and reliability',
      'Set up error handling, logging, and fallback procedures for edge cases',
      'Conduct user acceptance testing with 1-2 recruiters to gather feedback before full rollout',
    ],
  },
  {
    week: 'Week 4',
    title: 'Deploy and Train Team',
    tasks: [
      'Deploy automations to production, connected to your live ATS, CRM, and communication tools',
      'Run a team training session covering what the automations do, how to monitor them, and when to intervene',
      'Set up monitoring dashboards to track automation performance and flag failures',
      'Establish a feedback loop so recruiters can report issues or suggest improvements',
      'Schedule a 30-day review to measure results against baseline metrics and plan the next phase',
    ],
  },
];

export default function RecruitmentAIGuidePage() {
  const totalWeeklyCost = roiExamples.reduce(
    (sum, row) => sum + row.hoursPerWeek * row.hourlyCost,
    0
  );
  const totalWeeklySaving = roiExamples.reduce(
    (sum, row) =>
      sum + row.hoursPerWeek * row.hourlyCost * (row.automationReduction / 100),
    0
  );
  const totalAnnualSaving = totalWeeklySaving * 48;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/8 via-bg-primary to-bg-primary" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-accent-blue/5 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeInOnScroll direction="up">
            <Badge variant="emerald">Free Guide</Badge>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold font-heading tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Complete Guide to AI Automation for{' '}
              <span className="gradient-text">Recruitment Agencies</span> (2025)
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary font-body leading-relaxed">
              A practical, no-fluff blueprint for automating candidate sourcing, screening,
              scheduling, reporting, and compliance. Built for agency owners, ops managers,
              and recruitment leaders who want to do more with less.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-text-muted font-body">
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                15 min read
              </span>
              <span className="text-border">|</span>
              <span>Updated January 2025</span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Introduction"
              title="Why Recruitment Agencies Need AI Automation Now"
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-10 space-y-6 text-base text-text-secondary font-body leading-relaxed">
            <FadeInOnScroll direction="up" delay={0.1}>
              <p>
                The recruitment industry is in the middle of a structural shift. Margins are
                tightening, clients expect faster turnaround, and candidates have more options
                than ever. Meanwhile, your recruiters are buried in admin — formatting CVs,
                chasing interview confirmations, updating spreadsheets, and assembling client
                reports. The agencies that thrive over the next five years will not be the ones
                with the biggest teams. They will be the ones that use technology to make every
                recruiter dramatically more productive.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.15}>
              <p>
                AI automation is not about replacing recruiters. It is about eliminating the
                low-value, repetitive work that prevents them from doing what they are actually
                hired to do: build relationships, understand client needs, and place the right
                candidates. When a recruiter spends 60% of their week on admin, you are paying
                senior salaries for data-entry work. That is the real cost — and it is one most
                agencies have simply accepted as normal.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.2}>
              <p>
                This guide is designed to change that. Over the next fifteen minutes, we will
                walk through the specific workflows that consume the most time in a typical
                recruitment agency, show you exactly how AI automation handles each one, break
                down the technology stack in plain language, and give you a practical 30-day
                roadmap to get started. Whether you run a 5-person boutique or a 100-desk
                operation, the principles and workflows covered here apply. Let us get into it.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── The Cost of Manual Recruitment Operations ── */}
      <section className="py-16 lg:py-24 bg-bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="The Problem"
              title="The Cost of Manual Recruitment Operations"
              subtitle="Before we talk about solutions, let us quantify the problem. Here is where the time actually goes in a typical recruitment agency."
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-6 text-base text-text-secondary font-body leading-relaxed">
            <FadeInOnScroll direction="up" delay={0.1}>
              <p>
                Most agency owners know their team is busy. Fewer can tell you exactly where
                the time goes. When we audit recruitment agencies, we consistently find that
                over half of a recruiter&apos;s week is consumed by tasks that generate zero
                direct revenue. These are not edge cases — they are structural inefficiencies
                baked into how the industry has always operated. The numbers below are drawn
                from our client audits and industry benchmarks.
              </p>
            </FadeInOnScroll>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <FadeInOnScroll key={metric.label} direction="up" delay={index * 0.08}>
                  <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-6 h-full">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <Icon size={20} className="text-accent-blue" />
                    </div>
                    <p className="text-2xl font-bold font-heading text-white">{metric.stat}</p>
                    <p className="mt-1 text-sm font-semibold text-white font-body">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xs text-text-muted font-body leading-relaxed">
                      {metric.detail}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 rounded-2xl glass p-6 text-center">
              <p className="text-sm text-text-muted font-body mb-1">
                Combined, these tasks consume
              </p>
              <p className="text-3xl font-bold font-heading text-white">
                35+ hours per recruiter per week
              </p>
              <p className="mt-2 text-sm text-text-secondary font-body">
                That is time not spent on candidate outreach, client meetings, or closing
                placements. For a 10-person team, that is 350+ hours of admin every single
                week.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── 6 Workflows You Can Automate Today ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Workflows"
              title="6 Workflows You Can Automate Today"
              subtitle="These are the six highest-impact automations we build for recruitment agencies. Each one addresses a specific bottleneck with a proven, repeatable solution."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-14 space-y-10">
            {workflows.map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <FadeInOnScroll key={workflow.title} direction="up" delay={0.05}>
                  <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                        <Icon size={24} className="text-accent-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-accent-blue font-mono uppercase tracking-wider mb-1">
                          Workflow {index + 1}
                        </p>
                        <h3 className="text-xl lg:text-2xl font-bold font-heading text-white">
                          {workflow.title}
                        </h3>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                        The Problem
                      </p>
                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        {workflow.problem}
                      </p>
                    </div>

                    {/* How It Works */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                        How It Works
                      </p>
                      <ol className="space-y-3">
                        {workflow.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 text-xs font-bold text-accent-cyan font-heading border border-accent-cyan/20 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-sm text-text-secondary font-body leading-relaxed">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tools & Outcome */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                          Tools Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {workflow.tools.map((tool) => (
                            <span
                              key={tool}
                              className="inline-flex items-center rounded-full bg-bg-tertiary/60 border border-border px-3 py-1 text-xs font-mono text-text-secondary"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                          Expected Outcome
                        </p>
                        <div className="flex items-start gap-2">
                          <TrendingUp
                            size={16}
                            className="text-accent-emerald shrink-0 mt-0.5"
                          />
                          <p className="text-sm text-accent-emerald font-body leading-relaxed">
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

      {/* ── The Technology Stack Explained ── */}
      <section className="py-16 lg:py-24 bg-bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Technology"
              title="The Technology Stack Explained"
              subtitle="You do not need to be technical to understand the tools we use. Here is a plain-language breakdown of each layer in a recruitment automation stack."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-10 space-y-4 text-base text-text-secondary font-body leading-relaxed">
            <FadeInOnScroll direction="up" delay={0.1}>
              <p>
                One of the biggest barriers to adopting automation is the perception that it
                requires a full engineering team. It does not. Modern automation platforms are
                designed for speed, flexibility, and integration — not for writing code from
                scratch. The stack we use for recruitment agencies typically consists of three
                layers: a workflow automation platform to orchestrate processes, an AI
                intelligence layer to handle tasks that require understanding language, and an
                integration layer that connects everything to your existing tools.
              </p>
            </FadeInOnScroll>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <FadeInOnScroll key={tech.name} direction="up" delay={index * 0.08}>
                  <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 border border-accent-cyan/20">
                        <Icon size={18} className="text-accent-cyan" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-heading text-white">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-accent-cyan font-mono">{tech.category}</p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 space-y-4 text-base text-text-secondary font-body leading-relaxed">
              <p>
                The beauty of this stack is that none of these tools require you to hire
                developers or learn to code. The automation platforms provide visual builders
                where workflows are designed by dragging and connecting nodes. The LLMs are
                accessed via simple API calls that the automation platform handles for you. And
                the integrations with your ATS and other tools are pre-built or configured
                once. Your team interacts with the same tools they already use — the automation
                runs silently in the background.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── ROI Calculator Framework ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="ROI"
              title="ROI Calculator Framework"
              subtitle="Use this framework to calculate the financial impact of automation for your agency. The numbers below are based on a 10-person recruitment team."
              align="left"
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 space-y-4 text-base text-text-secondary font-body leading-relaxed">
              <p>
                Automation ROI is straightforward to calculate. For any given task, you
                multiply the hours spent per week by the hourly cost of the staff performing
                it. That gives you your weekly cost for that task. If automation reduces the
                time by 80-95%, the difference is your weekly saving. Multiply by 48 working
                weeks per year, and you have your annual return. Here is what the numbers look
                like for a typical 10-person recruitment agency:
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.15}>
            <div className="mt-10 rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl overflow-hidden">
              {/* Formula */}
              <div className="border-b border-border px-6 py-4 bg-bg-tertiary/30">
                <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-2">
                  Formula
                </p>
                <p className="text-sm font-mono text-accent-blue">
                  Hours/week x Hourly cost = Weekly cost | Automation savings = Weekly cost x
                  Reduction % | Annual saving = Weekly saving x 48 weeks
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Task
                      </th>
                      <th className="px-4 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">
                        Hrs/Week
                      </th>
                      <th className="px-4 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">
                        Cost/Hr
                      </th>
                      <th className="px-4 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">
                        Weekly Cost
                      </th>
                      <th className="px-4 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">
                        Reduction
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">
                        Annual Saving
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiExamples.map((row) => {
                      const weeklyCost = row.hoursPerWeek * row.hourlyCost;
                      const weeklySaving = weeklyCost * (row.automationReduction / 100);
                      const annualSaving = weeklySaving * 48;
                      return (
                        <tr key={row.task} className="border-b border-border/50">
                          <td className="px-6 py-3 text-text-secondary">{row.task}</td>
                          <td className="px-4 py-3 text-text-secondary text-right font-mono">
                            {row.hoursPerWeek}
                          </td>
                          <td className="px-4 py-3 text-text-secondary text-right font-mono">
                            ${row.hourlyCost}
                          </td>
                          <td className="px-4 py-3 text-text-secondary text-right font-mono">
                            ${weeklyCost.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-accent-cyan text-right font-mono">
                            {row.automationReduction}%
                          </td>
                          <td className="px-6 py-3 text-accent-emerald text-right font-mono font-semibold">
                            ${annualSaving.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-bg-tertiary/30">
                      <td className="px-6 py-4 font-semibold text-white">Total (per recruiter)</td>
                      <td className="px-4 py-4 text-white text-right font-mono font-semibold">
                        {roiExamples.reduce((s, r) => s + r.hoursPerWeek, 0)}
                      </td>
                      <td className="px-4 py-4 text-text-muted text-right">—</td>
                      <td className="px-4 py-4 text-white text-right font-mono font-semibold">
                        ${totalWeeklyCost.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-text-muted text-right">—</td>
                      <td className="px-6 py-4 text-accent-emerald text-right font-mono font-bold text-base">
                        ${(totalAnnualSaving).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl glass p-6 text-center">
                <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                  Per Recruiter / Year
                </p>
                <p className="text-2xl font-bold font-heading text-white">
                  ${totalAnnualSaving.toLocaleString()}
                </p>
              </div>
              <div className="rounded-2xl glass p-6 text-center">
                <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                  10-Person Team / Year
                </p>
                <p className="text-2xl font-bold font-heading gradient-text">
                  ${(totalAnnualSaving * 10).toLocaleString()}
                </p>
              </div>
              <div className="rounded-2xl glass p-6 text-center">
                <p className="text-xs text-text-muted font-body uppercase tracking-wider mb-1">
                  Hours Reclaimed / Year
                </p>
                <p className="text-2xl font-bold font-heading text-accent-cyan">
                  {(
                    roiExamples.reduce(
                      (s, r) => s + r.hoursPerWeek * (r.automationReduction / 100),
                      0
                    ) * 48
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-8 text-base text-text-secondary font-body leading-relaxed">
              <p>
                These figures are conservative. They do not account for the revenue upside
                of recruiters spending reclaimed hours on business development and candidate
                outreach. In our experience, agencies that implement automation see not just
                cost savings but a measurable increase in placements per recruiter within the
                first quarter — because their team is finally spending time on revenue-generating
                activity instead of admin.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Getting Started: 30-Day Automation Roadmap ── */}
      <section className="py-16 lg:py-24 bg-bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Roadmap"
              title="Getting Started: 30-Day Automation Roadmap"
              subtitle="You do not need to automate everything at once. This four-week roadmap takes you from audit to live automation, step by step."
              gradient
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 space-y-4 text-base text-text-secondary font-body leading-relaxed">
              <p>
                The biggest mistake agencies make with automation is trying to boil the ocean.
                They attempt to automate every process simultaneously, get overwhelmed by
                complexity, and abandon the project before seeing any results. The right
                approach is surgical: identify the two or three workflows that consume the most
                time, automate those first, prove the ROI, and then expand. The roadmap below
                is the exact process we follow with our clients.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="mt-12 space-y-0">
            {roadmapSteps.map((step, index) => (
              <FadeInOnScroll key={step.week} direction="up" delay={index * 0.08}>
                <div className="relative pl-10 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue/15 border border-accent-blue/30">
                    <span className="text-xs font-bold font-heading text-accent-blue">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center rounded-full bg-accent-blue/10 border border-accent-blue/20 px-3 py-1 text-xs font-semibold font-mono text-accent-blue uppercase tracking-wider">
                        {step.week}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white">{step.title}</h3>
                    </div>

                    <ul className="space-y-2.5">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="text-accent-emerald shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-text-secondary font-body leading-relaxed">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-12 space-y-4 text-base text-text-secondary font-body leading-relaxed">
              <p>
                By the end of week four, you will have live automations saving measurable hours
                every week, a clear baseline to compare against, and a trained team that
                understands how the system works. From there, the roadmap becomes iterative:
                measure results, gather feedback, and automate the next highest-impact workflow.
                Most agencies reach full operational automation within 8-12 weeks following
                this approach.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Summary"
              title="Key Takeaways"
              align="left"
            />
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 rounded-2xl glass p-8 lg:p-10">
              <ul className="space-y-4">
                {[
                  'Recruiters spend over 60% of their time on admin tasks that generate zero direct revenue. This is the single biggest drag on agency profitability.',
                  'Six core workflows — sourcing, scheduling, reporting, engagement, job posting, and compliance — account for the vast majority of wasted time and can all be automated with existing technology.',
                  'The technology stack is mature and accessible. You do not need developers or a technical background. Platforms like n8n and Make provide visual builders, and LLMs handle the intelligence layer.',
                  'ROI is measurable from week one. A 10-person agency can realistically save over six figures annually in staff time alone, before accounting for increased placements.',
                  'Start small, prove value, then expand. The 30-day roadmap takes you from audit to live automation without overwhelming your team.',
                  'Automation does not replace recruiters — it frees them to do the work that actually drives revenue: building relationships, understanding client needs, and closing placements.',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight
                      size={18}
                      className="text-accent-blue shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-text-secondary font-body leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="mt-10 text-base text-text-secondary font-body leading-relaxed">
              <p>
                The agencies that will dominate the next decade are the ones that treat
                automation not as a nice-to-have, but as a core operational capability. The
                technology is ready. The ROI is proven. The only question is whether you start
                now or wait until your competitors have already made the shift.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to Automate Your Recruitment Operations?"
        subtext="Book a free 30-minute automation audit. We will map your workflows, identify the highest-impact automations, and show you exactly how much time and money you can save."
        buttonLabel="Book Your Free Recruitment Audit"
        buttonHref="/contact"
      />
    </>
  );
}
