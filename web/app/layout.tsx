import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SENSE-TECH Kinetic",
  description:
    "Surveillance des gaz industriels et de l'environnement — capteurs en temps réel, alertes instantanées, données historiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
