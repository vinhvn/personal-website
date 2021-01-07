import React, { useState } from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Switch from 'react-switch';

function App() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = (checked) => {
    setDark(checked);
    if (checked) {
      document.getElementById('body').className = 'h-screen dark'
    } else {
      document.getElementById('body').className = 'h-screen'
    }
  }

  return (
    <div className="mx-auto container flex flex-col h-full">
      <Navbar />
      <Cards />
      <div className="flex justify-center py-4 dark:bg-gray-900">
        <label className="flex flex-col items-center justify-center">
          <span className="text-xl font-serif font-bold pb-2 dark:text-white">Toggle Dark Mode</span>
          <Switch onChange={toggleDarkMode} checked={dark} />
        </label>
      </div>
    </div>
  );
}

export default App;
