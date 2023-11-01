import Image from 'next/image';
import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
interface LoadingPageProps {}

const LoadingPage: React.FC<LoadingPageProps> = ({}) => {
  return (
    <div className="relative h-screen w-full grid place-items-center">
      <div className="flex justify-center items-center gap-3">
        <Image
          width={50}
          height={50}
          src={'https://img.logoipsum.com/296.svg'}
          alt="logo Home "
        />
        <p className="text-4xl font-bold">JSNote&apos;s</p>
      </div>
      <div className="absolute bottom-8 left-8 flex justify-center items-center gap-3">
        <ThreeCircles
          height="50"
          width="50"
          color="#66abda"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
