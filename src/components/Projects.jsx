import React, { use, useEffect, useState} from "react";
import { fetchProjects } from "../services/api";

const Projects = () => {
    const [ projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
            const data = await fetchProjects();
            console.log("Projects fetched:", data);
            setProjects(data);
            } catch (error) {
                console.error("Error loading projects:", error);
            }
        };
        loadProjects();
    },[]);

    return (
        <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
            <h3 className="text-3xl font-bold mb-6">Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="p-4 bg-white rounded-xl shadow">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <p className="text-gray-700 mt-2">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-500">Tech: {project.tech.join(", ")}</p>
                        <div className="mt-3 flex gap-3">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline" >GitHub</a>
                            )}
                            {project.demo && (
                                <a>Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;