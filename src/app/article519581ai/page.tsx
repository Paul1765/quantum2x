'use client';

import Image from 'next/image';

const Article519581ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar10.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-custom-dark/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI in Transportation
          </h1>
          <p className="text-xl text-white leading-relaxed">
            The future of mobility: How artificial intelligence is reshaping transportation and logistics.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Transportation Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum.
            </p>
            <p className="text-gray-700">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Future of Transportation</h2>
          <p className="text-gray-700">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article519581ai;