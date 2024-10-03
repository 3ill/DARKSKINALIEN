import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeContextProvider from "@/app/context/theme.context";

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
const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  weight: "100 900",
});
const thunder = localFont({
  src: "./fonts/Thunder.woff",
  variable: "--font-thunder",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DARKSKINALIEN",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helvetica.variable} ${thunder.variable} bg-primary_light antialiased bg-grid-black/[0.03] dark:bg-primary_dark dark:bg-grid-slate-300/[0.01]`}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
