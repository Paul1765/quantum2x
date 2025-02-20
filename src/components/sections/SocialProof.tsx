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
            <h3 className="text-xl font-bold text-black">AI Education</h3>
            <p className="text-gray-600 leading-relaxed">
            I provide AI workshops and presentation to help businesses understand the power of AI and how to leverage it to improve their operations. I also provide hands-on training to help businesses implement AI solutions in their workflows. I look forward to working with you!
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
            <h3 className="text-xl font-bold text-black">AI Automations</h3>
            <p className="text-gray-600 leading-relaxed">
            Implimenting AI automations to improve productivity and efficiency. I have worked with businesses to develop AI-driven automation systems that handle repetitive tasks, freeing up time for high-value activities. I can help you implement AI solutions in your business too.
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
            <h3 className="text-xl font-bold text-black">AI Agents</h3>
            <p className="text-gray-600 leading-relaxed">
            Developing AI agents to help businesses improve customer service, administration tasks and marketing activities. I have worked with businesses to develop AI agents that can handle customer enquiries, administration functions and various types of marketing activiies. I can help you develop AI agents for your business too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
