'use client';

import { useRef } from 'react';
import { User } from 'lucide-react';

 // Adjust the path as necessary

const categories = [
  'Player',
  'Selection',
  'Team',
  'Leaderboard',
  'Budget'
];

export default function Navbar() {
  const scrollRef = useRef<HTMLDivElement>(null);

 

  return (
    <nav className="bg-gray-900 text-white flex items-center px-10 py-9 space-x-8 w-full fixed top-0 left-0 z-50" style={{ height: '60px' }}>
      <div className="text-xl font-bold flex items-center space-x-1">
        <span>SPIRIT11</span>
        
      </div>

      {categories.map((category, index) => (
        <a key={index} href={`/${category.toLowerCase()}`} className="cursor-pointer hover:underline">
          {category}
        </a>
      ))}

      <button 
        className="ml-auto text-gray-400 hover:text-white"
        onClick={() => window.location.href = '/login'}
      >
        <User size={30} />
      </button>
    </nav>
  );
}


