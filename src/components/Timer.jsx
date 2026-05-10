import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Timer = ({ onClose }) => {
  const { t } = useAppContext();
  const [seconds, setSeconds] = useState(90); // Default 90s rest
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(s => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      // Could play a sound here
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => { setIsActive(false); setSeconds(90); };

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 glass-panel p-4 rounded-2xl shadow-2xl z-50 flex flex-col items-center border-gym-neon/30 animate-bounce-slow">
      <div className="flex justify-between w-full mb-2">
        <span className="text-xs font-bold text-gym-neon uppercase">{t('Rest Timer', 'مؤقت الراحة')}</span>
        <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={14} /></button>
      </div>
      <div className="text-3xl font-bold font-mono tracking-wider mb-3 {seconds === 0 ? 'text-red-500 animate-pulse' : ''}">
        {formatTime(seconds)}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setSeconds(s => s + 30)} className="px-2 py-1 bg-white/10 rounded text-xs hover:bg-white/20">+30s</button>
        <button onClick={toggle} className="p-2 bg-gym-neon text-gym-black rounded-full hover:scale-110 transition-transform">
          {isActive ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
        </button>
        <button onClick={reset} className="p-2 bg-white/10 rounded-full hover:bg-white/20">
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
