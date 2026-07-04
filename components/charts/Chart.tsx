type ChartPoint = {
  label: string;
  value: number;
};

type ChartProps = {
  points: ChartPoint[];
};

export const Chart = ({ points }: ChartProps) => {
  const maxValue = Math.max(...points.map((point) => point.value), 1);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-bold">履歴グラフ</h2>

      <div className="mt-5 flex h-40 items-end gap-2">
        {points.map((point) => {
          const height = Math.max((point.value / maxValue) * 100, 8);

          return (
            <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-2xl bg-gradient-to-t from-indigo-500 to-cyan-400"
                style={{ height: `${height}%` }}
              />
              <span className="text-[10px] text-slate-500">{point.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
