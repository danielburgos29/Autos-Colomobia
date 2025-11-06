const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payments');
const config = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database Connection
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
const vehicleRoutes = require('./routes/vehicles');
const userRoutes = require('./routes/users');
const paymentRoutes = require('./routes/payments');
const cellRoutes = require('./routes/cells');

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/cells', cellRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));