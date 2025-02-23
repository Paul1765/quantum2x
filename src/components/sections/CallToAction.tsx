import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => {
  const benefits = [
    "Get a personalized roadmap to AI integration in your business.",
    "Discover AI tools tailored to your needs – no fluff, just results.",
    "Learn how to deploy AI Agents to save time and boost productivity.",
    "Understand the ROI potential of AI for your business."
  ];

  return (
    <section className="py-12 sm:py-16 bg-custom-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/images/cta1.jpg"
              alt="Transform Your Business with AI"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-custom-dark/5" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Transform Your Business with the Power of AI – Let's Get Started Today
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover how AI can automate tasks, drive efficiency, and unlock growth. 
              Book your free consultation now and start your journey toward smarter business solutions.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/#contact"
                className="group inline-flex items-center px-6 py-3.5 border-2 border-white 
                text-base font-medium text-black bg-white hover:bg-transparent hover:text-white 
                transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Your Free AI Strategy Session
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

export default CallToAction;
