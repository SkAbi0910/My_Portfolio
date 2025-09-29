const API_URL=import.meta.env.VITE_API_URL;

export const fetchProjects = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching projects: ", err);
        return [];
    }
};

export const fetchBlogs = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching blogs: ", err);
        return [];
    }
};

export const submitContact = async (contact) => {
    try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(contact),
        });
        if(!res.ok){
            return { success: false };
        }
        const data = await res.json();
        return {success: data.success ?? false, data};
    } catch (err) {
        console.error("Error submitting contact: ", err);
        return { success : false };
    }
};