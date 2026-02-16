import { useState, useEffect } from 'react';

interface MousePos {
  x: number;
  y: number;
}

const AnimatedGridBackground = () => {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Calculate hue based on cursor position (0-360 degrees)
      const hueValue = ((e.clientX + e.clientY) / (window.innerWidth + window.innerHeight)) * 360;
      setHue(hueValue);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.1) 100%
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 49px,
              rgba(220, 220, 220, 0.06) 49px,
              rgba(220, 220, 220, 0.06) 50px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 49px,
              rgba(220, 220, 220, 0.06) 49px,
              rgba(220, 220, 220, 0.06) 50px
            )
          `,
          backgroundAttachment: 'fixed',
          backgroundSize: '100% 100%, 100px 100%, 100% 50px'
        }}
      />
      
      {/* Spotlight overlay - illuminates only the grid lines with color based on cursor position */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 49px,
              hsl(${hue}, 20%, 25%) 49px,
              hsl(${hue}, 20%, 25%) 50px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 49px,
              hsl(${hue}, 20%, 25%) 49px,
              hsl(${hue}, 20%, 25%) 50px
            )
          `,
          backgroundAttachment: 'fixed',
          backgroundSize: '100px 100%, 100% 50px',
          maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
        } as React.CSSProperties}
      />
    </>
  );
};

export default AnimatedGridBackground;
