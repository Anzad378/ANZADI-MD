import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@whiskeysockets/baileys";

let handler = async (m, { conn }) => {
  try {
    let locationMessage = {
      locationMessage: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        name: "📍 prince-bot md - Click Here",
        address: "dar es salaam 🇹🇿",
        url: "https://github.com/PRINCETECH20/Prince-bot-md",
        isLive: true,
        accuracyInMeters: 0,
        speedInMps: 0,
        degreesClockwiseFromMagneticNorth: 2,
        comment: "🚀 Welcome to prince bot md! Click the link above to explore the repository.",
        // Optional: Add a thumbnail image
        // jpegThumbnail: await (await fetch("https://imgur.com/q7WXO5w.jpeg")).buffer(),
      },
    };

    let msg = await generateWAMessageFromContent(m.chat, locationMessage, { quoted: m });

    return conn.relayMessage(m.chat, msg.message, {});
  } catch (error) {
    console.error("❌ Error sending location message:", error);
    await conn.reply(m.chat, "⚠️ An error occurred while sending the script link.", m);
  }
};

handler.help = ["script"];
handler.tags = ["info"];
handler.command = ["script", "script2"];

export default handler;
