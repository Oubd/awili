import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Plus, Check, Play, Save, Clock, Trash2 } from 'lucide-react';
import { exercises } from '../data/exercises';
import Timer from '../components/Timer';

const WorkoutSession = () => {
  const { t, language, saveWorkout } = useAppContext();
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionExercises, setSessionExercises] = useState([]);
  const [showTimer, setShowTimer] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const startSession = () => setIsSessionActive(true);
  
  const addExercise = (ex) => {
    setSessionExercises([...sessionExercises, { 
      ...ex, 
      sets: [{ reps: '', weight: '', completed: false }] 
    }]);
    setShowAddModal(false);
  };

  const updateSet = (exIndex, setIndex, field, value) => {
    const updated = [...sessionExercises];
    updated[exIndex].sets[setIndex][field] = value;
    setSessionExercises(updated);
  };

  const toggleSetComplete = (exIndex, setIndex) => {
    const updated = [...sessionExercises];
    updated[exIndex].sets[setIndex].completed = !updated[exIndex].sets[setIndex].completed;
    setSessionExercises(updated);
    if (updated[exIndex].sets[setIndex].completed) {
      setShowTimer(true); // Auto trigger rest timer
    }
  };

  const addSet = (exIndex) => {
    const updated = [...sessionExercises];
    const prevSet = updated[exIndex].sets[updated[exIndex].sets.length - 1];
    updated[exIndex].sets.push({ 
      reps: prevSet ? prevSet.reps : '', 
      weight: prevSet ? prevSet.weight : '', 
      completed: false 
    });
    setSessionExercises(updated);
  };

  const finishWorkout = () => {
    saveWorkout({
      id: Date.now(),
      date: new Date().toISOString(),
      exercises: sessionExercises,
      name: 'Morning Session'
    });
    setIsSessionActive(false);
    setSessionExercises([]);
  };

  if (!isSessionActive) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="w-32 h-32 bg-gym-neon/20 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 border-4 border-gym-neon rounded-full border-t-transparent animate-spin"></div>
          <Play size={48} className="text-gym-neon ml-2" fill="currentColor" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">{t('Ready to crush it?', 'مستعد للتدريب؟')}</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            {t('Start an empty session or choose an AI generated routine tailored for your goals.', 'ابدأ جلسة فارغة أو اختر روتيناً تم إنشاؤه بواسطة الذكاء الاصطناعي مخصصاً لأهدافك.')}
          </p>
        </div>
        <button 
          onClick={startSession}
          className="px-8 py-4 bg-gym-neon text-gym-black font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          {t('Start Empty Workout', 'بدء تمرين فارغ')}
        </button>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto pb-32">
      <div className="flex justify-between items-center mb-6 glass-panel p-4 rounded-2xl sticky top-0 z-10">
        <div>
          <h2 className="text-xl font-bold text-gym-neon">Workout in Progress</h2>
          <p className="text-sm text-gray-500">Duration: 00:00</p>
        </div>
        <button onClick={finishWorkout} className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-xl hover:bg-green-500/30 transition-colors">
          <Save size={18} />
          <span className="font-bold">{t('Finish', 'إنهاء')}</span>
        </button>
      </div>

      <div className="space-y-6">
        {sessionExercises.map((ex, exIndex) => (
          <div key={exIndex} className="glass-panel p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4">{language === 'en' ? ex.name_en : ex.name_ar}</h3>
            
            {/* Headers */}
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 mb-2 px-2 text-xs text-gray-500 uppercase font-bold text-center">
              <div className="text-left">Set</div>
              <div className="hidden md:block text-left">Previous</div>
              <div>kg</div>
              <div>Reps</div>
              <div>Done</div>
            </div>

            {/* Sets */}
            {ex.sets.map((set, setIndex) => (
              <div key={setIndex} className={`grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 items-center p-2 rounded-xl mb-2 transition-colors ${set.completed ? 'bg-gym-neon/10' : 'bg-white/5'}`}>
                <div className="font-bold text-gray-400 pl-2">{setIndex + 1}</div>
                <div className="hidden md:block text-sm text-gray-500">-</div>
                <input 
                  type="number" 
                  value={set.weight}
                  onChange={e => updateSet(exIndex, setIndex, 'weight', e.target.value)}
                  className="w-full bg-transparent border border-white/10 rounded-lg text-center py-1 focus:border-gym-neon outline-none"
                  placeholder="0"
                />
                <input 
                  type="number" 
                  value={set.reps}
                  onChange={e => updateSet(exIndex, setIndex, 'reps', e.target.value)}
                  className="w-full bg-transparent border border-white/10 rounded-lg text-center py-1 focus:border-gym-neon outline-none"
                  placeholder="0"
                />
                <button 
                  onClick={() => toggleSetComplete(exIndex, setIndex)}
                  className={`w-8 h-8 mx-auto flex items-center justify-center rounded-lg transition-colors ${set.completed ? 'bg-gym-neon text-gym-black' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                >
                  <Check size={16} />
                </button>
              </div>
            ))}
            
            <button 
              onClick={() => addSet(exIndex)}
              className="mt-3 w-full py-2 border border-dashed border-white/20 rounded-xl text-sm text-gray-400 hover:text-white hover:border-white/50 transition-colors"
            >
              + Add Set
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowAddModal(true)}
        className="mt-6 w-full py-4 glass-panel rounded-2xl flex items-center justify-center gap-2 text-gym-neon font-bold hover:bg-white/5 transition-colors border-dashed border-gym-neon/50"
      >
        <Plus size={20} />
        {t('Add Exercise', 'إضافة تمرين')}
      </button>

      {/* Add Exercise Modal - simplified */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{t('Select Exercise', 'اختر تمريناً')}</h3>
              <button onClick={() => setShowAddModal(false)}><Trash2 size={20} className="text-gray-500" /></button>
            </div>
            <div className="overflow-y-auto space-y-2 pr-2">
              {exercises.slice(0, 20).map(ex => ( // show only 20 for demo
                <div key={ex.id} onClick={() => addExercise(ex)} className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
                  <img src={ex.image} alt="" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-bold">{language === 'en' ? ex.name_en : ex.name_ar}</h4>
                    <p className="text-xs text-gray-500">{language === 'en' ? ex.category_en : ex.category_ar}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showTimer && <Timer onClose={() => setShowTimer(false)} />}
    </motion.div>
  );
};

export default WorkoutSession;
