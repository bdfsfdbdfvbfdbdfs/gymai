"use client";

import { useEffect, useState } from "react";

export default function InBody() {
  const [weight, setWeight] = useState("");
  const [muscle, setMuscle] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  useEffect(() => {
    setWeight(localStorage.getItem("inbody_weight") || "");
    setMuscle(localStorage.getItem("inbody_muscle") || "");
    setBodyFat(localStorage.getItem("inbody_bodyFat") || "");
  }, []);

  const saveInBody = () => {
    localStorage.setItem("inbody_weight", weight);
    localStorage.setItem("inbody_muscle", muscle);
    localStorage.setItem("inbody_bodyFat", bodyFat);
    alert("InBodyを保存しました！");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto space-y-5">
        <section className="bg-black text-white rounded-3xl p-6 shadow">
          <h1 className="text-3xl font-bold">📊 InBody</h1>
          <p className="text-gray-300 mt-2">
            体重・筋肉量・体脂肪率を記録します。
          </p>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow space-y-4">
          <div>
            <label className="font-bold">体重 kg</label>
            <input
              type="number"
              placeholder="例：72.3"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-bold">骨格筋量 kg</label>
            <input
              type="number"
              placeholder="例：34.5"
              value={muscle}
              onChange={(e) => setMuscle(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-bold">体脂肪率 %</label>
            <input
              type="number"
              placeholder="例：18.0"
              value={bodyFat}
              onChange={(e) => setBodyFat(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <button
            onClick={saveInBody}
            className="w-full bg-black text-white rounded-xl p-3 font-bold"
          >
            保存
          </button>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow">
          <h2 className="font-bold mb-3">最新データ</h2>
          <p>体重：{weight || "未入力"} kg</p>
          <p>骨格筋量：{muscle || "未入力"} kg</p>
          <p>体脂肪率：{bodyFat || "未入力"} %</p>
        </section>
      </div>
    </main>
  );
}