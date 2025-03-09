const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hes@8181uom",
  database: "spirit11_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

// API Endpoint to Get All Players
app.get("/api/players", (req, res) => {
  db.query(
    "SELECT name, team, total_runs, total_balls_faced, innings_played, total_balls_bowled, total_wickets, total_runs_conceded, batting_strike_rate, bowling_strike_rate, value, points FROM players",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// API Endpoint to Get Player Details
app.get("/api/players/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM players WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
