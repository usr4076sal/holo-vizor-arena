
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headset } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface HeadsetCardProps {
  headset: Headset;
  featured?: boolean;
}

export function HeadsetCard({ headset, featured = false }: HeadsetCardProps) {
  return (
    <Card className={`h-full overflow-hidden tech-glow futuristic-border transition-all duration-300 ${featured ? 'border-primary/50' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={headset.image}
            alt={headset.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-future">
              Destacado
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground font-medium">{headset.brand}</span>
          <span className="font-future text-sm font-bold">{headset.price}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-future">{headset.name}</h3>
        <p className="text-sm text-muted-foreground">{headset.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button asChild variant="ghost" className="w-full group">
          <Link to={`/compare?selected=${headset.id}`}>
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        
        {/* Enlace al sitio web oficial para cada gafa */}
        <a 
          href={headset.officialWebsite || "#"} 
          className={`text-sm text-secondary flex items-center justify-center gap-1 hover:underline ${!headset.officialWebsite ? 'opacity-50 cursor-not-allowed' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio Oficial <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
}
