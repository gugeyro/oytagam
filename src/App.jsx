// src/App.jsx
import { useEffect, useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (window?.Telegram?.WebApp?.initDataUnsafe?.user?.first_name) {
      setUserName(window.Telegram.WebApp.initDataUnsafe.user.first_name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero userName={userName} />
    </div>
  );
}

export default App;
