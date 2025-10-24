import twilio from "twilio";
import { twilioConfig } from "../config/twilioConfig.js";

const client = twilio(twilioConfig.accountSid, twilioConfig.authToken);

export const sendWhatsAppMessage = async ({ name, phone, message }) => {
  try {
    const fullMessage = `Hi ${name}, ${message}`;

    const response = await client.messages.create({
      from: twilioConfig.fromNumber,
      to: `whatsapp:${phone}`,
      body: fullMessage,
    });

    return {
      sid: response.sid,
      status: response.status,
      to: response.to,
      body: response.body,
    };
  } catch (error) {
    console.error("Twilio API Error:", error.message);
    throw new Error("Failed to send WhatsApp message via Twilio");
  }
};
