import { Client } from "@notionhq/client";
import Groq from "groq-sdk";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Analyze this business lead:

Business Type:
${body.business}

Monthly Ad Spend:
${body.adSpend}

Goals:
${body.goals}

Give:
1. Lead Quality Score /10
2. Growth Potential
3. Recommended Marketing Strategy
4. Recommended Services
5. Biggest Opportunity

Keep response concise and professional.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "system",
          content:
            "You are an elite AI growth strategist.",
        },

        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // SAVE TO NOTION
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },

      properties: {
        "Business Name": {
          title: [
            {
              text: {
                content: body.business || "Unknown Business",
              },
            },
          ],
        },

        "Business Type": {
          rich_text: [
            {
              text: {
                content: body.business,
              },
            },
          ],
        },

        "Ad Spend": {
          rich_text: [
            {
              text: {
                content: body.adSpend,
              },
            },
          ],
        },

        "Goals": {
          rich_text: [
            {
              text: {
                content: body.goals,
              },
            },
          ],
        },

        "AI Analysis": {
          rich_text: [
            {
              text: {
                content:
                  completion.choices[0]?.message?.content || "",
              },
            },
          ],
        },

        "Lead Status": {
  status: {
    name: "New",
  },
},
      },
    });

    return Response.json({
      result:
        completion.choices[0]?.message?.content ||
        "No analysis available.",
    });

  } catch (error) {
    console.error(error);

    return Response.json({
      result: "Something went wrong.",
    });
  }
}