"use client";

import { useCallback, useEffect, useState } from "react";
import { inBodyRepository } from "@/lib/repositories/inbodyRepository";
import type { InBodyRecord } from "@/types/inbody";

export const useInBody = () => {
  const [records, setRecords] = useState<InBodyRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    const items = await inBodyRepository.findAll();
    setRecords(items);
    setIsLoading(false);
  }, []);

  const addRecord = useCallback(
    async (record: InBodyRecord) => {
      await inBodyRepository.save(record);
      await load();
    },
    [load],
  );

  useEffect(() => {
    void load();
  }, [load]);

  return {
    records,
    latestRecord: records[0],
    isLoading,
    addRecord,
    reload: load,
  };
};
