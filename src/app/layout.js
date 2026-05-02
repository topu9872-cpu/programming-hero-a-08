import { Geist, Nosifer } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nosifer = Nosifer({
  variable: "--font-nosifer",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${nosifer.variable} antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-screen flex mx-auto justify-center flex-col`}
      >
        <NavBar />

        <ToastContainer position="top-right" />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
