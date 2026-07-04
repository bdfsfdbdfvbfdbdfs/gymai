type ProgressBarProps = {
  value: number;
  max: number;
  label?: string;
};

export const ProgressBar = ({ value, max, label }: ProgressBarProps) => {
  const percentage = max <= 0 ? 0 : Math.min((value / max) * 100, 100);

  return (
    <div>
      {label ? (
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      ) : null}

      <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
