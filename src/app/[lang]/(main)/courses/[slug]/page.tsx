import { getProductBySlug } from "@/app/[lang]/lib/api/products";
import PageWrapper from "@/components/common/PageWrapper";
import SeoHead from "@/components/common/SeoHead";
import DetailsHero from "@/components/pages/CourseDetails/DetailsHero";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { notFound } from "next/navigation";
import React from "react";

export type paramsType = Promise<{ slug: string; lang: "en" | "bn" }>;
type Props = {
  params: {
    slug: string;
    lang: "en" | "bn";
  };
};
const CourseDetails = async ({ params }: Props) => {
  const { slug, lang = "en" } = params;

  if (!slug) {
    notFound();
  }

  try {
    const product = await getProductBySlug(slug, lang);

    const productData = product.data;
    const seoData = productData.seo;

    return (
      <PageWrapper>
        {/* SEO Head with dynamic product data */}
        <SeoHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords.join(", ")}
          url={`${appConfiguration?.url}/${lang}/courses/${slug}`}
          image={productData.media?.[0]?.resource_value || appConfiguration.logo}
          lang={lang}
        />
        <div>
            <DetailsHero product={productData} lang={lang} />
        </div>
      </PageWrapper>
    );
  } catch (error) {
    console.error("Failed to fetch product:", error);
    notFound();
  }
};

export default CourseDetails;
