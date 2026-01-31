import { useRef, useEffect, ReactNode, useState } from 'react';
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
  const [responsivePos, setResponsivePos] = useState({ x: initialX, y: initialY });

  // Calculate responsive position based on viewport size
  const calculateResponsivePosition = (baseX: number, baseY: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Scale positions proportionally but with a more moderate curve
    // Using a reference viewport of 1440x900 (standard desktop)
    const referenceWidth = 1440;
    const referenceHeight = 900;
    
    // Use a softer scaling curve - not purely linear
    // This prevents spreading too much on large screens
    const scaleX = Math.sqrt(viewportWidth / referenceWidth) * 0.85 + 0.15;
    const scaleY = Math.sqrt(viewportHeight / referenceHeight) * 0.85 + 0.15;
    
    // Apply scaling
    const scaledX = baseX * scaleX;
    const scaledY = baseY * scaleY;
    
    return { x: scaledX, y: scaledY };
  };

  useEffect(() => {
    // Calculate responsive positions on mount and resize
    const handleResize = () => {
      const newPos = calculateResponsivePosition(initialX, initialY);
      setResponsivePos(newPos);
      
      if (cardRef.current) {
        gsap.set(cardRef.current, { x: newPos.x, y: newPos.y, zIndex });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [initialX, initialY, zIndex]);

  useEffect(() => {
    if (cardRef.current) {
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
  }, [onDragStart, onDragEnd]);

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
