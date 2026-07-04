import type { InBodyRecord } from "@/types/inbody";
import { formatDate } from "@/utils/date";

type InBodyCardProps = {
  record: InBodyRecord;
};

export const InBodyCard = ({ record }: InBodyCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">{formatDate(record.createdAt)}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            BMR {record.basalMetabolicRate}kcal
          </p>
        </div>
        <p className="text-2xl font-black">{record.weight}kg</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-slate-500">骨格筋量</p>
          <p className="font-bold">{record.skeletalMuscleMass}kg</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-slate-500">体脂肪率</p>
          <p className="font-bold">{record.bodyFatPercentage}%</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-slate-500">BMI</p>
          <p className="font-bold">{record.bmi}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-slate-500">内臓脂肪</p>
          <p className="font-bold">{record.visceralFatLevel}</p>
        </div>
      </div>
    </article>
  );
};
