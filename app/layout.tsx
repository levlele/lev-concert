import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const chack = Chakra_Petch({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-chackra",
});

export const metadata: Metadata = {
  title: "LEV Concerts",
  description: "List of concerts and festival I've attended",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chack.variable} dark bg-black`}>
        {children}
      </body>
    </html>
  );
}
