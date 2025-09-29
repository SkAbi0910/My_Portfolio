import express from "express";
import Contact from "../models/Contact.js";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req,res) => {
        const { name, email, message } = req.body;

    try{
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject: `New Contact Form Submission from ${name}`,
            text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p>You have a new contact form submission.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };
        await sgMail.send(msg);

        res.json({ success: true, message: "Email sent SuccessFully" });
 } catch (err) {
  if (err.response) {
    console.error("SendGrid error:", err.response.body);
  } else {
    console.error("Error sending email:", err.message || err);
  }
  res.status(500).json({ success: false, message: "Failed to send email." });
}


});

router.get("/", async (req,res) => {
    try{
        const messages = await Contact.find().sort({ createdAt: -1});
        res.json(messages);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
});

export default router;