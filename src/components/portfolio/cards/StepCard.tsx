import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import stepImg from '@/assets/step/step-logo.png';

interface StepCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const StepCard = ({ className = '', onPageChange }: StepCardProps) => {
  return (
    <div className={`w-[220px] md:w-[280px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl" translate="no">
          <FlipText text="/STEP/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('step');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View STEP project"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div
        className="p-6 flex items-center justify-center aspect-[4/3] overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #16111f 0%, #201830 12%, #2a1f43 25%, #3f2c66 52%, #2e2049 75%, #241935 90%, #1c1529 100%)',
        }}
      >
        <img
          src={stepImg}
          alt="STEP"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    </div>
  );
};

export default StepCard;
