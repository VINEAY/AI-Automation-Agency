// Tour steps for different pages of the application

export const homepageTourSteps = [
  {
    target: ".hero-section", // This class will be added to the HeroSection
    title: "Welcome to NexusAI",
    content: "This is our hero section where you can quickly understand our core offerings and value proposition.",
    placement: "bottom"
  },
  {
    target: ".services-preview", // Will be added to the services section
    title: "Our Services",
    content: "Explore our comprehensive AI solutions designed to boost your business efficiency and innovation.",
    placement: "top"
  },
  {
    target: ".portfolio-preview", // Will be added to the portfolio section
    title: "Case Studies",
    content: "Browse through our success stories to see how we've helped businesses like yours achieve remarkable results.",
    placement: "right"
  },
  {
    target: ".testimonials-section", // Will be added to the testimonials section
    title: "Client Testimonials",
    content: "Hear what our clients say about our AI automation services and the impact on their businesses.",
    placement: "left"
  },
  {
    target: ".cta-section", // Will be added to the CTA section
    title: "Get Started",
    content: "Ready to transform your business? Contact us to discuss your needs or book a free consultation.",
    placement: "top"
  },
  {
    target: "nav", // Main navigation
    title: "Navigation",
    content: "Easily access any section of our website through this navigation menu.",
    placement: "bottom"
  }
];

export const servicesTourSteps = [
  {
    target: ".services-hero",
    title: "Our Services",
    content: "Discover our full range of AI automation services tailored to your industry needs.",
    placement: "bottom"
  },
  {
    target: ".service-cards",
    title: "Service Details",
    content: "Each card showcases a specific service with key features and benefits.",
    placement: "top"
  },
  {
    target: ".pricing-link",
    title: "Pricing Information",
    content: "Check out our transparent pricing plans for each service offering.",
    placement: "right"
  }
];

export const portfolioTourSteps = [
  {
    target: ".portfolio-filters",
    title: "Filter Case Studies",
    content: "Use these filters to find case studies most relevant to your industry or needs.",
    placement: "bottom"
  },
  {
    target: ".portfolio-grid",
    title: "Browse Projects",
    content: "Each card represents a successful project with measurable results and outcomes.",
    placement: "top"
  },
  {
    target: ".portfolio-cta",
    title: "Your Success Story",
    content: "Ready to be our next success story? Contact us to discuss your project.",
    placement: "left"
  }
];

export const contactTourSteps = [
  {
    target: ".contact-form",
    title: "Get In Touch",
    content: "Fill out this form to reach our team with your questions or project details.",
    placement: "right"
  },
  {
    target: ".contact-info",
    title: "Contact Information",
    content: "You can also reach us directly using our contact details listed here.",
    placement: "left"
  }
];
