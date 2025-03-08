'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Player {
  id: number;
  name: string;
  team: string;
  points: number;
  value: number;
  battingStrikeRate: number;
  bowlingStrikeRate: number;
}

const PlayerStatsPage = () => {
  const { id } = useParams(); // Get player ID from URL
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoading(true);
      try {
        // Simulate fetching player data by ID
        const playerData: Player = {
          id: Number(id),
          name: 'Player One',
          team: 'Team A',
          points: 250,
          value: 5000000,
          battingStrikeRate: 120.5,
          bowlingStrikeRate: 25.6,
        };
        setPlayer(playerData); // Set the player data
      } catch {
        setError('Failed to load player data'); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPlayerData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Player Stats</h1>
      {player ? (
        <div>
          <p>Name: {player.name}</p>
          <p>Team: {player.team}</p>
          <p>Points: {player.points}</p>
          <p>Value: {player.value}</p>
          <p>Batting Strike Rate: {player.battingStrikeRate}</p>
          <p>Bowling Strike Rate: {player.bowlingStrikeRate}</p>
        </div>
      ) : (
        <div>No player found</div>
      )}
    </div>
  );
};

export default PlayerStatsPage;
