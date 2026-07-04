"use client";

import { AppShell } from "@/components/layout/AppShell";
import { useTheme } from "@/hooks/useTheme";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppShell title="Settings">
      <div className="space-y-4">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold">テーマ</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            現在のテーマ: {theme}
          </p>

          <button
            type="button"
            onClick={toggleTheme}
            className="mt-4 w-full rounded-2xl bg-slate-900 px-4 py-3 font-bold text-white dark:bg-white dark:text-slate-950"
          >
            ダークモード切り替え
          </button>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold">データ保存</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            現在はlocalStorageに保存しています。Repository層をFirebase実装へ差し替えることでクラウド同期できます。
          </p>
        </section>
      </div>
    </AppShell>
  );
}
