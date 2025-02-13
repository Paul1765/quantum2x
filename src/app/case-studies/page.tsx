'use client';

import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: "Creative Edge Marketing",
    imageUrl: "/images/cs1.png",
    isReversed: false,
    problem: "Creative Edge Marketing, a growing digital agency, faced challenges in scaling content production while maintaining quality. Manual content creation was time-consuming, limiting the agency's ability to take on more clients.",
    solution: [
      "Integrated an AI-driven content generation tool to produce high-quality blog posts, social media updates, and ad copy.",
      "Automated content personalization to tailor messaging for different audience segments.",
      "Leveraged AI analytics to optimize content performance and improve engagement."
    ],
    results: [
      "Increased content output by 50%, allowing the agency to serve more clients.",
      "Improved engagement rates by 30% through AI-driven content optimization.",
      "Freed up creative teams to focus on strategy and innovation rather than repetitive tasks."
    ]
  },
  {
    id: 2,
    title: "Smith & Co. Accounting",
    imageUrl: "/images/cs2.png",
    isReversed: true,
    problem: "Smith & Co. Accounting, a mid-sized accounting firm, faced inefficiencies in managing client data, processing invoices, and generating financial reports. Manual data entry and reconciliation were time-consuming, leading to delays and increased operational costs.",
    solution: [
      "Integrated an AI-powered accounting automation system to handle data entry, invoice processing, and bank reconciliations.",
      "Implemented AI-driven financial reporting tools to generate real-time insights and forecasts.",
      "Automated compliance checks and tax calculations to reduce errors and ensure regulatory adherence."
    ],
    results: [
      "Reduced manual processing time by 40%, allowing accountants to focus on advisory services.",
      "Increased accuracy in financial reports, minimizing errors by 95%.",
      "Enhanced client satisfaction through faster response times and improved service delivery."
    ]
  },
  {
    id: 3,
    title: "Bright Utilities",
    imageUrl: "/images/cs3.png",
    isReversed: false,
    problem: "BrightUtilities, a leading utilities provider, faced challenges in handling a high volume of customer inquiries, resulting in long wait times and reduced customer satisfaction.",
    solution: [
      "Deployed an AI-powered virtual assistant to handle common customer queries, such as billing, service outages, and account management.",
      "Implemented AI-driven chatbots and voice assistants to provide 24/7 support and reduce the burden on human agents.",
      "Integrated AI with CRM systems to personalise interactions and predict customer needs."
    ],
    results: [
      "Reduced customer wait times by 40%, improving overall satisfaction.",
      "Automated 70% of routine inquiries, freeing up human agents for complex issues.",
      "Increased efficiency in customer support operations, leading to cost savings and improved service reliability."
    ]
  },
  {
    id: 4,
    title: "GrowthEdge Consulting",
    imageUrl: "/images/cs4.png",
    isReversed: true,
    problem: "GrowthEdge Consulting, a business consultancy firm, faced challenges in B2B prospecting and lead generation. Their traditional methods of identifying and reaching potential clients were time-consuming and yielded inconsistent results.",
    solution: [
      "Integrated an AI-powered lead generation tool to analyze market trends and identify high-potential prospects.",
      "Automated outreach and follow-up processes using AI-driven chatbots and personalized email campaigns.",
      "Leveraged predictive analytics to prioritize leads based on conversion probability and engagement history."
    ],
    results: [
      "Increased lead conversion rate by 25% through targeted AI-driven prospecting.",
      "Reduced time spent on manual lead qualification by 40%, allowing consultants to focus on client engagement.",
      "Enhanced outreach efficiency, resulting in a 30% improvement in response rates from potential clients."
    ]
  }
];

const CaseStudySection = ({ study }: { study: typeof caseStudies[0] }) => {
  const contentOrder = study.isReversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section className={`mb-24 flex flex-col ${contentOrder} items-center gap-12`}>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">{study.title}</h2>
        <h3 className="text-xl text-gray-600 mb-4">Problem:</h3>
        <p className="text-gray-700 mb-4">{study.problem}</p>
        <h3 className="text-xl text-gray-600 mb-4">Solution Implemented:</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          {study.solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-xl text-gray-600 mb-4">Results:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {study.results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={study.imageUrl}
          alt={`${study.title} Case Study`}
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
          priority={study.id === 1}
        />
      </div>
    </section>
  );
};

const SummarySection = () => {
  return (
    <section className="mt-16 mb-24 bg-gray-50 rounded-2xl p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why AI is Transforming Business</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Efficiency & Automation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Automate repetitive tasks</li>
              <li>• Reduce operational costs</li>
              <li>• Increase productivity</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Enhanced Decision Making</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data-driven insights</li>
              <li>• Predictive analytics</li>
              <li>• Risk reduction</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Customer Experience</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 24/7 customer support</li>
              <li>• Personalized interactions</li>
              <li>• Faster response times</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Competitive Advantage</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Market intelligence</li>
              <li>• Innovation capabilities</li>
              <li>• Scalable solutions</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business with AI? Let's discuss how we can help you achieve these benefits.
          </p>
          <Link 
            href="/?section=contact" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Start Your AI Journey Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function CaseStudies() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold mb-16 text-center">Example Case Studies</h1>
        {caseStudies.map(study => (
          <CaseStudySection key={study.id} study={study} />
        ))}
        <SummarySection />
      </div>
    </main>
  );
}
