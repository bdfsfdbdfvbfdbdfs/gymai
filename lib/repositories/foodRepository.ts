import { localStorageClient } from "@/lib/storage/localStorageClient";
import type { Repository } from "@/lib/repositories/base";
import type { FoodEntry } from "@/types/food";

const FOOD_ENTRIES_KEY = "gymai.foodEntries";

export const foodRepository: Repository<FoodEntry> = {
  async findAll() {
    return localStorageClient.get<FoodEntry[]>(FOOD_ENTRIES_KEY, []);
  },

  async save(item) {
    const entries = await this.findAll();
    localStorageClient.set(FOOD_ENTRIES_KEY, [item, ...entries]);
  },

  async saveAll(items) {
    localStorageClient.set(FOOD_ENTRIES_KEY, items);
  },

  async clear() {
    localStorageClient.remove(FOOD_ENTRIES_KEY);
  },
};
