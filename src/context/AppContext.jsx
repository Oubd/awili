import React, { useState, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [workouts, setWorkouts] = useState(JSON.parse(localStorage.getItem('workouts')) || []);
  const [activeSession, setActiveSession] = useState(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  const saveWorkout = (session) => {
    setWorkouts([session, ...workouts]);
    setActiveSession(null);
  };

  const t = (enText, arText) => language === 'en' ? enText : arText;

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      language, toggleLanguage,
      workouts, saveWorkout,
      activeSession, setActiveSession,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
