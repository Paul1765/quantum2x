'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Beginner's Guide to AI for Small Businesses",
      excerpt: "Discover how artificial intelligence can transform your small business operations, improve efficiency, and boost profits - no technical background required.",
      image: "/images/heroimage1.jpg",
      date: "2025-02-20",
      slug: "article129735ai"
    },
    {
      id: 2,
      title: "5 Ways AI is Revolutionizing Customer Service",
      excerpt: "Learn how businesses are leveraging AI to provide exceptional customer service, from chatbots to personalized experiences.",
      image: "/images/cs5.png",
      date: "2025-02-18",
      slug: "article128735ai"
    },
    {
      id: 3,
      title: "Future of AI in Business Analytics",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of business analytics and decision-making processes in modern enterprises.",
      image: "/images/ar1.jpg",
      date: "2025-02-16",
      slug: "article884510ai"
    },
    {
      id: 4,
      title: "AI-Powered Supply Chain Optimization",
      excerpt: "Transforming supply chain management with artificial intelligence for enhanced efficiency and predictability.",
      image: "/images/ar2.jpg",
      date: "2025-02-14",
      slug: "article418705ai"
    },
    {
      id: 5,
      title: "AI in Healthcare Innovation",
      excerpt: "Revolutionizing healthcare delivery and patient care through artificial intelligence applications.",
      image: "/images/ar3.jpg",
      date: "2025-02-12",
      slug: "article855187ai"
    },
    {
      id: 6,
      title: "AI-Driven Financial Planning",
      excerpt: "How artificial intelligence is transforming financial planning and wealth management strategies.",
      image: "/images/ar4.jpg",
      date: "2025-02-10",
      slug: "article871831ai"
    },
    {
      id: 7,
      title: "AI in Manufacturing: Smart Factories",
      excerpt: "Exploring the impact of artificial intelligence on modern manufacturing processes and industry automation.",
      image: "/images/ar5.jpg",
      date: "2025-01-30",
      slug: "article370876ai"
    },
    {
      id: 8,
      title: "AI-Enhanced Cybersecurity",
      excerpt: "How artificial intelligence is revolutionizing cybersecurity and threat detection in the digital age.",
      image: "/images/ar6.jpg",
      date: "2025-01-28",
      slug: "article868855ai"
    },
    {
      id: 9,
      title: "AI in Education Technology",
      excerpt: "Transforming learning experiences through artificial intelligence and personalized education.",
      image: "/images/ar7.jpg",
      date: "2025-01-24",
      slug: "article421966ai"
    },
    {
      id: 10,
      title: "AI in Renewable Energy",
      excerpt: "How artificial intelligence is optimizing renewable energy systems and accelerating sustainable development.",
      image: "/images/ar8.jpg",
      date: "2025-01-20",
      slug: "article631977ai"
    },
    {
      id: 11,
      title: "AI in Agriculture",
      excerpt: "Revolutionizing farming practices with artificial intelligence and precision agriculture.",
      image: "/images/ar9.jpg",
      date: "2025-01-15",
      slug: "article851471ai"
    },
    {
      id: 12,
      title: "AI in Transportation",
      excerpt: "The future of mobility: How artificial intelligence is reshaping transportation and logistics.",
      image: "/images/ar10.jpg",
      date: "2025-01-10",
      slug: "article519581ai"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-16 text-center">Latest Insights</h1>
        
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link href={`/${post.slug}`} key={post.id} className="group block">
              <article className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="relative w-full md:w-72 h-48 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h2 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-blue-600 font-medium group-hover:text-blue-800">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
