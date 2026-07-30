import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import actifyLogo from '@/assets/xrp/actify-logo.svg';

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

      {/* Content - Actify hero gradient */}
      <div
        className="flex items-center justify-center aspect-[16/5] overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 100% 120%, rgba(30, 42, 36, 0.55) 0%, transparent 60%), linear-gradient(100deg, #16213c 0%, #10151f 40%, #0f131a 72%, #171b1a 100%)',
        }}
      >
        <img
          src={actifyLogo}
          alt="Actify"
          className="w-1/2 object-contain"
        />
      </div>
    </div>
  );
};

export default XrpCard;
