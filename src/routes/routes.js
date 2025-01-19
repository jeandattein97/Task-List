import express from 'express'

import taskController from '../controllers/taskController.js'

const router = express.Router();

router.get('/tasks', async (req, res) =>{
    try {
        const tasks = await taskController.getAllTasks(req, res);
        res.status(201).json(tasks);
    } catch (error){
        console.error("Erro ao buscar tarefas:", error);
        res.status(500).json({message: "Erro ao buscar tarefas!"});
    }
});

router.post('/tasks', async (req, res) =>{
    try {
        const newTask = await taskController.createTask(req.body);
        res.status(200).json(newTask);
    }catch (error) {
        console.error("Error ao criar tarefa:", error);
        res.status(500).json({message: "Erro ao criar tarefa!" });
    }
});

router.put('/tasks/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updateTask = await taskController.updateTasks(id, updateData);
        

        if(updateTask.message === "Task not found!"){
            return res.status(404).json(updateTask)
        }
        
        res.status(200).json(updateTask);

    }catch (error) {
        console.error("Erro ao atualizar tarefa", error);
        res.status(500).json({message: "Erro ao atualizar tarefa!"});
    }
});

router.delete('/tasks/:id', async (req, res) =>{
    try{
        const message = await taskController.deleteTask(req.params.id);
        res.json(message);
    }catch(error) {
        console.error("Erro ao deletar tarefa!", error);
        res.status(500).json({ message: "Erro ao deletar tarefa!" });
    }
});

export default router;