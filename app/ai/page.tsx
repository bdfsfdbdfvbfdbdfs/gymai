"use client";

import { AISuggestionPanel } from "@/components/features/ai/AISuggestionPanel";
import { AppShell } from "@/components/layout/AppShell";
import { useAI } from "@/hooks/useAI";

export default function AIPage() {
  const { insights } = useAI();

  return (
    <AppShell title="AI">
      <div className="space-y-4">
        <section className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-indigo-700 p-6 text-white shadow-xl dark:from-indigo-600 dark:to-cyan-500">
          <p className="text-sm font-semibold opacity-80">Mock AI Coach</p>
          <h2 className="mt-2 text-3xl font-black">次の一手を提案</h2>
          <p className="mt-3 text-sm leading-6 opacity-90">
            API接続前のモック分析です。将来的にChatGPT APIへ差し替えます。
          </p>
        </section>

        <AISuggestionPanel insights={insights} />
      </div>
    </AppShell>
  );
}
