import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, Library, LineChart, Settings, User, Bot } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
  const { t } = useAppContext();

  const navItems = [
    { path: '/', icon: Home, label: t('Dashboard', 'لوحة القيادة') },
    { path: '/workout', icon: Dumbbell, label: t('Workout', 'تمرين') },
    { path: '/exercises', icon: Library, label: t('Exercises', 'التمارين') },
    { path: '/analytics', icon: LineChart, label: t('Analytics', 'التحليلات') },
    { path: '/profile', icon: User, label: t('Profile', 'الملف الشخصي') },
    { path: '/settings', icon: Settings, label: t('Settings', 'الإعدادات') },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 glass-panel border-r border-y-0 border-l-0 z-20">
        <div className="flex items-center justify-center h-20 border-b border-white/10">
          <div className="flex items-center gap-2 text-gym-neon font-bold text-2xl">
            <Bot size={32} className="animate-glow" />
            <span className="text-gradient">AI Gym</span>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gym-neon/10 text-gym-neon border border-gym-neon/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
                    : 'text-gray-500 dark:text-gym-text-muted hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t z-50 flex justify-around items-center h-16 px-2 safe-area-pb">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-gym-neon' : 'text-gray-500 dark:text-gym-text-muted'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
