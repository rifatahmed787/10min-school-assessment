import { appConfiguration } from "@/utils/constant/appConfiguration";

// utils/api/products.ts
export async function getAllProducts(lang: "en" | "bn" = "en") {
  const res = await fetch(`${appConfiguration.baseUrl}/products?lang=${lang}`, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function getProductBySlug(slug: string, lang: "en" | "bn" = "en") {
  const res = await fetch(
    `${appConfiguration.baseUrl}/products/${slug}?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
}
