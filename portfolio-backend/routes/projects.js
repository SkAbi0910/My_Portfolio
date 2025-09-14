import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

const projects = [
    {
        id:1,
        title: "School Management System",
        description:"A full-stack system for managing classes, students and teachers.",
        tech: ["Laravel","React","MySQL","TailwindCSS"],
        github:"",
        demo :"",
    },
    {
        id:2,
        title: "Todo App",
        description:"Simple CRUD Todo app with MERN stack.",
        tech: ["MongoDB","Express","React","Node.js","TailwindCSS"],
        github:"",
        demo :"",
    },
]

router.get("/", async (req,res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req,res) => {
    try{
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch(err){
        res.status(400).json({ error: err.message });
    }
});

export default router;