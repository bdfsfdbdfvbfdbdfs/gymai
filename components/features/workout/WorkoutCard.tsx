import { ExerciseCard } from "@/components/features/workout/ExerciseCard";
import type { WorkoutSession } from "@/types/workout";
import { calculateWorkoutVolume } from "@/utils/training";

type WorkoutCardProps = {
  session: WorkoutSession;
};

export const WorkoutCard = ({ session }: WorkoutCardProps) => {
  return (
    <section className="space-y-3">
      <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-lg dark:bg-white dark:text-slate-950">
        <p className="text-sm font-semibold opacity-70">Workout</p>
        <h2 className="mt-1 text-2xl font-black">{session.title}</h2>
        <p className="mt-2 text-sm opacity-70">
          Total Volume {calculateWorkoutVolume(session.exercises).toLocaleString()}
          kg
        </p>
      </div>

      {session.exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </section>
  );
};
