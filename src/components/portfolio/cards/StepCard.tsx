import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import StepLogo from '../StepLogo';
import FlipText from '../FlipText';

interface StepCardProps {
  className?: string;
}

const StepCard = ({ className = '' }: StepCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={`w-[300px] md:w-[400px] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/STEP/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/step');
          }}
          className="card-icon-btn"
          aria-label="View STEP project"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex items-center justify-center bg-secondary aspect-square">
        <StepLogo className="w-48 h-48 md:w-64 md:h-64" />
      </div>
    </div>
  );
};

export default StepCard;
