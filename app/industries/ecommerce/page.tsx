import { generatePageMetadata } from '@/lib/metadata';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import WorkflowDetail from '@/components/sections/WorkflowDetail';
import ROISummary from '@/components/sections/ROISummary';
import CTASection from '@/components/sections/CTASection';

export const metadata = generatePageMetadata({
  title: 'AI Automation for E-Commerce Brands | Workflow Solutions',
  description:
    'Automate product listings, customer support, and inventory management for e-commerce brands. Save 40+ hours/week with custom AI workflows.',
  path: '/industries/ecommerce',
});

const painPoints = [
  'Product listings are manually created, inconsistent, and slow to publish',
  'Customer support tickets pile up — response times lag behind expectations',
  'Inventory tracking across multiple channels is error-prone',
  'Review and feedback management is reactive, not proactive',
  'Order processing and fulfilment coordination involves too many manual handoffs',
  'Marketing campaigns require manual audience segmentation and copy creation',
];

const workflows = [
  {
    title: 'AI-Powered Product Listing Automation',
    problem:
      'Creating product titles, descriptions, bullet points, and SEO tags for hundreds or thousands of SKUs is a massive manual effort.',
    steps: [
      'Product data (specs, images, category) is ingested from a spreadsheet, PIM, or supplier feed',
      'LLM generates optimised product titles, descriptions, and bullet points tailored to each marketplace (Amazon, Shopify, WooCommerce)',
      'SEO keywords are researched and embedded automatically',
      'Listings are pushed to the relevant marketplace via API',
    ],
    tools: ['n8n/Make', 'LLM', 'Marketplace APIs (Amazon SP-API, Shopify API)', 'PIM Integration'],
    outcome:
      'Product listings created 10x faster. Consistent quality and SEO optimisation across all channels.',
  },
  {
    title: 'AI Customer Support Agent',
    problem:
      'Support teams are overwhelmed by repetitive queries — order status, returns, sizing, shipping — while complex issues wait in queue.',
    steps: [
      'Customer message arrives via email, chat widget, or social media DM',
      'AI agent classifies the query (order status, return request, product question, complaint, etc.)',
      'For routine queries: AI drafts and sends a response using order data from your system',
      'For complex queries: AI escalates to a human agent with full context summary',
      'All interactions are logged and analysed for pattern identification',
    ],
    tools: ['n8n/Make', 'LLM', 'Helpdesk Integration (Zendesk, Freshdesk, Gorgias)', 'Order Management API'],
    outcome:
      '70% of support tickets resolved without human intervention. Average response time drops from hours to seconds.',
  },
  {
    title: 'Inventory & Order Workflow Automation',
    problem:
      'Managing inventory levels across multiple channels, triggering reorders, and coordinating fulfilment involves spreadsheets, manual checks, and human error.',
    steps: [
      'Inventory levels are synced in real-time across all sales channels',
      'When stock hits a threshold, AI generates a purchase order draft and alerts the procurement team',
      'Order fulfilment is automatically routed to the optimal warehouse/3PL based on customer location',
      'Shipping updates and tracking are pushed to the customer automatically',
    ],
    tools: ['n8n/Make', 'ERP/Inventory System API', '3PL Integration', 'Email/SMS'],
    outcome: 'Zero stockouts from oversight. Fulfilment routing optimised automatically.',
  },
  {
    title: 'Review & Feedback Management',
    problem:
      'Customer reviews are scattered across platforms, positive reviews aren\'t leveraged, and negative reviews aren\'t addressed quickly.',
    steps: [
      'Reviews are aggregated from all platforms (Amazon, Google, Trustpilot, Shopify)',
      'AI analyses sentiment and categorises feedback (product quality, shipping, service, etc.)',
      'Negative reviews trigger immediate alerts with suggested response drafts',
      'Positive reviews are flagged for social proof usage (testimonials, UGC campaigns)',
      'Weekly sentiment report is generated automatically',
    ],
    tools: ['n8n/Make', 'Review Platform APIs', 'LLM', 'Dashboard (Google Sheets/Looker)'],
    outcome:
      '90% faster response to negative reviews. Continuous product and service improvement from AI-analysed feedback.',
  },
  {
    title: 'Dynamic Email & SMS Marketing Automation',
    problem:
      'Email campaigns require manual audience segmentation, copy writing, and send scheduling — and often aren\'t personalised enough.',
    steps: [
      'Customer purchase/browse behaviour is analysed to create dynamic segments',
      'LLM generates personalised email/SMS copy for each segment (abandoned cart, post-purchase, win-back, new arrivals)',
      'Send time is optimised per recipient based on historical engagement data',
      'A/B test variations are generated and deployed automatically',
      'Campaign performance feeds back into the segmentation model',
    ],
    tools: ['n8n/Make', 'LLM', 'Email Platform (Klaviyo, Mailchimp)', 'E-commerce Platform API'],
    outcome: '35% increase in email revenue. Fully personalised campaigns running on autopilot.',
  },
  {
    title: 'Competitor Price & Market Intelligence',
    problem:
      'Monitoring competitor pricing, new product launches, and market trends is either not done or done sporadically by a human.',
    steps: [
      'Competitor product pages and pricing are monitored daily via automated scraping',
      'AI identifies price changes, new launches, and trend shifts',
      'Alerts fire when a competitor undercuts on key SKUs',
      'Weekly intelligence report is generated with pricing recommendations',
    ],
    tools: ['n8n/Make', 'Web Scraping', 'LLM', 'Dashboard', 'Alerting'],
    outcome:
      'Always-on competitive intelligence. Data-driven pricing decisions without manual research.',
  },
];

const roiMetrics = [
  { label: 'Product Listing Time', before: '10 hrs/SKU', after: '1 hr/SKU' },
  { label: 'Support Response', before: '4+ hours', after: 'Seconds' },
  { label: 'Inventory Errors', before: '15% error rate', after: 'Near zero' },
];

export default function EcommercePage() {
  return (
    <>
      <Hero
        headline="AI Automation for E-Commerce Brands"
        subheadline="From product listings to customer support to inventory management — we automate the operational backbone of your e-commerce business."
        primaryCTA={{ label: 'Book Your E-Commerce Automation Audit', href: '/contact' }}
        showWorkflow
      />

      <PainPoints
        title="The E-Commerce Operations Bottleneck"
        points={painPoints}
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
              6 AI Workflows That Transform E-Commerce Operations
            </h2>
            <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
              Purpose-built automations that address your specific pain points — from
              listings to support and everything in between.
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
        headline="Your E-Commerce Brand Deserves an Operations Team That Never Sleeps."
        subtext="Book a free 30-minute automation audit. We'll map your operations and show you exactly where AI can save time and money."
        buttonLabel="Book Your Free E-Commerce Audit →"
        buttonHref="/contact"
      />
    </>
  );
}
