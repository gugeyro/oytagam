import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Первое",
    image: "/images/soup.jpg",
    path: "/first",
  },
  {
    title: "Второе",
    image: "/images/plov.jpg",
    path: "/second",
  },
  {
    title: "Салаты",
    image: "/images/salad.jpg",
    path: "/salads",
  },
  {
    title: "Десерты",
    image: "/images/dessert.jpg",
    path: "/desserts",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#fff4e3] flex flex-col items-center text-center pb-20">
      <h1 className="text-3xl font-bold text-blue-700 mt-8">Добро пожаловать в Öý Tagam!</h1>
      <p className="mt-2 text-gray-700 text-lg">Домашняя еда от соседей — тепло, вкусно и по-доброму.</p>

      <div className="grid grid-cols-2 gap-4 mt-8 max-w-3xl">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover" />
            <p className="p-2 font-medium">{cat.title}</p>
          </Link>
        ))}
      </di
