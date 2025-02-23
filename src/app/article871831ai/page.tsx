'use client';

import Image from 'next/image';

const Article871831ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-custom-dark/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI-Driven Financial Planning
          </h1>
          <p className="text-xl text-white leading-relaxed">
            How artificial intelligence is transforming financial planning and wealth management strategies.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Financial Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum.
            </p>
            <p className="text-gray-700">
              Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
          <p className="text-gray-700">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article871831ai;