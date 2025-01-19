import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url'; 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
// Ajuste o caminho aqui para o arquivo .env na mesma pasta 
dotenv.config({ path: path.resolve(__dirname, '.env') });




const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;



const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;