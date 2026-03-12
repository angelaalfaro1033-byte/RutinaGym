import { ImageWithFallback } from './figma/ImageWithFallback';
import { Timer, Footprints } from 'lucide-react';

interface RunningCardProps {
  runningSession: {
    type: string;
    time: string;
  };
}

export function RunningCard({ runningSession }: RunningCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#FF6FA5] to-[#FFD6E5] rounded-2xl overflow-hidden shadow-md border border-[#FF6FA5]/20">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
            <Footprints className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-1">Running</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-sm text-white text-sm font-medium">
                {runningSession.type}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-white/90">
              <Timer className="w-4 h-4" />
              <span className="text-sm font-medium">{runningSession.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
