import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataSearch Perencanaan",
  description: "NextJS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link id="favicon" rel="icon" href="favicon.ico" type="image/x-icon">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
