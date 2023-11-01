'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[200vh]">
      <div className="relative w-full py-32 bg-[url(/bg-image-2.png)] bg-cover">
        <div className="container mx-auto px-0 md:px-3 py-1 gap-5 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start p-5 gap-8">
            <h1 className="text-5xl font-bold text-indigo-600"> JSNote </h1>
            <p className="text-lg font-bold text-foreground">
              {' '}
              All your documentation and collaboration needs all in one place.
              Document Your packages, libraries, frameworks, code, projects.
              Then you can export it in any fashion for any kind of project. Run
              your code right in the editor and view the output. Dont just
              Document you code. Show it off
            </p>
            <div className="flex gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold">
                Get Started
              </Button>
              <Button
                variant={'outline'}
                asChild
                className="font-bold hover:underline underline-offset-2"
              >
                <Link href={'/docs'}>Learn More &rarr;</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image src={'/next.svg'} alt="logo" width={50} height={50} />
          </div>
        </div>
        <div
          className={cn(
            ' absolute h-40 bg-gradient-to-t from-background inset-x-0 bottom-0',
          )}
        />
      </div>
    </div>
  );
}
