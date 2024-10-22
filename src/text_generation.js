// require('dotenv').config(); 
import { GoogleGenerativeAI } from "@google/generative-ai";


export const generateText = async () => {
    const apiKey = process.env.VUE_APP_API_KEY
        
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Write a story about a magic backpack.";
    
    const result = await model.generateContent(prompt);
    return result.response.text();
}