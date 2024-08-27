import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid'; 

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let tasks = [];

//! GET all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json({message: "Success", data: tasks});
});

//! POST a new task
app.post("/tasks", (req, res) => {
    const task = {
        id: uuidv4(),
        name: req.body.name,
        completed: req.body.completed || false,
    };

    tasks.push(task);
    res.status(201).json({message: "Success", data: tasks});
});

//route handler on delete
//the id of the item that needs to be deleted
//send response

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== id);
    res.status(200).json({ message: "Success", data: tasks });
  });
  
  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
  
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    res.status(200).json({ message: "Success", data: tasks });
  });


if(process.env.NODE_ENV === "production"){
    console.log("The application is running in production");
} else {
    console.log("The application is running in development");
}

app.listen(port, console.log(`Server is running on port ${port}`));
