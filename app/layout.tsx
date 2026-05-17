import type { Metadata } from "next";
import localFont from "next/font/local";
import EmotionRegistry from "./EmotionRegistry";
import { Providers } from "@/components/Providers";
import "./globals.css";

const baloo = localFont({
  src: "./fonts/BalooBhaijaan2-ExtraBold.woff2",
  variable: "--font-baloo",
  display: "swap",
});

const bubblegum = localFont({
  src: "./fonts/BubblegumSans-Regular.woff2",
  variable: "--font-bubblegum",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twosisterss.ca/"),
  title: "Two Sisters Cleaning | Winnipeg",
  description:
    "Two Sisters Cleaning in Winnipeg offers reliable, affordable and high-quality cleaning services for homes, apartments and offices. Book your cleaning today.",
  openGraph: {
    title: "Two Sisters Cleaning",
    description:
      "Looking for trusted cleaning in Winnipeg? Two Sisters provides affordable, detailed and professional cleaning services for houses, condos, apartments and offices. Enjoy a fresh and spotless space. Book now!",
    type: "website",
    locale: "en_CA",
    url: "https://twosisterss.ca/",
    siteName: "Two Sisters Cleaning",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Sisters Cleaning",
    description:
      "Professional and affordable cleaning services in Winnipeg. Homes, apartments and offices.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Two Sisters Cleaning Service",
              url: "https://twosisterss.ca/",
              description:
                "Professional cleaning service offering high-quality cleaning for homes and offices.",
              image: "https://twosisterss.ca/Main_IMG1.webp",
            }),
          }}
        />
      </head>
      <body className={`${baloo.variable} ${bubblegum.variable} antialiased`}>
        <Providers>
          <EmotionRegistry>{children}</EmotionRegistry>
        </Providers>
      </body>
    </html>
  );
}
