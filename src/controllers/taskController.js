import Task from '../models/Task.js'

class TaskController{
    constructor(){
        this.tasks = []
    }

    // create

    async createTask(taskData){
       try {
            if(!taskData.nome){
                return { message: "Name field is required!", status: 400 }; 
            }
        
            const task = await Task.create(taskData)
            return { message: "Task added successfully!", task };
        }catch(error){
            console.error("Create Task Error!", error)
       }
    }

    // read

    async getAllTasks(){
        try {
            const tasks = await Task.findAll({ order: [['id', 'ASC']] });
            return tasks;
        }
        catch(error){
            console.error("List Tasks Error:", error.message);
        }
    }

    // update 

    async updateTasks(id, updateData){
        try{
            const task = await Task.findByPk(id);

            if(!task){
                return { message: "Task not found!" };
            }

            await Task.update(updateData, { where: { id } });
            return {message: "Task updated succesfully!" };
        } catch (error) {
            console.error("Error Update Task:", error);
        }
    }

    // delete
    
    async deleteTask(id){
        try{          
            await Task.destroy({ where: { id } });
            return {message: "Delete Task succesfully!"};
        } catch (error){
            console.error("Error Delete Task:", error);
        }
    }


}

export default new TaskController();