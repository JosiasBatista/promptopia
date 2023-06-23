import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag, aiService } = await req.json();

  try {
    await connectDB();
    const promptData = {
      creator: userId,
      tag,
      prompt
    }

    if (aiService) promptData.aiService = aiService;

    const newPrompt = new Prompt(promptData);
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201
    })
  } catch (error) {
    return new Response("Failed to create a new prompt", {
      status: 500
    })
  }
}