const TOKEN = "8566917706:AAEoLCf96GX_J4J3RTl8-qWj9-hUtGVcWFU";
const CHAT_ID = "-5056117146";

async function sendTestMessage() {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: "Test message from TypeScript 🚀",
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

sendTestMessage();
