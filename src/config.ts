export type SocialLink = {
  label: "WhatsApp" | "Telegram" | "Mail" | "LinkedIn";
  href: string;
};

export type CaseStudy = {
  title: string;
  tag: string;
  architecture: string;
  stack: string[];
  impact: string;
};

export type PortfolioConfig = {
  name: string;
  headline: string;
  roleRotation: string[];
  location: string;
  summary: string;
  cvHref: string;
  socialLinks: SocialLink[];
  cases: CaseStudy[];
};

export const portfolioConfig: PortfolioConfig = {
  name: "Daniil Khusnullin",
  headline: "Backend Engineer focused on high-load systems, AI integrations, and clean architecture.",
  roleRotation: [
    "Backend Engineer (Python, Go)",
    "Distributed Systems Developer (gRPC, Kafka, RabbitMQ, Redis)",
    "AI Infrastructure Engineer (OpenAI, Agents, RAG)",
  ],
  location: "Limassol, Cyprus",
  summary:
    "I design and ship production-grade systems that move money, data, and decisions. The core focus is scalable architecture, operational visibility, and measurable business impact.",
  cvHref: "https://drive.google.com/drive/folders/16gH3sZGFfgYxjhwH77d_vr3Qhh8UHXSF?usp=sharing",
  socialLinks: [
    { label: "WhatsApp", href: "https://wa.me/77761271436" },
    { label: "Telegram", href: "https://t.me/iMontesyma" },
    { label: "Mail", href: "mailto:daniilkhusnullin@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daniil-khusnullin-910207321" },
  ],
  cases: [
    {
      title: "NevoA Crypto Fintech Platform",
      tag: "High-load Fintech",
      architecture:
        "Event-driven microservice ecosystem (10+ services) with RabbitMQ RPC, resilient service boundaries, and deep observability across KYB, Auth, and Analytics domains.",
      stack: [
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "MongoDB",
        "Docker",
        "ELK Stack",
        "Prometheus",
        "Grafana",
        "OpenTelemetry",
      ],
      impact:
        "Executed platform-wide refactoring that improved end-to-end performance by about 50% and accelerated cross-service incident resolution up to 10x.",
    },
    {
      title: "AI Task Intelligence Assistant",
      tag: "AI Automation",
      architecture:
        "Modular assistant architecture with parsing, scheduling, and notifications separated into async workers and queue-driven flows for stable peak-load processing.",
      stack: [
        "OpenAI API",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Nginx",
        "CI/CD",
      ],
      impact:
        "Automated extraction of tasks, deadlines, and statuses from text, voice, and images, reducing delivery time by around 30% and improving release reliability with CI/CD.",
    },
    {
      title: "AI Onboarding System for Retail",
      tag: "AI + Product",
      architecture:
        "Solo-built conversational onboarding platform with knowledge-base integration, admin moderation tooling, and analytics feedback loop for HR operations.",
      stack: ["OpenAI API", "PostgreSQL", "Redis", "Docker", "Admin Panel", "Analytics"],
      impact:
        "Cut onboarding friction through instant natural-language Q&A and structured dialog flows, enabling faster adaptation for new employees at scale.",
    },
    {
      title: "Observability and Incident Response Platform",
      tag: "Reliability Engineering",
      architecture:
        "Unified telemetry pipeline for logs, metrics, and traces with standardized instrumentation and secure log sanitization across distributed services.",
      stack: ["OpenTelemetry", "Prometheus", "Grafana", "Loki", "ELK Stack", "Docker", "Linux"],
      impact:
        "Reduced mean time to detect and debug incidents by up to 10x while improving audit readiness and financial data protection.",
    },
  ],
};
