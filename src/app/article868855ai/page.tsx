'use client';

import Image from 'next/image';

const Article868855ai = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with dark overlay */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/images/ar6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-custom-dark/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            AI-Enhanced Cybersecurity
          </h1>
          <p className="text-xl text-white leading-relaxed">
            How artificial intelligence is revolutionizing cybersecurity and threat detection in the digital age.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Security Innovation</h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
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
          <h2 className="text-3xl font-bold mb-6">Future of Security</h2>
          <p className="text-gray-700">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Article868855ai;