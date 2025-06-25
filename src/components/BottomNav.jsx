import React from "react";
import {
  Home,
  BookOpen,
  ShoppingBag,
  User
} from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 z-50">
      <NavItem icon={<Home size={24} />} label="Меню" />
      <NavItem icon={<BookOpen size={24} />} label="Рецепты" />
      <NavItem icon={<ShoppingBag size={24} />} label="Магазин" />
      <NavItem icon={<User size={24} />} label="Профиль" />
    </nav>
  );
};

const NavItem = ({ icon, label }) => (
  <button className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600 transition">
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

export default BottomNav;
