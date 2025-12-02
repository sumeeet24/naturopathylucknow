import { ServiceItem, FAQItem } from './types';

export const PHYSIO_HERO_TITLE = "Best Physiotherapist in Lucknow | Top Physiotherapy Clinic for Pain Relief";
export const PHYSIO_HERO_SUBTITLE = "Expert physiotherapy services in Lucknow. Personalized rehabilitation for back pain, sports injuries, and post-surgery recovery by certified physiotherapists.";

export const PHYSIO_SERVICES: ServiceItem[] = [
  {
    id: 'back-neck-pain',
    title: 'Back & Neck Pain Relief',
    shortDescription: 'Specialized manual therapy and exercises to treat chronic back pain, sciatica, and cervical spondylitis.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'Activity'
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury Rehab',
    shortDescription: 'Advanced rehabilitation for ACL tears, ankle sprains, and muscle strains to get athletes back in the game.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'Activity'
  },
  {
    id: 'post-surgery',
    title: 'Post-Surgery Recovery',
    shortDescription: 'Comprehensive post-operative care for knee replacements, hip surgeries, and ligament repairs.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'Activity'
  },
  {
    id: 'womens-health',
    title: 'Women\'s Health Physio',
    shortDescription: 'Specialized care for antenatal/postnatal fitness, pelvic floor strengthening, and diastasis recti.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'HeartPulse'
  },
  {
    id: 'neurological-rehab',
    title: 'Neurological Rehab',
    shortDescription: 'Therapy for stroke, paralysis, and Parkinson\'s disease to improve balance, coordination, and independence.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'Brain'
  },
  {
    id: 'geriatric-care',
    title: 'Geriatric (Elderly) Care',
    shortDescription: 'Gentle physiotherapy to improve mobility, prevent falls, and manage arthritis in older adults.',
    fullDescription: [],
    benefits: [],
    procedure: [],
    iconName: 'Sun'
  }
];

export const PHYSIO_DOCTOR = {
  name: "Dr. Anjali Sharma",
  title: "Senior Physiotherapist (BPT, MPT - Ortho)",
  qualifications: ["Bachelor of Physiotherapy (BPT)", "Master of Physiotherapy (MPT - Orthopedics)", "Certified Manual Therapist"],
  specializations: ["Orthopedic Rehabilitation", "Sports Medicine", "Spinal Cord Injuries"],
  experience: "10+ Years",
  bio: [
    "Dr. Anjali Sharma is a leading Physiotherapist in Lucknow with over a decade of experience in treating complex musculoskeletal conditions.",
    "She specializes in non-invasive pain management and believes in a patient-centric approach, combining manual therapy with advanced modalities to ensure rapid recovery."
  ],
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
};

export const PHYSIO_BENEFITS = [
  {
    title: "Advanced Modalities",
    description: "Equipped with the latest IFT, Ultrasound, and Laser therapy machines for faster healing.",
    icon: "Activity"
  },
  {
    title: "Personalized Care",
    description: "One-on-one sessions with detailed assessment and customized exercise plans.",
    icon: "HeartPulse"
  },
  {
    title: "Home Visits Available",
    description: "Expert physiotherapy services at the comfort of your home for bedridden or elderly patients.",
    icon: "Sun"
  }
];

export const PHYSIO_FAQS: FAQItem[] = [
  {
    question: "Do you provide home physiotherapy visits in Lucknow?",
    answer: "Yes, we offer home physiotherapy services in Gomti Nagar, Indira Nagar, and nearby areas for patients who cannot visit the clinic."
  },
  {
    question: "What conditions does a physiotherapist treat?",
    answer: "Physiotherapists treat a wide range of conditions including back pain, neck pain, arthritis, sports injuries, paralysis, and post-surgical stiffness."
  },
  {
    question: "How long does a typical physiotherapy session take?",
    answer: "A standard session lasts between 45 to 60 minutes, depending on the severity of the condition and the treatment required."
  },
  {
    question: "Is physiotherapy painful?",
    answer: "Physiotherapy is generally not painful. Some manual techniques might cause mild discomfort, but our therapists ensure the treatment is within your pain tolerance."
  }
];

export const PHYSIO_REVIEWS = [
  {
    text: "I was suffering from severe back pain for months. Dr. Anjali's diagnosis and treatment plan worked wonders. Highly recommended for physiotherapy in Lucknow.",
    author: "Rajesh Kumar",
    location: "Gomti Nagar",
    rating: 5,
    treatment: "Back Pain Therapy"
  },
  {
    text: "Excellent clinic for sports injury rehab. The staff is very professional and the equipment is top-notch. I recovered from my ankle sprain in just 2 weeks.",
    author: "Amit Singh",
    location: "Indira Nagar",
    rating: 5,
    treatment: "Sports Injury"
  },
  {
    text: "Best physiotherapy center for post-surgery recovery. They helped my mother walk again after her knee replacement. Very patient and caring doctors.",
    author: "Sneha Verma",
    location: "Aliganj",
    rating: 5,
    treatment: "Post-Surgery Rehab"
  }
];
