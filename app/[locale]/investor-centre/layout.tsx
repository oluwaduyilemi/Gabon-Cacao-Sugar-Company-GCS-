import InvestorNav from "../../_components/InvestorNav";

export default function InvestorCentreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white pt-26 min-h-screen">
      <InvestorNav />
      {children}
    </main>
  );
}
