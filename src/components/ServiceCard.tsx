import { Calendar, CheckCircle, Clock, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  date: string;
  type: string;
  status: "completed" | "scheduled" | "in-progress";
  cost: string;
  description: string;
  onClick?: () => void;
}

export const ServiceCard = ({
  date,
  type,
  status,
  cost,
  description,
  onClick,
}: ServiceCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 health-good" />;
      case "in-progress":
        return <Clock className="w-5 h-5 health-warning" />;
      default:
        return <Calendar className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusBadge = () => {
    const styles = {
      completed: "bg-green-500/15 text-green-700 border-green-500/20",
      scheduled: "bg-blue-500/15 text-blue-700 border-blue-500/20",
      "in-progress": "bg-yellow-500/15 text-yellow-700 border-yellow-500/20",
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
      </span>
    );
  };

  return (
    <div 
      onClick={onClick}
      className="glass-card p-4 rounded-3xl hover:scale-[1.01] hover:shadow-xl transition-smooth cursor-pointer shadow-md border border-border/50"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            {getStatusIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-sm mb-0.5">{type}</h4>
            <p className="text-[11px] text-muted-foreground">
              {new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="text-right flex items-center gap-2 flex-shrink-0">
            <div>
              <div className="text-base font-bold text-foreground mb-1">{cost}</div>
              {getStatusBadge()}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
