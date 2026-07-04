"use client";

import { useState } from "react";

export default function WorkoutTemplate() {
  const [checked, setChecked] = useState<boolean[]>(
    Array(5).fill(false)
  );

  const exercises = [
    "Bench Press",
    "Incline Dumbbell Press",
    "Cable Fly",
    "Triceps Pushdown",
    "Side Raise",
  ];

  const toggle = (index: number) => {
    const copy = [...checked];
    copy[index] = !copy[index];
    setChecked(copy);
  };

  return (
    <section className="bg-white rounded-3xl p-5 shadow">
      <h2 className="text-xl font-bold mb-4">
        💪 Push Day
      </h2>

      {exercises.map((exercise, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-3"
        >
          <span>{exercise}</span>

          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => toggle(index)}
            className="w-5 h-5"
          />
        </div>
      ))}
    </section>
  );
}