//Configuration de la connection a la basse de donnees 
import { Sequelize } from 'sequelize';

//Importer les informations de la base de donnees (.env)
import dotenv from 'dotenv'
const ENV = dotenv.config().parsed


//Creation de la connection
const database = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
});


export default database;

