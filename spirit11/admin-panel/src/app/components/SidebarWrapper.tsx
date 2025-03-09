"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Sidebar from "@/app/components/sidebar";

const SidebarWrapper = () => {
  const pathname = usePathname();

  // Hide sidebar on the login page ("/")
  if (pathname === "/") {
    return null;
  }

  return <Sidebar />;
};

export default SidebarWrapper;
