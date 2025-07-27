import { getProductBySlug } from "@/app/[lang]/lib/api/products";
import PageWrapper from "@/components/common/PageWrapper";
import SeoHead from "@/components/common/SeoHead";
import DetailsHero from "@/components/pages/CourseDetails/DetailsHero";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { notFound } from "next/navigation";
import React from "react";

const CourseDetails = async ({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string; lang: "en" | "bn" }>;
}) => {
  const { slug, lang = "en" } = await paramsPromise;

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
          image={
            productData.media?.[0]?.resource_value || appConfiguration.logo
          }
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
