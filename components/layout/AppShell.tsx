import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/common/BottomNavigation";
import { Header } from "@/components/common/Header";

type AppShellProps = {
  title: string;
  children: ReactNode;
};

export const AppShell = ({ title, children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <Header title={title} />
      <main className="mx-auto w-full max-w-md px-4 py-5">{children}</main>
      <BottomNavigation />
    </div>
  );
};
