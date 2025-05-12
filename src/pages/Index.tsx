
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedHeadsets } from "@/components/FeaturedHeadsets";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedHeadsets />
        
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Compare?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Find the perfect VR headset for your needs by comparing specs, features, and prices.
              </p>
              <div className="inline-block">
                <a 
                  href="/compare" 
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-future transition-all"
                >
                  Compare All Headsets
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
