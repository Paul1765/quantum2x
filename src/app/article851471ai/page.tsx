'use client';

import Image from 'next/image';

const Article851471ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar9.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI in Agriculture
          </h1>
          <p className="text-xl text-white leading-relaxed">
            Revolutionizing farming practices with artificial intelligence and precision agriculture.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Agricultural Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis.
            </p>
            <p className="text-gray-700">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Future of Farming</h2>
          <p className="text-gray-700">
            Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article851471ai;