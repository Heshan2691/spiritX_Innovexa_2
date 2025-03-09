'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

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

const StatItem = ({ label, value, icon }: { label: string; value: string | number; icon: JSX.Element }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-lg transition-shadow">
    <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-700">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-blue-800 font-medium">Loading player stats...</p>
        </div>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">Player Not Found</h1>
          <p className="text-gray-600 mb-6">The player you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <button 
            onClick={() => router.push('/adminPanel/players')}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Return to Players List
          </button>
        </div>
      </div>
    );
  }

  // Calculate performance indicators
  const runRate = Number((player.runs / player.matches).toFixed(2));
  const playerRating = Math.round((player.points / 10) + (player.battingAverage / 5) + (player.strikeRate / 10));
  
  // Function to determine performance color
  const getPerformanceColor = (value: number, benchmark: number) => {
    if (value > benchmark) return 'text-green-600';
    if (value < benchmark * 0.7) return 'text-red-600';
    return 'text-yellow-600';
  };

  // Responsive values
  const valueBenchmark = 6000000;
  const valueColor = getPerformanceColor(player.value, valueBenchmark);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/adminPanel/players')} 
          className="mb-6 px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition flex items-center shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Players List
        </button>

        {/* Player Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl shadow-lg p-6 mb-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-100 rounded-full p-4 mr-4 h-20 w-20 flex items-center justify-center text-blue-800 text-2xl font-bold">
                {player.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{player.name}</h1>
                <div className="flex items-center mt-1">
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">{player.team}</span>
                  <span className="ml-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {playerRating}/100
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-6 py-3 rounded-lg">
              <p className="text-sm opacity-80">Player Value</p>
              <p className="text-2xl font-bold">₹{player.value.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Performance Stats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatItem 
              label="Matches Played" 
              value={player.matches} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>}
            />
            <StatItem 
              label="Total Runs" 
              value={player.runs} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>}
            />
            <StatItem 
              label="Runs Per Match" 
              value={runRate} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>}
            />
            <StatItem 
              label="Wickets Taken" 
              value={player.wickets} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>}
            />
            <StatItem 
              label="Economy Rate" 
              value={player.economyRate.toFixed(2)} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
            />
            <StatItem 
              label="Strike Rate" 
              value={player.strikeRate.toFixed(2)} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>}
            />
          </div>
        </div>

        {/* Additional Stats and Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              Batting Analysis
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Batting Average: {player.battingAverage}</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(player.battingAverage, 40)}`}>
                    {player.battingAverage > 40 ? 'Excellent' : player.battingAverage > 30 ? 'Good' : 'Average'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${getPerformanceColor(player.battingAverage, 40).replace('text', 'bg')}`} style={{ width: `${Math.min(player.battingAverage / 60 * 100, 100)}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Strike Rate: {player.strikeRate}</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(player.strikeRate, 130)}`}>
                    {player.strikeRate > 130 ? 'Excellent' : player.strikeRate > 110 ? 'Good' : 'Average'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${getPerformanceColor(player.strikeRate, 130).replace('text', 'bg')}`} style={{ width: `${Math.min(player.strikeRate / 150 * 100, 100)}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Run Contribution</span>
                  <span className="text-sm font-medium text-blue-600">{runRate} runs/match</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${Math.min((runRate / 100) * 100, 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bowling Analysis
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Wickets: {player.wickets}</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(player.wickets, 10)}`}>
                    {player.wickets > 10 ? 'Excellent' : player.wickets > 5 ? 'Good' : 'Average'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${getPerformanceColor(player.wickets, 10).replace('text', 'bg')}`} style={{ width: `${Math.min(player.wickets / 20 * 100, 100)}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Economy Rate: {player.economyRate}</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(8 - player.economyRate, 2)}`}>
                    {player.economyRate < 6 ? 'Excellent' : player.economyRate < 7 ? 'Good' : 'Average'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${getPerformanceColor(8 - player.economyRate, 2).replace('text', 'bg')}`} style={{ width: `${Math.max(100 - (player.economyRate / 10 * 100), 0)}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Wickets Per Match</span>
                  <span className="text-sm font-medium text-blue-600">{(player.wickets / player.matches).toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${Math.min((player.wickets / player.matches) / 3 * 100, 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Value and Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Player Value and Points
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Current Value</p>
              <p className={`text-2xl font-bold ${valueColor}`}>₹{player.value.toLocaleString()}</p>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Value Rating</span>
                  <span className={`text-sm font-medium ${valueColor}`}>
                    {player.value > valueBenchmark ? 'Premium' : player.value > valueBenchmark * 0.7 ? 'Standard' : 'Budget'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${valueColor.replace('text', 'bg')}`} style={{ width: `${Math.min(player.value / 10000000 * 100, 100)}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Fantasy Points</p>
              <p className="text-2xl font-bold text-purple-700">{player.points}</p>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Points Rating</span>
                  <span className="text-sm font-medium text-purple-700">
                    {player.points > 800 ? 'Elite' : player.points > 700 ? 'Premium' : 'Standard'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-purple-600" style={{ width: `${Math.min(player.points / 1000 * 100, 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Player
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add Match Stats
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;