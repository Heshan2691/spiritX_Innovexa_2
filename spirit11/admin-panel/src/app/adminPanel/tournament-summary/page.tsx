"use client";

import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TournamentSummary = () => {
  // Sample Data for Tournament Summary
  const totalRuns = 8924;
  const totalWickets = 478;
  const highestScorer = { name: "Player X", runs: 987 };
  const highestWicketTaker = { name: "Player Y", wickets: 23 };

  // Chart Data for Performance Overview
  const chartData = {
    labels: ["Player X", "Player Y", "Player Z", "Player A", "Player B"],
    datasets: [
      {
        label: "Runs",
        data: [987, 812, 754, 700, 650],
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderRadius: 6,
      },
      {
        label: "Wickets",
        data: [23, 20, 18, 15, 12],
        backgroundColor: "rgba(244, 63, 94, 0.8)",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          font: {
            size: 13
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <main className="p-6 w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Tournament Summary
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Runs Card */}
          <div className="bg-indigo-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-sm font-medium uppercase tracking-wider">Total Runs Scored</p>
            <p className="text-4xl font-bold mt-2">{totalRuns.toLocaleString()}</p>
          </div>

          {/* Total Wickets Card */}
          <div className="bg-rose-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-sm font-medium uppercase tracking-wider">Total Wickets Taken</p>
            <p className="text-4xl font-bold mt-2">{totalWickets.toLocaleString()}</p>
          </div>
        </div>

        {/* Top Performers */}
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
          Top Performers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Run Scorer */}
          <div className="bg-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-sm font-medium uppercase tracking-wider">Highest Run Scorer</p>
            <div className="flex items-center mt-2">
              <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">{highestScorer.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-xl font-bold">{highestScorer.name}</p>
                <p className="text-2xl font-bold">{highestScorer.runs} Runs</p>
              </div>
            </div>
          </div>

          {/* Top Wicket Taker */}
          <div className="bg-purple-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-sm font-medium uppercase tracking-wider">Highest Wicket Taker</p>
            <div className="flex items-center mt-2">
              <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">{highestWicketTaker.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-xl font-bold">{highestWicketTaker.name}</p>
                <p className="text-2xl font-bold">{highestWicketTaker.wickets} Wickets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
          Performance Overview
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </main>
    </div>
  );
};

export default TournamentSummary;