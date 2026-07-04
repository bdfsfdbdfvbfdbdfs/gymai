import { AICard } from "@/components/features/ai/AICard";
import type { AIInsight } from "@/types/ai";

type AISuggestionPanelProps = {
  insights: AIInsight[];
};

export const AISuggestionPanel = ({ insights }: AISuggestionPanelProps) => {
  return (
    <section className="space-y-3">
      {insights.map((insight) => (
        <AICard key={insight.id} insight={insight} />
      ))}
    </section>
  );
};
