import React from "react";
import BottomNav from "../components/BottomNav";

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

const CategoryCard = ({ title, image }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
    <img src={image} alt={title} className="w-full h-36 object-cover" />
    <div className="text-center py-3 font-semibold">{title}</div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10 pb-24 bg-gradient-to-br from-yellow-50 to-orange-100 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">
        Добро пожаловать в Oytagam!
      </h1>
      <p className="mb-8 text-center text-lg">
        Домашняя еда от соседей — тепло, вкусно и по-доброму.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl px-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} title={cat.name} image={cat.image} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
