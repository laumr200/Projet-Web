import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const ENV = process.env;

const database = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
    port: ENV.DB_PORT,
});

// Optional connection test
(async () => {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default database;
