import { 
  Home, Building2, Factory, ShieldCheck, HeartHandshake, HardHat,
  Droplets, Sparkles, Wind, Utensils, Trash2, Sofa,
  Wrench, GlassWater, Truck, Archive, Hotel, GraduationCap, 
  Plane, Stethoscope, Fan, Brush, Grid, Layers, Package, Zap,
  Briefcase, Shield, Settings, Coffee, Users, CheckSquare, Hammer
} from "lucide-react";

export const serviceCategories = [
  {
    id: "manpower",
    title: "Manpower Services",
    icon: Users,
    image: "/images/service_manpower.jpg",
    description: "At Pureo Zenpurio Services Private Limited, we believe that a strong workforce is the foundation of every successful organization. Our professional manpower solutions are designed to provide businesses, institutions, and commercial establishments with skilled, disciplined, and dependable professionals who can efficiently support daily operations and workplace productivity. With a dedicated team of 350+ trained professionals, we focus on delivering reliable manpower services with the highest standards of professionalism, responsibility, and customer satisfaction. Our commitment to quality, proper workforce management, and operational excellence enables us to build trusted partnerships while helping organizations maintain smooth, efficient, and well-managed working environments.",
    features: [
      { title: "350+ Trained Professionals", icon: Users, image: "/images/manpower_trained.jpg" },
      { title: "Reliable & Disciplined", icon: ShieldCheck, image: "/images/manpower_reliable.jpg" },
      { title: "Operational Excellence", icon: Settings, image: "/images/manpower_operational.jpg" },
      { title: "Proper Workforce Management", icon: Briefcase, image: "/images/manpower_management.jpg" }
    ]
  },
  {
    id: "housemaid",
    title: "Housemaid Services (Wonder Maids)",
    icon: HeartHandshake,
    image: "/images/service_housemaid_new.jpg",
    description: "Meeting the rising demand for reliable domestic help, Pureo provides premium quality housemaid services. Our dedicated staff handle kitchen cleaning, dish washing, cloth washing, and daily chores with expert care.",
    features: [
      { title: "Disinfect & Sanitize", icon: Shield, image: "/images/Disinfect & Sanitize.png" },
      { title: "Kitchen & Bathroom Cleaning", icon: Droplets, image: "/images/Kitchen & Bathroom Cleaning.png" },
      { title: "Living Areas / Rooms", icon: Home, image: "/images/Living Areas Rooms.png" },
      { title: "Dusting & Floor Cleaning", icon: Sparkles, image: "/images/Dusting & Floor Cleaning.png" },
      { title: "Cook & Caretaker Services", icon: Utensils, image: "/images/Cook & Caretaker Services.png" },
      { title: "Flexible Scheduling", icon: Users, image: "/images/Flexible Scheduling.png" }
    ]
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    image: "/images/service_residential_cleaning_1779133604787.png",
    description: "Keep your home spotless and harmonious with our tailored residential services, engineered to provide a healthy living space for your family.",
    features: [
      { title: "House Cleaning", icon: Home, image: "/images/House Cleaning.png" },
      { title: "Carpet Cleaning", icon: Layers, image: "/images/Carpet Cleaning.png" },
      { title: "Sofa Cleaning", icon: Sofa, image: "/images/Sofa Cleaning.png" },
      { title: "Bath room Cleaning", icon: Droplets, image: "/images/Bath room Cleaning.png" },
      { title: "Apartments Maintenance", icon: Building2, image: "/images/Apartments Maintenance.png" },
      { title: "Servant Maid Services", icon: Users, image: "/images/Servant Maid Services.png" },
      { title: "Unwanted Sticker & Labels Removing", icon: Trash2, image: "/images/Unwanted Sticker & Labels Removing.png" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building2,
    image: "/images/service_commercial_cleaning_1779133619028.png",
    description: "Maintain a pristine corporate image with our enterprise-grade cleaning protocols designed specifically for high-traffic environments.",
    features: [
      { title: "Corporate Offices", icon: Briefcase, image: "/images/Corporate Offices.png" },
      { title: "Shopping Malls", icon: Archive, image: "/images/Shopping Malls.png" },
      { title: "Hotels", icon: Hotel, image: "/images/Hotels.png" },
      { title: "Airports", icon: Plane, image: "/images/Airports.png" },
      { title: "Educational Institutions", icon: GraduationCap, image: "/images/Educational Institutions.png" },
      { title: "Hostels & Restaurants", icon: Coffee, image: "/images/Hostels & Restaurants.png" },
      { title: "Hospitals", icon: Stethoscope, image: "/images/Hospitals.png" },
      { title: "Commercial Establishments", icon: Building2, image: "/images/Commercial Establishments.png" },
      { title: "Guest House", icon: Home, image: "/images/Guest House.png" },
      { title: "Banks & ATMs", icon: ShieldCheck, image: "/images/Banks & ATMs.png" },
      { title: "Sports & Recreations Clubs", icon: Users, image: "/images/sports and recreations clubs.png" },
      { title: "Warehouses", icon: Package, image: "/images/Warehouses.png" }
    ]
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    image: "/images/hero_industrial_1779124128556.png",
    description: "Heavy-duty cleaning engineered for safety, compliance, and rigorous industrial standards.",
    features: [
      { title: "New Building Cleaning", icon: Sparkles, image: "/images/New Building Cleaning.png" },
      { title: "Portion-wise Cleaning", icon: Grid, image: "/images/Portion-wise Cleaning.png" },
      { title: "Construction Debris Removal", icon: Trash2, image: "/images/Construction Debris Removal.png" },
      { title: "Property Cleaning", icon: Home, image: "/images/Property Cleaning.png" },
      { title: "Building Premises and Parking", icon: Truck, image: "/images/Building Premises and Parking.png" },
      { title: "Windows Cleaning", icon: GlassWater, image: "/images/window Cleaning.png" },
      { title: "Marble and Tiles Cleaning", icon: Layers, image: "/images/Marble and Tiles Cleaning.png" },
      { title: "Floor Cleaning", icon: Brush, image: "/images/Floor Cleaning.png" },
      { title: "Washing of Walls", icon: Droplets, image: "/images/Washing of Walls.png" },
      { title: "Unwanted Sticker & Label removing", icon: Trash2, image: "/images/Unwanted Sticker & Label removing.png" },
      { title: "Vacuum Cleaning", icon: Fan, image: "/images/Vacuum Cleaning.png" },
      { title: "Sweeping, Mopping & Polishing", icon: Sparkles, image: "/images/Sweeping, Mopping & Polishing.png" }
    ]
  },
  {
    id: "construction",
    title: "Construction & Maintenance",
    icon: HardHat,
    image: "/images/hero_commercial_1779124110819.png",
    description: "Specialized deep cleaning and turnaround services for massive industrial setups, factories, and construction sites.",
    features: [
      { title: "Storage Tank Cleaning", icon: Archive, image: "/images/Storage Tank Cleaning.png" },
      { title: "Turnaround Services", icon: Settings, image: "/images/Turnaround Services.png" },
      { title: "Oil sump & Grit Cleaning", icon: Droplets, image: "/images/Oil sump & Grit Cleaning.png" },
      { title: "Non-Toxic waste Removal", icon: Trash2, image: "/images/Non-Toxic waste Removal.png" },
      { title: "Sludge Removal & Cleaning", icon: Brush, image: "/images/Sludge Removal & Cleaning.png" },
      { title: "Factory Floor Cleaning", icon: Factory, image: "/images/Factory Floor Cleaning.png" },
      { title: "Vacuum Services", icon: Fan, image: "/images/Vacuum Services.png" },
      { title: "Industrial Equipments Cleaning", icon: Wrench, image: "/images/Industrial Equipments Cleaning.png" },
      { title: "Ventilation Cleaning", icon: Wind, image: "/images/Ventilation Cleaning.png" },
      { title: "Doors, Windows & Skids", icon: GlassWater, image: "/images/Doors, Windows & Skids.png" },
      { title: "De-greasing & Carbonizing", icon: Zap, image: "/images/De-greasing & Carbonizing.png" }
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
