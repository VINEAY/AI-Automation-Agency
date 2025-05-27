import { Metadata } from "next";
import CareersPage from "./CareersPage";

export const metadata: Metadata = {
  title: "Careers | NexusAI - AI Automation Agency",
  description: "Join our team of AI innovators and help shape the future of automation. Explore exciting career opportunities at NexusAI.",
};

export default function Page() {
  return <CareersPage />;
}
