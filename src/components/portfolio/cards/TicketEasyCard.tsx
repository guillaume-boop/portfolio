import { Eye } from 'lucide-react';
import FlipText from '../FlipText';
import ticketEasyImg from '@/assets/ticket-easy/ticket_easy.png';

interface TicketEasyCardProps {
  className?: string;
  onPageChange?: (page: string) => void;
}

const TicketEasyCard = ({ className = '', onPageChange }: TicketEasyCardProps) => {
  return (
    <div className={`w-[280px] md:w-[320px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="relative border-b-2 card-border px-3 pt-2">
        <h3 className="card-header text-xl md:text-2xl" translate="no">
          <FlipText text="/TICKET-EASY/" />
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPageChange?.('ticketEasy');
          }}
          className="card-header-btn absolute top-0.5 right-0.5"
          aria-label="View Ticket-Easy project"
          translate="no"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary overflow-hidden">
        <img 
          src={ticketEasyImg} 
          alt="Ticket-Easy" 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
};

export default TicketEasyCard;
