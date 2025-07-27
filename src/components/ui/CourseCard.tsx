import Link from "next/link";
import Image from "next/image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { Product } from "@/types/product";
import Button from "../common/Button";

interface Props {
  product: Product;
  lang: "en" | "bn";
}

export default function CourseCard({ product, lang }: Props) {
   
  const thumbnail = product.media?.find(
    (m) =>
      m.resource_type === "image" &&
      (m.name === "thumbnail" || m.name === "sqr_img")
  )?.resource_value;

  const cleanDescription = product.description
    ? product.description.replace(/<[^>]*>/g, "")
    : "";

    console.log(product?.slug)
  return (
    <div className={`group relative flex flex-col h-full border border-gray-700 rounded-xl overflow-hidden bg-gray-800 hover:border-emerald-400 transition-all duration-300`}>
      <Link href={`/${lang}/courses/${product.slug}`} className="flex flex-col h-full">
        {/* Image with overlay effect */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail || "/default-course.jpg"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Free badge */}
          {product.price_type === "free" && (
            <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {lang === "bn" ? "ফ্রি" : "FREE"}
            </span>
          )}
        </div>

        {/* Content area - grows to fill space */}
        <div className="flex-grow p-4 flex flex-col">
          <Heading as="h5" className="text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {product.title}
          </Heading>
          
          {cleanDescription && (
            <Paragraph className="text-gray-400 text-sm line-clamp-2 mb-4">
              {cleanDescription}
            </Paragraph>
          )}

          {/* Spacer to push price/button to bottom */}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                {product.price_type === "free" 
                  ? (lang === "bn" ? "ফ্রি" : "Free") 
                  : "৳1000"}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Button - fixed at bottom */}
      <div className="p-4 pt-0">
        <Button 
          variant="blue" 
          size="sm" 
          className="w-full group-hover:bg-emerald-500 group-hover:shadow-lg transition-all"
        >
          {lang === "bn" ? "এনরোল করুন" : "Enroll Now"}
        </Button>
      </div>
    </div>
  );
}