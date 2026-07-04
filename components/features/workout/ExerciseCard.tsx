import type { Exercise } from "@/types/workout";
import { calculateExerciseVolume, calculateOneRepMax } from "@/utils/training";

type ExerciseCardProps = {
  exercise: Exercise;
};

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const topSet = exercise.sets[0];
  const estimatedOneRepMax = topSet
    ? calculateOneRepMax(topSet.weight, topSet.reps)
    : 0;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">{exercise.name}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Volume {calculateExerciseVolume(exercise).toLocaleString()}kg
          </p>
        </div>
        <div className="rounded-2xl bg-indigo-50 px-3 py-2 text-right dark:bg-indigo-950">
          <p className="text-xs font-semibold text-indigo-500">1RM</p>
          <p className="text-sm font-black">{estimatedOneRepMax}kg</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {exercise.sets.map((set, index) => (
          <div
            key={set.id}
            className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800"
          >
            <span className="font-semibold">Set {index + 1}</span>
            <span>{set.weight}kg</span>
            <span>{set.reps}reps</span>
            <input
              type="checkbox"
              checked={set.completed}
              readOnly
              className="h-5 w-5 accent-indigo-500"
              aria-label={`${exercise.name} set ${index + 1} completed`}
            />
          </div>
        ))}
      </div>
    </article>
  );
};
