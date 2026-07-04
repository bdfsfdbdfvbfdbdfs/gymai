import type { AIInsight } from "@/types/ai";

export const MOCK_AI_INSIGHTS: AIInsight[] = [
  {
    id: "training-1",
    type: "training",
    title: "トレーニング提案",
    summary:
      "ベンチ100kgに向けて、週2回のベンチ頻度を維持しましょう。高重量日とボリューム日を分けるのがおすすめです。",
    priority: "high",
  },
  {
    id: "nutrition-1",
    type: "nutrition",
    title: "食事提案",
    summary:
      "減量中でも筋量維持を狙うため、タンパク質150g前後を優先してください。",
    priority: "high",
  },
  {
    id: "recomp-1",
    type: "recomposition",
    title: "リコンプ分析",
    summary:
      "体重の落ち方が週0.5kg以内なら、筋力を維持しながら体脂肪を削りやすいペースです。",
    priority: "medium",
  },
  {
    id: "fatigue-1",
    type: "fatigue",
    title: "疲労判定",
    summary:
      "睡眠不足やトップセット重量低下が続く場合は、ボリュームを20%落とす週を作りましょう。",
    priority: "medium",
  },
  {
    id: "bench-1",
    type: "benchRoadmap",
    title: "ベンチ100kgロードマップ",
    summary:
      "現状82.5kg想定なら、まずは85kg x 5回、90kg x 3回、95kg x 1回を段階目標にします。",
    priority: "high",
  },
];
