import Link from 'next/link';

import { Icons } from './icons';

export function Header() {
  return (
    <header className="bg-black border-b border-gray-900 py-3 px-8 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-3xl text-white tracking-tight">
            mobilecn-ui
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-5 text-gray-400">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nativecn.mintlify.app/introduction"
              className="py-4 transition-all duration-200 hover:text-gray-200"
            >
              nativecn docs
              <span className="sr-only">nativecn docs</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://swiftcn.mintlify.app/introduction"
              className="py-4 transition-all duration-200 hover:text-gray-200"
            >
              swiftcn docs
              <span className="sr-only">swiftcn docs</span>
            </Link>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mobilecn-UI"
            className="bg-white p-3 rounded-md text-black transition-all duration-200 hover:shadow-lg hover:backdrop-blur-md hover:bg-gray-300"
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
