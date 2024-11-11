import express from "express";
import cors from 'cors';
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

// Import the database connection
import sequelize from "./Config/connection.js"; // Ensure this path is correct

// Import routes
import authRoutes from "./Routes/authentification.js";
import reportRoutes from "./Routes/rapportdaciduite.js";
import auditLogRoutes from './Routes/auditlog.js'; // Import the audit log route

// Create the Express server
const app = express();

// Use middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sync database and create tables if necessary
// sequelize.sync({ force: true }); // Uncomment for development only if you need to re-create tables

// Set up routes
app.use('/api/auth', authRoutes); // Authentication route
app.use('/api/report', reportRoutes); // Reports route
app.use('/api/auditlog', auditLogRoutes); // Audit log route

// Catch-all error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 5000;

sequelize.sync() // Ensure that the database syncs correctly
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
