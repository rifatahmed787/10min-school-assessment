
import { Amiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./lib/ThemeProvider";
import TooltipProviders from "./lib/TooltipProvider";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { appConfiguration } from "@/utils/constant/appConfiguration";

const amiri = Amiri({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/6dd2f2510b4a00a5461b2455928209c2?family=Brandon+Grot+W01+Light"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/16efa2896f117dae2debeb23ab4715dd?family=Didot+eText+W01+Italic"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/e5f78b4fb90a80a32be156470cbfead1?family=Avenir+LT+Pro+35+Light"
          rel="stylesheet"
        />
      </head>
      <body className={`${amiri.className} antialiased`}>
          <ThemeProvider
            defaultTheme="light"
            storageKey={`${appConfiguration.companyCode}theme`}
          >
            <TooltipProviders>
              <div className="">{children}</div>
             
              <ScrollToTop />
              <Toaster/>
            </TooltipProviders>
          </ThemeProvider>
      </body>
    </html>
  );
}
