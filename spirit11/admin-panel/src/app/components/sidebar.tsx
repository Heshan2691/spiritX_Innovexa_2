'use client'; // Mark this as a client-side component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5">
      <nav>
        <ul className="space-y-4">
          <li className={pathname === "/adminPanel/dashboard" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/dashboard">Dashboard</Link>
          </li>
          <li className={pathname === "/adminPanel/players" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/players">Players</Link>
          </li>
          <li className={pathname === "/adminPanel/player-stats" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/player-stats">Player Stats</Link>
          </li>
          <li className={pathname === "/adminPanel/tournament-summary" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/tournament-summary">Tournament Summary</Link>
          </li>
          <li className={pathname === "/adminPanel/auth" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/auth">Admin Authentication</Link>
          </li>
          <li className={pathname === "/adminPanel/logout" ? "font-bold text-yellow-400" : ""}>
            <Link href="/adminPanel/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
