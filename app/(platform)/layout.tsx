import { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Platform',
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
