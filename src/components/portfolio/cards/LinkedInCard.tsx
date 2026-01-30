import { ExternalLink } from 'lucide-react';
import FlipText from '../FlipText';
import linkedinImg from '@/assets/linkedin.jpeg';

interface LinkedInCardProps {
  className?: string;
  linkedInUrl?: string;
}

const LinkedInCard = ({ className = '', linkedInUrl = 'https://linkedin.com' }: LinkedInCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl">
          <FlipText text="/LINKEDIN/" />
        </h3>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="Open LinkedIn profile"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      {/* Content - Placeholder for latest post */}
      <div className="flex items-center justify-center aspect-[4/3] bg-secondary overflow-hidden">
        <img 
          src={linkedinImg} 
          alt="LinkedIn" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default LinkedInCard;
