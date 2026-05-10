import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Play, TrendingUp, Calendar, Zap, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t, workouts } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* AI Greeting Card */}
      <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gym-neon/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 bg-gym-neon/20 rounded-xl text-gym-neon">
            <Bot size={32} className="animate-glow" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {t('AI Fitness Coach', 'المدرب الذكي')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t("Based on your recent activity, I suggest focusing on Upper Body today. Your chest volume was low last week.", 
                 "بناءً على نشاطك الأخير، أقترح التركيز على الجزء العلوي اليوم. حجم تمارين الصدر كان منخفضاً الأسبوع الماضي.")}
            </p>
            <div className="mt-4 flex gap-3">
              <Link to="/workout" className="px-6 py-2 bg-gym-neon text-gym-black font-bold rounded-lg hover:bg-gym-neon-dark transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                {t('Start AI Routine', 'ابدأ تمرين الذكاء الاصطناعي')}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: t('Workouts', 'التمارين'), value: workouts.length, icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { title: t('Total Volume', 'الحجم الكلي'), value: '12,450 kg', icon: TrendingUp, color: 'text-gym-neon', bg: 'bg-gym-neon/10' },
          { title: t('Current Streak', 'أيام متتالية'), value: '4 Days', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-500/10' }
        ].map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants} className="glass-panel p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gym-text-muted mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{t('Recent Activity', 'النشاط الأخير')}</h2>
          <Link to="/analytics" className="text-sm text-gym-neon hover:underline">
            {t('View All', 'عرض الكل')}
          </Link>
        </div>
        {workouts.length === 0 ? (
          <div className="text-center py-8 text-gray-500 border border-dashed border-gray-700 rounded-xl">
            {t('No workouts yet. Start your first session!', 'لا يوجد تمارين بعد. ابدأ جلستك الأولى!')}
          </div>
        ) : (
          <div className="space-y-3">
            {workouts.slice(0, 3).map((w, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gym-neon/20 flex items-center justify-center text-gym-neon">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold">{w.name || t('Custom Workout', 'تمرين مخصص')}</h4>
                    <p className="text-xs text-gray-500">{new Date(w.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{w.exercises?.length || 0} {t('Exercises', 'تمارين')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
