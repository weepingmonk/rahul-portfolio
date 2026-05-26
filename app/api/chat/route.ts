import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages || [];

    const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "system",
          content: `
You are Rahul Kumar's AI Marketing Assistant.

You help visitors understand:
- Google Ads
- Amazon Ads
- Amazon DSP
- GA4 Analytics
- AI Automation
- Performance Marketing

Focus on:
- ROAS
- CPA reduction
- scaling brands
- analytics
- growth strategy

Keep responses concise and professional.
          `,
        },

        ...messages,
      ],
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return Response.json({
      content: reply,
    });

  } catch (error) {
    console.error("GROQ ERROR:", error);

    return Response.json(
      {
        content: "AI request failed.",
      },
      {
        status: 500,
      }
    );
  }
}
