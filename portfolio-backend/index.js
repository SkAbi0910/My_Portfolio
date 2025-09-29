import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import projectRoutes from "./routes/projects.js";
import blogRoutes from "./routes/blogs.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
console.log("SENDGRID KEY:", process.env.SENDGRID_API_KEY?.substring(0,5)); // should log "SG..."
console.log("FROM:", process.env.EMAIL_FROM);
console.log("TO:", process.env.EMAIL_TO);
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  
.then(() =>
    { console.log("MongoDB connected");
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
})
.catch(err => console.error("MongoDB Connection Error: " , err));

app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req,res) => {
    res.send("Portfolio API is Running");
});


