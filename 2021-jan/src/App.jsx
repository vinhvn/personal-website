import React, { useState } from 'react';
import { BrowserRouter, Switch as SwitchRouter, Route, Redirect } from 'react-router-dom';
import Switch from 'react-switch';
import Navbar from './components/Navbar';
import AboutCards from './components/Decks/AboutCards';
import ExperienceCards from './components/Decks/ExperienceCards';
import ProjectCards from './components/Decks/ProjectCards';

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
    <BrowserRouter>
      <div className="mx-auto container flex flex-col h-full">
        <Navbar />
        <SwitchRouter>
          <Route path="/about">
            <AboutCards />
          </Route>
          <Route path="/experience">
            <ExperienceCards />
          </Route>
          <Route path="/projects">
            <ProjectCards />
          </Route>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </SwitchRouter>
        <div className="flex justify-center py-4 pb-8 dark:bg-gray-900">
          <label className="flex flex-col items-center justify-center">
            <span className="text-xl font-serif font-bold pb-2 dark:text-white">Toggle Dark Mode</span>
            <Switch onChange={toggleDarkMode} checked={dark} />
          </label>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
