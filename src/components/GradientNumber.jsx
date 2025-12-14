import React from "react";

const GradientNumber = ({ number, theme, variant = "outline", className = "" }) => {
  const isDark = theme === 'dark';
  // Create a unique ID for the gradient so multiple numbers don't conflict
  const gradientId = `grad-${number}-${theme}-${variant}`;

  return (
    // The parent controls the width/height via className
    <div className={`flex-shrink-0 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {isDark ? (
            // ORANGE GRADIENT (Dark Theme)
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F47A36" stopOpacity="1" />
              <stop offset="100%" stopColor="#330000" stopOpacity={variant === 'outline' ? 0 : 1} />
            </linearGradient>
          ) : (
            // BLUE GRADIENT (Light Theme)
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B1CEEB" stopOpacity="1" />
              <stop offset="81%" stopColor="#202039" stopOpacity={variant === 'outline' ? 0 : 1} />
            </linearGradient>
          )}
        </defs>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          // Font size tailored to the 0 0 50 80 viewBox
          fontSize="50" 
          className="font-primary font-bold"
          
          // --- VARIANT LOGIC ---
          fill={variant === 'fill' ? `url(#${gradientId})` : "none"}
          stroke={variant === 'outline' ? `url(#${gradientId})` : "none"}
          strokeWidth={variant === 'outline' ? "1.5" : "0"}
        >
          {number}
        </text>
      </svg>
    </div>
  );
};

export default GradientNumber;