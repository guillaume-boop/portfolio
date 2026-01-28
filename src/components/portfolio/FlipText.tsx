interface FlipTextProps {
  text: string;
  className?: string;
}

const FlipText = ({ text, className = '' }: FlipTextProps) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter-flip inline-block"
          style={{ transitionDelay: `${index * 10}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default FlipText;
