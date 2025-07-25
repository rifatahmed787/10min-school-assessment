import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  url,
  image,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:site_name" content="Resdium Digital" />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SeoHead;
