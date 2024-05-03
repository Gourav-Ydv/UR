const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect route
app.get('/', (req, res) => {
  res.redirect('https://www.google.com/'); // Replace with your desired URL
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
