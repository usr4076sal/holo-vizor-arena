
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { headsets, Headset } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const [selectedHeadsets, setSelectedHeadsets] = useState<Headset[]>([]);
  const [showAllHeadsets, setShowAllHeadsets] = useState(false);

  useEffect(() => {
    const selected = searchParams.get("selected");
    
    if (selected) {
      const selectedHeadset = headsets.find(h => h.id === selected);
      if (selectedHeadset && !selectedHeadsets.some(h => h.id === selected)) {
        setSelectedHeadsets(prev => 
          prev.length >= 3 ? [...prev.slice(1), selectedHeadset] : [...prev, selectedHeadset]
        );
      }
    } else if (selectedHeadsets.length === 0) {
      // If no headsets are selected, select the first three by default
      setSelectedHeadsets(headsets.slice(0, 3));
    }
  }, [searchParams]);

  const handleSelectHeadset = (headset: Headset) => {
    if (selectedHeadsets.some(h => h.id === headset.id)) {
      // Remove if already selected
      setSelectedHeadsets(prev => prev.filter(h => h.id !== headset.id));
    } else {
      // Add if not already selected (max 3)
      setSelectedHeadsets(prev => 
        prev.length >= 3 ? [...prev.slice(1), headset] : [...prev, headset]
      );
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Compare</span> VR Headsets
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare specifications, features and prices of different VR headsets to find the perfect one for your needs.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Select Headsets to Compare</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(showAllHeadsets ? headsets : headsets.slice(0, 6)).map((headset) => (
              <div
                key={headset.id}
                onClick={() => handleSelectHeadset(headset)}
                className={`
                  relative rounded-lg p-3 border cursor-pointer transition-all
                  ${selectedHeadsets.some(h => h.id === headset.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'}
                `}
              >
                {selectedHeadsets.some(h => h.id === headset.id) && (
                  <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
                <div className="h-20 mb-2 flex items-center justify-center">
                  <img
                    src={headset.image}
                    alt={headset.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{headset.brand}</p>
                  <p className="font-medium text-sm truncate">{headset.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {headsets.length > 6 && (
            <button
              onClick={() => setShowAllHeadsets(!showAllHeadsets)}
              className="mt-4 text-sm text-primary hover:text-primary/80 font-medium"
            >
              {showAllHeadsets ? 'Show Less' : 'Show All Headsets'}
            </button>
          )}
        </div>
        
        {selectedHeadsets.length > 0 ? (
          <div className="mt-8 overflow-x-auto">
            <Table className="futuristic-border">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[160px] font-future">Specification</TableHead>
                  {selectedHeadsets.map((headset) => (
                    <TableHead key={headset.id} className="text-center min-w-[200px] font-future">
                      <div className="flex flex-col items-center">
                        <div className="h-24 mb-2 flex items-center justify-center">
                          <img
                            src={headset.image}
                            alt={headset.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <Badge variant="outline" className="mb-1">{headset.brand}</Badge>
                        <span className="font-bold">{headset.name}</span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Resolution</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.resolution}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Refresh Rate</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.refreshRate}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Field of View</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.fov}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Weight</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.weight}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tracking</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.tracking}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Controllers</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center">
                      {headset.specs.controllers}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  {selectedHeadsets.map((headset) => (
                    <TableCell key={headset.id} className="text-center font-bold">
                      {headset.specs.price}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-muted-foreground">
              Select at least one headset to compare.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Compare;
