"use client";


import { Card, Grid, Typography, Box } from "@mui/material";
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
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
      {
        label: "Wickets",
        data: [23, 20, 18, 15, 12],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return (
    <Box className="flex bg-gray-100 min-h-screen">
      
      <main className="ml-64 p-5 w-full">
        <Typography variant="h3" gutterBottom className="font-bold">
          Tournament Summary
        </Typography>

        <Grid container spacing={3}>
          {/* Total Runs Card */}
          <Grid item xs={12} md={6}>
            <Card className="p-5 shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <Typography variant="h6">Total Runs Scored</Typography>
              <Typography variant="h3" className="font-bold">{totalRuns}</Typography>
            </Card>
          </Grid>

          {/* Total Wickets Card */}
          <Grid item xs={12} md={6}>
            <Card className="p-5 shadow-lg bg-gradient-to-r from-red-500 to-orange-500 text-white">
              <Typography variant="h6">Total Wickets Taken</Typography>
              <Typography variant="h3" className="font-bold">{totalWickets}</Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Top Performers */}
        <Typography variant="h4" gutterBottom className="font-bold mt-6">
          Top Performers
        </Typography>
        <Grid container spacing={3}>
          {/* Top Run Scorer */}
          <Grid item xs={12} md={6}>
            <Card className="p-5 shadow-lg bg-gradient-to-r from-green-500 to-teal-500 text-white">
              <Typography variant="h6">Highest Run Scorer</Typography>
              <Typography variant="h5">{highestScorer.name} - {highestScorer.runs} Runs</Typography>
            </Card>
          </Grid>

          {/* Top Wicket Taker */}
          <Grid item xs={12} md={6}>
            <Card className="p-5 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Typography variant="h6">Highest Wicket Taker</Typography>
              <Typography variant="h5">{highestWicketTaker.name} - {highestWicketTaker.wickets} Wickets</Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Performance Chart */}
        <Typography variant="h4" gutterBottom className="font-bold mt-6">
          Performance Overview
        </Typography>
        <Card className="p-5 shadow-lg">
          <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </Card>
      </main>
    </Box>
  );
};

export default TournamentSummary;
