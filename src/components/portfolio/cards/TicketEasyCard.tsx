import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import FlipText from '../FlipText';

interface TicketEasyCardProps {
  className?: string;
}

const TicketEasyCard = ({ className = '' }: TicketEasyCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={`w-[280px] md:w-[320px] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/TICKET EASY/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/ticket-easy');
          }}
          className="card-icon-btn"
          aria-label="View Ticket Easy project"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary">
        <div className="text-center">
          <div className="text-4xl mb-2">🎫</div>
          <p className="text-muted-foreground text-sm">Event Ticketing</p>
        </div>
      </div>
    </div>
  );
};

export default TicketEasyCard;
