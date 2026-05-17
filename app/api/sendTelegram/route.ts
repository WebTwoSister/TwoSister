import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    const text = `
<b>🆕 Нове замовлення!</b>
------------------------------------
<b>🧑 Ім'я:</b> ${name}
<b>✉️ Email:</b> ${email}
<b>📞 Телефон:</b> <code>${phone}</code>
<b>🧹 Сервіс:</b> ${service}
<b>💬 Повідомлення:</b> ${message || "немає"}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    const data = await response.json();

    if (!data.ok) {
      return NextResponse.json({ error: data.description }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
