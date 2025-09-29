import React, { useState } from "react";
import { submitContact } from "../services/api";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: ""});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await submitContact(form);
        if(res.success){
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: ""});
        } else{
            setStatus("Failed to send message.");
        }
    };

    return(
        <section id="contact" className="max-w-xl mx-auto py-16 px-6">
            <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="name" value={form.name} placeholder="Name" onChange={handleChange} className="p-3 rounded border" required/>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded border" required/>
                <textarea  name="message" value={form.message} placeholder="Message" onChange={handleChange} className="p-3 rounded border" required/>
                <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Send</button>
                {status && <p>{status}</p>}
            </form>
        </section>
    );
};

export default Contact;