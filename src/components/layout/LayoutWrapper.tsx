'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import DefaultLayout from './DefaultLayout';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  
  if (segment === 'article') {
    return <>{children}</>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
