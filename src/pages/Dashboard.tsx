import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Home, Wrench, AlertTriangle, Plus } from "lucide-react";
import { HealthCircle } from "@/components/HealthCircle";
import { MetricCard } from "@/components/MetricCard";
import { AlertCard } from "@/components/AlertCard";
import { ServiceCard } from "@/components/ServiceCard";
import { MyCarSheet } from "@/components/MyCarSheet";
import { ServiceDetailDialog } from "@/components/ServiceDetailDialog";
import { BookServiceDialog } from "@/components/BookServiceDialog";
import * as Icons from "lucide-react";
import vehicleData from "@/data/vehicleData.json";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [data, setData] = useState(vehicleData);
  const [userName, setUserName] = useState("");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [isBookServiceOpen, setIsBookServiceOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "User";
    setUserName(storedName);
  }, []);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setData(vehicleData);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsServiceDialogOpen(true);
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      engine: Icons.Gauge,
      circle: Icons.Circle,
      settings: Icons.Settings,
      disc: Icons.Disc,
      battery: Icons.Battery,
      "move-vertical": Icons.MoveVertical,
      droplet: Icons.Droplet,
    };
    return iconMap[iconName] || Icons.Circle;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex flex-col">
      {/* Header */}
      <header className="glass-card border-b border-border bg-primary/5 rounded-b-3xl sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">{userName}'s {data.vehicleInfo.make}</h1>
            <p className="text-xs text-muted-foreground">{data.vehicleInfo.model} {data.vehicleInfo.year}</p>
          </div>
          <MyCarSheet vehicleInfo={data.vehicleInfo} />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

          {/* Home Tab */}
          <TabsContent value="home" className="mt-6 space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <HealthCircle percentage={data.vehicleInfo.overallHealth} />
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4 text-foreground">Component Health</h2>
              <div className="grid grid-cols-2 gap-4">
                {data.healthMetrics.map((metric) => (
                  <MetricCard
                    key={metric.id}
                    name={metric.name}
                    value={metric.value}
                    icon={getIconComponent(metric.icon)}
                    status={metric.status as "good" | "warning" | "critical"}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Servicing Tab */}
          <TabsContent value="servicing" className="mt-6 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Service History</h2>
              <Button 
                onClick={() => setIsBookServiceOpen(true)}
                className="rounded-full bg-primary hover:bg-primary/90 transition-smooth shadow-lg"
              >
                <Plus className="w-4 h-4 mr-2" />
                Book Service
              </Button>
            </div>

            <div className="space-y-3">
              {data.serviceHistory.map((service) => (
                <ServiceCard
                  key={service.id}
                  date={service.date}
                  type={service.type}
                  status={service.status as "completed" | "scheduled" | "in-progress"}
                  cost={service.cost}
                  description={service.description}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="mt-6 space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Predictive Maintenance</h2>
            <div className="space-y-4">
              {data.alerts.map((alert) => (
                <AlertCard
                  key={alert.id}
                  component={alert.component}
                  severity={alert.severity as "warning" | "info" | "critical"}
                  message={alert.message}
                  predictedFailure={alert.predictedFailure}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation - Modern Thin Footer */}
      <div className="glass-card border-t border-border/50 rounded-t-3xl sticky bottom-0 z-10">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 transition-smooth ${
                activeTab === "home" ? "" : "opacity-50"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                activeTab === "home" ? "bg-primary shadow-lg shadow-primary/30" : "bg-transparent"
              }`}>
                <Home className={`w-4 h-4 ${activeTab === "home" ? "text-primary-foreground" : "text-foreground"}`} />
              </div>
              <span className={`text-[10px] font-medium ${activeTab === "home" ? "text-primary" : "text-muted-foreground"}`}>Home</span>
            </button>

            <button
              onClick={() => setActiveTab("servicing")}
              className={`flex flex-col items-center gap-1 transition-smooth ${
                activeTab === "servicing" ? "" : "opacity-50"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                activeTab === "servicing" ? "bg-primary shadow-lg shadow-primary/30" : "bg-transparent"
              }`}>
                <Wrench className={`w-4 h-4 ${activeTab === "servicing" ? "text-primary-foreground" : "text-foreground"}`} />
              </div>
              <span className={`text-[10px] font-medium ${activeTab === "servicing" ? "text-primary" : "text-muted-foreground"}`}>Servicing</span>
            </button>

            <button
              onClick={() => setActiveTab("alerts")}
              className={`flex flex-col items-center gap-1 transition-smooth ${
                activeTab === "alerts" ? "" : "opacity-50"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                activeTab === "alerts" ? "bg-primary shadow-lg shadow-primary/30" : "bg-transparent"
              }`}>
                <AlertTriangle className={`w-4 h-4 ${activeTab === "alerts" ? "text-primary-foreground" : "text-foreground"}`} />
              </div>
              <span className={`text-[10px] font-medium ${activeTab === "alerts" ? "text-primary" : "text-muted-foreground"}`}>Alerts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Dialog */}
      {selectedService && (
        <ServiceDetailDialog
          service={selectedService}
          open={isServiceDialogOpen}
          onOpenChange={setIsServiceDialogOpen}
        />
      )}
      
      <BookServiceDialog
        open={isBookServiceOpen}
        onOpenChange={setIsBookServiceOpen}
      />
    </div>
  );
};

export default Dashboard;
