import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import stepImg from '@/assets/step-logo.png';

interface StepCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const StepCard = ({ className = '', onPageChange }: StepCardProps) => {
  return (
    <div className={`w-[260px] md:w-[340px] border-2 card-border ${className}`}>
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
      <div className="p-6 flex items-center justify-center bg-secondary aspect-square overflow-hidden">
        <img 
          src={stepImg} 
          alt="STEP" 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
};

export default StepCard;
