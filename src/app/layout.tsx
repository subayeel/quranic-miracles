import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";
import "./globals.css";
import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "next-themes";
import SidebarComponent from "./components/Sidebar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quranic Miracles",
  description: "A short compilation of all Miraculous verses of the Quran",
  keywords: "quran,miracles,quranicmiracles,islam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex flex-col min-h-screen bg-background font-sans antialiased">
          <SidebarProvider defaultOpen={true}>
            <SidebarComponent />
            {/* <SidebarTrigger className="ml-2 aspect-square hidden md:block" /> */}
            <main className="flex flex-col m-auto">
              <div className="border-b flex justify-between xl:hidden py-2 px-3 sticky top-0 z-[20] bg-white/95 dark:bg-gray-700/95">
                <SidebarTrigger className="ml-2 aspect-square" />
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Brand logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </Link>

                <div className="w-[28px]"></div>
              </div>

              <div className="z-10">{children}</div>
            </main>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
