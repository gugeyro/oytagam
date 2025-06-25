import React from "react";
import BottomNav from "./components/BottomNav";

const categories = [
  { name: "Первое", image: "/images/soup.jpg" },
  { name: "Второе", image: "/images/plov.jpg" },
  { name: "Салаты", image: "/images/salad.jpg" },
  { name: "Десерты", image: "/images/dessert.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-emerald-50 pb-16">
      <div className="text-center pt-3 px-4">
        <h1 className="text-xl font-bold text-blue-700">Öý Tagam</h1>
        <p className="text-sm text-gray-700 mt-1 mb-1">
          Домашняя еда от соседей — когда лень готовить самому!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 px-3 max-w-md mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl shadow-md overflow-hidden bg-white"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-28 object-cover"
            />
            <div className="p-1 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
