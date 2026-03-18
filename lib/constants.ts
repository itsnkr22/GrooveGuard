export const SITE_NAME = 'GrooveGuard'
export const SITE_URL = 'https://www.groovegaurd.com'
export const SITE_TAGLINE = 'AI Workflow Automation for Modern Businesses'
export const CONTACT_EMAIL = 'hello@grooveguard.com'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
] as const

export const INDUSTRIES = [
  {
    name: 'Recruitment Agencies',
    slug: 'recruitment',
    href: '/industries/recruitment',
    pain: 'Your recruiters spend 60% of their time on admin, not placements',
    workflows: [
      'Candidate Sourcing & Screening',
      'Interview Scheduling & Follow-ups',
      'Client Reporting & Pipeline Dashboards',
    ],
  },
  {
    name: 'E-Commerce Brands',
    slug: 'ecommerce',
    href: '/industries/ecommerce',
    pain: 'Manual product listings, repetitive support tickets, and scattered data',
    workflows: [
      'Product Listing Automation',
      'Customer Support AI',
      'Inventory & Order Workflow Automation',
    ],
  },
  {
    name: 'Marketing Agencies',
    slug: 'marketing',
    href: '/industries/marketing',
    pain: 'Reporting takes hours, content pipelines stall, leads fall through cracks',
    workflows: [
      'Automated Client Reporting',
      'Content Pipeline Automation',
      'Lead Capture & Nurture Sequences',
    ],
  },
] as const

export const SERVICES = [
  {
    title: 'Workflow Automation',
    description: 'We map your existing processes, identify automation opportunities, and build end-to-end workflows that run without human intervention.',
    useCases: ['Data entry', 'Document processing', 'Scheduling', 'Notifications', 'Reporting'],
    tools: ['n8n', 'Make', 'Zapier', 'Custom integrations'],
  },
  {
    title: 'AI Agent Development',
    description: 'Custom AI agents that handle customer support, lead qualification, content generation, data analysis, and more — powered by the latest LLMs.',
    useCases: ['Customer support bots', 'Sales qualification agents', 'Content generation systems', 'Research assistants'],
    tools: ['GPT-4', 'Claude', 'LangChain', 'Vector databases'],
  },
  {
    title: 'Data & Reporting Automation',
    description: 'We connect your data sources, build real-time dashboards, and generate automated reports with AI-written commentary.',
    useCases: ['Client reporting', 'Internal KPI dashboards', 'Competitive intelligence', 'Performance monitoring'],
    tools: ['APIs', 'Google Sheets', 'Data Studio', 'Custom dashboards', 'LLM-generated insights'],
  },
  {
    title: 'System Integration',
    description: 'We connect your existing tools — CRM, ATS, e-commerce platform, ad platforms, email tools — into a unified automated ecosystem.',
    useCases: ['CRM-to-email automation', 'ATS-to-calendar sync', 'Multi-channel data aggregation'],
    tools: ['REST APIs', 'Webhooks', 'n8n/Make', 'Custom middleware'],
  },
] as const

export const BENEFITS = [
  {
    title: 'Save 40+ Hours/Week',
    description: 'Eliminate repetitive manual tasks across your team',
  },
  {
    title: 'Zero Hiring Overhead',
    description: 'Get automation expertise without full-time AI hires',
  },
  {
    title: 'ROI in 30 Days',
    description: 'See measurable time and cost savings within the first month',
  },
  {
    title: 'Custom, Not Cookie-Cutter',
    description: 'Every workflow is built for YOUR stack and YOUR processes',
  },
  {
    title: 'Enterprise Tools, Agency Speed',
    description: 'We use the same AI stack as top-tier companies, delivered in weeks not quarters',
  },
  {
    title: 'Ongoing Optimisation',
    description: "We don't just build and disappear — we iterate and improve",
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Audit',
    description: 'We analyse your current workflows, identify bottlenecks, and map automation opportunities.',
  },
  {
    step: 2,
    title: 'Build',
    description: 'We design and deploy custom AI workflows using n8n, Make, LLMs, and your existing tools.',
  },
  {
    step: 3,
    title: 'Scale',
    description: 'We optimise, monitor, and expand your automations as your business grows.',
  },
] as const

export const FAQS = [
  {
    question: 'Do I need to be technical?',
    answer: 'No. We handle all the technical work. You just need to tell us about your current processes.',
  },
  {
    question: 'How quickly can you build automations?',
    answer: 'Most workflows are live within 2-4 weeks.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer: 'Yes. Whether you\'re a 5-person agency or a 100-person operation, our workflows scale to fit.',
  },
  {
    question: 'What if I\'m not sure what to automate?',
    answer: 'That\'s exactly what the free audit is for. We\'ll identify the opportunities for you.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. We offer ongoing optimisation retainers to keep your automations running smoothly and expanding over time.',
  },
] as const
