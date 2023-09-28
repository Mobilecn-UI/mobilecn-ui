import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-900 font-medium px-10 py-6 sm:py-4 text-gray-500 text-sm">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between max-w-screen-xl mx-auto">
        <div>
          Built by{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/cgarciamoran"
            className="underline"
          >
            cgarciamoran
          </Link>
          {' & '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/0xSuman"
            className="underline"
          >
            0xSuman
          </Link>
        </div>
        <div>
          Inspired by{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://ui.shadcn.com"
            className="underline"
          >
            shadcn/ui
          </Link>
        </div>
      </div>
    </footer>
  );
}
