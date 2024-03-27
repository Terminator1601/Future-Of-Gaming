const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const data = {
  message: "Hello from backend!",
  author: "rishi"
};

// Routes
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
