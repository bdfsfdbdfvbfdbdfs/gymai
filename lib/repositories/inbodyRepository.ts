import { localStorageClient } from "@/lib/storage/localStorageClient";
import type { Repository } from "@/lib/repositories/base";
import type { InBodyRecord } from "@/types/inbody";

const INBODY_RECORDS_KEY = "gymai.inbodyRecords";

export const inBodyRepository: Repository<InBodyRecord> = {
  async findAll() {
    return localStorageClient.get<InBodyRecord[]>(INBODY_RECORDS_KEY, []);
  },

  async save(item) {
    const records = await this.findAll();
    localStorageClient.set(INBODY_RECORDS_KEY, [item, ...records]);
  },

  async saveAll(items) {
    localStorageClient.set(INBODY_RECORDS_KEY, items);
  },

  async clear() {
    localStorageClient.remove(INBODY_RECORDS_KEY);
  },
};
