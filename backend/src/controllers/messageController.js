import { sendWhatsAppMessage } from "../services/twilioService.js";

export const sendMessage = async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields: name, phone, message",
    });
  }

  try {
    const response = await sendWhatsAppMessage({ name, phone, message });
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Failed to send message",
    });
  }
};

