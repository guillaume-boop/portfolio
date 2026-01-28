const StepLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center gap-2 p-8">
        <div className="w-3/4 h-2 bg-step-yellow self-end" />
        <div className="w-2/3 h-2 bg-step-cyan self-center" />
        <div className="w-1/2 h-2 bg-step-purple self-start ml-8" />
        <div className="w-2/3 h-2 bg-step-pink self-start" />
      </div>
    </div>
  );
};

export default StepLogo;
