'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let isSubscribed = true;
    
    const handleScroll = (): void => {
      if (searchParams.get('section') === 'contact') {
        const contactSection = document.getElementById('contact');
        if (contactSection && isSubscribed) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, '', '/');
        }
      }
    };

    handleScroll();

    return () => {
      isSubscribed = false;
    };
  }, [searchParams]);

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'AI News' },
    { href: pathname === '/' ? '#contact' : '/?section=contact', label: 'Contact Us' },
  ];

  const handleMobileMenuClick = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.src = '/images/fallback-logo.png';
  };

  return (
    <header className="fixed w-full bg-[#203439]/95 backdrop-blur-sm border-b border-gray-800 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={150}
                height={40}
                className="object-contain w-auto h-auto"
                onError={handleImageError}
                priority
              />
              <span className="text-xl font-bold text-white">Integrate-AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10" role="navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={handleMobileMenuClick}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#203439]/95 backdrop-blur-sm border-t border-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={handleMobileMenuClick}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
