import React, { useState } from 'react';
import { Crown } from 'lucide-react';

interface CrownButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CrownButton: React.FC<CrownButtonProps> = ({ 
  onClick, 
  disabled = false, 
  className = '', 
  children = 'Upgrade' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    h-8 px-3 py-1 rounded-md font-medium text-sm
    flex items-center justify-center gap-1.5
    transition-all duration-300 ease-in-out
    border border-transparent
    relative overflow-hidden
    shadow-md
    ${disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const goldGradient = 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600';
  const goldText = 'text-amber-100';
  const shadowGlow = 'shadow-[0_0_8px_rgba(234,179,8,0.6)]';
  const hoverGlow = 'shadow-[0_0_12px_rgba(234,179,8,0.8)]';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${goldGradient}
        ${goldText}
        ${isHovered && !disabled ? hoverGlow : shadowGlow}
        transform ${isPressed && !disabled ? 'scale-95' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {/* Shine effect */}
      <span className={`
        absolute inset-0 bg-white opacity-0
        transition-opacity duration-300
        ${isHovered && !disabled ? 'opacity-20' : ''}
        pointer-events-none
      `}></span>
      
      {/* Crown icon with animation */}
      <span className={`
        transition-all duration-300
        ${isHovered && !disabled ? 'rotate-12 scale-110' : ''}
      `}>
        <Crown className="w-4 h-4" strokeWidth={2.5} />
      </span>
      
      {/* Text */}
      <span className="relative z-10">{children}</span>
      
      {/* Particles effect on hover */}
      {isHovered && !disabled && (
        <>
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`
                absolute w-1 h-1 rounded-full bg-amber-200
                animate-[sparkle_1s_ease-out_forwards]
                pointer-events-none
              `}
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0
              }}
            ></span>
          ))}
        </>
      )}
    </button>
  );
};

export default CrownButton;