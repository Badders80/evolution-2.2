import Link from 'next/link';

/**
 * A simple footer component containing social links and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background text-foreground py-8 mt-16 border-t border-gray">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <p className="text-sm text-gray">&copy; {currentYear} Evolution Stables. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link
            href="https://twitter.com/evostables"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
            className="text-gold hover:text-foreground"
          >
            {/* X icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.74 8.74 0 0 1-2.74 1.05A4.37 4.37 0 0 0 16 4c-2.36 0-4.27 1.9-4.27 4.26 0 .33.04.66.11.96-3.55-.18-6.7-1.88-8.8-4.46a4.26 4.26 0 0 0-.58 2.15c0 1.48.76 2.79 1.93 3.56a4.33 4.33 0 0 1-1.93-.53v.05c0 2.06 1.47 3.78 3.4 4.17a4.37 4.37 0 0 1-1.93.07 4.3 4.3 0 0 0 4 2.96A8.77 8.77 0 0 1 2 19.54a12.38 12.38 0 0 0 6.68 1.95c8.02 0 12.4-6.64 12.4-12.4 0-.19 0-.39-.01-.58A8.84 8.84 0 0 0 22.46 6Z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/evostables"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-gold hover:text-foreground"
          >
            {/* Instagram icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm8.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4.5 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0-2c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alex-baddeley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="text-gold hover:text-foreground"
          >
            {/* LinkedIn icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.65 1.33 2.98 2.98 2.98 1.65 0 2.98-1.33 2.98-2.98C7.96 4.83 6.63 3.5 4.98 3.5zM2 8.25h5.96V21H2V8.25zm7.25 0h5.75v1.74h.08c.8-1.5 2.75-3.08 5.67-3.08 6.07 0 7.19 4 7.19 9.23V21h-5.94v-7.09c0-1.69-.03-3.87-2.37-3.87-2.37 0-2.74 1.85-2.74 3.75V21H9.25V8.25z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}