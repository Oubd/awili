const baseExercises = {
  Chest: ['Bench Press', 'Incline Dumbbell Press', 'Cable Crossover', 'Push-ups', 'Pec Deck Machine', 'Decline Bench Press', 'Dumbbell Flyes', 'Dips', 'Machine Chest Press', 'Svens Press', 'Floor Press', 'Guillotine Press', 'Pullover', 'Plate Press', 'Landmine Press'],
  Back: ['Deadlift', 'Pull-ups', 'Barbell Row', 'Lat Pulldown', 'T-Bar Row', 'Seated Cable Row', 'Single Arm Dumbbell Row', 'Straight Arm Pulldown', 'Rack Pulls', 'Meadows Row', 'Chest Supported Row', 'Renegade Row', 'Inverted Row', 'Chin-ups', 'Good Mornings'],
  Shoulders: ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Reverse Pec Deck', 'Arnold Press', 'Upright Row', 'Face Pulls', 'Push Press', 'Cable Lateral Raises', 'Machine Shoulder Press', 'Dumbbell Shrugs', 'Barbell Shrugs', 'Landmine Press', 'Pike Push-ups', 'Y-Raises'],
  Arms: ['Barbell Curl', 'Tricep Pushdown', 'Dumbbell Curl', 'Skull Crushers', 'Hammer Curl', 'Overhead Tricep Extension', 'Preacher Curl', 'Close Grip Bench Press', 'Concentration Curl', 'Tricep Kickbacks', 'Cable Curls', 'Diamond Push-ups', 'Zottman Curls', 'Reverse Curls', 'Dip Machine'],
  Legs: ['Squat', 'Leg Press', 'Romanian Deadlift', 'Lunges', 'Leg Extension', 'Leg Curl', 'Calf Raises', 'Bulgarian Split Squat', 'Front Squat', 'Hack Squat', 'Hip Thrusts', 'Goblet Squat', 'Sumo Deadlift', 'Step-ups', 'Glute Ham Raise'],
  Core: ['Crunches', 'Plank', 'Russian Twists', 'Leg Raises', 'Ab Wheel Rollout', 'Cable Woodchoppers', 'Decline Crunches', 'Bicycle Crunches', 'Hanging Leg Raises', 'V-ups', 'Side Plank', 'Toe Touches', 'Flutter Kicks', 'Mountain Climbers', 'Dragon Flag'],
  Cardio: ['Treadmill Running', 'Rowing Machine', 'Cycling', 'Jump Rope', 'Stairmaster', 'Elliptical', 'Burpees', 'Jumping Jacks', 'High Knees', 'Boxing', 'Swimming', 'Battle Ropes', 'Kettlebell Swings', 'Sprints', 'Shadow Boxing']
};

const arTranslations = {
  'Chest': 'الصدر', 'Back': 'الظهر', 'Shoulders': 'الأكتاف', 'Arms': 'الذراعين', 'Legs': 'الأرجل', 'Core': 'البطن', 'Cardio': 'كارديو',
  'Bench Press': 'ضغط بنش', 'Squat': 'سكوات', 'Deadlift': 'رفعة ميتة', 'Pull-ups': 'عقلة', 'Push-ups': 'ضغط', 'Plank': 'بلانك',
  // generic fallback mapping
};

let idCounter = 1;
export const exercises = Object.keys(baseExercises).flatMap(category => 
  baseExercises[category].map(name => {
    const diff = idCounter % 3 === 0 ? 'Advanced' : idCounter % 2 === 0 ? 'Intermediate' : 'Beginner';
    return {
      id: `ex-${idCounter++}`,
      name_en: name,
      name_ar: arTranslations[name] || `${name} (تمرين)`,
      category_en: category,
      category_ar: arTranslations[category] || category,
      difficulty: diff,
      suggestedSets: 3,
      suggestedReps: diff === 'Beginner' ? 12 : diff === 'Intermediate' ? 10 : 8,
      image: `https://ui-avatars.com/api/?name=${name.charAt(0)}&background=0a0a0a&color=00f0ff`
    };
  })
);
