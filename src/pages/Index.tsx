
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div 
      className="min-h-screen max-h-screen overflow-hidden flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hosue.jpg')"
      }}
    >
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="liquid-glass rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              ProClear Professional Window Cleaning
            </h1>
            <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
              We provide exterior window cleaning services for residential and commercial properties. 
              Professional, reliable, and streak-free results, at a flexable price. 
              We also will do manual labor, deckscrubing, or any odd jobs. 
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">(612) 715-0274 Nick-Best</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">(763) 283-0779 Brody-Garland</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-foreground">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-medium">proclear@proton.me</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-base font-medium text-muted-foreground">
                USA • Minnesota • Shoreview-Area
              </p>
            </div>
          </div>
          
          <Link to="/gallery">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
