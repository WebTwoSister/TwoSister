import type { Metadata } from "next";
import localFont from "next/font/local";
import EmotionRegistry from "./EmotionRegistry";
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
  title: "TwoSisters",
  description: "Cleaning service website for Two Sisters",
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
      <body className={`${baloo.variable} ${bubblegum.variable} antialiased`}>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  );
}
