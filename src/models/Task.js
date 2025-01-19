import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Task = sequelize.define('Task', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default Task;

