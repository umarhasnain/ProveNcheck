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
// ${process.env.NEXT_PUBLIC_CRISP_ID}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Crisp Chat Integration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="d42989cb-1a90-48fa-84d0-cc301bb66e76";
              (function(){
                var d=document,s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
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
