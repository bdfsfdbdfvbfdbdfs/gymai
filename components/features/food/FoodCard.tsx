import type { FoodEntry } from "@/types/food";

type FoodCardProps = {
  entry: FoodEntry;
};

export const FoodCard = ({ entry }: FoodCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold">{entry.name}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            P {entry.protein}g / F {entry.fat}g / C {entry.carbs}g
          </p>
        </div>
        <p className="text-lg font-black">{entry.calories}kcal</p>
      </div>
    </article>
  );
};
