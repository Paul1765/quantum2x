'use client';

import Image from 'next/image';

const Article421966ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI in Education Technology
          </h1>
          <p className="text-xl text-white leading-relaxed">
            Transforming learning experiences through artificial intelligence and personalized education.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Educational Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum.
            </p>
            <p className="text-gray-700">
              Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Future of Education</h2>
          <p className="text-gray-700">
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article421966ai;