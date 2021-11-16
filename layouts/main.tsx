import { useRouter } from 'next/router';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: ILayoutProps) {
  const router = useRouter();

  //When on the home page set the nav to absolute so the hero image is behind it.
  const path = router.asPath;

  return (
    <div className="mr-4">
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
