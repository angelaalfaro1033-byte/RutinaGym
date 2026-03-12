import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Dumbbell, Footprints, ArrowRight } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F6] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
           Rutina GYM
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entrena con constancia bb
          </p>
        </div>

        {/* Routine Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gym Only Card */}
          <div
            onClick={() => navigate('/workout/gym-only')}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGd5bSUyMGR1bWJiZWxsJTIwd29ya291dHxlbnwxfHx8fDE3NzMzNDc2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gym Only Routine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-[#333333] group-hover:text-[#FF6FA5] transition-colors">
                  Rutina Normal
                </h2>
                <ArrowRight className="w-6 h-6 text-[#FF6FA5] group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF0F6] text-[#FF6FA5] text-sm font-medium">
                  5 días / semana
                </span>
              </div>
            </div>
          </div>

          {/* Running + Gym Card */}
          <div
            onClick={() => navigate('/workout/running-gym')}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645238426817-8c3e7d1396cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5pbmclMjBmaXRuZXNzJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzMzNDc2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Running + Gym"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl">
                <Footprints className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-[#333333] group-hover:text-[#FF6FA5] transition-colors">
                  Running + Rutina Gym
                </h2>
                <ArrowRight className="w-6 h-6 text-[#FF6FA5] group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF0F6] text-[#FF6FA5] text-sm font-medium">
                  5 días / semana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
