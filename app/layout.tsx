import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jamali TV",
  description: "Watch any youtube videos without annoying ads for free 100%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-h-screen flex flex-col">
          <PageHeader />
          <div className="grid grid-cols-[auto_1fr] flex-grow-1 overflow-auto">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
