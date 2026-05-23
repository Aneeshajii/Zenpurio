import { 
  Home, Building2, Factory, ShieldCheck, HeartHandshake, HardHat,
  Droplets, Sparkles, Wind, Utensils, Trash2, Sofa,
  Wrench, GlassWater, Truck, Archive, Hotel, GraduationCap, 
  Plane, Stethoscope, Fan, Brush, Grid, Layers, Package, Zap,
  Briefcase, Shield, Settings, Coffee, Users, CheckSquare, Hammer
} from "lucide-react";

export const serviceCategories = [
  {
    id: "housemaid",
    title: "Housemaid Services (Wonder Maids)",
    icon: HeartHandshake,
    image: "/images/service_housemaid_1779134456643.png",
    description: "Meeting the rising demand for reliable domestic help, Pureo provides premium quality housemaid services. Our dedicated staff handle kitchen cleaning, dish washing, cloth washing, and daily chores with expert care.",
    features: [
      { title: "Disinfect & Sanitize", icon: Shield },
      { title: "Kitchen & Bathroom Cleaning", icon: Droplets },
      { title: "Living Areas / Rooms", icon: Home },
      { title: "Dusting & Floor Cleaning", icon: Sparkles },
      { title: "Cook & Caretaker Services", icon: Utensils },
      { title: "Flexible Scheduling", icon: Users }
    ]
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    image: "/images/service_residential_cleaning_1779133604787.png",
    description: "Keep your home spotless and harmonious with our tailored residential services, engineered to provide a healthy living space for your family.",
    features: [
      { title: "House Cleaning", icon: Home, image: "/images/house.jpg" },
      { title: "Carpet Cleaning", icon: Layers, image: "/images/carpet.jpg" },
      { title: "Sofa Cleaning", icon: Sofa, image: "/images/sofa.jpg" },
      { title: "Bath room Cleaning", icon: Droplets, image: "/images/bathroom.jpg" },
      { title: "Apartments Maintenance", icon: Building2, image: "/images/apartment.jpg" },
      { title: "Servant Maid Services", icon: Users, image: "/images/servant.jpg" },
      { title: "Unwanted Sticker & Labels Removing", icon: Trash2, image: "/images/sticker.jpg" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building2,
    image: "/images/service_commercial_cleaning_1779133619028.png",
    description: "Maintain a pristine corporate image with our enterprise-grade cleaning protocols designed specifically for high-traffic environments.",
    features: [
      { title: "Corporate Offices", icon: Briefcase },
      { title: "Shopping Malls", icon: Archive },
      { title: "Hotels", icon: Hotel },
      { title: "Airports", icon: Plane },
      { title: "Educational Institutions", icon: GraduationCap },
      { title: "Hostels & Restaurants", icon: Coffee },
      { title: "Hospitals", icon: Stethoscope },
      { title: "Commercial Establishments", icon: Building2 },
      { title: "Guest House", icon: Home },
      { title: "Banks & ATMs", icon: ShieldCheck },
      { title: "Sports & Recreations Clubs", icon: Users },
      { title: "Warehouses", icon: Package }
    ]
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    image: "/images/hero_industrial_1779124128556.png",
    description: "Heavy-duty cleaning engineered for safety, compliance, and rigorous industrial standards.",
    features: [
      { title: "New Building Cleaning", icon: Sparkles },
      { title: "Portion-wise Cleaning", icon: Grid },
      { title: "Construction Debris Removal", icon: Trash2 },
      { title: "Property Cleaning", icon: Home },
      { title: "Building Premises and Parking", icon: Truck },
      { title: "Windows Cleaning", icon: GlassWater },
      { title: "Marble and Tiles Cleaning", icon: Layers },
      { title: "Floor Cleaning", icon: Brush },
      { title: "Washing of Walls", icon: Droplets },
      { title: "Unwanted Sticker & Label removing", icon: Trash2 },
      { title: "Vacuum Cleaning", icon: Fan },
      { title: "Sweeping, Mopping & Polishing", icon: Sparkles }
    ]
  },
  {
    id: "construction",
    title: "Construction & Maintenance",
    icon: HardHat,
    image: "/images/hero_commercial_1779124110819.png",
    description: "Specialized deep cleaning and turnaround services for massive industrial setups, factories, and construction sites.",
    features: [
      { title: "Storage Tank Cleaning", icon: Archive },
      { title: "Turnaround Services", icon: Settings },
      { title: "Oil sump & Grit Cleaning", icon: Droplets },
      { title: "Non-Toxic waste Removal", icon: Trash2 },
      { title: "Sludge Removal & Cleaning", icon: Brush },
      { title: "Factory Floor Cleaning", icon: Factory },
      { title: "Vacuum Services", icon: Fan },
      { title: "Industrial Equipments Cleaning", icon: Wrench },
      { title: "Ventilation Cleaning", icon: Wind },
      { title: "Doors, Windows & Skids", icon: GlassWater },
      { title: "De-greasing & Carbonizing", icon: Zap }
    ]
  }
];

export const multiModelServices = [
  { 
    t: "Carpentry Works", 
    d: "Pureo provide joinery services such as making of wooden furniture and re-modelling, reforming your old wood stuffs to give them a restored look or even remodel them into a amazingly new and unique piece of furniture for homes and Offices.",
    img: "/images/multi_carpentry.jpg"
  },
  { 
    t: "Plumbing Works", 
    d: "Pureo offers plumbing contracts AMC(Annual Maintenance Contract) basis along with home insulation services. Our premier plumping services provides customer in pex, copper and PVC and also take care of roofing drainage systems.",
    img: "/images/multi_plumbing.jpg"
  },
  { 
    t: "Pest Control Service", 
    d: "Pureo pest management services offer excellent services in making your house, office and industrial zone pest-free. Our technically trained team of pest control professionals offer services that are eco-friendly and ensure that the pest problem is eradicated from the root.",
    img: "/images/multi_pest.jpg"
  },
  { 
    t: "Electrical Works", 
    d: "Pureo facility management undertakes all the essential electrical and household mechanical works and is the only facility management entity to also provide electrical maintenance contracts, which are specially designed and specifically dedicated for the houses and offices.",
    img: "/images/multi_electrical.png"
  },
  { 
    t: "A/C Installation & Maintenance", 
    d: "At Pureo, we understand that after yeas of performance, even the best air conditioners and central air conditioning systems require repairs and maintenance and hence we come up with a complete solution to your Air conditioner repair maintenance and heating, ventilating and air conditioning requirements.",
    img: "/images/multi_ac.jpg"
  },
  { 
    t: "Painting Service", 
    d: "Pureo provide quality painting services for homes and commercial properties. We offer a comprehensive home and office painting support at all dimensions. Our professional painting team are seasoned experts and are trustworthy in execution of the contract undertaken.",
    img: "/images/multi_painting.png"
  }
];
