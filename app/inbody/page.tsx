"use client";

import { Chart } from "@/components/charts/Chart";
import { InBodyCard } from "@/components/features/inbody/InBodyCard";
import { InBodyEntryForm } from "@/components/features/inbody/InBodyEntryForm";
import { AppShell } from "@/components/layout/AppShell";
import { useInBody } from "@/hooks/useInBody";
import { formatDate } from "@/utils/date";

export default function InBodyPage() {
  const { records, addRecord } = useInBody();

  return (
    <AppShell title="InBody">
      <div className="space-y-4">
        <InBodyEntryForm onSubmit={addRecord} />

        <Chart
          points={records
            .slice(0, 7)
            .reverse()
            .map((record) => ({
              label: formatDate(record.createdAt),
              value: record.weight,
            }))}
        />

        <section className="space-y-3">
          <h2 className="text-xl font-black">History</h2>
          {records.map((record) => (
            <InBodyCard key={record.id} record={record} />
          ))}
        </section>
      </div>
    </AppShell>
  );
}
