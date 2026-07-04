"use client";

import { DashboardCard } from "@/components/common/DashboardCard";
import { ProgressBar } from "@/components/common/ProgressBar";
import { AppShell } from "@/components/layout/AppShell";
import { USER_GOALS } from "@/constants/goals";
import { useFood } from "@/hooks/useFood";
import { useInBody } from "@/hooks/useInBody";
import { useWorkout } from "@/hooks/useWorkout";

export const DashboardHome = () => {
  const { todaySummary } = useFood();
  const { latestRecord } = useInBody();
  const { templates, latestVolume } = useWorkout();

  const weight = latestRecord?.weight ?? USER_GOALS.currentWeight;
  const benchProgress = 82.5;

  return (
    <AppShell title="Home">
      <div className="space-y-4">
        <section className="rounded-[2rem] bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 p-6 text-white shadow-xl shadow-indigo-500/30">
          <p className="text-sm font-semibold opacity-80">Today</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">
            リコンプを進める日
          </h2>
          <p className="mt-3 text-sm leading-6 opacity-90">
            体重を落としながら、ベンチ100kgに向けて筋力を維持・向上します。
          </p>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <DashboardCard
            title="体重"
            value={`${weight.toFixed(1)}kg`}
            subtitle={`目標 ${USER_GOALS.targetWeight}kg`}
          />

          <DashboardCard
            title="摂取カロリー"
            value={`${todaySummary.calories}`}
            subtitle={`目標 ${USER_GOALS.dailyCalories}kcal`}
          />
        </div>

        <DashboardCard
          title="今日のメニュー"
          value={templates[0]?.name ?? "Push Day"}
          subtitle={templates[0]?.description ?? "ベンチ強化メニュー"}
        />

        <DashboardCard
          title="ベンチ進捗"
          value={`${benchProgress}kg`}
          subtitle={`目標 ${USER_GOALS.targetBenchPress}kg`}
        >
          <ProgressBar
            value={benchProgress}
            max={USER_GOALS.targetBenchPress}
            label="Bench Press Roadmap"
          />
        </DashboardCard>

        <DashboardCard
          title="AIコメント"
          value="良い流れです"
          subtitle={`直近ボリュームは ${latestVolume.toLocaleString()}kg。減量中は重量維持を最優先にしましょう。`}
        />
      </div>
    </AppShell>
  );
};
