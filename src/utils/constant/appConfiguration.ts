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
  logo: string;
  loader: string;
  sidebarLogo: string;
  progressMessage: string;
  version: string;
}

export const appConfiguration: ICompanyDetails = {
  companyName: {
    en: "10 Minute School",
    bn: "টেন মিনিট স্কুল",
  },
  address: {
    en: "Bashundhara Len, West Kazipara, Mirpur-10, Dhaka, Bangladesh",
    bn: "বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর-১০, ঢাকা, বাংলাদেশ",
  },
  email: "mdrifatahmed787@mail.com",
  phone: { en: "+880 1945518927", bn: "+৮৮০ ১৯৪৫৫১৮৯২৭" },
  hotline: "000000000000",
  companyCode: "__2.0__",
  baseUrl: "https://api.10minuteschool.com/discovery-service/api/v1/",
  logo: "/10min.png",
  loader: "/10min.webp",
  sidebarLogo: "/trendy.svg",
  version: "1.1.0",
  progressMessage:
    "Thank you for your interest! 🚀 We're currently working on implementing this feature. Stay tuned, as we'll be activating it very soon!",
};
