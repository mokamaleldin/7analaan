import { type ReactNode } from 'react';

interface SectionDividerProps {
  icon: ReactNode;
  label: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="flex items-center gap-2 text-gray-400">
        <span className="text-orange-400">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default SectionDivider;
