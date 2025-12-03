export interface TherapistProfile {
  slug: string;
  name: string;
  designation: string;
  image: string;
  certificateImage: string;
  phone: string;
  email?: string;
  shortBio: string;
  detailedBio: string[];
  specializations: string[];
  certifications: string[];
  isPlaceholder?: boolean; // For blank cards
}

export const THERAPISTS: TherapistProfile[] = [
  {
    slug: 'kawaljeet-singh',
    name: 'Kawaljeet Singh',
    designation: 'Acupressure Therapist',
    image: '/images/team/kawaljeet-singh.jpg',
    certificateImage: '/images/team/kawaljeet-singh-certificate.jpg',
    phone: '+91 76072 06523',
    shortBio: 'Certified Acupressure Therapist specializing in pain relief and energy balancing.',
    detailedBio: [
      "Kawaljeet Singh is a dedicated Acupressure Therapist with extensive experience in the field of alternative medicine.",
      "He holds a Diploma in Acupressure Therapy (D.A.T.) and has been successfully treating patients for various conditions including chronic pain, stress-related disorders, and muscular tension.",
      "His approach combines traditional acupressure techniques with a deep understanding of the body's energy meridians to promote natural healing and well-being."
    ],
    specializations: [
      "Pain Management",
      "Stress Relief",
      "Muscular Tension",
      "Energy Balancing"
    ],
    certifications: [
      "Diploma in Acupressure Therapy (D.A.T.) - Sambhav Acupressure Research, Training N Treatment Institute"
    ]
  },
  // Placeholders for future additions
  {
    slug: 'placeholder-1',
    name: 'Join Our Team',
    designation: 'Acupressure Therapist',
    image: '',
    certificateImage: '',
    phone: '',
    shortBio: '',
    detailedBio: [],
    specializations: [],
    certifications: [],
    isPlaceholder: true
  },
  {
    slug: 'placeholder-2',
    name: 'Join Our Team',
    designation: 'Acupressure Therapist',
    image: '',
    certificateImage: '',
    phone: '',
    shortBio: '',
    detailedBio: [],
    specializations: [],
    certifications: [],
    isPlaceholder: true
  }
];
