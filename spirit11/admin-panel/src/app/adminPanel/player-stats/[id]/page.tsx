'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the Player interface
interface Player {
  id: number;
  name: string;
  team: string;
  matches: number;
  runs: number;
  wickets: number;
  economyRate: number;
  strikeRate: number;
  battingAverage: number;
  value: number;
  points: number;
}

// Dummy Data (Replace with API fetch later)
const allPlayers: Player[] = [
  { id: 1, name: 'Virat Kohli', team: 'India', matches: 10, runs: 850, wickets: 2, economyRate: 6.5, strikeRate: 130, battingAverage: 45, value: 7500000, points: 850 },
  { id: 2, name: 'Babar Azam', team: 'Pakistan', matches: 12, runs: 780, wickets: 1, economyRate: 7.0, strikeRate: 120, battingAverage: 42, value: 7200000, points: 820 },
  { id: 3, name: 'Steve Smith', team: 'Australia', matches: 15, runs: 900, wickets: 3, economyRate: 7.2, strikeRate: 125, battingAverage: 50, value: 6900000, points: 790 },
];

const PlayerStats = () => {
  const { id } = useParams(); // Get ID from URL
  const router = useRouter();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedPlayer = allPlayers.find((p) => p.id === Number(id));

    if (selectedPlayer) {
      setPlayer(selectedPlayer);
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p className="text-blue-500">Loading player stats...</p>;

  if (!player) return <p className="text-red-500">Player not found!</p>;

  return (
    <div className="p-6 border rounded-lg shadow-lg max-w-2xl mx-auto bg-white">
      {/* Back Button */}
      <button onClick={() => router.push('/adminPanel/players')} className="mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
        ← Back to Players List
      </button>

      {/* Player Stats */}
      <h1 className="text-3xl font-bold mb-4 text-center">{player.name}</h1>
      <p className="text-lg"><strong>Team:</strong> {player.team}</p>
      <p className="text-lg"><strong>Matches:</strong> {player.matches}</p>
      <p className="text-lg"><strong>Runs:</strong> {player.runs}</p>
      <p className="text-lg"><strong>Wickets:</strong> {player.wickets}</p>
      <p className="text-lg"><strong>Economy Rate:</strong> {player.economyRate}</p>
      <p className="text-lg"><strong>Strike Rate:</strong> {player.strikeRate}</p>
      <p className="text-lg"><strong>Batting Average:</strong> {player.battingAverage}</p>
      <p className="text-lg"><strong>Value:</strong> Rs. {player.value.toLocaleString()}</p>
      <p className="text-lg"><strong>Points:</strong> {player.points}</p>
    </div>
  );
};

export default PlayerStats;
