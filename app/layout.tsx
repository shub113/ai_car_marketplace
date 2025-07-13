import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "sonner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI car marketplace",
  description: "Find your dream car with advanced AI search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />
          <main className="min-h-screen" >
            {children}
          </main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by  <Link className="text-blue-600 cursor-pointer underline" href="https://www.linkedin.com/in/shubham-thakur311/" >
                SHUBHAM THAKUR
              </Link></p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
