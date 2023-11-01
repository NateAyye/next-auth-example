'use client';
import LoadingPage from '@/components/loading-page';
import Navbar from '@/components/navbar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (session) redirect('/dashboard');
  if (status === 'loading') return <LoadingPage />;
  return session ? (
    <></>
  ) : (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
