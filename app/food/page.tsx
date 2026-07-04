"use client";

import { DashboardCard } from "@/components/common/DashboardCard";
import { ProgressBar } from "@/components/common/ProgressBar";
import { FoodCard } from "@/components/features/food/FoodCard";
import { FoodEntryForm } from "@/components/features/food/FoodEntryForm";
import { AppShell } from "@/components/layout/AppShell";
import { USER_GOALS } from "@/constants/goals";
import { useFood } from "@/hooks/useFood";

export default function FoodPage() {
  const { todayEntries, todaySummary, addEntry } = useFood();

  return (
    <AppShell title="Food">
      <div className="space-y-4">
        <DashboardCard
          title="今日の合計"
          value={`${todaySummary.calories}kcal`}
          subtitle={`P ${todaySummary.protein}g / F ${todaySummary.fat}g / C ${todaySummary.carbs}g`}
        >
          <ProgressBar
            value={todaySummary.calories}
            max={USER_GOALS.dailyCalories}
            label="Calories"
          />
        </DashboardCard>

        <FoodEntryForm onSubmit={addEntry} />

        <section className="space-y-3">
          <h2 className="text-xl font-black">Today</h2>
          {todayEntries.map((entry) => (
            <FoodCard key={entry.id} entry={entry} />
          ))}
        </section>
      </div>
    </AppShell>
  );
}
