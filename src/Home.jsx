// src/Home.jsx
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
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-lime-50 to-orange-100 pb-16">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-700">Добро пожаловать в Öý Tagam!</h1>
        <p className="text-lg text-gray-700 mt-2">
          Домашняя еда от соседей — когда лень готовить самому!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition bg-white"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
