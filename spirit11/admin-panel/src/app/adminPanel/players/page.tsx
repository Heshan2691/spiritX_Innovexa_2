'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, SortByAlpha, ArrowUpward, ArrowDownward } from '@mui/icons-material';

interface Player {
  id: number;
  name: string;
  team: string;
  points: number;
  value: number;
}

const PlayersPage = () => {
  const allPlayers: Player[] = [
    { id: 1, name: 'Virat Kohli', team: 'India', points: 850, value: 7500000 },
    { id: 2, name: 'Babar Azam', team: 'Pakistan', points: 820, value: 7200000 },
    { id: 3, name: 'Steve Smith', team: 'Australia', points: 790, value: 6900000 },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<keyof Player>('points');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Filter and sort players
  const filteredAndSortedPlayers = [...allPlayers]
    .filter((player) => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  // Toggle sort
  const handleSort = (field: keyof Player) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Render sort indicator
  const renderSortIndicator = (field: keyof Player) => {
    if (sortField !== field) return <SortByAlpha fontSize="small" className="text-gray-400" />;
    return sortDirection === 'asc' ? 
      <ArrowUpward fontSize="small" className="text-blue-600" /> : 
      <ArrowDownward fontSize="small" className="text-blue-600" />;
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Players Management
        </h1>
        
        {/* Search and Filter Bar */}
        <div className="mb-6 flex items-center bg-gray-100 p-4 rounded-lg">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Players Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <th className="p-3 text-left cursor-pointer hover:bg-blue-800 transition" onClick={() => handleSort('name')}>
                  <div className="flex items-center">
                    Name {renderSortIndicator('name')}
                  </div>
                </th>
                <th className="p-3 text-left cursor-pointer hover:bg-blue-800 transition" onClick={() => handleSort('team')}>
                  <div className="flex items-center">
                    Team {renderSortIndicator('team')}
                  </div>
                </th>
                <th className="p-3 text-left cursor-pointer hover:bg-blue-800 transition" onClick={() => handleSort('points')}>
                  <div className="flex items-center">
                    Points {renderSortIndicator('points')}
                  </div>
                </th>
                <th className="p-3 text-left cursor-pointer hover:bg-blue-800 transition" onClick={() => handleSort('value')}>
                  <div className="flex items-center">
                    Value (Rs.) {renderSortIndicator('value')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedPlayers.length > 0 ? (
                filteredAndSortedPlayers.map((player) => (
                  <tr key={player.id} className="hover:bg-blue-50 transition-colors border-b border-gray-200 last:border-b-0">
                    <td className="p-3">
                      <Link 
                        href={`/adminPanel/player-stats/${player.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition flex items-center"
                      >
                        {player.name}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">{player.team}</span>
                    </td>
                    <td className="p-3 font-medium">{player.points}</td>
                    <td className="p-3 font-medium text-green-600">₹{player.value.toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-lg font-medium">No players found.</p>
                      <p className="text-sm mt-1">Try a different search term.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayersPage;