'use client';

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI Integration Solutions</h2>
          <p className="text-gray-700">
            Seamlessly integrate AI capabilities into your existing systems and workflows. Our solutions help businesses automate processes, enhance decision-making, and improve operational efficiency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Custom AI Development</h2>
          <p className="text-gray-700">
            We design and develop custom AI models tailored to your specific business needs. From predictive analytics to natural language processing, we create solutions that deliver real business value.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI Consulting</h2>
          <p className="text-gray-700">
            Our expert consultants help you identify AI opportunities, develop implementation strategies, and create roadmaps for successful AI adoption across your organization.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI Training & Support</h2>
          <p className="text-gray-700">
            We provide comprehensive training programs and ongoing support to ensure your team can effectively utilize and maintain AI solutions.
          </p>
        </section>
      </div>
    </main>
  );
}
