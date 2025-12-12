import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SEO_AREAS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SEO Schema Generators

export function generateMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Lucknow Naturopathy & Yoga Center",
    "alternateName": "Dr. Nand Lal Yadav Naturopathy Hospital",
    "description": "Premier naturopathy hospital in Lucknow offering evidence-based natural treatment for diabetes, hypertension, arthritis, obesity, digestive disorders and other chronic diseases. Established 2010. Both inpatient (IPD) and outpatient (OPD) facilities available.",
    "url": "https://naturopathlucknow.in",
    "logo": "https://naturopathlucknow.in/images/logo.png",
    "image": [
      "https://naturopathlucknow.in/images/clinic-exterior.jpg",
      "https://naturopathlucknow.in/images/treatment-room.jpg",
      "https://naturopathlucknow.in/images/yoga-hall.jpg"
    ],
    "priceRange": "₹₹",
    "telephone": "+918874206748",
    "email": "biotb.instantreply@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vibhuti Khand, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8467",
      "longitude": "80.9462"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Nand Lal Yadav",
      "jobTitle": "Naturopathic Doctor & Medical Yoga Expert",
      "image": "https://naturopathlucknow.in/images/dr-nand-lal-yadav.jpg"
    },
    "hasMap": "https://maps.google.com/?q=26.8467,80.9462",
    "areaServed": [
      "Gomti Nagar",
      "Aliganj",
      "Hazratganj",
      "Indira Nagar",
      "Mahanagar",
      "Jankipuram",
      "Ashiyana",
      "Vikas Nagar",
      "Rajajipuram",
      "Alambagh",
      "Lucknow Cantonment"
    ],
    "medicalSpecialty": [
      "Naturopathy",
      "Ayurvedic Medicine",
      "Yoga Therapy",
      "Preventive Medicine",
      "Integrative Medicine"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Diabetes Reversal Program",
        "description": "Natural treatment for Type 2 diabetes through diet, mud therapy, and lifestyle modification"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Hypertension Management",
        "description": "Drug-free blood pressure control using naturopathic methods"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Arthritis Pain Relief",
        "description": "Natural pain management for osteoarthritis and rheumatoid arthritis"
      }
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lucknow Naturopathy Center",
    "url": "https://naturopathlucknow.in",
    "logo": "https://naturopathlucknow.in/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/lucknownaturopathy",
      "https://www.instagram.com/lucknownaturopathy",
      "https://www.youtube.com/@lucknownaturopathy",
      "https://www.linkedin.com/company/lucknownaturopathy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8874206748",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Nand Lal Yadav",
    "jobTitle": "Naturopathic Doctor & Medical Yoga Expert",
    "description": "Naturopathy expert with 28+ years of experience specializing in chronic disease reversal through natural therapies. Treated over 100,000 patients.",
    "image": "https://naturopathlucknow.in/images/dr-nand-lal-yadav.jpg",
    "url": "https://naturopathlucknow.in/doctor/nand-lal-yadav",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Lucknow Naturopathy Center"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Yoga & Naturopathy Medical College"
    },
    "award": "Pioneer in Medical Yoga Therapy",
    "knowsAbout": [
      "Naturopathy",
      "Medical Yoga",
      "Diabetes Management",
      "Hypertension Treatment",
      "Chronic Disease Reversal"
    ]
  };
}

export function generateBreadcrumbSchema(items?: { name: string; item: string }[]) {
  if (!items || items.length === 0) {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://naturopathlucknow.in/"
          }
        ]
      };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item
    }))
  };
}

export function generateFAQSchema(faqs?: { question: string; answer: string }[]) {
  if (faqs && faqs.length > 0) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // Default FAQs if none provided
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is naturopathy treatment and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Naturopathy is a drugless system of healing that uses natural elements like water, mud, diet, yoga, and massage to treat diseases. It works by removing toxins (morbid matter) from the body and activating the body's natural healing mechanisms. Unlike conventional medicine that suppresses symptoms, naturopathy addresses the root cause of disease."
        }
      },
      {
        "@type": "Question",
        "name": "How long does naturopathy treatment take for diabetes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diabetes management through naturopathy typically shows significant improvement in 3-6 months. Most patients see HbA1c reduction within 3 months of starting treatment. The duration depends on disease severity, patient compliance, and how long they've had diabetes. Our protocols include specialized diet, mud therapy, yoga, and lifestyle modifications."
        }
      },
      {
        "@type": "Question",
        "name": "Is naturopathy treatment covered by health insurance in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some health insurance policies in India now cover naturopathy treatment, especially under AYUSH categories. Coverage varies by insurer and policy. We provide all necessary documentation and bills for insurance claims. Contact your insurance provider to confirm naturopathy coverage in your policy."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of naturopathy treatment in Lucknow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OPD consultation fees start at ₹500. Single therapy sessions range from ₹300-₹800. Comprehensive treatment packages for chronic diseases range from ₹15,000 to ₹45,000 for 7-21 day residential programs. Prices vary based on condition severity and treatment duration. We offer customized packages to suit different budgets."
        }
      }
    ]
  };
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalBusiness",
      "name": "Lucknow Naturopathy Center"
    },
    "author": {
      "@type": "Person",
      "name": "Amit Srivastava"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "I was suffering from chronic back pain for 3 years. Doctors suggested surgery, but I wanted to try something natural. Dr. Nand Lal Yadav's treatment changed my life. The potli massage and spinal bath therapy worked wonders.",
    "datePublished": "2024-11-15"
  };
}
