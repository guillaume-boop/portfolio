import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import collectionImg from '@/assets/xrp/collection.png';

interface XrpCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const XrpCard = ({ className = '', onPageChange }: XrpCardProps) => {
  return (
    <div className={`w-[320px] md:w-[380px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-lg md:text-xl pr-8" translate="no">
          <FlipText text="/XRP MARKETPLACE/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('xrp');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View XRP marketplace project"
          translate="no"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={collectionImg}
          alt="Actify - collection The Croc Ape's"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default XrpCard;
