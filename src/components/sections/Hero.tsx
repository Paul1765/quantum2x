'use client';

import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://n8n-nknt.onrender.com/webhook-test/a93e7004-15c0-4a2e-bed5-4783cf8937d4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Unlock the Power of AI for Your Small Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Discover how AI tools, automations, and custom agents can boost your profits, 
              save you time, and give you the competitive edge you need to thrive. 
              Simplified, tailored, and built for small business owners like you.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I provide businesses with AI training to help them understand the technology and how it can be used to improve their operations. AI training courses are designed to be accessible to all levels of expertise, from beginners to advanced users.
            </p>
            
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get your free AI Guide For Small Businesses</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-black"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-custom-dark text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-md whitespace-nowrap"
                  >
                    Submit
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm">Thank you for subscribing!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">Failed to subscribe. Please try again.</p>
                )}
              </form>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/images/heroimage1.jpg"
              alt="AI Business Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-custom-dark/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
