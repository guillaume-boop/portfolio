import { ExternalLink } from 'lucide-react';
import FlipText from '../FlipText';
import githubLogo from '@/assets/github-logo.svg';

interface GitHubCardProps {
  className?: string;
  githubUrl?: string;
}

const GitHubCard = ({ className = '', githubUrl = 'https://github.com' }: GitHubCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/GITHUB/" />
        </h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="card-icon-btn"
          aria-label="Open GitHub profile"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      {/* Content */}
      <div className="p-6 flex items-center justify-center aspect-[4/3]">
        <img 
          src={githubLogo} 
          alt="GitHub" 
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>
    </div>
  );
};

export default GitHubCard;
