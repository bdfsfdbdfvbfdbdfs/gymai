import { DEFAULT_WORKOUT_TEMPLATES } from "@/constants/workout";
import { localStorageClient } from "@/lib/storage/localStorageClient";
import type { Repository } from "@/lib/repositories/base";
import type { WorkoutSession, WorkoutTemplate } from "@/types/workout";

const WORKOUT_SESSIONS_KEY = "gymai.workoutSessions";
const WORKOUT_TEMPLATES_KEY = "gymai.workoutTemplates";

export const workoutSessionRepository: Repository<WorkoutSession> = {
  async findAll() {
    return localStorageClient.get<WorkoutSession[]>(WORKOUT_SESSIONS_KEY, []);
  },

  async save(item) {
    const sessions = await this.findAll();
    localStorageClient.set(WORKOUT_SESSIONS_KEY, [item, ...sessions]);
  },

  async saveAll(items) {
    localStorageClient.set(WORKOUT_SESSIONS_KEY, items);
  },

  async clear() {
    localStorageClient.remove(WORKOUT_SESSIONS_KEY);
  },
};

export const workoutTemplateRepository: Repository<WorkoutTemplate> = {
  async findAll() {
    return localStorageClient.get<WorkoutTemplate[]>(
      WORKOUT_TEMPLATES_KEY,
      DEFAULT_WORKOUT_TEMPLATES,
    );
  },

  async save(item) {
    const templates = await this.findAll();
    localStorageClient.set(WORKOUT_TEMPLATES_KEY, [item, ...templates]);
  },

  async saveAll(items) {
    localStorageClient.set(WORKOUT_TEMPLATES_KEY, items);
  },

  async clear() {
    localStorageClient.remove(WORKOUT_TEMPLATES_KEY);
  },
};
