import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import { Header, Footer } from "@/components/index";

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
    <ViewTransitions>
      <html lang="en" className="min-h-screen">
        <body
          className={`${inter.className} ${chack.variable} flex min-h-screen flex-col overflow-y-scroll bg-foreground`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
