import { ExternalLink } from 'lucide-react';
import FlipText from '../FlipText';

interface LinkedInCardProps {
  className?: string;
  linkedInUrl?: string;
}

const LinkedInCard = ({ className = '', linkedInUrl = 'https://linkedin.com' }: LinkedInCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/LINKEDIN/" />
        </h3>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="card-icon-btn"
          aria-label="Open LinkedIn profile"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      {/* Content - Placeholder for latest post */}
      <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#0077B5] flex items-center justify-center">
            <span className="text-2xl font-bold text-white">in</span>
          </div>
          <p className="text-muted-foreground text-sm">Latest post</p>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCard;
