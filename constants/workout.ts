import type { WorkoutTemplate } from "@/types/workout";

export const DEFAULT_WORKOUT_TEMPLATES: WorkoutTemplate[] = [
  {
    id: "push-day",
    name: "Push Day",
    description: "ベンチ100kgを狙う胸・肩・三頭の日",
    exercises: [
      {
        id: "bench-press",
        name: "ベンチプレス",
        sets: [
          {
            id: "bench-set-1",
            weight: 80,
            reps: 5,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        ],
      },
      {
        id: "incline-db-press",
        name: "インクラインDBプレス",
        sets: [],
      },
      {
        id: "shoulder-press",
        name: "ショルダープレス",
        sets: [],
      },
    ],
  },
  {
    id: "pull-day",
    name: "Pull Day",
    description: "背中と二頭を強化する日",
    exercises: [
      {
        id: "lat-pulldown",
        name: "ラットプルダウン",
        sets: [],
      },
      {
        id: "barbell-row",
        name: "バーベルロー",
        sets: [],
      },
    ],
  },
];
