import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Urbanist } from "next/font/google";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Premier Energy Leadership Awards – Energizing Excellence: Powering the Future Together",
  description: "Awards and recognition for the energy industry",
};

const ManropeFont = Manrope(
  {
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-manrope",
  },
 

  
);

const localFonts = localFont({
  
  
  src: "../public/fonts/Urbanist-Black.ttf",
  variable: "--font-urban",
  
});
  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ManropeFont.variable} nothing ${localFonts.variable}`}>{children}</body>
    </html>
  );
}
