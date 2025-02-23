'use client';

import Image from 'next/image';

const Article370876ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-custom-dark/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI in Manufacturing: Smart Factories
          </h1>
          <p className="text-xl text-white leading-relaxed">
            Exploring the impact of artificial intelligence on modern manufacturing processes and industry automation.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Manufacturing Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.
            </p>
            <p className="text-gray-700">
              Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Future Implications</h2>
          <p className="text-gray-700">
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article370876ai;