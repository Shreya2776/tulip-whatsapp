import express from "express";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Twilio WhatsApp API is running 🚀" });
});

// Message routes
app.use("/api/messages", messageRoutes);

export default app;

