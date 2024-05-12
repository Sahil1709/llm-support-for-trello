'use server';
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
    // dangerouslyAllowBrowser: true,
});

export async function getChatCompletion(proj_desc: string) {
    const completion = await groq.chat.completions.create({
        messages:[
            {
                "role": "system",
                "content": "your response should follow the following json schema\n{\nboard_name: string,\ncards: [\n  name: string,\n  desc: string,\n  due: datetime,\n  members: member_name,\n  ]\n}"
            },
            {
                "role": "user",
                "content": `Here's the description of my project:\n\n${proj_desc}\n\nBased on the project, prepare a kanban board for me`
            }
        ],    
        model: "llama3-70b-8192",
        response_format:{"type": "json_object"},
        temperature: 1,
        max_tokens: 1024,
    });
    return completion.choices[0]?.message?.content || ""
}
