import React from 'react';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto px-4 py-16">
      {children}
    </article>
  );
}
