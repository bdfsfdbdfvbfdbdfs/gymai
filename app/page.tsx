"use client";

import { useEffect, useMemo, useState } from "react";

type SetItem = { weight: string; reps: string; done: boolean };
type FoodItem = { name: string; kcal: string; protein: string; fat: string; carbs: string };
type InBody = { weight: string; muscle: string; bodyFat: string };

export default function Home() {
  const [inbody, setInbody] = useState<InBody>({ weight: "", muscle: "", bodyFat: "" });
  const [sets, setSets] = useState<SetItem[]>([{ weight: "", reps: "", done: false }]);
  const [foods, setFoods] = useState<FoodItem[]>([{ name: "", kcal: "", protein: "", fat: "", carbs: "" }]);

  useEffect(() => {
    const data = localStorage.getItem("gymai_v1");
    if (data) {
      const saved = JSON.parse(data);
      if (saved.inbody) setInbody(saved.inbody);
      if (saved.sets) setSets(saved.sets);
      if (saved.foods) setFoods(saved.foods);
    }
  }, []);

  const bestBench = useMemo(() => Math.max(...sets.map((s) => Number(s.weight) || 0)), [sets]);
  const benchProgress = Math.min(bestBench, 100);
  const totalKcal = foods.reduce((s, f) => s + (Number(f.kcal) || 0), 0);
  const totalProtein = foods.reduce((s, f) => s + (Number(f.protein) || 0), 0);
  const totalFat = foods.reduce((s, f) => s + (Number(f.fat) || 0), 0);
  const totalCarbs = foods.reduce((s, f) => s + (Number(f.carbs) || 0), 0);

  const saveAll = () => {
    localStorage.setItem("gymai_v1", JSON.stringify({ inbody, sets, foods }));
    alert("保存しました！");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5 pb-24">
      <div className="max-w-md mx-auto space-y-5">
        <section className="bg-black text-white rounded-3xl p-6 shadow">
          <p className="text-gray-300 text-sm">Strong × InBody × 食事管理</p>
          <h1 className="text-4xl font-bold mt-1">🏋️ GymAI</h1>
          <p className="text-gray-300 mt-2">ベンチ100kgとリコンプを管理。</p>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Card title="体重" value={`${inbody.weight || "--"}kg`} />
          <Card title="体脂肪率" value={`${inbody.bodyFat || "--"}%`} />
          <Card title="摂取" value={`${totalKcal}kcal`} />
          <Card title="タンパク質" value={`${totalProtein}g`} />
        </section>

        <section className="bg-white rounded-3xl p-5 shadow space-y-3">
          <h2 className="text-xl font-bold">📊 InBody</h2>
          <Input placeholder="体重 kg" value={inbody.weight} onChange={(v) => setInbody({ ...inbody, weight: v })} />
          <Input placeholder="骨格筋量 kg" value={inbody.muscle} onChange={(v) => setInbody({ ...inbody, muscle: v })} />
          <Input placeholder="体脂肪率 %" value={inbody.bodyFat} onChange={(v) => setInbody({ ...inbody, bodyFat: v })} />
        </section>

        <section className="bg-white rounded-3xl p-5 shadow space-y-4">
          <h2 className="text-xl font-bold">💪 Bench Press</h2>
          {sets.map((set, i) => (
            <div key={i} className="bg-gray-100 rounded-2xl p-4 space-y-2">
              <div className="flex justify-between">
                <b>Set {i + 1}</b>
                <input type="checkbox" checked={set.done} onChange={(e) => {
                  const c = [...sets]; c[i] = { ...c[i], done: e.target.checked }; setSets(c);
                }} />
              </div>
              <Input placeholder="重量 kg" value={set.weight} onChange={(v) => {
                const c = [...sets]; c[i] = { ...c[i], weight: v }; setSets(c);
              }} />
              <Input placeholder="回数" value={set.reps} onChange={(v) => {
                const c = [...sets]; c[i] = { ...c[i], reps: v }; setSets(c);
              }} />
            </div>
          ))}
          <button onClick={() => setSets([...sets, { weight: "", reps: "", done: false }])} className="w-full bg-green-600 text-white rounded-xl p-3 font-bold">＋ セット追加</button>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow space-y-4">
          <h2 className="text-xl font-bold">🍚 食事</h2>
          {foods.map((food, i) => (
            <div key={i} className="bg-gray-100 rounded-2xl p-4 space-y-2">
              <Input placeholder="食事名" value={food.name} onChange={(v) => {
                const c = [...foods]; c[i] = { ...c[i], name: v }; setFoods(c);
              }} />
              <Input placeholder="kcal" value={food.kcal} onChange={(v) => {
                const c = [...foods]; c[i] = { ...c[i], kcal: v }; setFoods(c);
              }} />
              <Input placeholder="P g" value={food.protein} onChange={(v) => {
                const c = [...foods]; c[i] = { ...c[i], protein: v }; setFoods(c);
              }} />
              <Input placeholder="F g" value={food.fat} onChange={(v) => {
                const c = [...foods]; c[i] = { ...c[i], fat: v }; setFoods(c);
              }} />
              <Input placeholder="C g" value={food.carbs} onChange={(v) => {
                const c = [...foods]; c[i] = { ...c[i], carbs: v }; setFoods(c);
              }} />
            </div>
          ))}
          <button onClick={() => setFoods([...foods, { name: "", kcal: "", protein: "", fat: "", carbs: "" }])} className="w-full bg-green-600 text-white rounded-xl p-3 font-bold">＋ 食事追加</button>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow">
          <div className="flex justify-between mb-2">
            <h2 className="font-bold">🎯 ベンチ100kg</h2>
            <b>{Math.round(benchProgress)}%</b>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-black h-4 rounded-full" style={{ width: `${benchProgress}%` }} />
          </div>
          <p className="mt-3 text-sm text-gray-600">最高重量：{bestBench}kg / 100kg</p>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow">
          <h2 className="font-bold mb-2">🤖 AIコーチ</h2>
          <p className="text-sm leading-6">
            {bestBench >= 60
              ? "ベンチは順調。次は2.5kgずつ伸ばしましょう。"
              : "まずはフォームを安定させて60kgを目指しましょう。"}
            <br />
            摂取：{totalKcal}kcal / P:{totalProtein}g F:{totalFat}g C:{totalCarbs}g
          </p>
        </section>

        <button onClick={saveAll} className="w-full bg-black text-white rounded-2xl p-4 font-bold text-lg">
          まとめて保存
        </button>
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <section className="bg-white rounded-3xl p-5 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </section>
  );
}

function Input({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="text"
      inputMode="decimal"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-xl p-3"
    />
  );
}