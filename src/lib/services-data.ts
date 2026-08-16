// lib/services-data.ts
// Full copy for each individual service detail page, keyed by slug so the
// dynamic route [slug]/page.tsx can render any of them from one template.

export type ServiceDetail = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  listLabel: string;
  list: string[];
  cta?: string;
  metaTitle: string;
  metaDescription: string;
};

export const servicesData: ServiceDetail[] = [
  {
    slug: "enterprise-network-engineering",
    navLabel: "Enterprise Network Engineering",
    eyebrow: "Enterprise Network Engineering",
    h1: "Networks engineered for performance, scale, and resilience",
    intro: [
      "A business network should not simply connect systems. It should provide the foundation for reliable operations.",
      "Pinnacle designs and engineers enterprise network environments around performance, availability, security, scalability, and operational simplicity.",
    ],
    listLabel: "What we can help with",
    list: [
      "Network architecture",
      "LAN/WAN architecture",
      "Enterprise routing",
      "Switching infrastructure",
      "Network segmentation",
      "Data center connectivity",
      "Branch connectivity",
      "Cloud connectivity",
      "High availability",
      "Network performance",
      "Infrastructure documentation",
    ],
    cta: "Talk With a Network Engineer",
    metaTitle: "Enterprise Network Engineering Services | Pinnacle Network & Security",
    metaDescription:
      "Professional enterprise network engineering, architecture, optimization, connectivity, and infrastructure solutions from Pinnacle Network & Security.",
  },
  {
    slug: "network-architecture",
    navLabel: "Network Architecture & Design",
    eyebrow: "Network Architecture & Design",
    h1: "Design the architecture before the infrastructure becomes the problem",
    intro: [
      "Poor architecture can create years of operational difficulty.",
      "Pinnacle helps organizations evaluate existing environments and develop architectures that support current requirements while creating room for future growth.",
    ],
    listLabel: "Our architecture process",
    list: [
      "Understand — business requirements and technical dependencies",
      "Map — current infrastructure and communication flows",
      "Identify — architectural weaknesses and security concerns",
      "Design — a target architecture aligned with operational requirements",
      "Plan — implementation phases and migration considerations",
      "Validate — performance, security, resilience, and maintainability",
    ],
    metaTitle: "Network Architecture & Design | Pinnacle Network & Security",
    metaDescription:
      "Enterprise network architecture and design services focused on performance, availability, security, and long-term maintainability.",
  },
  {
    slug: "network-security",
    navLabel: "Network Security",
    eyebrow: "Network Security Engineering",
    h1: "Security that is designed into the network",
    intro: [
      "A secure network is built from multiple layers rather than one defensive control.",
      "Pinnacle evaluates network architecture and security controls together to help organizations improve protection without unnecessarily compromising usability or performance.",
    ],
    listLabel: "Security areas",
    list: [
      "Firewall architecture",
      "Network segmentation",
      "Access control",
      "Secure remote connectivity",
      "Traffic inspection",
      "Security policy",
      "Network visibility",
      "Configuration reviews",
      "Threat prevention",
      "Security architecture",
    ],
    metaTitle: "Network Security Engineering | Pinnacle Network & Security",
    metaDescription:
      "Layered network security engineering — segmentation, access control, traffic inspection, and security architecture for enterprise environments.",
  },
  {
    slug: "zero-trust",
    navLabel: "Zero Trust Architecture",
    eyebrow: "Zero Trust Architecture",
    h1: "Replace implicit trust with deliberate access",
    intro: [
      "Zero Trust is not a product. It is an architectural approach.",
      "NIST's SP 800-207 describes Zero Trust as a model that does not grant implicit trust based simply on network location or ownership.",
      "Pinnacle helps organizations move toward that model by evaluating identity, devices, applications, network access, segmentation, and resource protection.",
    ],
    listLabel: "Areas of focus",
    list: [
      "Identity-aware access",
      "Least-privilege principles",
      "Network segmentation",
      "Secure remote access",
      "Device-aware policies",
      "Application access",
      "Security visibility",
      "Access control",
      "Policy enforcement",
      "Continuous assessment",
    ],
    cta: "Assess Your Zero Trust Readiness",
    metaTitle: "Zero Trust Architecture Services | Pinnacle Network & Security",
    metaDescription:
      "Build a stronger security architecture with Zero Trust strategies focused on identity, access, segmentation, resources, and continuous verification.",
  },
  {
    slug: "palo-alto-firewall",
    navLabel: "Palo Alto Firewall Services",
    eyebrow: "Palo Alto Firewall Engineering",
    h1: "Enterprise firewall engineering built around your architecture",
    intro: [
      "Palo Alto firewalls can play a central role in complex enterprise security architectures.",
      "Pinnacle provides engineering services around firewall deployments, migrations, configurations, policies, optimization, and high-availability environments.",
    ],
    listLabel: "Services",
    list: [
      "Design — develop firewall architecture based on traffic, security, availability, and connectivity requirements",
      "Deployment — implement new firewall environments with controlled configuration and validation",
      "Migration — plan and execute firewall migrations while minimizing operational disruption",
      "Policy optimization — review security rules and identify unnecessary complexity, redundancy, and overly broad access",
      "High availability — design and validate redundant firewall architectures",
      "Optimization — analyze performance and configuration to improve operational efficiency",
    ],
    cta: "Review Your Firewall Environment",
    metaTitle: "Palo Alto Firewall Engineering Services | Pinnacle Network & Security",
    metaDescription:
      "Palo Alto firewall deployment, migration, configuration, optimization, policy, and enterprise security engineering services.",
  },
  {
    slug: "network-modernization",
    navLabel: "Network Modernization",
    eyebrow: "Network Modernization",
    h1: "Move beyond legacy infrastructure",
    intro: [
      "Technology environments evolve. Infrastructure often doesn't.",
      "Pinnacle helps organizations identify where legacy architecture is creating unnecessary operational risk, performance limitations, security exposure, or scalability problems.",
    ],
    listLabel: "Modernization may include",
    list: [
      "Architecture redesign",
      "Hardware refresh planning",
      "Network segmentation",
      "Firewall modernization",
      "Cloud integration",
      "Remote access modernization",
      "High availability",
      "Performance improvements",
      "Security improvements",
      "Migration planning",
    ],
    metaTitle: "Network Modernization Services | Pinnacle Network & Security",
    metaDescription:
      "Modernize legacy network infrastructure with architecture redesign, segmentation, cloud integration, and migration planning.",
  },
  {
    slug: "security-assessment",
    navLabel: "Security Assessment",
    eyebrow: "Network & Security Assessment",
    h1: "Know where your environment stands",
    intro: [
      "Before changing infrastructure, organizations need to understand what they already have.",
      "Pinnacle evaluates network architecture, configurations, connectivity, security controls, and operational practices to identify areas requiring attention.",
    ],
    listLabel: "Assessment areas",
    list: [
      "Architecture — is the network designed appropriately for its current role?",
      "Security — are security controls aligned with the organization's risk?",
      "Access — who can access what, and why?",
      "Segmentation — are critical resources appropriately isolated?",
      "Performance — are infrastructure constraints affecting operations?",
      "Resilience — what happens if a critical component fails?",
    ],
    metaTitle: "Network & Security Assessment | Pinnacle Network & Security",
    metaDescription:
      "A practical network and security assessment with prioritized findings and recommended next steps for your infrastructure.",
  },
  {
    slug: "network-optimization",
    navLabel: "Network Optimization",
    eyebrow: "Network Optimization",
    h1: "Make your existing infrastructure work smarter",
    intro: [
      "Replacing infrastructure isn't always the answer. Sometimes the biggest gains come from understanding what's already deployed.",
      "Pinnacle analyzes network architecture and configurations to identify opportunities for improved performance, reliability, security, and operational efficiency.",
    ],
    listLabel: "Where we look",
    list: [
      "Traffic patterns and bottlenecks",
      "Routing and switching configuration",
      "Firewall and security policy overhead",
      "Redundant or conflicting configurations",
      "Capacity versus actual utilization",
      "Documentation and operational gaps",
    ],
    metaTitle: "Network Optimization Services | Pinnacle Network & Security",
    metaDescription:
      "Analyze and optimize existing network architecture and configurations for improved performance, reliability, and efficiency.",
  },
  {
    slug: "resilience",
    navLabel: "Business Continuity & Resilience",
    eyebrow: "Network Resilience & Business Continuity",
    h1: "Design for the day something goes wrong",
    intro: [
      "Hardware fails. Connections go down. Configurations change. Cyber incidents happen.",
      "Resilient infrastructure is designed with those realities in mind. Pinnacle helps organizations evaluate and strengthen network resilience through redundancy, high availability, recovery planning, and infrastructure design.",
    ],
    listLabel: "Focus areas",
    list: [
      "High availability",
      "Redundant architecture",
      "Failover planning",
      "Recovery strategy",
      "Critical dependency mapping",
      "Network resilience",
      "Disaster recovery coordination",
      "Continuity planning",
    ],
    metaTitle: "Network Resilience & Business Continuity | Pinnacle Network & Security",
    metaDescription:
      "Strengthen network resilience through redundancy, high availability, failover planning, and business continuity engineering.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}