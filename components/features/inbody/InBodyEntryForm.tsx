"use client";

import { useState } from "react";
import type { InBodyRecord } from "@/types/inbody";

type InBodyEntryFormProps = {
  onSubmit: (record: InBodyRecord) => Promise<void>;
};

export const InBodyEntryForm = ({ onSubmit }: InBodyEntryFormProps) => {
  const [weight, setWeight] = useState(72);
  const [skeletalMuscleMass, setSkeletalMuscleMass] = useState(34);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(15);
  const [bmi, setBmi] = useState(23);
  const [visceralFatLevel, setVisceralFatLevel] = useState(6);
  const [basalMetabolicRate, setBasalMetabolicRate] = useState(1650);

  const handleSubmit = async () => {
    await onSubmit({
      id: crypto.randomUUID(),
      weight,
      skeletalMuscleMass,
      bodyFatPercentage,
      bmi,
      visceralFatLevel,
      basalMetabolicRate,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-bold">InBody追加</h2>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          ["体重", weight, setWeight],
          ["骨格筋量", skeletalMuscleMass, setSkeletalMuscleMass],
          ["体脂肪率", bodyFatPercentage, setBodyFatPercentage],
          ["BMI", bmi, setBmi],
          ["内臓脂肪", visceralFatLevel, setVisceralFatLevel],
          ["基礎代謝", basalMetabolicRate, setBasalMetabolicRate],
        ].map(([label, value, setter]) => (
          <label key={label as string} className="text-xs font-semibold">
            {label as string}
            <input
              type="number"
              value={value as number}
              onChange={(event) =>
                (setter as (nextValue: number) => void)(
                  Number(event.target.value),
                )
              }
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-transparent px-3 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700"
            />
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          void handleSubmit();
        }}
        className="mt-4 w-full rounded-2xl bg-indigo-500 px-4 py-3 font-bold text-white shadow-lg shadow-indigo-500/30"
      >
        保存する
      </button>
    </div>
  );
};
