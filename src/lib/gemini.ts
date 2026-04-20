import { GoogleGenAI } from '@google/genai';

// Initialize with the environment variable provided by AI Studio
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set');
}

const ai = new GoogleGenAI({ apiKey });

export async function analyzeResume(resumeText: string, jobDescription: string) {
  const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `
    Analyze this resume against the job description.
    Provide a score (0-100) for ATS compatibility and 3 specific bullet-point suggestions to improve the resume for this job.
    Resume: ${resumeText}
    Job Description: ${jobDescription}
    Return JSON: { "score": number, "suggestions": string[] }
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return JSON.parse(response.text());
}
