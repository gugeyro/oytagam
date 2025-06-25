// src/components/Hero.jsx
export default function Hero({ userName }) {
  return (
    <div className="text-center mt-20 px-4">
      <h1 className="text-4xl font-bold text-blue-600">Добро пожаловать в Oytagam!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Вкусная домашняя еда от соседей — быстро, тепло и по-доброму!
      </p>
      {userName && <p className="mt-2 text-sm text-gray-500">Здравствуйте, {userName}!</p>}
      <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow">
        Посмотреть блюда
      </button>
    </div>
  );
}
