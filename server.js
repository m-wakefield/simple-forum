require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'));




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter); // Use the subscribers routerapp.use('/subscribers'), subscribersRouter) // Use the subscribers router


// Import routes



// Connect to MongoDB
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`); 
});

