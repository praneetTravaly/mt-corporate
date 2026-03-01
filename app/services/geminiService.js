
import { GoogleGenAI, Type } from "@google/genai";

export const getCoachInsights = async (data) => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("Gemini API key is missing. Check your .env file");
    throw new Error("API configuration error. Please contact support.");
  }
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Act as a world-class Hotel Business Coach (HBC). 
    Analyze the following hotel data and provide a detailed growth strategy.
    
    Hotel Name: ${data.hotelName}
    Location: ${data.location}
    Total Rooms: ${data.totalRooms}
    Current Occupancy: ${data.currentOccupancy}%
    Average Daily Rate (ADR): $${data.adr}
    Specific Challenges: ${data.challenges}

    Instructions:
    1. Generate a short business summary.
    2. Generate exactly 3 actionable coaching insights.
    3. Generate a realistic 6-month RevPAR projection as an array of 6 numbers.

    Rules:
    - Output ONLY valid JSON.
    - Do NOT include markdown, comments, or extra text.
    - revPARPrediction must be an array of exactly 6 numbers.
    - All numbers must be realistic and rounded to 2 decimal places.
    - Priority must be one of: "High", "Medium", "Low".

    Return JSON only.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            insights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  strategyName: { type: Type.STRING },
                  description: { type: Type.STRING },
                  expectedGrowth: { type: Type.STRING },
                  priority: { type: Type.STRING },
                  actionSteps: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ["strategyName", "description", "expectedGrowth", "priority", "actionSteps"]
              }
            },
            revPARPrediction: {
              type: Type.ARRAY,
              items: { type: Type.NUMBER },
              description: "Array of 6 numbers representing predicted RevPAR for the next 6 months."
            }
          },
          required: ["summary", "insights", "revPARPrediction"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get coaching insights. Please check your data and try again.");
  }
};
