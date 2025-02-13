import Image from 'next/image';

const SocialProof = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="text-center space-y-4">
            <div className="relative h-[120px] w-[120px] mx-auto">
              <Image
                src="/images/1.png"
                alt="Social Proof 1"
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black">Revolutionized our operations with AI!</h3>
            <p className="text-gray-600 leading-relaxed">
            Working with Paul was a game-changer. Their training sessions were hands-on and tailored to our specific needs. Thanks to their guidance, we integrated AI agents that reduced our customer support response time by 60%. The ROI was incredible – this was the smartest investment we’ve made.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center space-y-4">
            <div className="relative h-[120px] w-[120px] mx-auto">
              <Image
                src="/images/2.png"
                alt="Social Proof 2"
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black">AI training simplified and impactful!</h3>
            <p className="text-gray-600 leading-relaxed">
            I was hesitant about incorporating AI into our workflows because of the perceived complexity, but Paul made it accessible and actionable. Their step-by-step training helped our team deploy AI-powered tools in just days, improving our lead-generation process by 40%. I highly recommend his expertise!
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center space-y-4">
            <div className="relative h-[120px] w-[120px] mx-auto">
              <Image
                src="/images/3.png"
                alt="Social Proof 3"
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black">Exceeded all expectations!</h3>
            <p className="text-gray-600 leading-relaxed">
            We brought in Paul to design and implement an AI-driven automation system for our content creation, and the results have been astounding. The AI agents he built handle repetitive tasks, freeing up 30% of our team’s time for high-value activities. The training he provided was easy to follow and practical. I’d work with him again in a heartbeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
