import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

const blogs = [
    {
        id:1,
        title:"Getting Started with MERN",
        content:"MERN stack combines MongoDB, Express, React, and Node...",
        date:"2025.09.11",
    },
    {
        id:2,
        title:"Why Tailwind CSS Rocks",
        content:"Tailwind makes styling fast and consistent...",
        date:"2025.09.01",
    },
];

router.get("/", async (req,res) => {
    try{
        const blogs = await Blog.find().sort({ createAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }   
});

router.post("/", async (req,res) => {
    try{
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog); 
    } catch (err){
        res.status(400).json({ error: err.message });
    }
});

export default router;