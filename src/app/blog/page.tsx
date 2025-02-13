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
      date: "2024-01-15",
      slug: "article129735ai"
    },
    {
      id: 2,
      title: "5 Ways AI is Revolutionizing Customer Service",
      excerpt: "Learn how businesses are leveraging AI to provide exceptional customer service, from chatbots to personalized experiences.",
      image: "/images/cs5.png",
      date: "2024-01-10",
      slug: "customer-service-ai"
    },
    {
      id: 3,
      title: "Implementing AI in Your Marketing Strategy",
      excerpt: "Explore practical ways to integrate AI into your marketing efforts to improve targeting, personalization, and ROI.",
      image: "/images/cs1.png",
      date: "2024-01-05",
      slug: "ai-marketing-strategy"
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
