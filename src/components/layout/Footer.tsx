'use client';

import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
