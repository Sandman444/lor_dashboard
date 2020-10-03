const express = require('express');
const connectDB = require('./mongoDB/db');

const app = express();
const PORT = 5000;

//Connect to mongoDB
connectDB();

//Initial middleware
app.use(express.json({ extended: false }));

//Define Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
