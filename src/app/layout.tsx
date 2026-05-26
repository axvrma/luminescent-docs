import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luminescent UI | Modern React Components",
  description: "Premium, highly-polished, and visually stunning React UI components tailored specifically for modern dark-mode applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-YGFYRJGYFW" />
    </html>
  );
}
