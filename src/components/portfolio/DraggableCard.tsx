import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

interface DraggableCardProps {
  children: ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  zIndex?: number;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const DraggableCard = ({
  children,
  className = '',
  initialX = 0,
  initialY = 0,
  zIndex = 1,
  onDragStart,
  onDragEnd,
}: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[]>();

  useEffect(() => {
    if (cardRef.current) {
      // Set initial position
      gsap.set(cardRef.current, { x: initialX, y: initialY });

      // Create draggable - no inertia, immediate release
      draggableRef.current = Draggable.create(cardRef.current, {
        type: 'x,y',
        bounds: window,
        inertia: false, // No inertia - sec/immediate release like Zutomayo
        onDragStart: () => {
          gsap.to(cardRef.current, { 
            zIndex: 100, 
            duration: 0 
          });
          onDragStart?.();
        },
        onDragEnd: () => {
          gsap.to(cardRef.current, { 
            zIndex: zIndex, 
            duration: 0.2 
          });
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
      className={`portfolio-card absolute ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};

export default DraggableCard;
