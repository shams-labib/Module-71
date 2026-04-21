import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Khaijan",
    template: "%s | Yantun Khaijan",
  },
  description: "Best fast foods in noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="px-5 py-2 flex  items-center justify-between gap-5 bg-stone-800">
          <Link href="/">
            {/* <img src="/logo.jpg" alt="" className="w-[120px]" /> */}
            <Image
              height={20}
              width={120}
              src="/logo.jpg"
              alt=""
              className="w-[120px]"
            />
          </Link>

          <div className="space-x-5">
            <Link className="btn" href="/foods">
              Food
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
            <Link className="btn" href="/feedbacks">
              Feedbacks
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
