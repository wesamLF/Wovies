import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";


const inter = Inter({
  subsets: ["latin"],
  
});

export const metadata = {
  title: "My App",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" data-theme="dracula" >
      <body
        className={inter.className}
      >
        <Navbar />

        <main className="section-px">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
