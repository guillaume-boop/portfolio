import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import paintImg from '@/assets/paint.png';

interface DesignCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const DesignCard = ({ className = '', onPageChange }: DesignCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl" translate="no">
          <FlipText text="/DESIGN/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('design');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View Design projects"
          translate="no"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex items-center justify-center aspect-[826/560] bg-secondary overflow-hidden">
        <img 
          src={paintImg} 
          alt="Design" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default DesignCard;
