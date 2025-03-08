// No need to use styled-jsx, use TailwindCSS for styles
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Assuming TailwindCSS is imported here
import Sidebar from "@/app/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spirit11 Admin Panel",
  description: "Admin panel for managing Spirit11 fantasy league.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
