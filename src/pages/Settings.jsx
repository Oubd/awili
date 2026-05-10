import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Moon, Sun, Languages, Trash2, Download } from 'lucide-react';

const Settings = () => {
  const { theme, toggleTheme, language, toggleLanguage, t } = useAppContext();

  const clearData = () => {
    if(window.confirm(t('Are you sure you want to delete all your workout data?', 'هل أنت متأكد أنك تريد حذف جميع بيانات تمارينك؟'))) {
      localStorage.removeItem('workouts');
      window.location.reload();
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-6 text-gradient">{t('Settings', 'الإعدادات')}</h1>

      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gym-neon/20 rounded-lg text-gym-neon"><Languages size={20} /></div>
            <div>
              <p className="font-bold">{t('Language', 'اللغة')}</p>
              <p className="text-sm text-gray-500">{language === 'en' ? 'English' : 'العربية'}</p>
            </div>
          </div>
          <button onClick={toggleLanguage} className="px-4 py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gym-neon/20 rounded-lg text-gym-neon">
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <div>
              <p className="font-bold">{t('Theme', 'المظهر')}</p>
              <p className="text-sm text-gray-500">{theme === 'dark' ? t('Dark Mode', 'الوضع الداكن') : t('Light Mode', 'الوضع الفاتح')}</p>
            </div>
          </div>
          <button onClick={toggleTheme} className="px-4 py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            {t('Toggle', 'تغيير')}
          </button>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg text-red-500"><Trash2 size={20} /></div>
            <div>
              <p className="font-bold text-red-500">{t('Clear Data', 'مسح البيانات')}</p>
              <p className="text-sm text-gray-500">{t('Delete all workout history', 'حذف جميع سجلات التمارين')}</p>
            </div>
          </div>
          <button onClick={clearData} className="px-4 py-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-colors">
            {t('Delete', 'حذف')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
