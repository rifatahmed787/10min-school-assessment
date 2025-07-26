
import { ReactNode } from 'react';
import Head from 'next/head';

type PageWrapperProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  fullWidth?: boolean;
};

export default function PageWrapper({
  children,
  title,
  description,
  className = '',
  fullWidth = false,
}: PageWrapperProps) {
  return (
    <>
      {/* SEO Head - Overrides layout metadata */}
      {title && (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
      )}

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gray-50">
        {/* Content Container */}
        <section
          className={`mx-auto ${fullWidth ? 'w-full' : 'max-w-7xl'} px-4 sm:px-6 lg:px-8 ${
            className || 'py-12'
          }`}
        >
          {children}
        </section>
      </main>
    </>
  );
}