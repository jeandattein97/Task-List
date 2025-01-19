import express from 'express'
import sequelize from './config/database.js'
import taskRoutes from "./routes/routes.js"

const app = express()

app.use(express.json())

const PORT = 3000;

(async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection on DATABASE Succesfully!");
        await sequelize.sync();
        console.log("Synchronizeds Models!");
    } catch (error) {
        console.error("Failed Connection with DATABASE!");
    }
})();

app.use("/api", taskRoutes);

app.listen(PORT, () =>{
    console.log(`Server Running on PORT ${PORT}`)
})