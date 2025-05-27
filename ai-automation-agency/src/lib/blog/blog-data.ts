export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-trends-2025",
    title: "Top AI Automation Trends To Watch in 2025",
    excerpt: "Explore the most influential AI automation trends shaping business transformation in 2025 and beyond.",
    coverImage: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
    date: "April 15, 2025",
    author: {
      name: "David Chen",
      avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      title: "CTO"
    },
    category: "Trends",
    tags: ["AI", "Automation", "Technology Trends", "Future of Work"],
    readTime: "5 min read",
    content: `
# Top AI Automation Trends To Watch in 2025

Artificial Intelligence continues to revolutionize how businesses operate, with automation capabilities advancing at an unprecedented pace. In 2025, several key trends are emerging that will define the next era of AI-powered business transformation.

## 1. Hyper-Personalized Automation

AI systems are evolving beyond simple rule-based automation to deliver highly personalized experiences. In 2025, we're seeing AI solutions that can adapt to individual user behaviors, preferences, and contexts in real-time.

**Real-world application:** Retail brands are implementing hyper-personalized shopping assistants that analyze past purchases, browsing history, and even emotional responses to provide tailored recommendations and automate the purchasing process.

## 2. Autonomous Decision Intelligence

Organizations are increasingly deploying AI systems capable of making complex decisions autonomously. These systems can evaluate multiple variables, predict outcomes, and execute actions without human intervention.

**Real-world application:** Financial institutions are using autonomous decision intelligence to evaluate loan applications, detect fraudulent transactions, and adjust investment strategies in response to market changes—all without human approval for routine cases.

## 3. Collaborative Human-AI Workflows

Rather than replacing human workers, the most effective AI implementations in 2025 are those that create seamless collaboration between AI systems and human employees.

**Real-world application:** Healthcare providers are implementing diagnostic systems where AI identifies potential issues in medical imagery, prioritizes cases, and provides supporting data for human physicians who make the final diagnosis.

## 4. Enhanced Natural Language Capabilities

Natural Language Processing (NLP) has made remarkable advances, enabling more sophisticated interactions between humans and AI systems through conversational interfaces.

**Real-world application:** Customer service platforms now feature AI assistants that can understand complex queries, access relevant information across multiple systems, and resolve issues with minimal human intervention.

## 5. Edge AI Computing

Processing AI workloads at the edge—closer to where data is generated—is becoming increasingly important for applications requiring real-time responses and privacy.

**Real-world application:** Manufacturing facilities are implementing quality control systems that process visual inspection data directly on the production line, enabling immediate detection and correction of defects.

## 6. AI Governance Automation

As AI systems become more prevalent, organizations need robust governance frameworks. Automated tools are emerging to monitor AI systems, ensure compliance with regulations, and prevent ethical issues.

**Real-world application:** Financial services companies are implementing AI governance platforms that automatically monitor algorithm behavior for bias, ensure explainability of decisions, and maintain audit trails for regulatory compliance.

## Conclusion

The AI automation landscape in 2025 reflects a maturation of the technology, with emphasis on creating systems that are more autonomous yet collaborative with humans, more personalized yet governed appropriately. Organizations that successfully implement these trends will gain significant competitive advantages through enhanced efficiency, improved customer experiences, and innovative business models.

As you consider your AI automation strategy, focus on identifying specific business processes where these trends can deliver measurable value, rather than implementing technology for its own sake.
    `
  },
  {
    slug: "case-study-healthcare-predictive-analytics",
    title: "Case Study: How Predictive Analytics is Transforming Healthcare",
    excerpt: "Discover how an integrated healthcare network achieved 45% increase in early interventions using AI-powered predictive analytics.",
    coverImage: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg",
    date: "April 10, 2025",
    author: {
      name: "Maria Rodriguez",
      avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg",
      title: "Head of AI Research"
    },
    category: "Case Study",
    tags: ["Healthcare", "Predictive Analytics", "Machine Learning", "Patient Care"],
    readTime: "7 min read",
    content: `
# Case Study: How Predictive Analytics is Transforming Healthcare

## Challenge

LifeCare Health Network, a system of 12 hospitals serving over 1.5 million patients annually, was facing significant challenges:

- High rates of preventable emergency department visits and hospital readmissions
- Difficulty identifying high-risk patients before conditions became critical
- Inconsistent intervention protocols across different facilities
- Rising costs of critical care services

The organization needed a solution that could help them shift from reactive to proactive care by identifying at-risk patients earlier and implementing preventive interventions.

## Solution

NexusAI partnered with LifeCare to develop a comprehensive predictive analytics system that could identify patients at high risk for adverse health events and recommend appropriate interventions. The solution included:

### Data Integration and Preparation

We integrated data from multiple sources, including:
- Electronic Health Records (EHRs)
- Pharmacy dispensing systems
- Laboratory information systems
- Claims data
- Patient-reported outcomes
- Social determinants of health data

The data underwent thorough cleaning, normalization, and enrichment to ensure quality and consistency.

### Advanced Predictive Modeling

We developed machine learning models focused on predicting several key outcomes:
- Hospital readmission risk
- Disease progression likelihood
- Medication non-adherence probability
- Potential for adverse drug events
- Emergency department utilization risk

The models analyzed over 200 variables for each patient, identifying complex patterns and relationships invisible to human analysts.

### Clinical Workflow Integration

The predictive insights were seamlessly integrated into clinical workflows:
- Daily risk reports for care management teams
- Alert systems for immediate intervention needs
- Integration with existing care management platforms
- Mobile access for providers on the move

### Continuous Learning System

The solution was designed to continuously improve:
- Regular retraining with new outcomes data
- Performance monitoring and model adjustments
- Feedback loops from clinician interventions
- Ongoing enhancement of predictive accuracy

## Results

After 12 months of implementation across the network, LifeCare achieved remarkable results:

- **45% increase in early interventions** for high-risk patients
- **28% reduction in critical care admissions** for targeted conditions
- **$4.2 million saved in annual critical care costs**
- **15% reduction in hospital readmissions**
- **22% improvement in medication adherence** for chronic disease patients

Beyond the quantitative results, the solution transformed care delivery:

- Clinical teams reported feeling empowered by the predictive insights
- Patient satisfaction increased due to more proactive care
- Care coordination improved across different providers
- Healthcare disparities were reduced through earlier identification of at-risk populations

## Key Success Factors

Several factors contributed to the success of the implementation:

1. **Interdisciplinary approach**: Data scientists worked directly with clinicians to develop models that were both statistically sound and clinically relevant.

2. **Explainable AI**: The models provided not just predictions but explanations of key risk factors, building provider trust and enabling targeted interventions.

3. **Change management**: Comprehensive training and support helped clinical teams integrate the new tools into their workflows.

4. **Ethical framework**: Governance processes ensured the AI system was used ethically and equitably across patient populations.

## Conclusion

The LifeCare implementation demonstrates the transformative potential of predictive analytics in healthcare. By shifting from reactive to proactive care, healthcare organizations can significantly improve outcomes while reducing costs.

As predictive analytics continues to evolve, we anticipate even greater impact through more personalized risk models, expanded data sources, and more seamless integration with clinical decision-making processes.
    `
  },
  {
    slug: "ethical-ai-implementation-guidelines",
    title: "Ethical AI Implementation: Guidelines for Responsible Automation",
    excerpt: "Learn the essential principles and practical steps for implementing AI systems that are both effective and ethically sound.",
    coverImage: "https://cdn.pixabay.com/photo/2017/05/07/19/32/robot-2293865_1280.jpg",
    date: "April 3, 2025",
    author: {
      name: "Sarah Johnson",
      avatar: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
      title: "CEO & Founder"
    },
    category: "Best Practices",
    tags: ["AI Ethics", "Responsible AI", "Governance", "Compliance"],
    readTime: "6 min read",
    content: `
# Ethical AI Implementation: Guidelines for Responsible Automation

As artificial intelligence becomes increasingly integrated into business operations, ensuring ethical implementation is not just a moral imperative but a business necessity. Organizations that fail to address ethical considerations risk regulatory penalties, reputational damage, and lost customer trust.

## Core Principles for Ethical AI

### 1. Transparency

**Principle**: AI systems should operate in a way that is explainable and understandable to stakeholders.

**Implementation Guidelines**:
- Document model development processes, including data sources and preprocessing steps
- Use interpretable AI techniques when possible, especially for high-stakes decisions
- Provide clear explanations of how automated decisions are made
- Create layered explanations for different audiences (technical teams, end-users, regulators)

### 2. Fairness and Non-discrimination

**Principle**: AI systems should not create or reinforce unfair bias against individuals or groups.

**Implementation Guidelines**:
- Conduct thorough bias audits of training data
- Test models across different demographic groups
- Establish fairness metrics and thresholds appropriate to your domain
- Implement ongoing monitoring for emergent bias
- Have diverse teams involved in AI development

### 3. Privacy and Data Governance

**Principle**: AI systems should respect user privacy and handle data responsibly.

**Implementation Guidelines**:
- Minimize data collection to what's necessary for the system
- Implement strong data security measures
- Establish clear data retention policies
- Ensure compliance with relevant privacy regulations (GDPR, CCPA, etc.)
- Consider privacy-preserving techniques like federated learning

### 4. Human Oversight and Control

**Principle**: Humans should maintain appropriate oversight and control over AI systems.

**Implementation Guidelines**:
- Implement human review for high-stakes AI decisions
- Design "human in the loop" processes for complex scenarios
- Establish clear escalation paths when AI systems produce unexpected results
- Provide override mechanisms for automated decisions
- Train employees on how to effectively supervise AI systems

### 5. Accountability

**Principle**: Organizations must take responsibility for the actions and impacts of their AI systems.

**Implementation Guidelines**:
- Establish clear lines of responsibility for AI systems
- Create governance structures with executive sponsorship
- Conduct regular AI impact assessments
- Maintain audit trails of system decisions
- Develop incident response procedures for AI failures

## Practical Implementation Framework

### Phase 1: Design and Planning

- Conduct an ethical risk assessment specific to the planned AI application
- Establish clear ethical guidelines for the project
- Identify potential harms and mitigation strategies
- Develop metrics to measure ethical performance
- Ensure diverse perspectives in the planning process

### Phase 2: Development and Testing

- Implement technical safeguards based on identified risks
- Test for bias across different data segments
- Create documentation for model decisions
- Develop monitoring systems for production deployment
- Conduct adversarial testing to identify vulnerabilities

### Phase 3: Deployment and Monitoring

- Implement gradual rollout with close monitoring
- Establish ongoing bias and performance audits
- Collect user feedback with specific attention to ethical concerns
- Maintain a dashboard of ethical metrics
- Regular review by ethics committee or designated oversight group

### Phase 4: Continuous Improvement

- Schedule regular ethical reviews of the system
- Update training data and models to address emerging issues
- Revise policies and procedures based on operational experience
- Conduct refresher training for teams on ethical AI principles
- Stay current with evolving best practices and regulations

## Case Example: Ethical Implementation in Hiring Automation

A financial services company implemented an AI-based resume screening system with the following ethical safeguards:

1. **Transparency**: Candidates were informed about the use of AI in the screening process and the key factors considered.

2. **Fairness**: The company removed potentially biasing information from inputs and tested the system across different demographic groups, making adjustments to ensure equal opportunity.

3. **Human Oversight**: All AI recommendations were reviewed by human recruiters, who could override decisions with documented reasoning.

4. **Accountability**: Regular audits were conducted, comparing hiring outcomes across different groups and making system adjustments as needed.

5. **Ongoing Improvement**: Feedback from both candidates and hiring managers was incorporated into system refinements.

## Conclusion

Ethical AI implementation requires deliberate planning and ongoing attention, but the investment pays dividends through improved system performance, enhanced reputation, reduced regulatory risk, and greater user trust.

Organizations should view ethical considerations not as constraints but as guidance for building better, more sustainable AI solutions. By incorporating these guidelines into your AI development process, you can create systems that not only deliver business value but do so in a way that respects human values and societal well-being.
    `
  },
  {
    slug: "roi-ai-automation-projects",
    title: "Measuring ROI for AI Automation Projects: A Comprehensive Guide",
    excerpt: "Learn how to effectively measure and maximize the return on investment for your organization's AI automation initiatives.",
    coverImage: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    date: "March 28, 2025",
    author: {
      name: "James Wilson",
      avatar: "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg",
      title: "Lead Solutions Architect"
    },
    category: "Strategy",
    tags: ["ROI", "Business Value", "Metrics", "Implementation"],
    readTime: "8 min read",
    content: `
# Measuring ROI for AI Automation Projects: A Comprehensive Guide

Artificial intelligence and automation projects require significant investment in technology, talent, and organizational change. Measuring the return on these investments is crucial for justifying costs, securing future funding, and ensuring strategic alignment. This guide outlines a structured approach to measuring ROI for AI automation initiatives.

## The Challenge of AI ROI

Traditional ROI calculations are straightforward: (Net Profit / Cost of Investment) × 100. However, AI and automation projects present unique challenges:

- Benefits often extend beyond direct cost savings
- Time to value can be longer than traditional IT projects
- Value may manifest in risk reduction or opportunity creation
- Impacts can ripple across multiple business functions
- Some benefits are difficult to quantify (e.g., improved decision quality)

## Comprehensive ROI Framework

### Step 1: Define Clear Value Metrics Before Implementation

**Financial Metrics:**
- Cost reduction (labor, operations, error remediation)
- Revenue increase (higher conversion, increased capacity)
- Working capital improvement (inventory reduction, faster processing)
- Cost avoidance (reduced risk, compliance failures)

**Operational Metrics:**
- Process cycle time reduction
- Throughput increase
- Error rate reduction
- Resource utilization improvement
- Quality improvement

**Strategic Metrics:**
- Customer satisfaction increase
- Employee experience improvement
- Speed to market enhancement
- Competitive differentiation
- Innovation acceleration

### Step 2: Establish Baseline Measurements

Before implementing AI automation, document:
- Current performance on all identified metrics
- Costs of existing processes (fully loaded, including labor, systems, facilities)
- Quality and error rates
- Process cycle times and throughput
- Customer and employee satisfaction

**Pro Tip:** Collect baseline data for at least 3-6 months to account for seasonality and normal variations.

### Step 3: Set Realistic Targets with Timeframes

For each metric, establish:
- Expected improvement magnitude
- Timeframe for realizing benefits
- Confidence level in projections

Be sure to account for:
- Ramp-up period for system refinement
- Learning curve for users
- Phased deployment across business units

### Step 4: Track Direct Implementation Costs

Comprehensive cost tracking should include:
- Technology costs (software, hardware, cloud services)
- Implementation services
- Internal labor for implementation
- Training and change management
- Maintenance and ongoing operations
- Opportunity costs during transition

### Step 5: Measure and Attribute Results

After implementation:
- Collect data on the same metrics established in your baseline
- Isolate the impact of the AI automation from other business changes
- Measure at regular intervals to track progression
- Document both expected and unexpected benefits

**Advanced Approach:** Consider an experimental design (e.g., A/B testing or phased rollout) to better attribute results directly to the AI implementation.

### Step 6: Calculate Multi-dimensional ROI

**Financial ROI:**
- Traditional ROI = (Financial Gains - Implementation Cost) / Implementation Cost × 100
- Payback period = Implementation Cost / Monthly Financial Benefit
- Net Present Value (NPV) using discounted cash flows

**Operational ROI:**
- Process efficiency improvement percentage
- Capacity increase percentage
- Quality improvement percentage

**Strategic ROI:**
- Customer satisfaction improvement
- Employee retention impact
- Market share changes
- New opportunity creation

### Step 7: Continuous Refinement

AI systems improve over time with more data and refinement:
- Update ROI calculations as performance improves
- Identify new value streams as they emerge
- Refine the system to target areas with highest ROI
- Document learnings for future AI initiatives

## Case Example: Customer Service Automation ROI

A telecommunications company implemented an AI-powered customer service automation system with these results:

**Implementation Costs:**
- Technology and development: $850,000
- Training and change management: $150,000
- Integration and deployment: $200,000
- Total: $1,200,000

**Measured Benefits (Annual):**
- Labor cost reduction: $1,600,000 (20% reduction in contact center staffing)
- Reduced customer churn: $900,000 (improved first-call resolution)
- Increased sales through better cross-selling: $500,000
- Total annual benefit: $3,000,000

**ROI Calculation:**
- First-year ROI: 150% [($3,000,000 - $1,200,000) / $1,200,000 × 100]
- Payback period: 4.8 months
- Three-year NPV (with 10% discount rate): $5.2 million

**Non-financial benefits:**
- Customer satisfaction score improved by 15 points
- Average resolution time decreased by 45%
- Agent satisfaction improved by 28% (handling more complex, fulfilling cases)

## Best Practices for AI ROI Measurement

1. **Start with business outcomes, not technology capabilities**
   Define what success looks like in business terms before implementing AI

2. **Involve finance early**
   Partner with financial analysts to establish credible measurement methodologies

3. **Consider the total cost of ownership**
   Include ongoing maintenance, model retraining, and technical debt

4. **Account for indirect benefits**
   Capture improvements in areas like employee satisfaction and customer experience

5. **Adjust expectations for innovation projects**
   Exploratory AI initiatives may have longer payback periods but higher long-term returns

6. **Document assumptions**
   Clearly state all assumptions made in ROI projections for future validation

7. **Create a feedback loop**
   Use ROI insights to continuously improve both the AI system and future investments

## Conclusion

Measuring ROI for AI automation requires a more nuanced approach than traditional technology investments. By establishing clear metrics, measuring baseline performance, tracking comprehensive costs, and evaluating multi-dimensional benefits, organizations can accurately assess the true value of their AI initiatives and make more informed decisions about future investments.

Remember that AI systems typically improve over time as they learn from more data and are refined based on operational experience. ROI calculations should be updated periodically to reflect this evolving value.
    `
  },
  {
    slug: "ai-implementation-pitfalls",
    title: "5 Common AI Implementation Pitfalls and How to Avoid Them",
    excerpt: "Learn from others' mistakes and navigate the challenges of implementing AI solutions successfully in your organization.",
    coverImage: "https://cdn.pixabay.com/photo/2021/08/02/21/10/robot-6517193_1280.jpg",
    date: "March 20, 2025",
    author: {
      name: "David Chen",
      avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      title: "CTO"
    },
    category: "Implementation",
    tags: ["AI Challenges", "Best Practices", "Implementation", "Leadership"],
    readTime: "6 min read",
    content: `
# 5 Common AI Implementation Pitfalls and How to Avoid Them

Despite the tremendous potential of artificial intelligence to transform business operations, many implementation projects fail to deliver expected results. Based on our experience with hundreds of AI initiatives across industries, we've identified five common pitfalls that can derail even the most promising AI projects—and how you can avoid them.

## Pitfall #1: Starting with Technology Instead of Business Problems

**The Pitfall:** Many organizations begin their AI journey by acquiring technology and then searching for applications. This technology-first approach often results in solutions looking for problems rather than addressing real business needs.

**Real-world example:** A manufacturing company invested heavily in computer vision technology before clearly defining use cases, resulting in an expensive system that addressed minor issues while ignoring major operational bottlenecks.

**How to Avoid It:**
- Start with clearly defined business problems and desired outcomes
- Prioritize use cases based on business impact and feasibility
- Evaluate technology options only after understanding the problem space
- Create a scoring matrix for potential AI projects that weights business value heavily

**Success Principle:** "Fall in love with the problem, not the solution."

## Pitfall #2: Underestimating Data Challenges

**The Pitfall:** Organizations frequently underestimate the effort required to prepare data for AI applications. They discover too late that their data is insufficient, low-quality, or inaccessible.

**Real-world example:** A financial services firm's fraud detection AI project stalled for 8 months when they discovered that critical data was siloed across 12 different systems with inconsistent formats and missing fields.

**How to Avoid It:**
- Conduct a thorough data assessment before project kickoff
- Create a realistic data preparation plan with adequate resources
- Address data governance and access issues early
- Consider starting with smaller-scale pilots to identify data challenges
- Budget 60-70% of project time for data preparation in most cases

**Success Principle:** "AI performance is directly proportional to data quality and relevance."

## Pitfall #3: Failing to Manage Change Effectively

**The Pitfall:** Even the most technically successful AI implementations can fail if users don't adopt the new systems or if processes aren't redesigned to leverage AI capabilities.

**Real-world example:** A healthcare provider's clinical decision support system gathered dust because physicians weren't involved in its development and the workflow integration created additional steps rather than streamlining their process.

**How to Avoid It:**
- Involve end-users from the beginning of the project
- Design systems that augment human capabilities rather than just replacing tasks
- Provide comprehensive training and support during transition
- Redesign processes to take full advantage of AI capabilities
- Communicate clearly about how AI will impact roles and responsibilities

**Success Principle:** "The best AI systems are built with users, not just for users."

## Pitfall #4: Neglecting Ethical Considerations

**The Pitfall:** Organizations that fail to address ethical implications of AI systems risk reputational damage, regulatory issues, and erosion of trust among customers and employees.

**Real-world example:** A retail company's customer targeting algorithm unintentionally discriminated against certain demographic groups, leading to public backlash and regulatory scrutiny.

**How to Avoid It:**
- Establish an AI ethics framework and governance process
- Conduct regular bias audits of AI systems
- Ensure transparency in how AI decisions are made
- Create mechanisms for human oversight of automated decisions
- Stay current with evolving regulations and compliance requirements

**Success Principle:** "Ethical AI is not just about avoiding harm but creating systems worthy of trust."

## Pitfall #5: Setting Unrealistic Expectations

**The Pitfall:** Influenced by media hype and vendor promises, organizations often set unrealistic expectations for AI capabilities, timelines, and results, leading to perceived failure and abandoned initiatives.

**Real-world example:** A consumer goods company expected their demand forecasting AI to achieve 95% accuracy immediately, became disillusioned when early results showed 75% accuracy, and canceled the project—not realizing this represented a significant improvement over their previous 60% accuracy.

**How to Avoid It:**
- Educate stakeholders about AI capabilities and limitations
- Set incremental goals with clearly defined success metrics
- Communicate that AI systems improve over time with more data
- Benchmark against current performance, not theoretical perfection
- Plan for continuous improvement rather than one-time implementation

**Success Principle:** "AI is a journey of incremental improvements, not an overnight transformation."

## Building a Foundation for AI Success

To avoid these common pitfalls, organizations should establish a solid foundation for AI implementations:

### Strategic Alignment
- Link AI initiatives directly to strategic business objectives
- Ensure executive sponsorship and understanding
- Define clear success criteria and ROI expectations

### Collaborative Approach
- Form cross-functional teams including business, IT, and analytics
- Involve end-users throughout the development process
- Partner with experienced AI specialists for knowledge transfer

### Agile Implementation
- Start with proof-of-concept projects to demonstrate value
- Use iterative development methodologies
- Learn from early deployments before scaling

### Governance Framework
- Establish data governance processes
- Create AI oversight mechanisms
- Develop policies for responsible AI use

## Conclusion

AI implementation success depends less on the technology itself and more on how organizations approach the implementation process. By avoiding these common pitfalls, organizations can significantly increase their chances of delivering AI solutions that provide meaningful business value and position themselves for long-term success in the age of intelligent automation.

Remember that AI implementation is ultimately about business transformation, not just technology deployment. Organizations that approach AI with this mindset will navigate the challenges more effectively and realize greater value from their investments.
    `
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3) {
  // Sort by date (newest first) and take specified count
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getCategories() {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
}

export function getAllTags() {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}

export function getRelatedPosts(currentSlug: string, count: number = 2) {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  // Find posts with similar tags or categories
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      const aMatches = [...a.tags, a.category].filter(item =>
        [...currentPost.tags, currentPost.category].includes(item)
      ).length;

      const bMatches = [...b.tags, b.category].filter(item =>
        [...currentPost.tags, currentPost.category].includes(item)
      ).length;

      return bMatches - aMatches;
    })
    .slice(0, count);
}
