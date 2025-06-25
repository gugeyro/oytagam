import React from "react";

const categories = [
  {
    name: "Первое",
    image: "/images/soup.jpg",
  },
  {
    name: "Второе",
    image: "/images/plov.jpg",
  },
  {
    name: "Салаты",
    image: "/images/salad.jpg",
  },
  {
    name: "Десерты",
    image: "/images/dessert.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Добро пожаловать в Oytagam!</h1>
        <p className="text-lg text-gray-700">
          Домашняя еда от соседей — тепло, вкусно и по-доброму.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="bg-white p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
