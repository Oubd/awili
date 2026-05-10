import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Award, Zap, Activity } from 'lucide-react';

const Profile = () => {
  const { t } = useAppContext();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto space-y-6">
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gym-neon/10 to-transparent"></div>
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gym-neon to-blue-500 flex items-center justify-center text-3xl text-white font-bold mb-4 relative z-10 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          U
        </div>
        <h1 className="text-3xl font-bold relative z-10">Athlete User</h1>
        <p className="text-gym-neon font-medium mt-1 relative z-10">Advanced Level</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <Award size={32} className="text-yellow-500 mb-3" />
          <h3 className="text-gray-500 dark:text-gray-400">{t('Achievements', 'الإنجازات')}</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <Zap size={32} className="text-gym-neon mb-3" />
          <h3 className="text-gray-500 dark:text-gray-400">{t('Power Level', 'مستوى الطاقة')}</h3>
          <p className="text-2xl font-bold">Over 9000</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <Activity size={32} className="text-red-500 mb-3" />
          <h3 className="text-gray-500 dark:text-gray-400">{t('Avg HR', 'متوسط نبضات القلب')}</h3>
          <p className="text-2xl font-bold">142 bpm</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
