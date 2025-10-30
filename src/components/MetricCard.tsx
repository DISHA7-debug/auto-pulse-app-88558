import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  name: string;
  value: number;
  icon: LucideIcon;
  status: "good" | "warning" | "critical";
}

export const MetricCard = ({ name, value, icon: Icon, status }: MetricCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "health-good";
      case "warning":
        return "health-warning";
      case "critical":
        return "health-critical";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="glass-card p-4 rounded-3xl transition-smooth hover:scale-105 cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-full bg-secondary`}>
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <span className="text-2xl font-bold text-foreground">
          {value}%
        </span>
      </div>
      <p className="text-sm font-medium text-foreground">{name}</p>
    </div>
  );
};
