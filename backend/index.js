const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// mongoose connection
mongoose.connect(process.env.DB_Path).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

const feedRoutes = require('./routes/feedRouter');

app.use("/api/feed", feedRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})