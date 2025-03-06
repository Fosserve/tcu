import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import FooterSection from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Talitha cumi unnati",
  description: "Arise Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased ${poppins.variable}">
        <style>
          {`
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-nunito-sans);
            }
            body, p {
              font-family: var(--font-poppins);
            }
          `}
        </style>
        <Header/>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
