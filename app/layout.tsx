import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PoweredBy } from "./components/powered-by";
import Navigation from "./components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Logo Animation for Product Hunt",
  description: "Create a logo animation for Product Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navigation />
        {children}
        <PoweredBy />
      </body>
    </html>
  );
}
