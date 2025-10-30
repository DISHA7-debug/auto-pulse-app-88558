import { useEffect, useState } from "react";

interface HealthCircleProps {
  percentage: number;
  size?: number;
}

export const HealthCircle = ({ percentage, size = 200 }: HealthCircleProps) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPercentage(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getHealthStatus = (value: number) => {
    if (value >= 70) return { text: "All Systems NORMAL", color: "health-good" };
    if (value >= 30) return { text: "Needs Attention", color: "health-warning" };
    return { text: "Critical — About to Fail", color: "health-critical" };
  };

  const status = getHealthStatus(percentage);
  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform rotate-0" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="20"
            fill="none"
            className="text-muted opacity-20"
          />
          {/* Progress circle with glow effect */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${status.color} transition-all duration-1000 ease-out drop-shadow-lg animate-pulse-subtle`}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 8px currentColor)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline">
            <span className="text-6xl font-bold text-foreground">{Math.round(displayPercentage)}</span>
            <span className="text-3xl font-semibold ml-1 text-foreground">%</span>
          </div>
        </div>
      </div>
      <div className={`glass-card px-6 py-3 rounded-full ${status.color} font-semibold animate-scale-in shadow-lg`}>
        {status.text}
      </div>
    </div>
  );
};
