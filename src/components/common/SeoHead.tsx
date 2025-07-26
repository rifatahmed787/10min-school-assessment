import { appConfiguration } from "@/utils/constant/appConfiguration";
import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  ogType?: string;
  noIndex?: boolean;
  lang?: "en" | "bn";
}

const SeoHead = ({
  title,
  description,
  keywords = "online education, Bangladesh, 10Minute School",
  url,
  image = appConfiguration.logo,
  ogType = "website",
  noIndex = false,
  lang = "en",
}: SeoHeadProps) => {
  const fullTitle = `${title} | 10Minute School`;
  const locale = lang === "bn" ? "bn_BD" : "en_US";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:locale" content={locale} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="10Minute School" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO Controls */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={locale} href={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SeoHead;
