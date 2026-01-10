// ======================== server.js ========================

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { OpenAI } = require("openai"); // ✅ Import OpenAI correctly

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(cors({
  origin: "*", // allow all origins, change for production
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));
app.use(express.json());

// ---------------- MONGO CONNECTION ----------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✔ MongoDB Connected Successfully"))
  .catch(err => console.log("❌ DB Connection Error:", err));

// ---------------- MODELS ----------------

// USER MODEL
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String,
  password: String
}));

// MEDICINE MODEL
const Medicine = mongoose.model("Medicine", new mongoose.Schema({
  name: String,
  expiry: String,
  quantity: String,
  description: String,
  category: String,
  location: String,
  phone: String,
  donor: { type: String, default: "Anonymous" }
}));

// ---------------- OPENAI SETUP ----------------
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ---------------- ROUTES ----------------

// --- Signup ---
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.json({ error: "Email already exists" });

    await User.create({ name, email, password });
    res.json({ success: true, message: "Account created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// --- Login ---
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "User not found" });

    if (password !== user.password)
      return res.json({ error: "Incorrect password" });

    res.json({ success: true, message: "Login successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// --- Add Medicine ---
app.post("/api/add-medicines", async (req, res) => {
  try {
    await Medicine.create(req.body);
    res.json({ success: true, message: "Medicine added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add medicine" });
  }
});

// --- Get All Medicines ---
app.get("/api/get-medicines", async (req, res) => {
  try {
    const meds = await Medicine.find();
    res.json(meds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch medicines" });
  }
});

// --- Delete Medicine ---
app.delete("/api/delete-medicine/:id", async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Medicine deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete medicine" });
  }
});

// --- AI Chatbot Route ---
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4o-mini"
      messages: [
        {
          role: "system",
          content: "You are MediHelp AI, a medical guidance assistant. Suggest common medicines for symptoms, but always warn that this is not a medical diagnosis and advise consulting a doctor if symptoms persist."
        },
        { role: "user", content: userMessage }
      ]
    });

    res.json({
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI service error" });
  }
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
