// Define TypeScript interfaces for the portfolio case studies
export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  title: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  client: string;
  industry: string;
  duration: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: CaseStudyTestimonial;
}

// Portfolio case studies data
export const portfolioCases: CaseStudy[] = [
  {
    id: 1,
    title: "Retail Inventory Optimization",
    category: "analytics",
    client: "GlobalMart Retail",
    industry: "Retail",
    duration: "6 Months",
    image: "https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-788002_1280.jpg",
    challenge: "GlobalMart was struggling with inventory management across 500+ stores, leading to $15M in annual losses from stockouts and overstocking.",
    solution: "Implemented an AI-powered inventory forecasting system that analyzed historical sales, seasonal trends, local events, and weather patterns to predict optimal inventory levels.",
    results: [
      "Reduced inventory costs by 23%",
      "Decreased stockouts by 35%",
      "Improved inventory turnover by 19%",
      "ROI achieved within 4 months"
    ],
    technologies: ["Predictive Analytics", "Machine Learning", "Cloud Computing", "Data Visualization"],
    testimonial: {
      quote: "The AI inventory system has transformed our operations. We're now able to predict demand with remarkable accuracy, even for seasonal and promotional products.",
      author: "Maria Chen",
      title: "VP of Supply Chain, GlobalMart Retail"
    }
  },
  {
    id: 2,
    title: "Financial Document Processing Automation",
    category: "automation",
    client: "SecureBank Financial",
    industry: "Banking",
    duration: "8 Months",
    image: "https://cdn.pixabay.com/photo/2017/10/18/10/30/banner-2864150_1280.jpg",
    challenge: "SecureBank was processing over 10,000 loan applications monthly, with each taking 12+ hours for manual document review and data extraction.",
    solution: "Developed an intelligent document processing system using computer vision and NLP to automatically extract, validate, and process information from loan applications and supporting documents.",
    results: [
      "Reduced processing time from 12 hours to 10 minutes per application",
      "Achieved 99.2% data extraction accuracy",
      "Cut operational costs by $4.8M annually",
      "Increased application throughput by 67%"
    ],
    technologies: ["Computer Vision", "Natural Language Processing", "OCR", "Machine Learning"],
    testimonial: {
      quote: "This solution has been revolutionary for our loan department. The speed and accuracy are beyond what we thought possible, and our team can now focus on customer relationships rather than paperwork.",
      author: "James Wilson",
      title: "CTO, SecureBank Financial"
    }
  },
  {
    id: 3,
    title: "Customer Support AI Assistant",
    category: "chatbots",
    client: "TelcoMax Communications",
    industry: "Telecommunications",
    duration: "5 Months",
    image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg",
    challenge: "TelcoMax was facing customer satisfaction issues with 15,000+ daily support inquiries, long wait times, and inconsistent resolution quality.",
    solution: "Created an AI-powered virtual assistant capable of understanding complex queries, accessing customer accounts, troubleshooting technical issues, and seamlessly transferring to human agents when necessary.",
    results: [
      "70% of support inquiries resolved by AI assistant",
      "Customer satisfaction improved from 78% to 92%",
      "Average response time reduced from 15 minutes to 20 seconds",
      "Support operating costs reduced by 35%"
    ],
    technologies: ["Natural Language Understanding", "Dialog Management", "Sentiment Analysis", "Knowledge Graph"],
    testimonial: {
      quote: "Our customers love the instant, 24/7 support. The AI assistant handles routine questions brilliantly while recognizing when to involve our human team—it's the perfect balance.",
      author: "Sarah Johnson",
      title: "Customer Experience Director, TelcoMax"
    }
  },
  {
    id: 4,
    title: "Predictive Healthcare Analytics",
    category: "ml",
    client: "LifeCare Health Network",
    industry: "Healthcare",
    duration: "12 Months",
    image: "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
    challenge: "LifeCare needed to identify high-risk patients earlier to prevent costly emergency interventions and improve patient outcomes across their network of 12 hospitals.",
    solution: "Developed a machine learning model analyzing 200+ variables from patient records, including medical history, demographics, lab results, medication adherence, and lifestyle factors to predict risk levels and recommend interventions.",
    results: [
      "Early interventions increased by 45%",
      "Reduced critical care admissions by 28%",
      "Saved $4.2M in annual critical care costs",
      "Improved patient outcomes with 15% reduction in hospital readmissions"
    ],
    technologies: ["Predictive Modeling", "Data Mining", "Healthcare Analytics", "FHIR Integration"],
    testimonial: {
      quote: "The predictive system has changed how we approach patient care. We're now proactively identifying risks and intervening before conditions worsen—it's saving lives and resources.",
      author: "Dr. Michael Roberts",
      title: "Chief Medical Information Officer, LifeCare"
    }
  },
  {
    id: 5,
    title: "Manufacturing Quality Control System",
    category: "custom",
    client: "PrecisionTech Manufacturing",
    industry: "Manufacturing",
    duration: "9 Months",
    image: "https://cdn.pixabay.com/photo/2017/08/25/11/43/bitcoin-2679692_1280.jpg",
    challenge: "PrecisionTech was experiencing 7% defect rates in their electronics assembly line, resulting in high rework costs and customer returns.",
    solution: "Implemented a computer vision-based quality inspection system that monitored the assembly process in real-time, detecting defects and anomalies invisible to the human eye.",
    results: [
      "Reduced defect rate from 7% to 0.5%",
      "Decreased customer returns by 83%",
      "Cut quality control staffing costs by 45%",
      "Achieved 100% inspection coverage vs. previous 30% sampling"
    ],
    technologies: ["Computer Vision", "Edge Computing", "IoT Sensors", "Custom AI Algorithms"],
    testimonial: {
      quote: "The system catches defects we never could before. Our quality metrics have improved dramatically, and we've significantly reduced waste while increasing customer satisfaction.",
      author: "Robert Chang",
      title: "VP of Manufacturing, PrecisionTech"
    }
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    category: "infrastructure",
    client: "GlobalLogistics International",
    industry: "Logistics",
    duration: "10 Months",
    image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
    challenge: "GlobalLogistics needed to optimize routing and delivery schedules across 40+ countries with complex constraints including weather, traffic, customs delays, and local regulations.",
    solution: "Built a comprehensive AI-powered supply chain optimization platform incorporating real-time data feeds, predictive analytics, and machine learning algorithms to dynamically adjust routing and scheduling.",
    results: [
      "15% reduction in fuel costs",
      "22% improvement in delivery time accuracy",
      "18% increase in vehicle utilization",
      "Annual savings of $12.4M on operational costs"
    ],
    technologies: ["Reinforcement Learning", "Real-time Analytics", "Distributed Computing", "Geospatial Analysis"],
    testimonial: {
      quote: "This solution has given us capabilities we never thought possible. We can now respond to disruptions proactively and optimize our global network in real-time, giving us a significant competitive advantage.",
      author: "David Martinez",
      title: "Global Operations Director, GlobalLogistics"
    }
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "chatbots", label: "Conversational AI" },
  { id: "ml", label: "Machine Learning" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "custom", label: "Custom AI" },
];
