import type { AIInsight } from "@/types/ai";

type AICardProps = {
  insight: AIInsight;
};

const priorityStyle = {
  low: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  high: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
};

export const AICard = ({ insight }: AICardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold">{insight.title}</h3>
        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-bold",
            priorityStyle[insight.priority],
          ].join(" ")}
        >
          {insight.priority}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {insight.summary}
      </p>
    </article>
  );
};
