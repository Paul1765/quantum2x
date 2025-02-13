import Image from 'next/image';

const Solutions = () => {
  const solutions = [
    {
      title: "AI-Powered Marketing",
      description: "Automate market research and content creation with AI to stay ahead of the competition.",
      bullets: [
        "Generate data-driven insights for smarter marketing strategies.",
        "Automate content creation to boost engagement and efficiency.",
        "Optimize campaigns with AI-powered analysis and recommendations."
      ],
      icon: "/file.svg"
    },
    {
      title: "AI-Enhanced Lead Generation",
      description: "Streamline workflows and personalize customer interactions using AI-driven automation.",
      bullets: [
        "Automate lead qualification and follow-ups for better conversions.",
        "Personalize customer interactions at scale with AI insights.",
        "Enhance your sales pipeline with intelligent automation."
      ],
      icon: "/window.svg"
    },
    {
      title: "AI for Administration Efficiency",
      description: "Free up valuable time by automating routine administrative tasks with AI solutions.",
      bullets: [
        "Reduce manual effort with AI-powered automation tools.",
        "Improve document management and data processing efficiency.",
        "Enable teams to focus on strategic, high-value work."
      ],
      icon: "/globe.svg"
    },
    {
      title: "AI-Driven Data Analysis",
      description: "Leverage AI to interpret complex data and generate actionable insights for smarter decision-making.",
      bullets: [
        "Identify key trends and patterns with AI-powered analytics.",
        "Generate automated reports with real-time business insights.",
        "Make data-driven decisions with confidence and precision."
      ],
      icon: "/vercel.svg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">
            How I Can Help You Harness the Power of AI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            AI is transforming businesses across industries. Here's how I can help you stay ahead of the curve:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-600 mt-auto">
                  {solution.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="group inline-flex items-center px-6 py-3.5 border-2 border-black 
            text-base font-medium text-white bg-black hover:bg-white hover:text-black 
            transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Started with AI Solutions
            <svg 
              className="ml-2 -mr-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
