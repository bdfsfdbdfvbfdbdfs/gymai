import { MOCK_AI_INSIGHTS } from "@/constants/ai";
import type { AIInsight } from "@/types/ai";

export const aiService = {
  async getInsights(): Promise<AIInsight[]> {
    return MOCK_AI_INSIGHTS;
  },
};
