"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { foodRepository } from "@/lib/repositories/foodRepository";
import type { FoodEntry } from "@/types/food";
import { isSameDate } from "@/utils/date";
import { summarizeNutrition } from "@/utils/nutrition";

export const useFood = () => {
  const [entries, setEntries] = useState<FoodEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    const items = await foodRepository.findAll();
    setEntries(items);
    setIsLoading(false);
  }, []);

  const addEntry = useCallback(
    async (entry: FoodEntry) => {
      await foodRepository.save(entry);
      await load();
    },
    [load],
  );

  useEffect(() => {
    void load();
  }, [load]);

  const todayEntries = useMemo(() => {
    const now = new Date().toISOString();

    return entries.filter((entry) => isSameDate(entry.createdAt, now));
  }, [entries]);

  const todaySummary = useMemo(() => {
    return summarizeNutrition(todayEntries);
  }, [todayEntries]);

  return {
    entries,
    todayEntries,
    todaySummary,
    isLoading,
    addEntry,
    reload: load,
  };
};
