import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Search, Filter, Plus } from 'lucide-react';
import { exercises } from '../data/exercises';

const ExercisesLibrary = () => {
  const { t, language } = useAppContext();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio'];

  const filtered = exercises.filter(ex => {
    const matchSearch = (language === 'en' ? ex.name_en : ex.name_ar).toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || ex.category_en === category;
    return matchSearch && matchCat;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto flex flex-col h-full"
    >
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-2xl font-bold text-gradient">{t('Exercise Library', 'مكتبة التمارين')}</h1>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder={t('Search exercises...', 'ابحث عن تمرين...')} 
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-gray-300 dark:border-white/10 rounded-xl focus:outline-none focus:border-gym-neon text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              category === cat 
                ? 'bg-gym-neon text-gym-black shadow-[0_0_10px_rgba(0,240,255,0.3)]' 
                : 'bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {t(cat, cat)} {/* Simplification for demo */}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
        {filtered.map(ex => (
          <motion.div 
            key={ex.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-4 rounded-2xl flex flex-col group hover:border-gym-neon/50 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                <img src={ex.image} alt={ex.name_en} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gym-text-muted">
                {ex.difficulty}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-1">{language === 'en' ? ex.name_en : ex.name_ar}</h3>
            <p className="text-sm text-gym-neon mb-4">{language === 'en' ? ex.category_en : ex.category_ar}</p>
            
            <div className="mt-auto flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-3">
              <span>{ex.suggestedSets} {t('Sets', 'مجموعات')}</span>
              <span>{ex.suggestedReps} {t('Reps', 'تكرارات')}</span>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-10 text-center text-gray-500">
            {t('No exercises found.', 'لم يتم العثور على تمارين.')}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExercisesLibrary;
