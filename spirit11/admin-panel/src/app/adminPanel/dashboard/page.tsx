import React, { ReactNode } from 'react';
import { Card, Grid, Typography, List, ListItem, Box } from '@mui/material';

interface StyledCardProps {
  title: string;
  children: ReactNode;
}

const StyledCard: React.FC<StyledCardProps> = ({ title, children }) => (
  <Card
    variant="outlined"
    sx={{
      p: 3,
      borderRadius: 3,
      boxShadow: 3,
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "white",
    }}
  >
    <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
      {title}
    </Typography>
    {children}
  </Card>
);

const AdminPanelDashboard = () => {
  return (
    <Box sx={{ display: 'flex', p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <main style={{ flexGrow: 1 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
          Admin Panel Dashboard
        </Typography>

        {/* Overview Section */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}><StyledCard title="Total Players"><Typography variant="h4">125</Typography></StyledCard></Grid>
          <Grid item xs={12} md={4}><StyledCard title="Top Players by Points"><List><ListItem>Player 1 - 250 Points</ListItem><ListItem>Player 2 - 240 Points</ListItem><ListItem>Player 3 - 230 Points</ListItem></List></StyledCard></Grid>
          <Grid item xs={12} md={4}><StyledCard title="Tournament Summary"><List><ListItem>Ongoing: T20 Championship</ListItem><ListItem>Upcoming: University Cup</ListItem></List></StyledCard></Grid>
        </Grid>

        {/* Leaderboard Snapshot */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333", mt: 4 }}>
          Leaderboard Snapshot
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}><StyledCard title="Top Players"><List><ListItem>Player A - 500 Points</ListItem><ListItem>Player B - 490 Points</ListItem><ListItem>Player C - 480 Points</ListItem></List></StyledCard></Grid>
          <Grid item xs={12} md={6}><StyledCard title="Top Teams"><List><ListItem>Team Alpha - 1000 Points</ListItem><ListItem>Team Beta - 950 Points</ListItem><ListItem>Team Gamma - 900 Points</ListItem></List></StyledCard></Grid>
        </Grid>

        {/* Chatbot Insights */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333", mt: 4 }}>
          Chatbot Insights (Spiriter)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}><StyledCard title="Usage Statistics"><Typography variant="h4">1200 interactions</Typography></StyledCard></Grid>
          <Grid item xs={12} md={6}><StyledCard title="Top User Queries"><List><ListItem>Who should I pick for my fantasy team?</ListItem><ListItem>Player X&apos;s stats for today?</ListItem><ListItem>How to manage my team budget?</ListItem></List></StyledCard></Grid>
        </Grid>
      </main>
    </Box>
  );
};

export default AdminPanelDashboard;
