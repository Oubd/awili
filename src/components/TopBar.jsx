import React from 'react';
import { Moon, Sun, Languages, Bell } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TopBar = () => {
  const { theme, toggleTheme, language, toggleLanguage, t } = useAppContext();

  return (
    <header className="h-16 glass-panel border-b border-x-0 border-t-0 flex items-center justify-between px-4 md:px-6 z-10">
      <div className="flex items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white md:hidden text-gradient">AI Gym</h2>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white hidden md:block">
          {t('Welcome back, Athlete', 'مرحباً بعودتك، بطل')}
        </h2>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={toggleLanguage}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gym-text-muted"
          title="Toggle Language"
        >
          <Languages size={20} />
          <span className="sr-only">Toggle Language</span>
        </button>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gym-text-muted"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gym-text-muted relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-gym-neon rounded-full animate-pulse"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gym-neon to-blue-500 flex items-center justify-center text-white font-bold ml-2">
          U
        </div>
      </div>
    </header>
  );
};

export default TopBar;
