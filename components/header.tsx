'use client';

import { track } from '@vercel/analytics';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { Icons } from './icons';

export function Header() {
  return (
    <header className="bg-black border-b border-gray-900 py-3 px-8 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-3xl text-white tracking-tight">
            mobilecn-ui
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-5 text-gray-400">
            <button
              className="py-4 transition-all duration-200 hover:text-gray-200"
              onClick={() => {
                track('click', { button: 'nativecn docs' });
                window.open(siteConfig.docs.nativecn);
              }}
            >
              nativecn docs
              <span className="sr-only">nativecn docs</span>
            </button>
            <button
              className="py-4 transition-all duration-200 hover:text-gray-200"
              onClick={() => {
                track('click', { button: 'swiftcn docs' });
                window.open(siteConfig.docs.swiftcn);
              }}
            >
              swiftcn docs
              <span className="sr-only">swiftcn docs</span>
            </button>
          </div>
          <button
            className="bg-white p-2 md:p-3 rounded-full md:rounded-md text-black transition-all duration-200 hover:shadow-lg hover:backdrop-blur-md hover:bg-gray-300"
            onClick={() => {
              track('click', { button: 'github' });
              window.open('https://github.com/Mobilecn-UI');
            }}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
