import React,{ useEffect, useState} from "react";
import { fetchBlogs } from "../services/api";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
        };
        loadBlogs();
    }, []);

    return(
        <section id="blog" className="max-w-6xl mx-auto py-16 px-6" >
            <h3 className="text-3xl font-bold mb-6">Blogs</h3>
            <div>
                {blogs.map((blog) => (
                    <div>
                        <h4>{blog.title}</h4>
                        <p>{blog.content}</p>
                        <p>{new Date(blog.Date).toDateString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;

