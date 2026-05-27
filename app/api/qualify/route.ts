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
    You are an elite performance marketing consultant.
    
    Analyze this business lead and generate a professional AI Growth Proposal.
    
    Business Type:
    ${body.business}
    
    Monthly Ad Spend:
    ${body.adSpend}
    
    Goals:
    ${body.goals}
    
    Generate:
    
    1. Lead Quality Score (/10)
    
    2. Growth Potential Analysis
    
    3. Biggest Marketing Bottlenecks
    
    4. Recommended Growth Strategy
    
    5. Suggested Ad Channels
    (Google Ads, Meta Ads, Amazon PPC, Email etc.)
    
    6. Recommended Services
    
    7. Expected Improvement Opportunities
    
    8. 90-Day Action Plan
    
    9. Estimated Scaling Potential
    
    Keep formatting clean and professional.
    
    Use headings and bullet points.
    
    Keep tone premium and strategic.

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
    (
    completion.choices[0]?.message?.content || ""
    ).slice(0, 1900),
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