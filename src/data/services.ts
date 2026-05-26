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
      { title: "350+ Trained Professionals", icon: Users },
      { title: "Reliable & Disciplined", icon: ShieldCheck },
      { title: "Operational Excellence", icon: Settings },
      { title: "Proper Workforce Management", icon: Briefcase }
    ]
  },
  {
    id: "housemaid",
    title: "Housemaid Services (Wonder Maids)",
    icon: HeartHandshake,
    image: "/images/service_housemaid_1779134456643.png",
    description: "Meeting the rising demand for reliable domestic help, Pureo provides premium quality housemaid services. Our dedicated staff handle kitchen cleaning, dish washing, cloth washing, and daily chores with expert care.",
    features: [
      { title: "Disinfect & Sanitize", icon: Shield, image: "/images/Disinfect & Sanitize.jpg" },
      { title: "Kitchen & Bathroom Cleaning", icon: Droplets, image: "/images/Kitchen & Bathroom Cleaning.jpg" },
      { title: "Living Areas / Rooms", icon: Home, image: "/images/Living Areas.jpg" },
      { title: "Dusting & Floor Cleaning", icon: Sparkles, image: "/images/Dusting & Floor Cleaning.jpg" },
      { title: "Cook & Caretaker Services", icon: Utensils, image: "/images/Cook & Caretaker Services.jpg" },
      { title: "Flexible Scheduling", icon: Users, image: "/images/Flexible Scheduling.jpg" }
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
      { title: "Corporate Offices", icon: Briefcase, image: "/images/corporate.jpg" },
      { title: "Shopping Malls", icon: Archive, image: "/images/shopping.jpg" },
      { title: "Hotels", icon: Hotel, image: "/images/hotel.jpg" },
      { title: "Airports", icon: Plane, image: "/images/airport.jpg" },
      { title: "Educational Institutions", icon: GraduationCap, image: "/images/Educational Institutions.jpg" },
      { title: "Hostels & Restaurants", icon: Coffee, image: "/images/resturant.jpg" },
      { title: "Hospitals", icon: Stethoscope, image: "/images/hospital.jpg" },
      { title: "Commercial Establishments", icon: Building2, image: "/images/Commercial Establishments.jpg" },
      { title: "Guest House", icon: Home, image: "/images/Guest House.jpg" },
      { title: "Banks & ATMs", icon: ShieldCheck, image: "/images/Banks & ATMs.jpg" },
      { title: "Sports & Recreations Clubs", icon: Users, image: "/images/Sports & Recreations Clubs.jpg" },
      { title: "Warehouses", icon: Package, image: "/images/Warehouses.jpg" }
    ]
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    image: "/images/hero_industrial_1779124128556.png",
    description: "Heavy-duty cleaning engineered for safety, compliance, and rigorous industrial standards.",
    features: [
      { title: "New Building Cleaning", icon: Sparkles, image: "/images/New Building Cleaning.jpg" },
      { title: "Portion-wise Cleaning", icon: Grid, image: "/images/Portion-wise Cleaning.jpg" },
      { title: "Construction Debris Removal", icon: Trash2, image: "/images/Construction Debris Removal.jpg" },
      { title: "Property Cleaning", icon: Home, image: "/images/Property Cleaning.jpg" },
      { title: "Building Premises and Parking", icon: Truck, image: "/images/Building Premises and Parking.jpg" },
      { title: "Windows Cleaning", icon: GlassWater, image: "/images/Windows Cleaning.jpg" },
      { title: "Marble and Tiles Cleaning", icon: Layers, image: "/images/Marble and Tiles Cleaning.jpg" },
      { title: "Floor Cleaning", icon: Brush, image: "/images/Floor Cleaning.jpg" },
      { title: "Washing of Walls", icon: Droplets, image: "/images/Washing of Walls.jpg" },
      { title: "Unwanted Sticker & Label removing", icon: Trash2, image: "/images/Unwanted Sticker & Label removing.jpg" },
      { title: "Vacuum Cleaning", icon: Fan, image: "/images/Vacuum Cleaning.jpg" },
      { title: "Sweeping, Mopping & Polishing", icon: Sparkles, image: "/images/polishing.jpg" }
    ]
  },
  {
    id: "construction",
    title: "Construction & Maintenance",
    icon: HardHat,
    image: "/images/hero_commercial_1779124110819.png",
    description: "Specialized deep cleaning and turnaround services for massive industrial setups, factories, and construction sites.",
    features: [
      { title: "Storage Tank Cleaning", icon: Archive, image: "/images/Storage Tank Cleaning.jpg" },
      { title: "Turnaround Services", icon: Settings, image: "/images/Turnaround Services.jpg" },
      { title: "Oil sump & Grit Cleaning", icon: Droplets, image: "/images/Oil sump & Grit Cleaning.jpg" },
      { title: "Non-Toxic waste Removal", icon: Trash2, image: "/images/Non-Toxic waste Removal.jpg" },
      { title: "Sludge Removal & Cleaning", icon: Brush, image: "/images/Sludge Removal & Cleaning.jpg" },
      { title: "Factory Floor Cleaning", icon: Factory, image: "/images/Factory Floor Cleaning.jpg" },
      { title: "Vacuum Services", icon: Fan, image: "/images/vaccum.jpg" },
      { title: "Industrial Equipments Cleaning", icon: Wrench, image: "/images/indyustrial wquipmen.jpg" },
      { title: "Ventilation Cleaning", icon: Wind, image: "/images/Ventilation Cleaning.jpg" },
      { title: "Doors, Windows & Skids", icon: GlassWater, image: "/images/Doors, Windows & Skids.jpg" },
      { title: "De-greasing & Carbonizing", icon: Zap, image: "/images/De-greasing & Carbonizing.jpg" }
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
