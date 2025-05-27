import { notFound } from "next/navigation";
import { portfolioCases } from "@/lib/constants/portfolio-data";
import PortfolioDetail from "./PortfolioDetail";

// Generate static paths for all portfolio items
export function generateStaticParams() {
  return portfolioCases.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  // Find the case study with the matching ID
  const caseStudy = portfolioCases.find(item => item.id.toString() === params.id);

  // If case study not found, show 404
  if (!caseStudy) {
    return notFound();
  }

  return <PortfolioDetail caseStudy={caseStudy} />;
}
