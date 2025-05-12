
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col gap-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Experimenta El
            <span className="gradient-text block">Futuro de la Realidad</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
            Descubre auriculares VR de vanguardia que te transportan a nuevas dimensiones con inmersión y claridad inigualables.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Button asChild size="lg" className="group">
              <Link to="/compare">
                Comparar Auriculares
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg">
              Saber Más
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-80 md:h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://placehold.co/800x600/1a1f2c/FFFFFF?text=Auricular+VR" 
                alt="Auricular VR" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          
          {/* Tech circles decoration */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full border border-secondary/30 animate-pulse-glow"></div>
          <div className="absolute top-1/2 -right-5 w-10 h-10 rounded-full border border-primary/30"></div>
          <div className="absolute -bottom-5 left-1/3 w-16 h-16 rounded-full border border-accent/30"></div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
