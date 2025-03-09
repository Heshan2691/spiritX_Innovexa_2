"use client";

import { Card, Grid, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const TournamentSummary = () => {
  const players = [
    { id: 1, name: "Player One", runs: 350, wickets: 5 },
    { id: 2, name: "Player Two", runs: 420, wickets: 3 },
    { id: 3, name: "Player Three", runs: 200, wickets: 8 },
  ];

  const totalRuns = players.reduce((sum, p) => sum + p.runs, 0);
  const totalWickets = players.reduce((sum, p) => sum + p.wickets, 0);
  const highestRunScorer = players.reduce((max, p) => (p.runs > max.runs ? p : max), players[0]);
  const highestWicketTaker = players.reduce((max, p) => (p.wickets > max.wickets ? p : max), players[0]);

  return (
    <Box className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <Typography variant="h3" className="font-bold text-gray-900 mb-6">
        🏏 Tournament Summary
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} className="w-full max-w-4xl">
        <Grid item xs={12} md={6}>
          <Card className="p-6 shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <Typography variant="h6">Total Runs Scored</Typography>
            <Typography variant="h3" className="font-bold">{totalRuns}</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="p-6 shadow-lg bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <Typography variant="h6">Total Wickets Taken</Typography>
            <Typography variant="h3" className="font-bold">{totalWickets}</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Top Performers */}
      <Typography variant="h4" className="font-bold text-gray-900 mt-8">
        🏅 Top Performers
      </Typography>
      <Grid container spacing={3} className="w-full max-w-4xl mt-3">
        <Grid item xs={12} md={6}>
          <Card className="p-6 shadow-lg bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <Typography variant="h6">Highest Run Scorer</Typography>
            <Typography variant="h5">{highestRunScorer.name} - {highestRunScorer.runs} Runs</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="p-6 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <Typography variant="h6">Highest Wicket Taker</Typography>
            <Typography variant="h5">{highestWicketTaker.name} - {highestWicketTaker.wickets} Wickets</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Player Statistics Table */}
      <Typography variant="h4" className="font-bold text-gray-900 mt-8">
        📊 Player Statistics
      </Typography>
      <Card className="w-full max-w-4xl p-6 shadow-lg mt-3">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Player Name</TableCell>
              <TableCell className="font-bold">Runs</TableCell>
              <TableCell className="font-bold">Wickets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.runs}</TableCell>
                <TableCell>{player.wickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default TournamentSummary;
