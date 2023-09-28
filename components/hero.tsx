import Link from 'next/link';

import { Icons } from './icons';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="flex flex-col gap-6 xl:gap-10 items-center py-4 md:py-11">
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="font-bold leading-tight text-5xl md:text-6xl xl:text-8xl md:p-1 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-80% md:from-40% from-white to-black">
          Beautiful mobile UI components
        </h1>
        <h2 className="flex flex-col px-5 sm:px-12 text-gray-400 text-base md:text-center sm:text-xl">
          <span>
            Save time, reduce complexity, and create stunning apps effortlessly.
          </span>
          <span>Start shipping faster now.</span>
        </h2>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.github.nativecn}
            className="bg-white flex gap-2 items-center justify-center h-16 w-56 rounded-2xl shadow-2xl transition-all hover:bg-gray-300"
          >
            <Icons.react className="w-8 h-8" />
            <span className="text-lg xl:text-xl font-medium tracking-tight text-center">
              React Native
            </span>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex gap-2 items-center justify-center h-16 w-56 rounded-2xl shadow-2xl transition-all hover:bg-gray-300"
            href={siteConfig.github.swiftcn}
          >
            <Icons.swift className="w-10 h-10" />
            <span className="text-lg xl:text-xl font-medium tracking-tight text-center">
              SwiftUI
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
