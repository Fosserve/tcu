import type { Metadata } from "next";
import { Poppins, Nunito_Sans, Grape_Nuts, Pirata_One } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import FooterSection from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
// const grapeNuts = Grape_Nuts({
//   variable: "--font-grape-nuts",
//   subsets: ["latin"],
//   weight: ["400"], 
// });

// const nunitoSans = Nunito_Sans({
//   variable: "--font-nunito-sans",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });
// const pirataOne = Pirata_One({
//   variable: "--font-pirata-one",
//   subsets: ["latin"],
//   weight: ["400"], 
// });

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
      <body className={`antialiased ${poppins.variable}`}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

