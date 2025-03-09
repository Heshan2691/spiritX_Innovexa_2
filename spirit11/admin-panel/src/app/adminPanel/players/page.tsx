'use client';

import { useState } from 'react';
import Link from 'next/link';

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
  const filteredPlayers = allPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Players List</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Players Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Team</th>
            <th className="p-2 border">Points</th>
            <th className="p-2 border">Value (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <tr key={player.id} className="hover:bg-gray-100">
                <td className="p-2 border text-blue-600">
                  <Link href={`/adminPanel/player-stats/${player.id}`}>
                    {player.name}
                  </Link>
                </td>
                <td className="p-2 border">{player.team}</td>
                <td className="p-2 border">{player.points}</td>
                <td className="p-2 border">{player.value.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-2 border text-center text-gray-500">
                No players found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersPage;
