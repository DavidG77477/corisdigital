
import { GoogleGenAI } from "@google/genai";

// Initialize client with API key
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDigitalStrategy = async (businessContext: string): Promise<string> => {
  try {
    const model = 'gemini-3-pro-preview';
    const prompt = `
      You are "Coris Digital® AI", a senior software architect and digital strategist for Coris Digital® Agency.
      
      The client describes their need as: "${businessContext}".
      
      Your goal is to propose a high-impact preliminary technical and marketing strategy.
      
      Structure your response in Markdown as follows:
      1. **Quick Analysis**: 1 sentence on the identified challenge.
      2. **Recommended Coris Digital® Solutions**: A list of 3 specific software modules or strategies (e.g., Custom CRM, Automation Dashboard, Niche SEO Strategy).
      3. **Expected Impact**: 1 sentence on the potential productivity or revenue gain.
      
      Your tone should be professional, futuristic, reassuring, and expert. Be brief but precise. Respond exclusively in English.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Sorry, I couldn't generate a strategy at the moment. Please try again.";
  } catch (error) {
    console.error("Error generating strategy:", error);
    return "An error occurred while analyzing your request. Please check your connection or try again later.";
  }
};
