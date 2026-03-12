import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Edit2, Check, Clock, Timer as TimerIcon } from 'lucide-react';
import { Timer } from './Timer';

interface ExerciseCardProps {
  exercise: {
    id: string;
    name: string;
    sets: string;
    weight?: number;
  };
  imageUrl: string;
  onWeightChange: (exerciseId: string, weight: number) => void;
}

export function ExerciseCard({ exercise, imageUrl, onWeightChange }: ExerciseCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState(exercise.weight?.toString() || '');
  const [showRestTimer, setShowRestTimer] = useState(false);
  const [showExerciseTimer, setShowExerciseTimer] = useState(false);

  // Extract seconds from sets if it's a timed exercise (e.g., "3x30 seg")
  const extractSeconds = (sets: string): number | null => {
    const match = sets.match(/(\d+)\s*seg/i);
    return match ? parseInt(match[1]) : null;
  };

  const exerciseSeconds = extractSeconds(exercise.sets);
  const isTimedExercise = exerciseSeconds !== null;

  const handleSave = () => {
    const weightValue = parseFloat(weight);
    if (!isNaN(weightValue) && weightValue > 0) {
      onWeightChange(exercise.id, weightValue);
    }
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
        <div className="relative h-40 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={exercise.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-[#333333] mb-2">{exercise.name}</h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF6FA5] text-sm font-medium">
              {exercise.sets}
            </span>
          </div>

          {/* Timer Buttons */}
          <div className="flex gap-2 mb-3">
            {/* Exercise Timer (only for timed exercises) */}
            {isTimedExercise && (
              <button
                onClick={() => setShowExerciseTimer(true)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FF6FA5] to-[#FFD6E5] text-white rounded-lg hover:shadow-md transition-all text-sm font-medium"
              >
                <TimerIcon className="w-4 h-4" />
                <span>Iniciar ejercicio</span>
              </button>
            )}
            
            {/* Rest Timer */}
            <button
              onClick={() => setShowRestTimer(true)}
              className={`flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-[#FFD6E5] text-[#FF6FA5] rounded-lg hover:bg-[#FFF0F6] transition-all text-sm font-medium ${
                isTimedExercise ? 'flex-1' : 'w-full'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Descanso 2:30</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Peso usado (kg)</label>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-20 px-3 py-1.5 border border-[#FFD6E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6FA5] text-sm"
                    placeholder="0"
                    step="0.5"
                    min="0"
                  />
                  <button
                    onClick={handleSave}
                    className="p-1.5 bg-[#FF6FA5] text-white rounded-lg hover:bg-[#ff5a94] transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#FF6FA5]">
                    {exercise.weight ? `${exercise.weight} kg` : '— kg'}
                  </span>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1.5 text-gray-400 hover:text-[#FF6FA5] transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Timers */}
      {showRestTimer && (
        <Timer
          initialSeconds={150} // 2:30 minutes
          label="Descanso entre series"
          onClose={() => setShowRestTimer(false)}
        />
      )}

      {showExerciseTimer && exerciseSeconds && (
        <Timer
          initialSeconds={exerciseSeconds}
          label={`${exercise.name}`}
          onClose={() => setShowExerciseTimer(false)}
        />
      )}
    </>
  );
}