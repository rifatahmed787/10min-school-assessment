import PublicHeader from "@/components/shared/PublicHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader/>
      <div className="min-h-screen">{children}</div>
    </>
  );
}

// pt-24 md:pt-[132px]
