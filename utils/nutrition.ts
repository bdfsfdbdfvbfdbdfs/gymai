import type { FoodEntry, NutritionSummary } from "@/types/food";

export const calculateCalories = (
  protein: number,
  fat: number,
  carbs: number,
): number => {
  return protein * 4 + fat * 9 + carbs * 4;
};

export const summarizeNutrition = (entries: FoodEntry[]): NutritionSummary => {
  return entries.reduce<NutritionSummary>(
    (summary, entry) => ({
      protein: summary.protein + entry.protein,
      fat: summary.fat + entry.fat,
      carbs: summary.carbs + entry.carbs,
      calories: summary.calories + entry.calories,
    }),
    {
      protein: 0,
      fat: 0,
      carbs: 0,
      calories: 0,
    },
  );
};
