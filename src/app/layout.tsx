import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"]
}) 

export const metadata: Metadata = {
  title: "Syntra",
  description: "Syntra",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F7X6QDLT5B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F7X6QDLT5B');
          `}
        </Script>
      </head>
      <body
        className={`${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
