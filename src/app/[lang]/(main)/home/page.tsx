import { Metadata } from "next";
import CourseCard from "@/components/ui/CourseCard";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { getAllProducts } from "../../lib/api/products";

interface Props {
  params: {
    lang: "en" | "bn";
  };
}

type ApiError = Error & {
  status?: number;
  statusText?: string;
};

export const metadata: Metadata = {
  title: "Courses - 10Minute School",
  openGraph: {
    title: "10Minute School: All Courses",
    description:
      "Browse all courses on Bangladesh's #1 online learning platform",
    images: [
      {
        url: "/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "10Minute School Courses",
      },
    ],
    url: "https://www.10minuteschool.com/courses",
    type: "website",
  },
};

export default async function CoursesPage({ params }: Props) {
  try {
    const response = await getAllProducts(params?.lang);
    const products = response?.data?.products || [];

    return (
      <section className="min-h-screen w-full bg-[#020617] relative">
        
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="my-5 lg:my-16 flex flex-col justify-center items-center">
            <Heading
              as="h1"
              className="text-4xl lg:text-7xl font-bold text-white mb-4"
            >
              {params.lang === "bn"
                ? "আপনার শিক্ষার যাত্রা শুরু করুন"
                : "Start Your Learning Journey"}
            </Heading>
            <Paragraph className="text-xl text-gray-300 max-w-3xl mx-auto">
              {params.lang === "bn"
                ? "১০ মিনিট স্কুলের সাথে দক্ষতা অর্জন করুন এবং আপনার ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যান"
                : "Gain skills with 10Minute School and take your career to new heights"}
            </Paragraph>
          </div>

          {/* Courses Grid */}
          <div className="mb-12">
            <Heading as="h2" className="text-2xl font-bold text-white mb-8">
              {params.lang === "bn" ? "সমস্ত কোর্স" : "All Courses"}
            </Heading>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <CourseCard
                    key={product.id}
                    product={product}
                    lang={params.lang}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Paragraph className="text-gray-400">
                  {params.lang === "bn"
                    ? "কোন কোর্স পাওয়া যায়নি"
                    : "No courses found"}
                </Paragraph>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    const apiError = error as ApiError;

    return (
      <div className="min-h-screen w-full bg-[#020617] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(220,38,38,0.35), transparent)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Heading as="h1" className="text-3xl font-bold text-red-500 mb-4">
            {params.lang === "bn"
              ? "কোর্স লোড করতে সমস্যা হয়েছে"
              : "Failed to load courses"}
          </Heading>

          <Paragraph className="text-gray-300 mb-6">
            {apiError.status
              ? `${apiError.status}: ${apiError.statusText || "API Error"}`
              : params.lang === "bn"
              ? "নেটওয়ার্ক সমস্যা হয়েছে"
              : "Network error occurred"}
          </Paragraph>

          <Paragraph className="text-gray-400">
            {params.lang === "bn"
              ? "দয়া করে পরে আবার চেষ্টা করুন"
              : "Please try again later"}
          </Paragraph>
        </div>
      </div>
    );
  }
}
