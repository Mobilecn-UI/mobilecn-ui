import Image from 'next/image';

import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="px-8 py-4 md:py-8 max-w-screen-lg mx-auto">
      <Hero />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-4 mt-6 mb-10">
        <Image
          src="/img/example-dark.png"
          alt="Example dark"
          className="rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out rotate-3"
          width={400}
          height={700}
        />
        <Image
          src="/img/example-light.png"
          alt="Example light"
          className="border-4 border-gray-900 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out -rotate-6"
          width={400}
          height={700}
        />
      </div>
    </div>
  );
}
