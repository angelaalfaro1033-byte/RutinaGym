export interface Exercise {
  id: string;
  name: string;
  sets: string;
  weight?: number;
}

export interface RunningSession {
  type: string;
  time: string;
}

export interface DayWorkout {
  dayName: string;
  exercises: Exercise[];
  runningSession?: RunningSession;
  additionalNotes?: string;
}

export interface RoutineData {
  id: string;
  name: string;
  days: DayWorkout[];
}

export const workoutRoutines: RoutineData[] = [
  {
    id: 'gym-only',
    name: 'Gym Rutina',
    days: [
      {
        dayName: 'Lunes',
        exercises: [
          { id: 'gym-only-mon-1', name: 'Sentadilla con mancuerna', sets: '4x12', weight: 8 },
          { id: 'gym-only-mon-2', name: 'Prensa inclinada', sets: '3x10' },
          { id: 'gym-only-mon-3', name: 'Zancadas caminando', sets: '3x12 por pierna', weight: 4 },
          { id: 'gym-only-mon-4', name: 'Peso muerto unilateral', sets: '3x10', weight: 9 },
          { id: 'gym-only-mon-5', name: 'Extensiones de cuádriceps', sets: '3x15', weight: 9 },
          { id: 'gym-only-mon-6', name: 'Curl femoral', sets: '3x12', weight: 14 },
          { id: 'gym-only-mon-7', name: 'Abducciones en máquina', sets: '3x20', weight: 18 },
        ],
      },
      {
        dayName: 'Martes',
        exercises: [
          { id: 'gym-only-tue-1', name: 'Jalón al pecho', sets: '4x12', weight: 18 },
          { id: 'gym-only-tue-2', name: 'Remo sentado con cable', sets: '3x10', weight: 18 },
          { id: 'gym-only-tue-3', name: 'Remo con mancuerna a una mano', sets: '3x12', weight: 5 },
          { id: 'gym-only-tue-4', name: 'Curl de bíceps con mancuernas', sets: '3x12', weight: 4 },
          { id: 'gym-only-tue-5', name: 'Curl martillo', sets: '3x12', weight: 4 },
          { id: 'gym-only-tue-6', name: 'Plancha con toque de hombros', sets: '3x30 seg' },
        ],
      },
      {
        dayName: 'Miércoles',
        exercises: [
          { id: 'gym-only-wed-1', name: 'Hip thrust', sets: '4x15', weight: 5 },
          { id: 'gym-only-wed-2', name: 'Puente de glúteo con banda', sets: '3x20', weight: 8 },
          { id: 'gym-only-wed-3', name: 'Patada de glúteo en polea', sets: '3x15 por pierna' },
          { id: 'gym-only-wed-4', name: 'Abducciones laterales con banda', sets: '3x20' },
          { id: 'gym-only-wed-5', name: 'Plancha lateral', sets: '3x20 seg' },
          { id: 'gym-only-wed-6', name: 'Bird dog', sets: '3x12 por lado' },
        ],
      },
      {
        dayName: 'Jueves',
        exercises: [
          { id: 'gym-only-thu-1', name: 'Press de pecho con mancuernas', sets: '4x10', weight: 5 },
          { id: 'gym-only-thu-2', name: 'Aperturas con mancuernas', sets: '3x12', weight: 3 },
          { id: 'gym-only-thu-3', name: 'Press militar con mancuernas', sets: '3x10', weight: 4 },
          { id: 'gym-only-thu-4', name: 'Elevaciones laterales', sets: '3x12', weight: 3 },
          { id: 'gym-only-thu-5', name: 'Fondos en máquina', sets: '3x12', weight: 23 },
          { id: 'gym-only-thu-6', name: 'Extensión de tríceps', sets: '3x15', weight: 3 },
        ],
      },
      {
        dayName: 'Viernes',
        exercises: [
          { id: 'gym-only-fri-1', name: 'Sentadilla + press con mancuernas', sets: '3x12' },
          { id: 'gym-only-fri-2', name: 'Peso muerto con mancuernas', sets: '3x10' },
          { id: 'gym-only-fri-3', name: 'Jalón con cuerda + curl', sets: '3x12' },
          { id: 'gym-only-fri-4', name: 'Zancadas + elevación lateral', sets: '3x10 por pierna' },
          { id: 'gym-only-fri-5', name: 'Plancha frontal', sets: '3x30 seg' },
        ],
        additionalNotes: 'Caminata final o estiramientos — 10 min',
      },
    ],
  },
  {
    id: 'running-gym',
    name: 'Running + Gym',
    days: [
      {
        dayName: 'Lunes',
        exercises: [
          { id: 'run-gym-mon-1', name: 'Sentadilla con mancuerna', sets: '3x12' },
          { id: 'run-gym-mon-2', name: 'Prensa inclinada', sets: '3x10' },
          { id: 'run-gym-mon-3', name: 'Zancadas en sitio', sets: '2x12 por pierna' },
          { id: 'run-gym-mon-4', name: 'Peso muerto unilateral', sets: '2x10' },
          { id: 'run-gym-mon-5', name: 'Curl femoral', sets: '3x12' },
          { id: 'run-gym-mon-6', name: 'Abducciones', sets: '2x20' },
        ],
        runningSession: {
          type: 'Easy Run',
          time: '7:00 pm',
        },
      },
      {
        dayName: 'Martes',
        exercises: [
          { id: 'run-gym-tue-1', name: 'Jalón al pecho', sets: '4x12' },
          { id: 'run-gym-tue-2', name: 'Remo sentado', sets: '3x10' },
          { id: 'run-gym-tue-3', name: 'Remo con mancuerna', sets: '3x12' },
          { id: 'run-gym-tue-4', name: 'Curl bíceps', sets: '3x12' },
          { id: 'run-gym-tue-5', name: 'Curl martillo', sets: '2x12' },
          { id: 'run-gym-tue-6', name: 'Plancha', sets: '3x30 seg' },
          { id: 'run-gym-tue-7', name: 'Plancha lateral', sets: '3x20 seg' },
        ],
      },
      {
        dayName: 'Miércoles',
        exercises: [
          { id: 'run-gym-wed-1', name: 'Hip thrust', sets: '3x15', weight: 8 },
          { id: 'run-gym-wed-2', name: 'Puente glúteo', sets: '3x20', weight: 10 },
          { id: 'run-gym-wed-3', name: 'Patada glúteo', sets: '3x15' },
          { id: 'run-gym-wed-4', name: 'Abducciones laterales', sets: '3x20' },
        ],
        additionalNotes: 'Movilidad de cadera y espalda — 10 a 15 min',
      },
      {
        dayName: 'Jueves',
        exercises: [
          { id: 'run-gym-thu-1', name: 'Press de pecho', sets: '3x10' },
          { id: 'run-gym-thu-2', name: 'Elevaciones de hombro', sets: '3x12' },
          { id: 'run-gym-thu-3', name: 'Jalón al pecho agarre neutro', sets: '3x12' },
          { id: 'run-gym-thu-4', name: 'Extensión de tríceps', sets: '3x15' },
          { id: 'run-gym-thu-5', name: 'Crunch abdominal', sets: '3x15' },
        ],
        runningSession: {
          type: 'Speed / Intervalos',
          time: '7:00 pm',
        },
      },
      {
        dayName: 'Viernes',
        exercises: [
          { id: 'run-gym-fri-1', name: 'Sentadilla + press', sets: '3x12' },
          { id: 'run-gym-fri-2', name: 'Peso muerto unilateral', sets: '3x10' },
          { id: 'run-gym-fri-3', name: 'Jalón unilateral en polea', sets: '3x12' },
          { id: 'run-gym-fri-4', name: 'Zancadas en sitio', sets: '2x10' },
        ],
        runningSession: {
          type: 'Social Run',
          time: '7:00 pm',
        },
        additionalNotes: 'Estiramientos dinámicos — 10 min',
      },
    ],
  },
];
