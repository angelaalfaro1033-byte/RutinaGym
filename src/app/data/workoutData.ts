import sentadillaMancuerna from '../images/SentadillaMancuerna.jpg'
import prensaPierna from '../images/Prensa.jpg'
import pesoMuerto from '../images/PesoMuertoUnilateral.jpg'
import extensionesCuadriceps from '../images/ExtensionCuadriceps.jpg'
import zancadas from '../images/Zancadas.jpg'
import CurlFemoralAcostado from '../images/CurlFemoralAcostado.jpg'
import abduccionMaquina from '../images/AbductoresMaquina.jpg'
import jalonPecho from '../images/JalonAlPecho.jpg'
import remoCable from '../images/RemoSentado.jpg'
import remoMancuernaUnaMano from '../images/RemoConMancuerna.jpg'
import curlBicepsMancuerna from '../images/CurlBiceps.webp'
import curlMartillo from '../images/CurlMartillo.jpg'
import planchaToqueHombros from '../images/planchaToqueHombros.avif'
import hipThrust from '../images/HipTrush.jpg'
import puenteGluteoBanda from '../images/PuenteGluteo.avif'
import patadaGluteoPolea from '../images/PatadaGluteoPolea.jpg'
import abduccionesLateralesBanda from '../images/AbduccionesBanda.webp'
import planchaLateral from '../images/PlanchaLateral.jpg'
import birdDog from '../images/BirdDog.webp'
import pressPechoMancuernas from '../images/PresPechoMancuerna.png'
import aperturasMancuernas from '../images/AperturaMancuernas.png'
import pressMilitarMancuernas from '../images/PresMilitar.gif'
import elevacionesLaterales from '../images/ElevacionesLaterales.avif'
import fondosMaquina from '../images/FondosMaquina.jpg'
import extensionTriceps from '../images/ExtensionTriceps.jpg'
import sentadillaPressMancuernas from '../images/SentadillaMasPress.jpg'
import jalonCuerdaCurl from '../images/JalonCuerdaCurl.jpg'
import jalonPechoNeutro from '../images/JalonPechoNeutro.gif'
import crunch from '../images/CrunchAbdominal.gif'
import jalonUnilateralPolea from '../images/JalonUnilateralPolea.jpg'

export interface Exercise {
  id: string;
  name: string;
  sets: string;
  weight?: number;
  image?: string;
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
          { id: 'gym-only-mon-1', name: 'Sentadilla con mancuerna', sets: '4x12', weight: 8,  image: sentadillaMancuerna  },
          { id: 'gym-only-mon-2', name: 'Prensa inclinada', sets: '3x10',  image: prensaPierna  },
          { id: 'gym-only-mon-3', name: 'Zancadas caminando', sets: '3x12 por pierna', weight: 4,  image: zancadas  },
          { id: 'gym-only-mon-4', name: 'Peso muerto unilateral', sets: '3x10', weight: 9,  image: pesoMuerto  },
          { id: 'gym-only-mon-5', name: 'Extensiones de cuádriceps', sets: '3x15', weight: 9,  image: extensionesCuadriceps  },
          { id: 'gym-only-mon-6', name: 'Curl femoral', sets: '3x12', weight: 14,  image: CurlFemoralAcostado  },
          { id: 'gym-only-mon-7', name: 'Abducciones en máquina', sets: '3x20', weight: 18, image: abduccionMaquina  },
        ],
      },
      {
        dayName: 'Martes',
        exercises: [
          { id: 'gym-only-tue-1', name: 'Jalón al pecho', sets: '4x12', weight: 18, image: jalonPecho },
          { id: 'gym-only-tue-2', name: 'Remo sentado con cable', sets: '3x10', weight: 18, image: remoCable},
          { id: 'gym-only-tue-3', name: 'Remo con mancuerna a una mano', sets: '3x12', weight: 5, image: remoMancuernaUnaMano  },
          { id: 'gym-only-tue-4', name: 'Curl de bíceps con mancuernas', sets: '3x12', weight: 4, image: curlBicepsMancuerna  },
          { id: 'gym-only-tue-5', name: 'Curl martillo', sets: '3x12', weight: 4, image: curlMartillo },
          { id: 'gym-only-tue-6', name: 'Plancha con toque de hombros', sets: '3x30 seg', image: planchaToqueHombros  },
        ],
      },
      {
        dayName: 'Miércoles',
        exercises: [
          {
  id: 'gym-only-wed-1',
  name: 'Hip thrust',
  sets: '4x15',
  weight: 5,
  image: hipThrust
},
{
  id: 'gym-only-wed-2',
  name: 'Puente de glúteo con banda',
  sets: '3x20',
  weight: 8,
  image: puenteGluteoBanda
},
{
  id: 'gym-only-wed-3',
  name: 'Patada de glúteo en polea',
  sets: '3x15 por pierna',
  image: patadaGluteoPolea
},
{
  id: 'gym-only-wed-4',
  name: 'Abducciones laterales con banda',
  sets: '3x20',
  image: abduccionesLateralesBanda
},
{
  id: 'gym-only-wed-5',
  name: 'Plancha lateral',
  sets: '3x20 seg',
  image: planchaLateral
},
{
  id: 'gym-only-wed-6',
  name: 'Bird dog',
  sets: '3x12 por lado',
  image: birdDog
}
        ],
      },
      {
        dayName: 'Jueves',
        exercises: [
          {
  id: 'gym-only-thu-1',
  name: 'Press de pecho con mancuernas',
  sets: '4x10',
  weight: 5,
  image: pressPechoMancuernas
},
{
  id: 'gym-only-thu-2',
  name: 'Aperturas con mancuernas',
  sets: '3x12',
  weight: 3,
  image: aperturasMancuernas
},
{
  id: 'gym-only-thu-3',
  name: 'Press militar con mancuernas',
  sets: '3x10',
  weight: 4,
  image: pressMilitarMancuernas
},
{
  id: 'gym-only-thu-4',
  name: 'Elevaciones laterales',
  sets: '3x12',
  weight: 3,
  image: elevacionesLaterales
},
{
  id: 'gym-only-thu-5',
  name: 'Fondos en máquina',
  sets: '3x12',
  weight: 23,
  image: fondosMaquina
},
{
  id: 'gym-only-thu-6',
  name: 'Extensión de tríceps',
  sets: '3x15',
  weight: 3,
  image: extensionTriceps
}
        ],
      },
      {
        dayName: 'Viernes',
        exercises: [
         {
  id: 'gym-only-fri-1',
  name: 'Sentadilla + press con mancuernas',
  sets: '3x12',
  image: sentadillaPressMancuernas
},
{
  id: 'gym-only-fri-2',
  name: 'Peso muerto con mancuernas',
  sets: '3x10',
  image: pesoMuerto
},
{
  id: 'gym-only-fri-3',
  name: 'Jalón con cuerda + curl',
  sets: '3x12',
  image: jalonCuerdaCurl
},
{
  id: 'gym-only-fri-4',
  name: 'Zancadas + elevación lateral',
  sets: '3x10 por pierna',
  image: zancadas
},
{
  id: 'gym-only-fri-5',
  name: 'Plancha frontal',
  sets: '3x30 seg',
  image: planchaToqueHombros
}
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
          { id: 'run-gym-mon-1', name: 'Sentadilla con mancuerna', sets: '3x12', image: sentadillaMancuerna  },
          { id: 'run-gym-mon-2', name: 'Prensa inclinada', sets: '3x10', image: prensaPierna  },
          { id: 'run-gym-mon-3', name: 'Zancadas en sitio', sets: '2x12 por pierna', image: zancadas  },
          { id: 'run-gym-mon-4', name: 'Peso muerto unilateral', sets: '2x10', image: pesoMuerto  },
          { id: 'run-gym-mon-5', name: 'Curl femoral', sets: '3x12', image: CurlFemoralAcostado  },
          { id: 'run-gym-mon-6', name: 'Abducciones', sets: '2x20', image: abduccionMaquina  },
        ],
        runningSession: {
          type: 'Easy Run',
          time: '7:00 pm',
        },
      },
      {
        dayName: 'Martes',
        exercises: [
          { id: 'run-gym-tue-1', name: 'Jalón al pecho', sets: '4x12', image: jalonPecho  },
          { id: 'run-gym-tue-2', name: 'Remo sentado', sets: '3x10', image: remoCable  },
          { id: 'run-gym-tue-3', name: 'Remo con mancuerna', sets: '3x12', image: remoMancuernaUnaMano  },
          { id: 'run-gym-tue-4', name: 'Curl bíceps', sets: '3x12', image: curlBicepsMancuerna  },
          { id: 'run-gym-tue-5', name: 'Curl martillo', sets: '2x12', image: curlMartillo  },
          { id: 'run-gym-tue-6', name: 'Plancha', sets: '3x30 seg', image: planchaToqueHombros  },
          { id: 'run-gym-tue-7', name: 'Plancha lateral', sets: '3x20 seg', image: planchaLateral  },
        ],
      },
      {
        dayName: 'Miércoles',
        exercises: [
          { id: 'run-gym-wed-1', name: 'Hip thrust', sets: '3x15', weight: 8, image: hipThrust  },
          { id: 'run-gym-wed-2', name: 'Puente glúteo', sets: '3x20', weight: 10, image: puenteGluteoBanda  },
          { id: 'run-gym-wed-3', name: 'Patada glúteo', sets: '3x15', image: patadaGluteoPolea  },
          { id: 'run-gym-wed-4', name: 'Abducciones laterales', sets: '3x20', image: abduccionesLateralesBanda  },
        ],
        runningSession: {
          type: 'Speed / Intervalos',
          time: '7:00 pm',
        },
        additionalNotes: 'Movilidad de cadera y espalda — 10 a 15 min',
      },
      {
        dayName: 'Jueves',
        exercises: [
          { id: 'run-gym-thu-1', name: 'Press de pecho', sets: '3x10', image: pressPechoMancuernas  },
          { id: 'run-gym-thu-2', name: 'Elevaciones de hombro', sets: '3x12', image: elevacionesLaterales  },
          { id: 'run-gym-thu-3', name: 'Jalón al pecho agarre neutro', sets: '3x12', image: jalonPechoNeutro  },
          { id: 'run-gym-thu-4', name: 'Extensión de tríceps', sets: '3x15', image: extensionTriceps  },
          { id: 'run-gym-thu-5', name: 'Crunch abdominal', sets: '3x15', image: crunch  },
        ],
      },
      {
        dayName: 'Viernes',
        exercises: [
          { id: 'run-gym-fri-1', name: 'Sentadilla + press', sets: '3x12', image: sentadillaPressMancuernas  },
          { id: 'run-gym-fri-2', name: 'Peso muerto unilateral', sets: '3x10', image: pesoMuerto  },
          { id: 'run-gym-fri-3', name: 'Jalón unilateral en polea', sets: '3x12', image: jalonUnilateralPolea  },
          { id: 'run-gym-fri-4', name: 'Zancadas en sitio', sets: '2x10', image: zancadas  },
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
