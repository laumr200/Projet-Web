const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/connection.js');
const authRoutes = require('./Routes/routes/authentification.js');
const reportRoutes = require('./Routes/routes/rapportdaciduite.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/report', reportRoutes);

// Sync database
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
