'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";
import FinancialAdvisor from "@/components/FinancialAdvisor/FinancialAdvisor";
import { useState } from "react";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const pathname = usePathname(); // Get the current route

  const handleAdvisorClick = () => {
    setChatBoxVisible((prev) => !prev);
  };

  // Pages that don't need the full layout
  const isOnboardingPage = pathname === "/onboard";

  return (
    <html lang="en">
      <body>
        {isOnboardingPage ? (
          <div className="flex h-screen bg-[#212529]">
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        ) : (
          <div className="flex h-screen bg-[#212529]">
            <SideBar />
            <div className="flex flex-col flex-1">
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                {/* Left Section (Text) */}
                <div className="flex items-center bg-[#B0B0B0] px-5 py-3 pr-[15em] rounded-r-full">
                  <p className="text-black text-sm">
                    Based on your monthly income of $6500, you should be saving $500/month.
                  </p>
                </div>
                {/* Right Section (Button) */}
                <button
                  className="px-5 py-3 text-white text-sm rounded-l-full bg-gradient-to-r 
                  pr-[20em] from-gradients-orange-start to-gradients-orange-end"
                  onClick={handleAdvisorClick}
                >
                  AI Financial Advisor
                </button>
              </div>
              {isChatBoxVisible && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out z-50"
                  onClick={handleAdvisorClick}
                ></div>
              )}

              {/* Financial Advisor Chat Box */}
              <FinancialAdvisor
                visible={isChatBoxVisible}
                handleCloseAdvisor={handleAdvisorClick}
              />

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
