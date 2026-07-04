export type ExerciseSet = {
  id: string;
  weight: number;
  reps: number;
  completed: boolean;
  createdAt: string;
};

export type Exercise = {
  id: string;
  name: string;
  sets: ExerciseSet[];
};

export type WorkoutTemplate = {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
};

export type WorkoutSession = {
  id: string;
  templateId?: string;
  title: string;
  exercises: Exercise[];
  createdAt: string;
};

export type PersonalRecord = {
  exerciseName: string;
  weight: number;
  reps: number;
  estimatedOneRepMax: number;
  achievedAt: string;
};
