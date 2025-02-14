'use client';

import { Suspense } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import DefaultLayout from './DefaultLayout';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  
  if (segment === 'article') {
    return <>{children}</>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DefaultLayout>{children}</DefaultLayout>
    </Suspense>
  );
}
