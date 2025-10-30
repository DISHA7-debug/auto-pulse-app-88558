import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, Wrench } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ServiceType {
  id: string;
  name: string;
  description: string;
  estimatedCost: string;
  duration: string;
}

interface BookServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const availableServices: ServiceType[] = [
  {
    id: "regular-service",
    name: "Regular Service",
    description: "Full vehicle inspection and oil change",
    estimatedCost: "$450",
    duration: "2-3 hours",
  },
  {
    id: "tire-rotation",
    name: "Tire Rotation",
    description: "Tire rotation and alignment",
    estimatedCost: "$120",
    duration: "1 hour",
  },
  {
    id: "brake-inspection",
    name: "Brake Inspection",
    description: "Brake pad inspection and replacement if needed",
    estimatedCost: "$200",
    duration: "2 hours",
  },
  {
    id: "battery-check",
    name: "Battery Check",
    description: "Complete battery diagnostics and replacement if needed",
    estimatedCost: "$150",
    duration: "1 hour",
  },
  {
    id: "ac-service",
    name: "AC Service",
    description: "Air conditioning system check and gas refill",
    estimatedCost: "$180",
    duration: "1.5 hours",
  },
];

export const BookServiceDialog = ({ open, onOpenChange }: BookServiceDialogProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleBookService = () => {
    if (!selectedService || !selectedDate) {
      toast.error("Please select a service and date");
      return;
    }

    const service = availableServices.find(s => s.id === selectedService);
    toast.success(`${service?.name} booked for ${new Date(selectedDate).toLocaleDateString()}`);
    onOpenChange(false);
    setSelectedService("");
    setSelectedDate("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-primary/80 pt-8 pb-12 px-6 rounded-t-3xl">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Book a Service</h2>
            <p className="text-white/80 text-sm">Schedule your vehicle maintenance</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-3xl px-6 py-6 space-y-6">
          {/* Service Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-foreground">Select Service</Label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {availableServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-smooth ${
                    selectedService === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm text-foreground">{service.name}</h4>
                    <span className="text-sm font-bold text-primary">{service.estimatedCost}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{service.description}</p>
                  <p className="text-xs text-muted-foreground">Duration: {service.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-3">
            <Label htmlFor="service-date" className="text-sm font-semibold text-foreground">
              Select Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="service-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-border focus:border-primary focus:outline-none transition-smooth text-sm"
              />
            </div>
          </div>

          {/* Book Button */}
          <Button
            onClick={handleBookService}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25 transition-smooth"
          >
            Book Service
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
