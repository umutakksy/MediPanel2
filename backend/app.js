const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

console.log("MONGO_URI env:", process.env.MONGO_URI); // Bağlantı URI'sını kontrol etmek için

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;
