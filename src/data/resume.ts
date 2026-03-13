export const personalInfo = {
  name: "Srujan G V",
  title: "Software Development Engineer",
  location: "Bangalore, Karnataka",
  phone: "+919972807388",
  email: "srujangv05@gmail.com",
  linkedin: "https://linkedin.com/in/srujangv",
  github: "https://github.com/Srujangv05",
  summary:
    "Software Engineer specializing in backend development with 2.5 years of experience building scalable platforms and applications with a strong focus on efficiency, reliability, and user impact. Proven ability to own end-to-end product development in startup environments and deliver production-ready systems.",
};

export interface Skill {
  name: string;
  category: "language" | "tool" | "framework" | "database";
}

export const skills: Skill[] = [
  // Languages
  { name: "Java", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Go", category: "language" },
  { name: "C++", category: "language" },
  { name: "Python", category: "language" },
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },
  // Tools
  { name: "VS Code", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Android Studio", category: "tool" },
  // Frameworks
  { name: "Node.js", category: "framework" },
  { name: "Express.js", category: "framework" },
  { name: "React.js", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "GitHub Actions", category: "framework" },
  { name: "AWS", category: "framework" },
  // Databases
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
];

export const skillCategories = [
  { key: "all" as const, label: "All" },
  { key: "language" as const, label: "Languages" },
  { key: "framework" as const, label: "Frameworks" },
  { key: "database" as const, label: "Databases" },
  { key: "tool" as const, label: "Tools" },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer - Backend",
    company: "Dealberg Technologies Pvt Ltd",
    location: "Bangalore, Karnataka",
    period: "September 2024 – Present",
    highlights: [
      "Led a cross-functional team of 6 to build and scale an internal B2B e-commerce, RFQ management, and Vendor platform serving multiple organizations.",
      "Managed end-to-end SDLC for 6+ backend systems including architecture design, implementation, testing, CI/CD deployment, and documentation.",
      "Designed a module-based access control system using JWT authentication and role-based authorization, securing 10+ internal modules. Built an AES-256 encryption layer for 5+ external integrations.",
      "Devised a scalable multi-tenant file storage architecture enabling secure organization-level document isolation.",
      "Led development of Automated Reporting, RFQ management, and Buyer-Vendor reconciliation systems, reducing internal team work by 40%.",
      "Owned backend architecture decisions, sprint planning, code reviews, and production releases. Increased delivery velocity with structured sprint tracking.",
      "Architected modular integration framework enabling plug-and-play third-party API integrations. Optimized DB queries using joins, indexing, and prepared statements.",
    ],
  },
  {
    title: "Backend Development Engineer",
    company: "Dealberg Technologies Pvt Ltd",
    location: "Bangalore, Karnataka",
    period: "September 2023 – August 2024",
    highlights: [
      "Created a scalable API architecture with Express and Node.js, reducing data processing time by 60% from MySQL & Redis.",
      "Reduced loading time by 50% by refining REST APIs, resulting in improved user experience.",
      "Coordinated with brands to develop a microsite, resulting in a 15% increase in cross-promotion effectiveness and expanded reach to 10,000+ customers.",
      "Enforced GitHub Actions CI/CD pipeline, achieving a 40% reduction in deployment errors and faster release cycles.",
      "Built comprehensive integrations for Cashfree, PhonePe, Zoho, and Holisol (WMS), enhancing reporting accuracy by 30%.",
      "Dockerized backend services and optimized container images for efficient, consistent deployments across environments.",
    ],
  },
];

export interface Project {
  title: string;
  techStack: string[];
  highlights: string[];
  color: string;
}

export const projects: Project[] = [
  {
    title: "Rewards and Recognition Platform",
    techStack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    highlights: [
      "Multi-tenant SaaS platform supporting 13,000+ users for managing employee recognition programs.",
      "Tenant-level data isolation with scoped RBAC and schema-level partitioning.",
      "Subscription-ready backend with plan-based feature gating and usage tracking.",
      "Configurable reward engine with custom point rules, approval workflows, and budget limits.",
      "Distributed points-ledger system ensuring ACID-compliant operations with audit traceability.",
      "Organization-level analytics dashboard for engagement rate, reward distribution, and participation trends.",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Gig Work Management Application",
    techStack: ["Next.js", "PostgreSQL", "Vercel"],
    highlights: [
      "Full-stack gig/workforce management platform with multi-role workflows (Admin, Manager, Employee).",
      "Scalable relational data models for organizations, departments, users, roles, and weekly reporting.",
      "Modular service layers engineered for future integrations.",
      "Dashboards providing centralized access to performance data across departments.",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI-Powered Business Intelligence Assistant",
    techStack: ["Python", "Ollama", "MySQL"],
    highlights: [
      "AI-driven analytics layer for B2B e-commerce, leveraging Ollama for natural language database queries.",
      "Automated insights on revenues, margins, losses, and growth trends for non-technical users.",
      "Predictive modeling to forecast account performance based on historical order data.",
      "Anomaly detection, margin analysis, and revenue forecasting features.",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "B2B E-commerce Platform",
    techStack: ["Node.js", "Express.js", "MySQL", "Redis", "AWS"],
    highlights: [
      "Robust backend architecture with user-friendly admin and vendor interfaces; reduced response times by 40% during peak hours.",
      "Integrated PhonePe, Cashfree, and Zoho, improving payment processing efficiency by 30%.",
      "Automated analytical, financial, and bidding processes, increasing operational efficiency by 35%.",
      "Real-time order and shipment tracking modules improving visibility across warehouses.",
      "Excel-based report generation system improving reporting efficiency by 50%.",
    ],
    color: "from-orange-500 to-red-600",
  },
];

export const education = {
  institution: "Atria Institute of Technology",
  degree: "Bachelor of Engineering in Information Science",
  cgpa: "8.39/10",
  period: "June 2019 – May 2023",
  location: "Bangalore, Karnataka",
};
