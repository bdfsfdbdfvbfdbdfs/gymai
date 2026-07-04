import type { Exercise, ExerciseSet } from "@/types/workout";

export const calculateOneRepMax = (weight: number, reps: number): number => {
  if (weight <= 0 || reps <= 0) return 0;

  return Math.round(weight * (1 + reps / 30));
};

export const calculateSetVolume = (set: ExerciseSet): number => {
  return set.weight * set.reps;
};

export const calculateExerciseVolume = (exercise: Exercise): number => {
  return exercise.sets.reduce((total, set) => {
    return total + calculateSetVolume(set);
  }, 0);
};

export const calculateWorkoutVolume = (exercises: Exercise[]): number => {
  return exercises.reduce((total, exercise) => {
    return total + calculateExerciseVolume(exercise);
  }, 0);
};
