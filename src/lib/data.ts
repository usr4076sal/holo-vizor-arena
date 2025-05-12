
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
  officialWebsite?: string;
};

export const headsets: Headset[] = [
  {
    id: "quest-3",
    name: "Quest 3",
    brand: "Meta",
    image: "https://about.fb.com/ltam/wp-content/uploads/sites/14/2023/06/01_Hero-View.jpg",
    description: "La última gafa VR independiente de Meta con capacidades de realidad mixta y controles avanzados.",
    price: "€499.99",
    featured: true,
    specs: {
      resolution: "2064 × 2208 por ojo",
      refreshRate: "90Hz - 120Hz",
      fov: "110°",
      weight: "515g",
      tracking: "Inside-out, 6DoF",
      controllers: "Controles Touch Plus",
      price: "€499.99",
    },
    officialWebsite: "https://www.meta.com/es/quest/quest-3/",
  },
  {
    id: "index",
    name: "Valve Index",
    brand: "Valve",
    image: "https://m.media-amazon.com/images/I/71ZgOpN805L.jpg",
    description: "Gafas VR premium para PC con controles de seguimiento de dedos y pantallas de alta frecuencia de actualización.",
    price: "€999.99",
    featured: true,
    specs: {
      resolution: "1440 × 1600 por ojo",
      refreshRate: "80Hz - 144Hz",
      fov: "130°",
      weight: "809g",
      tracking: "Seguimiento SteamVR 2.0",
      controllers: "Controles Index Knuckle",
      price: "€999.99",
    },
    officialWebsite: "https://store.steampowered.com/valveindex",
  },
  {
    id: "vive-pro-2",
    name: "Vive Pro 2",
    brand: "HTC",
    image: "https://m.media-amazon.com/images/I/61aUUOFiEJL.jpg",
    description: "Gafas VR de alta resolución para PC diseñado para uso profesional y empresarial.",
    price: "€799.99",
    featured: true,
    specs: {
      resolution: "2448 × 2448 por ojo",
      refreshRate: "90Hz - 120Hz",
      fov: "120°",
      weight: "850g",
      tracking: "Seguimiento SteamVR 2.0",
      controllers: "Controles Vive",
      price: "€799.99",
    },
    officialWebsite: "https://myshop.vive.com/vive_es/pcvr/pro-2.html",
  },
  {
    id: "psvr-2",
    name: "PlayStation VR2",
    brand: "Sony",
    image: "https://media.gamestop.com/i/gamestop/20004927?$pdp$",
    description: "Gafas VR de próxima generación diseñado exclusivamente para PlayStation 5.",
    price: "€549.99",
    featured: true,
    specs: {
      resolution: "2000 × 2040 por ojo",
      refreshRate: "90Hz - 120Hz",
      fov: "110°",
      weight: "560g",
      tracking: "Inside-out, 6DoF",
      controllers: "Controles PSVR 2 Sense",
      price: "€549.99",
    },
    officialWebsite: "https://www.playstation.com/es-es/ps-vr2/",
  },
  {
    id: "reverb-g2",
    name: "Reverb G2",
    brand: "HP",
    image: "https://m.media-amazon.com/images/I/71AqqeTN-SL.jpg",
    description: "Gafas Windows Mixed Reality de alta resolución con audio espacial.",
    price: "€599.99",
    specs: {
      resolution: "2160 × 2160 por ojo",
      refreshRate: "90Hz",
      fov: "114°",
      weight: "550g",
      tracking: "Inside-out, 6DoF",
      controllers: "Controles de Movimiento HP",
      price: "€599.99",
    },
    officialWebsite: "https://www.hp.com/es-es/shop/offer.aspx?p=hp-reverb-g2-vr-headset",
  },
  {
    id: "pimax-crystal",
    name: "Pimax Crystal",
    brand: "Pimax",
    image: "https://m.media-amazon.com/images/I/61VdEWx3Y8L.jpg",
    description: "Gafas VR con campo de visión ultraamplio y pantallas de alta resolución.",
    price: "€1,899.99",
    specs: {
      resolution: "2880 × 2880 por ojo",
      refreshRate: "90Hz - 120Hz",
      fov: "160° - 200°",
      weight: "960g",
      tracking: "Seguimiento SteamVR 2.0",
      controllers: "Controles Pimax Sword",
      price: "€1,899.99",
    },
    officialWebsite: "https://www.amazon.es/Pimax-Crystal-Resoluci%C3%B3n-5760x2880-Cristalino/dp/B0BZSGFLQ7?th=1",
  },
];
