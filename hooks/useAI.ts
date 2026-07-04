"use client";

import { useCallback, useEffect, useState } from "react";
import { aiService } from "@/services/aiService";
import type { AIInsight } from "@/types/ai";

export const useAI = () => {
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    const items = await aiService.getInsights();
    setInsights(items);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    insights,
    isLoading,
    reload: load,
  };
};
