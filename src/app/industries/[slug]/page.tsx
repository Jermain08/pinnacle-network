import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industriesData, getIndustryBySlug } from "../../../lib/industries-data";
import IndustryDetailTemplate from "../../components/industries/IndustryDetailTemplate";

export function generateStaticParams() {
  return industriesData.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}