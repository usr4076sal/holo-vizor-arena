
export type HeadsetSpec = {
  resolution: string;
  refreshRate: string;
  fov: string;
  weight: string;
  tracking: string;
  controllers: string;
  price: string;
};

export type Headset = {
  id: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  price: string;
  featured?: boolean;
  specs: HeadsetSpec;
};

export const headsets: Headset[] = [
  {
    id: "quest-3",
    name: "Quest 3",
    brand: "Meta",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=Meta+Quest+3",
    description: "Meta's latest standalone VR headset featuring mixed reality capabilities and advanced controllers.",
    price: "$499.99",
    featured: true,
    specs: {
      resolution: "2064 × 2208 per eye",
      refreshRate: "90Hz - 120Hz",
      fov: "110°",
      weight: "515g",
      tracking: "Inside-out, 6DoF",
      controllers: "Touch Plus Controllers",
      price: "$499.99",
    },
  },
  {
    id: "index",
    name: "Valve Index",
    brand: "Valve",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=Valve+Index",
    description: "Premium PC VR headset with finger tracking controllers and high refresh rate displays.",
    price: "$999.99",
    featured: true,
    specs: {
      resolution: "1440 × 1600 per eye",
      refreshRate: "80Hz - 144Hz",
      fov: "130°",
      weight: "809g",
      tracking: "SteamVR 2.0 tracking",
      controllers: "Index Knuckle Controllers",
      price: "$999.99",
    },
  },
  {
    id: "vive-pro-2",
    name: "Vive Pro 2",
    brand: "HTC",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=HTC+Vive+Pro+2",
    description: "High-resolution PC VR headset designed for professional and enterprise use.",
    price: "$799.99",
    featured: true,
    specs: {
      resolution: "2448 × 2448 per eye",
      refreshRate: "90Hz - 120Hz",
      fov: "120°",
      weight: "850g",
      tracking: "SteamVR 2.0 tracking",
      controllers: "Vive Controllers",
      price: "$799.99",
    },
  },
  {
    id: "psvr-2",
    name: "PlayStation VR2",
    brand: "Sony",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=PlayStation+VR2",
    description: "Next-generation VR headset designed exclusively for the PlayStation 5.",
    price: "$549.99",
    featured: true,
    specs: {
      resolution: "2000 × 2040 per eye",
      refreshRate: "90Hz - 120Hz",
      fov: "110°",
      weight: "560g",
      tracking: "Inside-out, 6DoF",
      controllers: "PSVR 2 Sense Controllers",
      price: "$549.99",
    },
  },
  {
    id: "reverb-g2",
    name: "Reverb G2",
    brand: "HP",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=HP+Reverb+G2",
    description: "High-resolution Windows Mixed Reality headset with spatial audio.",
    price: "$599.99",
    specs: {
      resolution: "2160 × 2160 per eye",
      refreshRate: "90Hz",
      fov: "114°",
      weight: "550g",
      tracking: "Inside-out, 6DoF",
      controllers: "HP Motion Controllers",
      price: "$599.99",
    },
  },
  {
    id: "pimax-crystal",
    name: "Pimax Crystal",
    brand: "Pimax",
    image: "https://placehold.co/500x300/1a1f2c/FFFFFF?text=Pimax+Crystal",
    description: "Ultra-wide FOV VR headset with high resolution displays.",
    price: "$1,899.99",
    specs: {
      resolution: "2880 × 2880 per eye",
      refreshRate: "90Hz - 120Hz",
      fov: "160° - 200°",
      weight: "960g",
      tracking: "SteamVR 2.0 tracking",
      controllers: "Pimax Sword Controllers",
      price: "$1,899.99",
    },
  },
];
