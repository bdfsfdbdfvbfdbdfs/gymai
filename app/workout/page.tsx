"use client";

import { AppShell } from "@/components/layout/AppShell";
import { TemplateCard } from "@/components/features/workout/TemplateCard";
import { WorkoutCard } from "@/components/features/workout/WorkoutCard";
import { useWorkout } from "@/hooks/useWorkout";

export default function WorkoutPage() {
  const { templates, latestSession } = useWorkout();

  return (
    <AppShell title="Workout">
      <div className="space-y-5">
        <section>
          <h2 className="mb-3 text-xl font-black">Templates</h2>
          <div className="space-y-3">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-black">History</h2>
          {latestSession ? (
            <WorkoutCard session={latestSession} />
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              まだワークアウト履歴がありません。
            </div>
          )}
        </section>
      </div>
    </AppShell>
  );
}
