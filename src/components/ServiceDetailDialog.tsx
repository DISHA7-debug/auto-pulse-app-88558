import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, User, FileText } from "lucide-react";
import { toast } from "sonner";

interface ServiceDetailDialogProps {
  service: {
    id: string;
    date: string;
    type: string;
    status: "completed" | "scheduled" | "in-progress";
    cost: string;
    description: string;
    serviceCenter: string;
    technician: string;
    invoiceNumber: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServiceDetailDialog = ({ service, open, onOpenChange }: ServiceDetailDialogProps) => {
  const handleDownloadInvoice = () => {
    toast.success("Invoice downloaded successfully");
  };

  const getStatusColor = () => {
    const colors = {
      completed: "from-green-500 to-emerald-600",
      scheduled: "from-blue-500 to-indigo-600",
      "in-progress": "from-yellow-500 to-orange-600",
    };
    return colors[service.status];
  };

  const getStatusBadge = () => {
    const styles = {
      completed: "bg-green-500/20 text-green-700 border-green-500/30",
      scheduled: "bg-blue-500/20 text-blue-700 border-blue-500/30",
      "in-progress": "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
    };
    return (
      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${styles[service.status]}`}>
        {service.status.charAt(0).toUpperCase() + service.status.slice(1).replace("-", " ")}
      </span>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 gap-0 bg-transparent border-none shadow-none overflow-hidden">
        {/* Curved Top Section with Gradient */}
        <div className={`relative bg-gradient-to-br ${getStatusColor()} pt-8 pb-12 px-6 rounded-t-[3rem]`}>
          <div className="text-center space-y-3 mt-2">
            <h2 className="text-2xl font-bold text-white">{service.type}</h2>
            <div className="flex justify-center">
              {getStatusBadge()}
            </div>
            <div className="text-4xl font-bold text-white mt-4">{service.cost}</div>
          </div>
        </div>

        {/* White Bottom Section */}
        <div className="bg-white rounded-b-3xl px-6 py-6 space-y-4">
          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2.5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Date</span>
              </div>
              <span className="font-semibold text-sm">{new Date(service.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>

            <div className="flex items-center justify-between py-2.5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Service Center</span>
              </div>
              <span className="font-semibold text-sm text-right max-w-[180px]">{service.serviceCenter}</span>
            </div>

            <div className="flex items-center justify-between py-2.5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Technician</span>
              </div>
              <span className="font-semibold text-sm">{service.technician}</span>
            </div>

            <div className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Invoice No.</span>
              </div>
              <span className="font-mono text-xs font-medium">{service.invoiceNumber}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-muted/50 p-4 rounded-2xl">
            <p className="text-xs text-muted-foreground mb-1 font-medium">Description</p>
            <p className="text-sm text-foreground">{service.description}</p>
          </div>

          {/* Download Button */}
          {service.status === "completed" && (
            <Button
              onClick={handleDownloadInvoice}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25 transition-smooth"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
