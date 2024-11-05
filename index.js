import express from "express";
import cors from 'cors';
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

// Import the database connection
import sequelize from "./Config/connection.js";

// Import routes
import authRoutes from "./Routes/routes/authentification.js";
import reportRoutes from "./Routes/routes/rapportdaciduite.js";

// Create the Express server
const app = express();

// Use middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sync database and create tables if necessary
// Uncomment the line below to force the database to re-create tables
// sequelize.sync({ force: true });

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api/report', reportRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });