import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure Tailwind or global styles are included
import SidebarWrapper from "@/app/components/SidebarWrapper"; // Use the new wrapper

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          <SidebarWrapper /> {/* ✅ Sidebar only appears on admin pages */}
          <main className="flex-grow p-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
