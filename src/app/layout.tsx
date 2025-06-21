import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"]
}) 

export const metadata: Metadata = {
  title: "Syntra",
  description: "Syntra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
