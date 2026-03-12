import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ExerciseCard } from '../components/ExerciseCard';
import { RunningCard } from '../components/RunningCard';
import { workoutRoutines } from '../data/workoutData';
import { ArrowLeft, Info } from 'lucide-react';

const EXERCISE_IMAGES = [
  'https://images.unsplash.com/photo-1758875568447-aa45a5d3b351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBsZWdzJTIwc3F1YXRzfGVufDF8fHx8MTc3MzM0NzYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1683587023194-a24e5b6549b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwYmFjayUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3MzM0NzYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1585834830884-392089dfd9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGd5bSUyMGdsdXRlcyUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3MzM0NzYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1758520705368-bbd8830dda35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2hlc3QlMjBwcmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzczMzQ3NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGd5bSUyMGR1bWJiZWxsJTIwd29ya291dHxlbnwxfHx8fDE3NzMzNDc2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export function WorkoutWeek() {
  const { routineId } = useParams<{ routineId: string }>();
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState('Lunes');
  
  const routine = workoutRoutines.find((r) => r.id === routineId);

  // Load weights from localStorage
  const [exerciseWeights, setExerciseWeights] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem(`weights-${routineId}`);
    if (saved) {
      return JSON.parse(saved);
    }
    // Initialize with default weights
    const initial: Record<string, number> = {};
    routine?.days.forEach((day) => {
      day.exercises.forEach((ex) => {
        if (ex.weight) {
          initial[ex.id] = ex.weight;
        }
      });
    });
    return initial;
  });

  // Save weights to localStorage
  useEffect(() => {
    localStorage.setItem(`weights-${routineId}`, JSON.stringify(exerciseWeights));
  }, [exerciseWeights, routineId]);

  const handleWeightChange = (exerciseId: string, weight: number) => {
    setExerciseWeights((prev) => ({
      ...prev,
      [exerciseId]: weight,
    }));
  };

  if (!routine) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rutina no encontrada</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#FF6FA5] text-white rounded-xl hover:bg-[#ff5a94] transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const currentDay = routine.days.find((d) => d.dayName === activeDay);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F6] to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#FF6FA5] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
            {routine.name}
          </h1>
          <p className="text-gray-600">{routine.description}</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="mb-8 bg-white border border-gray-200 p-1.5 rounded-xl flex-wrap h-auto gap-2">
            {routine.days.map((day) => (
              <TabsTrigger
                key={day.dayName}
                value={day.dayName}
                className="data-[state=active]:bg-[#FF6FA5] data-[state=active]:text-white rounded-lg px-6 py-2.5 font-medium transition-all"
              >
                {day.dayName}
              </TabsTrigger>
            ))}
          </TabsList>

          {routine.days.map((day) => (
            <TabsContent key={day.dayName} value={day.dayName} className="mt-0">
              <div className="space-y-6">
                {/* Running Session Card */}
                {day.runningSession && (
                  <div className="mb-8">
                    <RunningCard runningSession={day.runningSession} />
                  </div>
                )}

                {/* Section Title */}
                <div>
                  <h2 className="text-xl font-semibold text-[#333333] mb-4">
                    Ejercicios de Gym
                  </h2>
                </div>

                {/* Exercise Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {day.exercises.map((exercise, index) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={{
                        ...exercise,
                        weight: exerciseWeights[exercise.id] || exercise.weight,
                      }}
                      imageUrl={EXERCISE_IMAGES[index % EXERCISE_IMAGES.length]}
                      onWeightChange={handleWeightChange}
                    />
                  ))}
                </div>

                {/* Additional Notes */}
                {day.additionalNotes && (
                  <div className="bg-white border border-[#FFD6E5] rounded-xl p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#FF6FA5] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#333333] mb-1">Nota adicional</h3>
                      <p className="text-gray-600 text-sm">{day.additionalNotes}</p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Progress Indicator */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#333333]">Progreso Semanal</h3>
            <span className="text-sm text-gray-500">
              {routine.days.findIndex((d) => d.dayName === activeDay) + 1} / {routine.days.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#FF6FA5] to-[#FFD6E5] h-full rounded-full transition-all duration-500"
              style={{
                width: `${((routine.days.findIndex((d) => d.dayName === activeDay) + 1) / routine.days.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
