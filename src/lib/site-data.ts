export const siteConfig = {
  name: "Pinnacle Network & Security LLC",
  shortName: "Pinnacle",
  tagline: "Enterprise Network Engineering & Security",
  slogan: "CONNECT. PROTECT. EMPOWER.",
  address: {
    line1: "59 Puebla Drive",
    line2: "Martinsburg, WV 25403",
  },
};

export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const servicesNav: NavChild[] = [
  {
    label: "Enterprise Network Engineering",
    href: "/services/enterprise-network-engineering",
    description: "Architecture, deployment, and performance at scale.",
  },
  {
    label: "Network Architecture & Design",
    href: "/services/network-architecture",
    description: "Design the environment before it becomes the problem.",
  },
  {
    label: "Network Security",
    href: "/services/network-security",
    description: "Security engineered into the network, not bolted on.",
  },
  {
    label: "Zero Trust Architecture",
    href: "/services/zero-trust",
    description: "Access built on identity, not network location.",
  },
  {
    label: "Palo Alto Firewall Services",
    href: "/services/palo-alto-firewall",
    description: "Deployment, migration, and policy optimization.",
  },
  {
    label: "Network Modernization",
    href: "/services/network-modernization",
    description: "Move fragmented, aging infrastructure forward.",
  },
  {
    label: "Security Assessment",
    href: "/services/security-assessment",
    description: "Know where your environment actually stands.",
  },
  {
    label: "Network Optimization",
    href: "/services/network-optimization",
    description: "Make existing infrastructure work smarter.",
  },
  {
    label: "Business Continuity & Resilience",
    href: "/services/resilience",
    description: "Design for the day something goes wrong.",
  },
];

export const industriesNav: NavChild[] = [
  { label: "Healthcare", href: "/industries/healthcare", description: "Reliable connectivity, protected systems." },
  { label: "Financial Services", href: "/industries/financial-services", description: "Confidentiality, availability, resilience." },
  { label: "Government & Public Sector", href: "/industries/government", description: "Secure, resilient public infrastructure." },
  { label: "Manufacturing", href: "/industries/manufacturing", description: "Operational technology, carefully connected." },
  { label: "Professional Services", href: "/industries/professional-services", description: "Distributed teams, protected systems." },
  { label: "Enterprise Organizations", href: "/industries/enterprise", description: "Scalable infrastructure for complex networks." },
];

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: servicesNav },
  { label: "Industries", href: "/industries", children: industriesNav },
  { label: "Approach", href: "/approach" },
  { label: "Resources", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: servicesNav.slice(0, 6),
  company: [
    { label: "About", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const contactOptions = [
  "Network Engineering",
  "Network Security",
  "Palo Alto Firewall",
  "Zero Trust",
  "Network Modernization",
  "Security Assessment",
  "Network Optimization",
  "Other",
];