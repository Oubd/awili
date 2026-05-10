import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import WorkoutSession from './pages/WorkoutSession';
import ExercisesLibrary from './pages/ExercisesLibrary';
import ProgressAnalytics from './pages/ProgressAnalytics';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gym-black overflow-hidden font-sans transition-colors duration-300">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full relative">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6 relative">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workout" element={<WorkoutSession />} />
              <Route path="/exercises" element={<ExercisesLibrary />} />
              <Route path="/analytics" element={<ProgressAnalytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
