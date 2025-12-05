export interface Therapist {
  slug: string;
  name: string;
  specialty: string; // e.g., "Acupressure Specialist"
  qualifications: string[];
  bio: string;
  longBio?: string; // More detailed bio for the full profile page
  image: string; // URL
  certificateImage?: string; // URL for certificate placeholder
  certificateImages?: string[]; // Array of certificate URLs
  contactNumber: string;
  email: string;
  availableDays: string[]; // e.g., ["Mon", "Tue", ...]
  availableHours: string; // e.g., "10:00 AM - 05:00 PM"
  description: string; // For SEO meta description
  expertise?: { title: string; description: string }[];
  specializations?: string[];
  certifications?: string[]; // List of text certifications
  faqs?: { question: string; answer: string }[];
}

export const THERAPISTS: Therapist[] = [
  {
    slug: "kawaljeet-singh",
    name: "Kawaljeet Singh",
    specialty: "Certified Acupressure Therapist",
    qualifications: ["Diploma in Acupressure Therapy", "Advanced Certificate in Reflexology"],
    bio: "Kawaljeet Singh is a certified Acupressure Therapist in Lucknow with over 8 years of experience. He specializes in treating chronic pain, sciatica, and migraine through precise pressure point stimulation. His holistic approach combines traditional acupressure with modern stress-relief techniques.",
    longBio: `Kawaljeet Singh is a highly skilled and certified Acupressure Therapist practicing in Lucknow, renowned for his ability to treat chronic pain and lifestyle disorders without medicines. With over 8 years of dedicated clinical practice, he has helped hundreds of patients recover from debilitating conditions like Sciatica, Cervical Spondylitis, and Migraines.

His journey into holistic healing began with a fascination for the body's natural energy systems. He mastered the art of Acupressure, Reflexology, and Sujok Therapy, believing that the human body holds the key to its own healing. Unlike symptomatic treatments, Kawaljeet focuses on identifying and unblocking energy meridians to restore balance and vitality.

At the Natural Treatment Hospital, Kawaljeet Singh heads the Acupressure department. He is particularly famous for his "Pain Management Protocol," which has provided relief to patients who had lost hope with conventional painkillers. His sessions are not just about physical pressure; they are therapeutic experiences that induce deep relaxation and mental clarity.

He is a strong advocate of drugless therapy and educates his patients on self-care techniques to prevent recurrence of pain. Whether it is arthritis in the elderly or stress-induced headaches in young professionals, Kawaljeet's personalized approach ensures effective and lasting recovery.`,
    image: "/images/team/kawaljeet-singh.jpg",
    certificateImage: "/images/certificate/certificate-kawaljeet.jpg",
    certificateImages: ["/images/certificate/certificate-kawaljeet.jpg"],
    contactNumber: "+91 88742 06748",
    email: "biotb.instantreply@gmail.com",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    availableHours: "10:00 AM - 06:00 PM",
    description: "Book an appointment with Kawaljeet Singh, top Acupressure Therapist in Lucknow. Expert in treating arthritis, back pain, and slip disc naturally.",
    expertise: [
      {
        title: "Advanced Acupressure for Pain Relief",
        description: "Specialized in treating sciatica, cervical spondylitis, and frozen shoulder using targeted pressure points and meridian therapy."
      },
      {
        title: "Reflexology & Detoxification",
        description: " therapeutic foot and hand reflexology to stimulate internal organs, improve circulation, and promote natural detoxification."
      },
      {
        title: "Stress & Migraine Management",
        description: "Holistic therapy to relieve chronic headaches, tension, and anxiety-induced disorders by calming the nervous system."
      },
      {
        title: "Digestive Health Restoration",
        description: "Treating IBS, constipation, and acidity through abdominal acupressure techniques that regulate gut motility."
      }
    ],
    specializations: [
      "Clinical Acupressure",
      "Reflexology",
      "Sujok Therapy",
      "Pain Management",
      "Sciatica Treatment",
      "Migraine Relief",
      "Digestive Wellness"
    ],
    certifications: [
      "Diploma in Acupressure Therapy",
      "Advanced Certificate in Reflexology",
      "Naturopathy Care Certificate",
      "Member of Acupressure Council"
    ],
    faqs: [
      {
        question: "How quickly can Acupressure relieve pain?",
        answer: "Many patients feel significant relief after just one session, especially for acute pain. However, chronic conditions like old arthritis usually require a course of 7-10 days for lasting results."
      },
      {
        question: "Is Acupressure painful?",
        answer: "No, it involves firm but comfortable pressure. While some tender points might feel sensitive initially, the overall experience is relaxing and non-invasive."
      },
      {
        question: "Can it help with Slip Disc?",
        answer: "Yes, Acupressure is highly effective for Slip Disc management. It helps by reducing inflammation, releasing muscle spasms around the spine, and improving blood flow to the affected disc area."
      },
      {
        question: "Are there any side effects?",
        answer: "Acupressure is a completely natural and safe therapy with no side effects. It simply stimulates your body's own healing mechanisms."
      }
    ]
  }
];
