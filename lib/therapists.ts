export interface Therapist {
  slug: string;
  name: string;
  specialty: string; // e.g., "Acupressure Specialist"
  qualifications: string[];
  bio: string;
  image: string; // URL
  certificateImage?: string; // URL for certificate placeholder
  contactNumber: string;
  email: string;
  availableDays: string[]; // e.g., ["Mon", "Tue", ...]
  availableHours: string; // e.g., "10:00 AM - 05:00 PM"
  description: string; // For SEO meta description
}

export const THERAPISTS: Therapist[] = [
  {
    slug: "kawaljeet-singh",
    name: "Kawaljeet Singh",
    specialty: "Certified Acupressure Therapist",
    qualifications: ["Diploma in Acupressure Therapy", "Advanced Certificate in Reflexology"],
    bio: "Kawaljeet Singh is a certified Acupressure Therapist in Lucknow with over 8 years of experience. He specializes in treating chronic pain, sciatica, and migraine through precise pressure point stimulation. His holistic approach combines traditional acupressure with modern stress-relief techniques.",
    image: "/images/team/kawaljeet-singh.jpg",
    certificateImage: "/images/certificate/certificate-kawaljeet.jpg",
    contactNumber: "+91 88742 06748",
    email: "biotb.instantreply@gmail.com",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    availableHours: "10:00 AM - 06:00 PM",
    description: "Book an appointment with Kawaljeet Singh, top Acupressure Therapist in Lucknow. Expert in treating arthritis, back pain, and slip disc naturally."
  }
];
