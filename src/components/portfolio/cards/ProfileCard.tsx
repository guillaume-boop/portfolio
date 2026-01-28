import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import FlipText from '../FlipText';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = ({ className = '' }: ProfileCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={`w-[280px] md:w-[320px] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/PROFILE/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/profile');
          }}
          className="card-icon-btn"
          aria-label="View Profile"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
          <span className="text-3xl">👤</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
