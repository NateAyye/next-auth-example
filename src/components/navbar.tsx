'use client';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import UserAvatar from './user-avatar';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data: session, status } = useSession();
  const scrollDir = useScrollDirection(50);

  return (
    <header
      className={cn(
        'border-b border-muted-foreground/40 fixed z-50 bg-background/40 backdrop-blur inset-x-0 transition-transform duration-300',
        scrollDir === 'down' ? '-translate-y-full' : '',
      )}
    >
      <div className="container px-3 py-1 flex justify-between items-center">
        <Link className="flex items-center justify-center gap-2" href={'/'}>
          <Image
            width={20}
            height={20}
            src={'https://img.logoipsum.com/296.svg'}
            alt="logo Home "
          />
          <p>JSNote</p>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <nav aria-labelledby="primary-navigation-label">
            <span id="primary-navigation-label" className="sr-only">
              Primary Navigation
            </span>
            <ul className="flex justify-center items-center gap-1">
              <li>
                <Button variant={'link'} asChild>
                  <a href="/client">Client</a>
                </Button>
              </li>
              <li>
                <Button variant={'link'} asChild>
                  <a href="/server">Server</a>
                </Button>
              </li>
            </ul>
          </nav>
          {session ? (
            <UserAvatar
              image={session?.user?.image}
              email={session?.user?.email}
            />
          ) : (
            <Button asChild>
              <Link href={'/signIn'}>Sign In</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
