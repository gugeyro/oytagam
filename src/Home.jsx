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
    <div className="min-h-screen flex flex-col justify-between bg-lime-50 pb-16">
      <div className="text-center pt-6 px-4">
        <h1 className="text-2xl font-bold text-blue-700">Öý Tagam!</h1>
        <p className="text-base text-gray-700 mt-2 mb-4">
          Домашняя еда от соседей — когда лень готовить самому!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 max-w-md mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition bg-white"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover" />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
