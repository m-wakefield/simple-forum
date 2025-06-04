const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Parses JSON request bodies

// Routes
app.use('/api/auth', require('./routes/authRoutes'));


const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));