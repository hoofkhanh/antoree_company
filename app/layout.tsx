import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import ChatBot from "@/components/chatbox/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antoree App",
  description: "Antoree App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <StoreProvider>
          <Header />
          <main className="flex-1 p-4">
            {children}
          </main>
          <Toaster position="top-center" />
          <Footer />
          <ChatBot />
        </StoreProvider>
      </body>
    </html>
  );
}
