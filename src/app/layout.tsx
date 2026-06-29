import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanele Phakathi — Recording Artist, Pianist, Producer & Composer",
  description:
    "Sanele Phakathi is a recording artist, songwriter, pianist, producer and composer. Blending Jazz, Afro-Pop, Deep House, and R&B into a uniquely South African sound.",
  keywords: [
    "Sanele Phakathi",
    "South African Music",
    "Jazz",
    "Afro-Pop",
    "Deep House",
    "R&B",
    "Pianist",
    "Producer",
    "Composer",
  ],
  authors: [{ name: "Sanele Phakathi" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎵</text></svg>",
  },
  openGraph: {
    title: "Sanele Phakathi — Stones Left Unturned",
    description:
      "Recording artist, songwriter, pianist, producer and composer. Discover the music of Sanele Phakathi.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanele Phakathi — Stones Left Unturned",
    description:
      "Recording artist, songwriter, pianist, producer and composer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}