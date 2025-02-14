import Image from 'next/image';
import Link from 'next/link';

const Benefits = () => {
  const challenges = [
    {
      title: "Struggling to Stay Ahead of Competitors",
      description: "Are you finding it difficult to leverage AI to gain a competitive edge in your industry?"
    },
    {
      title: "Manual Admin Processes Eating Up Time",
      description: "Spending too much time on repetitive tasks that could easily be automated with AI?"
    },
    {
      title: "Confused About AI Implementation",
      description: "Unsure where to start or how to integrate AI into your current systems?"
    },
    {
      title: "Lack of Expertise in AI",
      description: "Don't have the in-house knowledge or resources to deploy AI effectively?"
    },
    {
      title: "High Costs of Inefficiency",
      description: "Losing money due to outdated processes or untapped AI-driven optimization?"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/images/cta1.jpg"
              alt="Business Challenges"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black tracking-tight">
              Are These Challenges Holding You Back?
            </h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-black">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/#contact"
                className="group inline-flex items-center px-6 py-3.5 border-2 border-black 
                text-base font-medium text-white bg-black hover:bg-white hover:text-black 
                transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Transform Your Business Today
                <svg 
                  className="ml-2 -mr-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
