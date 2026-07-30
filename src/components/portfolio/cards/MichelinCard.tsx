import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import starMichelinImg from '@/assets/michelin/star-michelin.png';

interface MichelinCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const MichelinCard = ({ className = '', onPageChange }: MichelinCardProps) => {
  return (
    <div className={`w-[320px] md:w-[380px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl" translate="no">
          <FlipText text="/GUIDE MICHELIN/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('michelin');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View Michelin projects"
          translate="no"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div
        className="flex items-center justify-center aspect-[16/6] overflow-hidden"
        style={{ backgroundColor: '#BD2333' }}
      >
        <img
          src={starMichelinImg}
          alt="Michelin"
          className="h-3/4 object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </div>
  );
};

export default MichelinCard;
