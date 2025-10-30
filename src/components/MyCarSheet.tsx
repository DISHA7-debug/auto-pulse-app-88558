import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Car, FileText, LogOut, Calendar, Gauge } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface MyCarSheetProps {
  vehicleInfo: {
    vin: string;
    make: string;
    model: string;
    year: number;
    mileage: string;
    registrationDate: string;
    insuranceExpiry: string;
    lastService: string;
    nextService: string;
  };
}

export const MyCarSheet = ({ vehicleInfo }: MyCarSheetProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full w-10 h-10"
        >
          <Car className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-card border-l border-border">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">My Car</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Vehicle Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Vehicle Details</h3>
            <div className="glass-card p-4 rounded-2xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Make & Model</span>
                <span className="font-semibold">{vehicleInfo.make} {vehicleInfo.model}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Year</span>
                <span className="font-semibold">{vehicleInfo.year}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">VIN</span>
                <span className="font-mono text-sm">{vehicleInfo.vin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Mileage</span>
                <span className="font-semibold">{vehicleInfo.mileage}</span>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Documents</h3>
            <div className="space-y-2">
              <button className="w-full glass-card p-4 rounded-2xl flex items-center justify-between hover:scale-105 transition-smooth">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Registration</p>
                    <p className="text-xs text-muted-foreground">{vehicleInfo.registrationDate}</p>
                  </div>
                </div>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </button>
              
              <button className="w-full glass-card p-4 rounded-2xl flex items-center justify-between hover:scale-105 transition-smooth">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Insurance</p>
                    <p className="text-xs text-muted-foreground">Expires {vehicleInfo.insuranceExpiry}</p>
                  </div>
                </div>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </button>
              
              <button className="w-full glass-card p-4 rounded-2xl flex items-center justify-between hover:scale-105 transition-smooth">
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Service Records</p>
                    <p className="text-xs text-muted-foreground">Last: {vehicleInfo.lastService}</p>
                  </div>
                </div>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full h-12 rounded-2xl glass-card border-border hover:bg-destructive hover:text-destructive-foreground transition-smooth"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
