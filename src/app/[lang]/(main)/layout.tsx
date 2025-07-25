export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen">{children}</div>
    </>
  );
}

// pt-24 md:pt-[132px]
