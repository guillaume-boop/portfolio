import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

// Global z-index manager
let maxZIndex = 100;

interface DraggableCardProps {
  children: ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  zIndex?: number;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  isRaw?: boolean;
}

const DraggableCard = ({
  children,
  className = '',
  initialX = 0,
  initialY = 0,
  zIndex = 1,
  onDragStart,
  onDragEnd,
  isRaw = false,
}: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[]>();

  useEffect(() => {
    if (cardRef.current) {
      // Set initial position
      gsap.set(cardRef.current, { x: initialX, y: initialY, zIndex });

      // Create draggable - no inertia, immediate release
      draggableRef.current = Draggable.create(cardRef.current, {
        type: 'x,y',
        bounds: window,
        inertia: false, // No inertia - immediate release
        onDragStart: () => {
          maxZIndex += 1;
          gsap.set(cardRef.current, { zIndex: maxZIndex });
          onDragStart?.();
        },
        onDragEnd: () => {
          onDragEnd?.();
        },
      });
    }

    return () => {
      draggableRef.current?.forEach(d => d.kill());
    };
  }, [initialX, initialY, zIndex, onDragStart, onDragEnd]);

  return (
    <div
      ref={cardRef}
      className={`${isRaw ? '' : 'portfolio-card'} absolute ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};

export default DraggableCard;
