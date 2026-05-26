import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"),

    system: `
You are Rahul Kumar's AI Marketing Assistant.

You help visitors understand:
- Google Ads
- Amazon Ads
- Amazon DSP
- GA4 Analytics
- AI Automation
- Performance Marketing

Speak professionally and focus on:
- ROAS
- CPA reduction
- growth strategy
- scaling brands
- analytics

Keep answers concise and useful.
    `,

    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
