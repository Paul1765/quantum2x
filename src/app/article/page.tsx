import React from 'react';

const ArticlePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section 1: Title */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 max-w-4xl mx-auto leading-tight">
          The Beginner's Guide to AI for Small Businesses: Unlock Efficiency and Profit
        </h1>
      </section>

      {/* Section 2: Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 px-4">
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Imagine this: You walk into your office, not to a mountain of paperwork and endless to-do lists, but to a streamlined operation humming with efficiency.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your team is focused on high-value tasks, customer satisfaction is soaring, and your profits are steadily climbing. This isn't a fantasy; it's the potential reality that Artificial Intelligence (AI) can unlock for your small business.
          </p>
        </div>
        <div className="relative h-[400px]">
          <img 
            src="/images/ar1.jpg" 
            alt="AI for Business" 
            className="rounded-lg shadow-lg w-full h-full object-cover hover:shadow-xl transition-shadow duration-300" 
          />
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
