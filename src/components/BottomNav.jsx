// src/components/BottomNav.jsx
import React from "react";
import { Utensils, BookOpen, ShoppingCart, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 flex justify-around py-2 z-50">
      <NavItem icon={<Utensils size={24} />} label="Меню" />
      <NavItem icon={<BookOpen size={24} />} label="Рецепты" />
      <NavItem icon={<ShoppingCart size={24} />} label="Магазин" />
      <NavItem icon={<User size={24} />} label="Профиль" />
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-sm text-gray-700 hover:text-orange-500">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}
