import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

interface DashboardNavbarProps {}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({}) => {
  return (
    <header className="border-b py-1">
      <div className="container px-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image
            width={15}
            height={15}
            src={'https://img.logoipsum.com/296.svg'}
            alt="logo Home "
          />
          <p>JsNotes</p>
        </div>
        <div>
          <nav aria-labelledby="primary-navigation-label">
            <span id="primary-navigation-label" className="sr-only">
              Primary Navigation
            </span>
            <ul className="flex justify-center items-center gap-1">
              <li>
                <Button asChild variant={'link'}>
                  <a href="/client">Client</a>
                </Button>
              </li>
              <li>
                <Button asChild variant={'link'}>
                  <a href="/server">Server</a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
