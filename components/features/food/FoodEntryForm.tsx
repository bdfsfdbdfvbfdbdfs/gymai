"use client";

import { useState } from "react";
import type { FoodEntry } from "@/types/food";
import { calculateCalories } from "@/utils/nutrition";

type FoodEntryFormProps = {
  onSubmit: (entry: FoodEntry) => Promise<void>;
};

export const FoodEntryForm = ({ onSubmit }: FoodEntryFormProps) => {
  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const handleSubmit = async () => {
    if (!name.trim()) return;

    await onSubmit({
      id: crypto.randomUUID(),
      name,
      protein,
      fat,
      carbs,
      calories: calculateCalories(protein, fat, carbs),
      mealType: "snack",
      createdAt: new Date().toISOString(),
    });

    setName("");
    setProtein(0);
    setFat(0);
    setCarbs(0);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-bold">食事追加</h2>

      <div className="mt-4 space-y-3">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="鶏胸肉・白米など"
          className="w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-indigo-500 dark:border-slate-700"
        />

        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            value={protein}
            onChange={(event) => setProtein(Number(event.target.value))}
            placeholder="P"
            className="w-full rounded-2xl border border-slate-200 bg-transparent px-3 py-3 outline-none focus:border-indigo-500 dark:border-slate-700"
          />
          <input
            type="number"
            value={fat}
            onChange={(event) => setFat(Number(event.target.value))}
            placeholder="F"
            className="w-full rounded-2xl border border-slate-200 bg-transparent px-3 py-3 outline-none focus:border-indigo-500 dark:border-slate-700"
          />
          <input
            type="number"
            value={carbs}
            onChange={(event) => setCarbs(Number(event.target.value))}
            placeholder="C"
            className="w-full rounded-2xl border border-slate-200 bg-transparent px-3 py-3 outline-none focus:border-indigo-500 dark:border-slate-700"
          />
        </div>

        <button
          type="button"
          onClick={() => {
            void handleSubmit();
          }}
          className="w-full rounded-2xl bg-indigo-500 px-4 py-3 font-bold text-white shadow-lg shadow-indigo-500/30"
        >
          追加する
        </button>
      </div>
    </div>
  );
};
