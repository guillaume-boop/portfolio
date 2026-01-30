import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import profileImg from '@/assets/profile.jpeg';

interface ProfileCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const ProfileCard = ({ className = '', onPageChange }: ProfileCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl">
          <FlipText text="/PROFILE/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('profile');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View Profile"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex items-center justify-center aspect-[4/3] bg-secondary overflow-hidden">
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default ProfileCard;
