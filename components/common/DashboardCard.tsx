import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  value?: string;
  subtitle?: string;
  children?: ReactNode;
};

export const DashboardCard = ({
  title,
  value,
  subtitle,
  children,
}: DashboardCardProps) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {title}
      </p>

      {value ? (
        <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
      ) : null}

      {subtitle ? (
        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      ) : null}

      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
};
