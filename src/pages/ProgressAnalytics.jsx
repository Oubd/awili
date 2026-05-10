import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Line as LineChart, Bar as BarChart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

const ProgressAnalytics = () => {
  const { t, theme } = useAppContext();
  
  const textColor = theme === 'dark' ? '#f4f4f5' : '#1f2937';
  const gridColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  const volumeData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: t('Total Volume (kg)', 'الحجم الكلي (كجم)'),
        data: [12000, 13500, 12800, 15000, 16200, 17500],
        borderColor: '#00f0ff',
        backgroundColor: 'rgba(0, 240, 255, 0.2)',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  const muscleData = {
    labels: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'],
    datasets: [
      {
        label: t('Sets per Muscle Group', 'مجموعات لكل عضلة'),
        data: [24, 20, 18, 16, 22, 10],
        backgroundColor: ['#00f0ff', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b'],
        borderRadius: 8,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: textColor } }
    },
    scales: {
      y: { grid: { color: gridColor }, ticks: { color: textColor } },
      x: { grid: { color: gridColor }, ticks: { color: textColor } }
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-6 text-gradient">{t('Progress Analytics', 'تحليلات التقدم')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl h-80">
          <h3 className="font-bold mb-4">{t('Volume Progression', 'تطور الحجم')}</h3>
          <div className="h-64">
            <LineChart data={volumeData} options={chartOptions} />
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl h-80">
          <h3 className="font-bold mb-4">{t('Muscle Group Distribution', 'توزيع المجموعات العضلية')}</h3>
          <div className="h-64">
            <BarChart data={muscleData} options={chartOptions} />
          </div>
        </div>
      </div>
      
      <div className="glass-panel p-6 rounded-2xl mt-6">
         <h3 className="font-bold mb-4">{t('AI Insights', 'رؤى الذكاء الاصطناعي')}</h3>
         <p className="text-gray-400">
           {t("You've been consistent for 4 weeks! Your volume has increased by 15% compared to last month. Keep pushing hard!", "لقد كنت مستمراً لمدة 4 أسابيع! زاد حجم تمرينك بنسبة 15٪ مقارنة بالشهر الماضي. استمر في العمل الجاد!")}
         </p>
      </div>
    </motion.div>
  );
};

export default ProgressAnalytics;
