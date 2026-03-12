import { Dumbbell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#FF6FA5] to-[#FFD6E5] p-2.5 rounded-xl">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-[#333333]">Rutina Gym</h1>
        </div>
      </div>
    </header>
  );
}
