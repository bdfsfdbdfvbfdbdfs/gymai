"use client";

import { useEffect, useState } from "react";

type SetItem = {
  weight: string;
  reps: string;
  done: boolean;
};

export default function Workout() {
  const [sets, setSets] = useState<SetItem[]>([
    { weight: "", reps: "", done: false },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("bench_sets");

    if (saved) {
      const parsed = JSON.parse(saved);

      const fixed = parsed.map((set: any) => ({
        weight: set.weight || "",
        reps: set.reps || "",
        done: set.done || false,
      }));

      setSets(fixed);
    }
  }, []);

  const updateSet = (
    index: number,
    field: keyof SetItem,
    value: string | boolean
  ) => {
    const newSets = [...sets];
    newSets[index] = {
      ...newSets[index],
      [field]: value,
    };
    setSets(newSets);
  };

  const addSet = () => {
    setSets([...sets, { weight: "", reps: "", done: false }]);
  };

  const saveWorkout = () => {
    localStorage.setItem("bench_sets", JSON.stringify(sets));
    alert("保存しました！");
  };

  const bestWeight = Math.max(...sets.map((s) => Number(s.weight) || 0));
  const progress = Math.min(bestWeight, 100);

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto space-y-5">
        <section className="bg-black text-white rounded-3xl p-6">
          <h1 className="text-3xl font-bold">💪 Bench Press</h1>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow">
          <div className="space-y-4">
            {sets.map((set, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-bold">Set {index + 1}</p>

                  <input
                    type="checkbox"
                    checked={set.done}
                    onChange={(e) =>
                      updateSet(index, "done", e.target.checked)
                    }
                    className="w-6 h-6"
                  />
                </div>

                <input
                  type="number"
                  placeholder="重量"
                  value={set.weight}
                  onChange={(e) =>
                    updateSet(index, "weight", e.target.value)
                  }
                  className="w-full border rounded-xl p-3 mb-3"
                />

                <input
                  type="number"
                  placeholder="回数"
                  value={set.reps}
                  onChange={(e) => updateSet(index, "reps", e.target.value)}
                  className="w-full border rounded-xl p-3"
                />
              </div>
            ))}
          </div>

          <button
            onClick={addSet}
            className="w-full bg-green-600 text-white rounded-xl p-3 mt-5"
          >
            ＋ セット追加
          </button>

          <button
            onClick={saveWorkout}
            className="w-full bg-black text-white rounded-xl p-3 mt-3"
          >
            保存
          </button>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow">
          <div className="flex justify-between">
            <h2 className="font-bold">ベンチ100kg</h2>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3">最高重量 {bestWeight}kg</p>
        </section>
      </div>
    </main>
  );
}