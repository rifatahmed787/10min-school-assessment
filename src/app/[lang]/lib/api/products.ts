// utils/api/products.ts
import { unstable_noStore as noStore } from 'next/cache';
import { appConfiguration } from "@/utils/constant/appConfiguration";

export async function getAllProducts(lang: "en" | "bn" = "en") {
  noStore(); 
  
  
  try {
    const res = await fetch(
      `${appConfiguration.baseUrl}/products?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          "accept": "application/json",
        },
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Network error while fetching products');
  }
}

export async function getProductBySlug(slug: string, lang: "en" | "bn" = "en") {
  noStore();
  
  try {
    const res = await fetch(
      `${appConfiguration.baseUrl}/products/${slug}?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          "accept": "application/json",
        },
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Network error while fetching product');
  }
}