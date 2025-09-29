import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Project.deleteMany({});
    const projects = [
        {
            title: "School Management System",
            description:"A full-stack system for managing classes, students and teachers.",
            tech: ["Laravel","React","MySQL","TailwindCSS"],
            github:"https://github.com/WebWarriors-group/School-Management-System.git",
            demo :"",
        },
        {
            title: "Todo App",
            description:"Simple CRUD Todo app with MERN stack.",
            tech: ["MongoDB","Express","React","Node.js","TailwindCSS"],
            github:"https://github.com/SkAbi0910/Task_Management_App.git",
            demo :"",
        },
        {
            title:"MERN Chat App",
            description:"A real-time chat application using MERN stack and Socket.io.",
            tech:["MongoDB","Express","React","Node.js","Socket.io","TailwindCSS"],
            github:"https://github.com/SkAbi0910/MernChatApp.git",
            demo:"",
        },
        {
            title: "Herbal-Plant Selling System",
            description:"A web application for buying and selling herbal products.",
            tech:["Django","React","PostgreSQL","TailwindCSS"],
            github:"https://github.com/JayfaAnjum/Herbal_plant-selling-system.git",
            demo:"",
        },
    ];
    await Project.insertMany(projects);
    console.log("Database seeded!");
    process.exit();
    })
    .catch(err => console.error("MongoDB Connection Error: " , err));