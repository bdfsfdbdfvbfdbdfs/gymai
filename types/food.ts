export type FoodEntry = {
  id: string;
  name: string;
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  createdAt: string;
};

export type NutritionSummary = {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
};
