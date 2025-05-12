
import { headsets } from "@/lib/data";
import { HeadsetCard } from "./HeadsetCard";

export function FeaturedHeadsets() {
  const featuredHeadsets = headsets.filter(headset => headset.featured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="gradient-text">VR Headsets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular virtual reality headsets that are revolutionizing the way we experience digital worlds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHeadsets.map((headset) => (
            <HeadsetCard key={headset.id} headset={headset} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
