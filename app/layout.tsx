import type { Metadata } from "next";
import {
  Poppins,
  Cormorant_Garamond,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "❤️ Our Story",
  description: "A home for our memories, our laughter, and our forever.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#FFF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${cormorant.variable}
        ${dancing.variable}
        scroll-smooth
      `}
    >
      <body
        className="
          bg-[#FFF8F5]
          text-[#2A2526]
          overflow-x-hidden
          font-[var(--font-poppins)]
          selection:bg-[#D97C90]
          selection:text-white
        "
      >
        {children}
      </body>
    </html>
  );
}