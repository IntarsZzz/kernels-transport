
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Tu esi Kernels Transport loģistikas asistents. Kernels Transport ir dibināts 2010. gadā Dobelē (agrāk RV Kodoli).
        Tev jāatbild latviešu valodā profesionāli un palīdzīgi.
        Galvenie pakalpojumi: 
        1. FTL (pilnās kravas) un LTL (saliktās kravas) starp Baltiju un Centrāleiropu (Austrija, Čehija, Ziemeļitālija).
        2. Beramkravu loģistika ar 92m3 šķeldveža puspiekabi Baltijā.
        3. Autoparkā ir 6 Volvo EURO 6 vilcēji.
        
        Ja klients jautā par cenām, paskaidro, ka cenu var uzzināt sazinoties ar Edīti Gardu (+371 26073934, edite@kernels.lv) vai Edgaru Vinciunu (+371 26 161 593, edgars@kernels.lv).
        Esi īss un kodolīgs.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Atvainojiet, radās kļūda saziņā ar asistentu. Lūdzu, mēģiniet vēlreiz vēlāk vai sazinieties ar mums tieši.";
  }
};
