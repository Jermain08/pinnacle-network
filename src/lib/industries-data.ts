export type IndustryDetail = {
  slug: string;
  navLabel: string;
  h1: string;
  intro: string[];
  focusLabel: string;
  focus: string[];
  note?: string;
  metaTitle: string;
  metaDescription: string;
};

export const industriesData: IndustryDetail[] = [
  {
    slug: "healthcare",
    navLabel: "Healthcare",
    h1: "Healthcare network security",
    intro: [
      "Healthcare environments require reliable connectivity while protecting sensitive systems and information.",
      "Pinnacle helps organizations strengthen the underlying network infrastructure through segmentation, secure access, architecture improvements, and security-focused engineering.",
    ],
    focusLabel: "Focus",
    focus: [
      "Network segmentation",
      "Secure access",
      "Firewall architecture",
      "Infrastructure resilience",
      "Network visibility",
      "Security assessment",
      "Modernization",
    ],
    note: "Pinnacle does not claim regulatory certifications such as HIPAA compliance on behalf of clients. Compliance posture depends on each organization's own controls, policies, and covered processes.",
    metaTitle: "Healthcare Network Security | Pinnacle Network & Security",
    metaDescription:
      "Network engineering and security for healthcare organizations — segmentation, secure access, and infrastructure resilience.",
  },
  {
    slug: "financial-services",
    navLabel: "Financial Services",
    h1: "Financial services infrastructure",
    intro: [
      "Financial environments require strong controls around connectivity, access, availability, and security.",
      "Pinnacle helps organizations build network architectures designed to support critical applications and protect sensitive infrastructure.",
    ],
    focusLabel: "Focus",
    focus: [
      "Secure network architecture",
      "Segmentation",
      "Firewall engineering",
      "Access controls",
      "High availability",
      "Security assessments",
      "Network modernization",
    ],
    metaTitle: "Financial Services Network Infrastructure | Pinnacle Network & Security",
    metaDescription:
      "Secure, resilient network architecture for financial services organizations — segmentation, access control, and high availability.",
  },
  {
    slug: "government",
    navLabel: "Government & Public Sector",
    h1: "Government & public sector",
    intro: [
      "Government organizations depend on infrastructure that must remain secure, available, and manageable.",
      "Pinnacle can support network engineering and security initiatives involving complex environments, distributed users, secure connectivity, and infrastructure modernization.",
    ],
    focusLabel: "Focus",
    focus: [
      "Network architecture",
      "Secure connectivity",
      "Segmentation",
      "Firewall engineering",
      "Infrastructure modernization",
      "Resilience",
      "Security architecture",
    ],
    metaTitle: "Government & Public Sector Network Engineering | Pinnacle Network & Security",
    metaDescription:
      "Secure, resilient network infrastructure and modernization support for government and public sector organizations.",
  },
  {
    slug: "manufacturing",
    navLabel: "Manufacturing",
    h1: "Manufacturing network engineering",
    intro: [
      "Manufacturing environments increasingly connect business systems, production systems, facilities, and operational technologies.",
      "That connectivity needs to be carefully designed. Pinnacle helps organizations create architectures that balance operational availability with security and segmentation requirements.",
    ],
    focusLabel: "Focus",
    focus: [
      "OT/IT network segmentation",
      "Production-connected infrastructure",
      "Secure remote access",
      "Firewall architecture",
      "Network resilience",
      "Infrastructure modernization",
    ],
    metaTitle: "Manufacturing Network Engineering | Pinnacle Network & Security",
    metaDescription:
      "Network architecture for manufacturing organizations balancing operational availability with security and segmentation.",
  },
  {
    slug: "professional-services",
    navLabel: "Professional Services",
    h1: "Professional services network security",
    intro: [
      "Professional services organizations depend on distributed teams, cloud applications, and business-critical systems staying connected and protected.",
      "Pinnacle helps secure distributed teams, applications, cloud resources, and business-critical systems with practical, right-sized network architecture.",
    ],
    focusLabel: "Focus",
    focus: [
      "Secure remote access",
      "Cloud connectivity",
      "Access control",
      "Firewall architecture",
      "Network segmentation",
      "Security assessment",
    ],
    metaTitle: "Professional Services Network Security | Pinnacle Network & Security",
    metaDescription:
      "Secure distributed teams, applications, and cloud resources with network architecture built for professional services firms.",
  },
  {
    slug: "enterprise",
    navLabel: "Enterprise Organizations",
    h1: "Enterprise organizations",
    intro: [
      "Organizations managing complex networks, multiple locations, and evolving technology environments need infrastructure engineered to scale.",
      "Pinnacle engineers scalable infrastructure for enterprise organizations navigating growth, consolidation, and modernization.",
    ],
    focusLabel: "Focus",
    focus: [
      "Multi-site network architecture",
      "Scalable infrastructure design",
      "Firewall and security engineering",
      "Network modernization",
      "High availability",
      "Ongoing optimization",
    ],
    metaTitle: "Enterprise Network Engineering | Pinnacle Network & Security",
    metaDescription:
      "Scalable network engineering for enterprise organizations managing complex, multi-site infrastructure.",
  },
];

export function getIndustryBySlug(slug: string) {
  return industriesData.find((i) => i.slug === slug);
}