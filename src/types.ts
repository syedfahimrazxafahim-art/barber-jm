export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  category: 'haircuts' | 'shaves' | 'packages' | 'treatments' | 'kids';
  popular?: boolean;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
  initials: string;
  availableToday: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: 'fades' | 'beards' | 'classic' | 'shop';
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export interface BookingData {
  serviceId: string;
  barberId: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes: string;
}
