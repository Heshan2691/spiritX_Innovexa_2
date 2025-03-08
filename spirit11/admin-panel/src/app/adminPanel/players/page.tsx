'use client';

import { useState } from 'react';

interface Player {
  id: number;
  name: string;
  team: string;
  points: number;
  value: number;
  battingStrikeRate: number;
  bowlingStrikeRate: number;
}

const PlayersPage = () => {
  const [players, setPlayers] = useState<Player[]>([]); // Example player data
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);

  const handleDelete = (id: number) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const handleEdit = (player: Player) => {
    setEditingPlayer(player);
  };

  const handleSavePlayer = (player: Player) => {
    if (editingPlayer) {
      // Update existing player
      setPlayers(players.map(p => (p.id === player.id ? player : p)));
    } else {
      // Add new player
      setPlayers([...players, { ...player, id: players.length + 1 }]);
    }
    setEditingPlayer(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Manage Players</h1>
      
      {/* Add/Edit Player Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{editingPlayer ? 'Edit Player' : 'Add New Player'}</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const playerData = {
            id: editingPlayer ? editingPlayer.id : 0,
            name: ((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement)?.value || '',
            team: (e.target as HTMLFormElement).team.value,
            points: parseInt((e.target as HTMLFormElement).points.value),
            value: parseInt((e.target as HTMLInputElement).value),
            battingStrikeRate: parseFloat((e.target as HTMLFormElement).battingStrikeRate.value),
            bowlingStrikeRate: parseFloat((e.target as HTMLFormElement).bowlingStrikeRate.value),
          };
          handleSavePlayer(playerData);
        }}>
          <div className="mb-4">
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={editingPlayer?.name || ''}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Team</label>
            <input
              type="text"
              name="team"
              defaultValue={editingPlayer?.team || ''}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Points</label>
            <input
              type="number"
              name="points"
              defaultValue={editingPlayer?.points || 0}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Value</label>
            <input
              type="number"
              name="value"
              defaultValue={editingPlayer?.value || 0}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Batting Strike Rate</label>
            <input
              type="number"
              name="battingStrikeRate"
              step="0.01"
              defaultValue={editingPlayer?.battingStrikeRate || 0}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Bowling Strike Rate</label>
            <input
              type="number"
              name="bowlingStrikeRate"
              step="0.01"
              defaultValue={editingPlayer?.bowlingStrikeRate || 0}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
        </form>
      </div>

      {/* Players List */}
      <h2 className="text-xl font-semibold mb-4">Players List</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Points</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id} className="border-b">
              <td className="px-4 py-2">{player.name}</td>
              <td className="px-4 py-2">{player.team}</td>
              <td className="px-4 py-2">{player.points}</td>
              <td className="px-4 py-2">{player.value}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleEdit(player)} className="text-blue-500">Edit</button>
                <button onClick={() => handleDelete(player.id)} className="text-red-500 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersPage;
