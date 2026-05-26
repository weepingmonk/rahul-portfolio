import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: `
      You are Rahul Kumar's AI marketing assistant.

      You help visitors understand:
      - Google Ads services
      - Amazon Ads optimization
      - GA4 analytics
      - AI automation
      - Performance marketing

      Speak professionally and focus on growth, ROAS, CPA reduction, and scaling.
    `,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
