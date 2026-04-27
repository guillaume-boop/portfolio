import { ExternalLink } from 'lucide-react';
import FlipText from '../FlipText';
import githubLogo from '@/assets/social/github-logo.svg';

interface GitHubCardProps {
  className?: string;
  githubUrl?: string;
}

const GitHubCard = ({ className = '', githubUrl = 'https://github.com/guillaume-boop' }: GitHubCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl" translate="no">
          <FlipText text="/GITHUB/" />
        </h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="Open GitHub profile"
          translate="no"
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
