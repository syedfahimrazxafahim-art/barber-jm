import { ServiceItem, Barber, GalleryItem, Testimonial } from '../types';

export const OFFICIAL_ASSETS = {
  logo: "https://res.cloudinary.com/fzobzdco/image/upload/v1788383448/LOGO.jpg",
  serviceBoard: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379650/service.png",
  contactBoard: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379691/contact.png",
  haircuts: {
    cut3: "https://res.cloudinary.com/fzobzdco/image/upload/v1788383536/3.jpg",
    cut5: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379736/5.jpg",
    cut7: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379715/7.jpg",
    cut8: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379712/8.jpg",
    cut9: "https://res.cloudinary.com/fzobzdco/image/upload/v1788377031/9.jpg",
    cut11: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379710/11.jpg",
    cut12: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379706/12.jpg",
  }
};

export const BUSINESS_INFO = {
  name: "Barber Shop J.M",
  alternateName: "Barbería Sin Fronteras Unisex",
  tagline: "The Art of the Classic Cut",
  established: 1970,
  logoUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788383448/LOGO.jpg",
  serviceBoardUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379650/service.png",
  contactBoardUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379691/contact.png",
  address: "1808 76th St",
  borough: "Brooklyn",
  city: "New York",
  state: "NY",
  zip: "11214",
  fullAddress: "1808 76th St, Brooklyn, NY 11214",
  phonePrimary: "1 929-592-0764",
  phoneDisplay: "(929) 592-0764",
  phoneSecondary: "(718) 301-3522",
  whatsappUrl: "https://wa.me/19295920764?text=Hello%20Barber%20Shop%20J.M,%20I%20would%20like%20to%20book%20an%20appointment.",
  email: "jmayancela70@gmail.com",
  facebookUrl: "https://www.facebook.com/Joseto032870",
  hoursText: "Open 7 Days • 9:00 AM - 9:00 PM",
  schedule: [
    { day: "Monday", hours: "9:00 AM - 9:00 PM", note: "Labor Day / Holidays Open" },
    { day: "Tuesday", hours: "9:00 AM - 9:00 PM", note: "Regular Service" },
    { day: "Wednesday", hours: "9:00 AM - 9:00 PM", note: "Regular Service" },
    { day: "Thursday", hours: "9:00 AM - 9:00 PM", note: "Regular Service" },
    { day: "Friday", hours: "9:00 AM - 9:00 PM", note: "Walk-ins Welcome" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM", note: "Peak Grooming Hours" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM", note: "Family Haircuts" },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "gentlemans-haircut",
    name: "Gentleman’s Classic Haircut",
    description: "Tailored haircut with wash, razor neck taper, hot towel finish, and bespoke styling.",
    price: 30,
    durationMinutes: 35,
    category: "haircuts",
    popular: true,
  },
  {
    id: "fade-master",
    name: "Skin Fade & Taper Cut",
    description: "Precision high, mid, or low skin fade with seamless graduation and sharp geometric hairline lineup.",
    price: 35,
    durationMinutes: 40,
    category: "haircuts",
    popular: true,
  },
  {
    id: "hot-towel-shave",
    name: "Traditional Hot Towel Straight Shave",
    description: "Classic 7-step straight-razor shave with pre-shave aromatic oils, steaming towels, warm lather, and cooling aftershave balm.",
    price: 30,
    durationMinutes: 30,
    category: "shaves",
    popular: true,
  },
  {
    id: "beard-sculpting",
    name: "Beard Sculpting & Straight Razor Trim",
    description: "Sculpting length and volume with razor crisp cheek lines, mustache shaping, and conditioning beard oil.",
    price: 20,
    durationMinutes: 25,
    category: "shaves",
  },
  {
    id: "royal-combo",
    name: "The J.M Royal Grooming Package",
    description: "Gentleman's precision haircut + full hot towel shave + beard sculpting + eyebrow clean-up & scalp massage.",
    price: 55,
    durationMinutes: 60,
    category: "packages",
    popular: true,
  },
  {
    id: "kids-haircut",
    name: "Kids & Junior Haircut (All Ages)",
    description: "Patient and friendly haircut for boys and young gents under 12, styled to perfection.",
    price: 20,
    durationMinutes: 25,
    category: "kids",
  },
  {
    id: "line-up-finish",
    name: "Razor Line Up & Edge Detailing",
    description: "Clean up edges, temples, sideburns, and neckline with straight razor sharpness between cuts.",
    price: 15,
    durationMinutes: 15,
    category: "haircuts",
  },
  {
    id: "hair-color-highlights",
    name: "Hair Coloring & Highlights (Rayitos)",
    description: "Professional natural grey coverage, vibrant shades, or blonde highlights tailored to your texture.",
    price: 45,
    durationMinutes: 50,
    category: "treatments",
  },
  {
    id: "keratin-permanent",
    name: "Keratin Treatment & Permanents",
    description: "Deep restorative keratin smoothing or texturizing permanent wave for manageable, healthy hair.",
    price: 60,
    durationMinutes: 70,
    category: "treatments",
  },
  {
    id: "scalp-treatment",
    name: "Invigorating Scalp Treatment & Wash",
    description: "Exfoliating scalp cleanse, invigorating mint massage, and therapeutic hair tonic.",
    price: 18,
    durationMinutes: 20,
    category: "treatments",
  }
];

export const BARBERS: Barber[] = [
  {
    id: "jose-m",
    name: "Jose M.",
    role: "Founder & Master Barber",
    experience: "18+ Years Experience",
    bio: "Passionate artisan dedicated to classic American barbershop heritage, scissor over comb precision, and authentic straight razor craft.",
    specialties: ["Classic Cuts", "Straight Razor Shaves", "Bespoke Styling"],
    initials: "JM",
    availableToday: true,
  },
  {
    id: "david-r",
    name: "David R.",
    role: "Lead Fade Stylist",
    experience: "9+ Years Experience",
    bio: "Specializing in ultra-clean skin fades, modern textured crops, tapers, and precision hairline architecture.",
    specialties: ["Skin Fades", "Textured Crops", "Beard Detailing"],
    initials: "DR",
    availableToday: true,
  },
  {
    id: "marcus-k",
    name: "Marcus K.",
    role: "Shave & Beard Specialist",
    experience: "12+ Years Experience",
    bio: "Master of hot towel rituals, straight razor contouring, sensitive skin conditioning, and facial hair grooming.",
    specialties: ["Hot Towel Shave", "Beard Sculpting", "Scalp Rituals"],
    initials: "MK",
    availableToday: true,
  },
  {
    id: "anthony-l",
    name: "Anthony L.",
    role: "Unisex & Color Artisan",
    experience: "10+ Years Experience",
    bio: "Bilingual grooming specialist adept at unisex cuts, highlights (rayitos), keratin smoothing, and modern styling.",
    specialties: ["Unisex Haircuts", "Highlights & Color", "Keratin"],
    initials: "AL",
    availableToday: true,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Precision Mid Skin Fade & Textured Top",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788383536/3.jpg",
    category: "fades",
    description: "Surgical clipper fade down to skin with textured scissor work on top and sharp temple hairline.",
    tag: "Skin Fade"
  },
  {
    id: "gal-2",
    title: "Crisp Line-Up & Clean Neck Taper",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379736/5.jpg",
    category: "classic",
    description: "Clean graduated taper around ears and neck finished with a hot towel straight razor edge.",
    tag: "Neck Taper"
  },
  {
    id: "gal-3",
    title: "Sculpted Beard Contour & Razor Cheek Line",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379715/7.jpg",
    category: "beards",
    description: "Geometric razor cheek alignment, mustache detailing, and natural beard conditioning oil finish.",
    tag: "Beard Sculpting"
  },
  {
    id: "gal-4",
    title: "Executive High Taper & Classic Part",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379712/8.jpg",
    category: "classic",
    description: "Distinguished gentleman's side part with balanced high taper and natural matte pomade styling.",
    tag: "Executive Cut"
  },
  {
    id: "gal-5",
    title: "Low Drop Fade & Defined Contours",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788377031/9.jpg",
    category: "fades",
    description: "Low curvature drop fade wrapping smoothly around the occipital bone with crisp c-cups.",
    tag: "Drop Fade"
  },
  {
    id: "gal-6",
    title: "Full Beard Shape-Up & Fade Connection",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379710/11.jpg",
    category: "beards",
    description: "Seamless transition from sideburn fade into a full, defined, symmetrical beard silhouette.",
    tag: "Beard & Fade"
  },
  {
    id: "gal-7",
    title: "Modern Textured Crop with Bald Blend",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379706/12.jpg",
    category: "fades",
    description: "Forward textured crop fringe paired with a zero skin fade and sharp geometric razor lineup.",
    tag: "Textured Crop"
  },
  {
    id: "gal-8",
    title: "Barber Shop J.M Official Service Board",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379650/service.png",
    category: "shop",
    description: "Authentic in-shop service price board and classic menu at 1808 76th St, Brooklyn.",
    tag: "Shop Menu"
  },
  {
    id: "gal-9",
    title: "Shop Entrance & Official Schedule Sign",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788379691/contact.png",
    category: "shop",
    description: "Welcome display and business hours signage greeting clients at our Brooklyn location.",
    tag: "Storefront"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Carlos Rodriguez",
    neighborhood: "Bensonhurst, Brooklyn",
    rating: 5,
    date: "2 days ago",
    comment: "Best barbershop in South Brooklyn! Jose is a true master with both scissors and straight razor. The shop is spotless, chairs are super comfortable, and you leave feeling like a million bucks.",
    service: "Gentleman's Haircut + Beard Sculpting"
  },
  {
    id: "t-2",
    author: "Michael T.",
    neighborhood: "Bay Ridge, Brooklyn",
    rating: 5,
    date: "1 week ago",
    comment: "Found this spot on 76th St after my old barber moved. David gave me the sharpest skin fade I’ve had all year. Fast, courteous, great Spanish & English bilingual environment, very fair prices.",
    service: "Skin Fade & Taper Cut"
  },
  {
    id: "t-3",
    author: "Anthony G.",
    neighborhood: "Dyker Heights",
    rating: 5,
    date: "2 weeks ago",
    comment: "The hot towel straight shave here is phenomenal. Steaming towel, eucalyptus pre-shave, smooth blade glide. Old-school American barbershop vibe done right.",
    service: "Traditional Hot Towel Straight Shave"
  }
];

export const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
];
