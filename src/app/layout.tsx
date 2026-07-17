import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akash Kumaraguru | Product Designer",
  description: "Designing digital experiences that solve real-world problems. Explore my design system case studies, digital paint mixing tools (Niram Kalavai), and connect with me instantly.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Bengaluru Designers", "Interaction Design", "Niram Kalavai", "Akash Kumaraguru", "Figma Design Systems"],
  authors: [{ name: "Akash Kumaraguru" }],
  openGraph: {
    title: "Akash Kumaraguru | Product Designer",
    description: "Designing digital experiences that solve real-world problems. View my bento profile, portfolio gateway, and contact information.",
    type: "website",
    locale: "en_IN",
    url: "https://akash.design",
    siteName: "Akash Kumaraguru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Kumaraguru | Product Designer",
    description: "Designing digital experiences that solve real-world problems. Connect instantly.",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e8e6dc] text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
