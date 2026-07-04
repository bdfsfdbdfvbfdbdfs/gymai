export type AIInsightType =
  | "training"
  | "nutrition"
  | "recomposition"
  | "fatigue"
  | "benchRoadmap";

export type AIInsight = {
  id: string;
  type: AIInsightType;
  title: string;
  summary: string;
  priority: "low" | "medium" | "high";
};
