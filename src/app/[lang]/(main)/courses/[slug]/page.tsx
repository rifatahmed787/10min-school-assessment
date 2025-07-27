import { getProductBySlug } from "@/app/[lang]/lib/api/products";
import PageWrapper from "@/components/common/PageWrapper";
import SeoHead from "@/components/common/SeoHead";
import CourseChecklist from "@/components/pages/CourseDetails/CourseChecklist";
import CourseDescription from "@/components/pages/CourseDetails/CourseDescription";
import CourseFeatures from "@/components/pages/CourseDetails/CourseFeatures";
import CTAGroup from "@/components/pages/CourseDetails/CTAGroup";
import DetailsHero from "@/components/pages/CourseDetails/DetailsHero";
import Trailor from "@/components/pages/CourseDetails/Trailor";
import { Section } from "@/types/section";
import { appConfiguration } from "@/utils/constant/appConfiguration";
import { notFound } from "next/navigation";
import React from "react";

const CourseDetails = async ({
  params,
}: {
  params: { slug: string; lang: "en" | "bn" };
}) => {
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

        <div className="grid grid-cols-12 gap-5 py-5 container mx-auto">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 space-y-8 min-h-[220vh]">
            {/* Title */}
            <DetailsHero title={productData.title} lang={lang} />

            {/* Course Exclusive Features */}
            <CourseFeatures
              features={
                productData.sections.find(
                  (s:Section) => s.type === "features"
                )?.values || []
              }
              lang={lang}
            />

            {/* Course Details */}
            <CourseDescription
              details={
                productData.sections.find((s:Section) => s.type === "about")?.values ||
                []
              }
              lang={lang}
            />
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-20">
              <Trailor lang={lang} />

              {/* CTA Button */}
              <CTAGroup
                ctaText={productData.cta_text}
                ctaGroup={productData.secondary_cta_group}
                lang={lang}
              />

              {/* Checklist */}
              <CourseChecklist items={productData.checklist} lang={lang} />
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  } catch (error) {
    console.error("Failed to fetch product:", error);
    notFound();
  }
};

export default CourseDetails;
