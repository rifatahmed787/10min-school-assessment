
import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function PageWrapper({
  children,
  className = '',
  fullWidth = false,
}: PageWrapperProps) {
  return (
    <>
      {/* Main Wrapper */}
      <main className="min-h-screen bg-gray-50 dark:bg-background">
        {/* Content Container */}
        <section
          className={`mx-auto ${fullWidth ? 'w-full' : 'max-w-7xl'} px-3 sm:px-4 lg:px-5 ${
            className || 'py-12'
          }`}
        >
          {children}
        </section>
      </main>
    </>
  );
}