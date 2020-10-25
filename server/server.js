const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to mongoDB
connectDB();

//Initial middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/matches', require('./routes/api/matches'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
