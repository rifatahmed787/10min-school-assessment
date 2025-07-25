interface ICompanyDetails {
  companyName: {
    en: string;
    bn: string;
  };
  address: {
    en: string;
    bn: string;
  };

  email: string;
  phone: {
    en: string;
    bn: string;
  };
  hotline: string;
  companyCode: string;
  baseUrl: string;
  icon: string;
  loader:string;
  sidebarLogo: string;
  progressMessage: string;
  worldBanner:string;
  netBanner:string;
  version:string
}

export const appConfiguration: ICompanyDetails = {
  companyName: { en: "Md Rifat", bn: "মো: রিফাত" },
  address: {
    en: "Bashundhara Len, West Kazipara, Mirpur-10, Dhaka, Bangladesh",
    bn: "বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর-১০, ঢাকা, বাংলাদেশ",
  },
  email: "mdrifatahmed787@mail.com",
  phone: {en:"+880 1945518927", bn:"+৮৮০ ১৯৪৫৫১৮৯২৭"},
  hotline: "000000000000",
  worldBanner:"/world-map.svg",
  netBanner:"/net.svg",
  companyCode: "__2.0__",
  baseUrl: "https://fashion.vercel.app/api/v1",
  icon: "/10min.png",
  loader:"/10min.webp",
  sidebarLogo: "/trendy.svg",
  version: "2.0",
  progressMessage:
    "Thank you for your interest! 🚀 We're currently working on implementing this feature. Stay tuned, as we'll be activating it very soon!",
};
