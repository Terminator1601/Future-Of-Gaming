const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy settings data
const settingsData = [
  {
    title: "Region",
    values: [
      { label: "Region", value: "europe - de" }
    ]
  },
  {
    title: "Punkbuster",
    values: [
      { label: "Punkbuster", value: "on" }
    ]
  },
  {
    title: "Fairfight",
    values: [
      { label: "Fairfight", value: "on" }
    ]
  },
  {
    title: "Password",
    values: [
      { label: "Password", value: "off" }
    ]
  },
  {
    title: "Preset",
    values: [
      { label: "Preset", value: "normal" }
    ]
  }
];

// Routes
app.get('/api/settings', (req, res) => {
  res.json(settingsData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
