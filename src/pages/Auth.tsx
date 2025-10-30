import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [name, setName] = useState("");
  const [vin, setVin] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (vin.length < 10) {
      toast.error("Please enter a valid VIN number");
      return;
    }

    setLoading(true);
    // Store user name in localStorage
    localStorage.setItem("userName", name);
    // Simulate API call
    setTimeout(() => {
      toast.success("Vehicle data synced successfully!");
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-secondary to-background">
      <div className="w-full max-w-md animate-scale-in">
        <div className="glass-card p-8 rounded-3xl">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/10">
              <Car className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Vehicle Health</h1>
            <p className="text-muted-foreground">
              Predictive maintenance at your fingertips
            </p>
          </div>

          {/* User Name Input */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Your Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-2xl glass-card border-0"
              />
            </div>
            
            {/* VIN Input */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Vehicle Identification Number (VIN)
              </label>
              <Input
                type="text"
                placeholder="Enter your VIN"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                className="h-12 rounded-2xl glass-card border-0"
                maxLength={17}
              />
            </div>

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90 transition-smooth"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Auto-syncing vehicle data...
                </>
              ) : (
                "Access Dashboard"
              )}
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 rounded-2xl text-base font-medium glass-card border-border hover:bg-secondary/50 transition-smooth"
            >
              Connect Telematics Module
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Your vehicle data is encrypted and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
