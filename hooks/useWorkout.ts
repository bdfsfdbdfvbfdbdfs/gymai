"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  workoutSessionRepository,
  workoutTemplateRepository,
} from "@/lib/repositories/workoutRepository";
import type { WorkoutSession, WorkoutTemplate } from "@/types/workout";
import { calculateWorkoutVolume } from "@/utils/training";

export const useWorkout = () => {
  const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
  const [sessions, setSessions] = useState<WorkoutSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);

    const [templateItems, sessionItems] = await Promise.all([
      workoutTemplateRepository.findAll(),
      workoutSessionRepository.findAll(),
    ]);

    setTemplates(templateItems);
    setSessions(sessionItems);
    setIsLoading(false);
  }, []);

  const addSession = useCallback(
    async (session: WorkoutSession) => {
      await workoutSessionRepository.save(session);
      await load();
    },
    [load],
  );

  useEffect(() => {
    void load();
  }, [load]);

  const latestSession = sessions[0];

  const latestVolume = useMemo(() => {
    if (!latestSession) return 0;

    return calculateWorkoutVolume(latestSession.exercises);
  }, [latestSession]);

  return {
    templates,
    sessions,
    latestSession,
    latestVolume,
    isLoading,
    addSession,
    reload: load,
  };
};
