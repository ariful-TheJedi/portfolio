import type { Metadata } from "next";
import "./globals.css";


import { ThemeProvider } from "./context/theme-context";
import Navbar from "./components/header";
import Footer from "./components/Footer";
import HashScrollHandler from "./components/reusabls/hash-scroll-handler";




//open graph(og -> facebook, twitter etc...)
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://arifulthejedi.netlify.app"
  ),

  title: "Ariful Islam",

  description:
    "Modern Software Developer & AI Enthusiast",

  openGraph: {
    title: "Ariful Islam",

    description:
      "Modern Software Developer & AI Enthusiast",

    url: "https://arifulthejedi.netlify.app/",

    siteName: "Ariful Islam",

    images: [
      {
        url: "/og-image.png",
        width: 630,
        height: 630,
        alt: "Ariful Islam Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ariful Islam",

    description:
      "Modern cinematic portfolio inspired by Greek warrior aesthetics.",

    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text antialiased">
        <HashScrollHandler/>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}