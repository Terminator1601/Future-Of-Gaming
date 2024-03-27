const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Previous data structure
const previousData = {
  title: "Settings",
  settings: [
    {
      label: "Region",
      value: "europe - de"
    },
    {
      label: "Punkbuster",
      value: "on"
    },
    {
      label: "Fairfight",
      value: "on"
    },
    {
      label: "Password",
      value: "off"
    },
    {
      label: "Preset",
      value: "normal"
    }
  ]
};

// Routes
app.get('/api/settings', (req, res) => {
  res.json(previousData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
