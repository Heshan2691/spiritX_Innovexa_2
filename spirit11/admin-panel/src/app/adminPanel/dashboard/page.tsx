import React, { ReactNode } from 'react';
import { Card, Grid, Typography, List, ListItem, Box, Avatar, Divider, LinearProgress } from '@mui/material';
import { SportsCricket, EmojiEvents, Groups, Chat, TrendingUp, CalendarMonth } from '@mui/icons-material';

interface StyledCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  gradientColors?: string;
}

const StyledCard: React.FC<StyledCardProps> = ({ title, icon, children, gradientColors = "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)" }) => (
  <Card
    variant="outlined"
    sx={{
      p: 3,
      borderRadius: 2,
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
      background: gradientColors,
      color: "white",
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: '0 12px 40px rgba(31, 38, 135, 0.25)',
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.2)', p: 1, borderRadius: '50%' }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "600" }}>
        {title}
      </Typography>
    </Box>
    <Divider sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
    {children}
  </Card>
);

const PlayerListItem = ({ name, points, avatar }: { name: string, points: number, avatar: string }) => (
  <ListItem sx={{ px: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.2)' }}>{avatar}</Avatar>
      <Typography variant="body1" sx={{ fontWeight: '500' }}>{name}</Typography>
    </Box>
    <Typography variant="body2">{points} Points</Typography>
  </ListItem>
);

const TeamListItem = ({ name, points, progress }: { name: string, points: number, progress: number }) => (
  <ListItem sx={{ px: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: '500' }}>{name}</Typography>
      <Typography variant="body2">{points} Points</Typography>
    </Box>
    <LinearProgress 
      variant="determinate" 
      value={progress} 
      sx={{ 
        width: '100%', 
        height: 6, 
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        }
      }} 
    />
  </ListItem>
);

const AdminPanelDashboard = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      p: 4, 
      bgcolor: '#f8f9fa', 
      minHeight: '100vh', 
      background: 'url("/cricket-bg.jpg") no-repeat center center fixed', 
      backgroundSize: 'cover'
    }}>
      <Box sx={{ 
        flexGrow: 1, 
        bgcolor: 'rgba(255,255,255,0.9)', 
        borderRadius: 4, 
        p: 4, 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)' 
      }}>
        <Typography variant="h3" gutterBottom sx={{ 
          fontWeight: "bold", 
          mb: 4, 
          color: '#1e3c72',
          textShadow: '0px 2px 4px rgba(0,0,0,0.1)' 
        }}>
          Spirit11 Admin Dashboard
        </Typography>

        {/* Overview Section */}
        <Typography variant="h5" gutterBottom sx={{ 
          fontWeight: "600", 
          color: "#333", 
          display: 'flex', 
          alignItems: 'center',
          mb: 3
        }}>
          <TrendingUp sx={{ mr: 1, color: '#1e3c72' }} /> Overview
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StyledCard 
              title="Total Players" 
              icon={<Groups />}
              gradientColors="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
            >
              <Typography variant="h3" sx={{ fontWeight: '700', textAlign: 'center', mt: 2 }}>125</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8, mt: 1 }}>20 new players this week</Typography>
            </StyledCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <StyledCard 
              title="Top Players" 
              icon={<EmojiEvents />}
              gradientColors="linear-gradient(135deg, #4b6cb7 0%, #182848 100%)"
            >
              <List sx={{ p: 0 }}>
                <PlayerListItem name="Virat Kohli" points={250} avatar="VK" />
                <PlayerListItem name="Babar Azam" points={240} avatar="BA" />
                <PlayerListItem name="Steve Smith" points={230} avatar="SS" />
              </List>
            </StyledCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <StyledCard 
              title="Tournament Summary" 
              icon={<CalendarMonth />}
              gradientColors="linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)"
            >
              <Box sx={{ pl: 2, borderLeft: '3px solid rgba(255,255,255,0.3)' }}>
                <Typography variant="body1" sx={{ fontWeight: '600', mb: 1 }}>Current</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>T20 Championship (Week 3/8)</Typography>
                
                <Typography variant="body1" sx={{ fontWeight: '600', mb: 1 }}>Upcoming</Typography>
                <Typography variant="body2">University Cup (Starts April 10)</Typography>
              </Box>
            </StyledCard>
          </Grid>
        </Grid>

        {/* Leaderboard Snapshot */}
        <Typography variant="h5" gutterBottom sx={{ 
          fontWeight: "600", 
          color: "#333", 
          mt: 5, 
          mb: 3,
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <SportsCricket sx={{ mr: 1, color: '#1e3c72' }} /> Leaderboard Snapshot
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledCard 
              title="Top Players" 
              icon={<EmojiEvents />}
              gradientColors="linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)"
            >
              <List sx={{ p: 0 }}>
                <PlayerListItem name="Player A" points={500} avatar="PA" />
                <PlayerListItem name="Player B" points={490} avatar="PB" />
                <PlayerListItem name="Player C" points={480} avatar="PC" />
              </List>
            </StyledCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <StyledCard 
              title="Top Teams" 
              icon={<Groups />}
              gradientColors="linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)"
            >
              <List sx={{ p: 0 }}>
                <TeamListItem name="Team Alpha" points={1000} progress={100} />
                <TeamListItem name="Team Beta" points={950} progress={95} />
                <TeamListItem name="Team Gamma" points={900} progress={90} />
              </List>
            </StyledCard>
          </Grid>
        </Grid>

        {/* Chatbot Insights */}
        <Typography variant="h5" gutterBottom sx={{ 
          fontWeight: "600", 
          color: "#333", 
          mt: 5, 
          mb: 3,
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <Chat sx={{ mr: 1, color: '#1e3c72' }} /> Chatbot Insights (Spiriter)
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledCard 
              title="Usage Statistics" 
              icon={<TrendingUp />}
              gradientColors="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
            >
              <Typography variant="h3" sx={{ fontWeight: '700', textAlign: 'center', mt: 2 }}>1,200</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8, mt: 1 }}>Total interactions this week</Typography>
            </StyledCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <StyledCard 
              title="Top User Queries" 
              icon={<Chat />}
              gradientColors="linear-gradient(135deg, #3494E6 0%, #EC6EAD 100%)"
            >
              <List sx={{ p: 0 }}>
                <ListItem sx={{ px: 0 }}>
                  <Typography variant="body2">1. Who should I pick for my fantasy team?</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography variant="body2">2. Player X&apos;s stats for today?</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography variant="body2">3. How to manage my team budget?</Typography>
                </ListItem>
              </List>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPanelDashboard;