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
app.use(cors({
  origin: '*', // Allow all origins (for now)
}));

app.use(express.json()); // Parses JSON request bodies


// Routes
app.use('/api/auth', require('./routes/authRoutes'));

const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.get('/api/test', (req, res) => {
  res.send('✅ Server route works!');
});
app.get('/', (req, res) => {
  res.send('Welcome to the Caregiving Forum API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));