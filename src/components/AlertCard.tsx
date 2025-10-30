import { AlertTriangle, Info } from "lucide-react";

interface AlertCardProps {
  component: string;
  severity: "warning" | "info" | "critical";
  message: string;
  predictedFailure: string;
}

export const AlertCard = ({
  component,
  severity,
  message,
  predictedFailure,
}: AlertCardProps) => {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-l-4 border-health-critical";
      case "warning":
        return "border-l-4 border-health-warning";
      default:
        return "border-l-4 border-primary";
    }
  };

  return (
    <div className={`glass-card p-4 rounded-3xl ${getSeverityStyles(severity)} animate-fade-in shadow-md hover:scale-[1.01] transition-smooth border border-border/50`}>
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" 
             style={{ backgroundColor: severity === "critical" ? "hsl(var(--health-critical) / 0.1)" : 
                      severity === "warning" ? "hsl(var(--health-warning) / 0.1)" : "hsl(var(--primary) / 0.1)" }}>
          {severity === "info" ? (
            <Info className="w-5 h-5 text-primary" />
          ) : (
            <AlertTriangle className={`w-5 h-5 ${severity === "critical" ? "health-critical" : "health-warning"}`} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1 text-sm">{component}</h4>
          <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed">{message}</p>
          <div className="flex items-center gap-2 glass-card px-2.5 py-1.5 rounded-xl inline-flex">
            <span className="text-[10px] text-muted-foreground font-medium">Predicted failure:</span>
            <span className="font-bold text-[11px] text-foreground">{predictedFailure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
