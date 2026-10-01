import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fortis Nutrition | Thoughtful Nutrition by WK Enterprises",
  description:
    "Fortis Nutrition is a new-generation supplement brand focused on bioavailability, clean labels, and transparent sources. Formulated and stewarded by WK Enterprises.",
  keywords: [
    "Fortis Nutrition",
    "WK Enterprises",
    "Bioavailable Supplements",
    "Clean Label Nutrition",
    "Transparent Sourcing",
    "Nutritional Supplements",
  ],
  authors: [{ name: "WK Enterprises" }],
  openGraph: {
    title: "Fortis Nutrition | Thoughtful Nutrition by WK Enterprises",
    description:
      "Supplements built around bioavailability, purposeful ingredients, and clarity about what goes into every formulation.",
    siteName: "Fortis Nutrition",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#141716] antialiased selection:bg-brand-botanical selection:text-white">
        {children}
      </body>
    </html>
  );
}
