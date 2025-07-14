import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { PlanProvider } from "@/context/PlanContext";

const inter = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProveNcheck",
  description: "ProveNcheck | Drive Confidently with Trusted Vehicle Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlanProvider>
          <div className="flex flex-col min-h-screen">
            {/* Header at top */}
            <Header />

            {/* Main content takes remaining height */}
            <main className="flex-grow">{children}</main>

            {/* Footer stays at bottom */}
            <Footer />
          </div>
        </PlanProvider>
      </body>
    </html>
  );
}
