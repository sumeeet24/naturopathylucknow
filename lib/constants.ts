import { ServiceItem, PrincipleItem, FAQItem, ConditionItem, PackageItem, DoctorProfile, TestimonialItem } from './types';

export const APP_NAME = "Lucknow Natural Healing Centre";
export const ADDRESS = "Gomti Nagar, Lucknow, Uttar Pradesh 226010";
export const PHONE = "+91 88742 06748";
export const WHATSAPP = "918874206748";
export const EMAIL = "biotb.instantreply@gmail.com";

// Keyword-rich introduction - OPTIMIZED FOR SEO
export const HERO_TITLE = "Best Naturopathy Clinic & Natural Treatment Hospital in Lucknow | Holistic Healing";
export const HERO_SUBTITLE = "Experience the power of nature at Lucknow's premier Natural Treatment Hospital and Naturopathy Clinic. We provide both In-Patient (IPD) facility for chronic disease reversal and Out-Patient (OPD) services for daily wellness therapies. 100% Side-effect free.";

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Holistic View Point",
    content: "Unlike other systems, Naturopathy is based on a holistic viewpoint. We treat the body, mind, and spirit as one entity."
  },
  {
    title: "Unity of Disease & Cure",
    content: "All diseases, their causes, and treatments are one: the accumulation of morbid matter in the body and their elimination."
  },
  {
    title: "Bacteria are Secondary",
    content: "The primary cause of disease is not bacteria or virus. They only survive when morbid matter accumulates. They are secondary causes."
  },
  {
    title: "Acute Diseases are Friends",
    content: "Acute diseases are the body's self-healing effort. They are our friends, not enemies. Suppressing them leads to chronic disease."
  },
  {
    title: "Drugless Healing",
    content: "In Naturopathy, there is no place for medicines or concoctions. The body is a composition of 'Pancha Maha Bhuthas' and they alone restore health."
  },
  {
    title: "Nature is the Healer",
    content: "Nature is the greatest healer. The body has an innate capacity to prevent disease and regain health if it becomes unhealthy."
  }
];

// --- CONTENT ECOSYSTEM FOR SEO ---

export const TREATMENTS: ServiceItem[] = [
  {
    id: 'mud-therapy',
    title: 'Mud Therapy',
    shortDescription: 'Cooling and soothing mud packs to eliminate toxins, improve circulation, and treat skin conditions.',
    fullDescription: [
      "Mud therapy is a distinct and ancient branch of Naturopathy. Mud corresponds to the Earth element (Prithvi Mahabhuta), which has an immense impact on the human body in health and sickness.",
      "The mud used in our clinic in Lucknow is taken from 3-4 feet depth from the surface of the ground. It is free from contamination, stone pieces, and chemical manures. It is dried, powdered, and sieved before use to ensure maximum therapeutic potency."
    ],
    benefits: [
      "Relaxes muscles and improves blood circulation.",
      "Absorbs excessive heat from the body (great for fever and inflammation).",
      "Draws out toxins from deep tissues.",
      "Excellent for skin diseases like Psoriasis, Eczema, and Acne.",
      "Relieves constipation when applied as a pack on the abdomen."
    ],
    procedure: [
      "Mud packs are prepared by mixing the clay with cold water.",
      "The pack is applied to the affected area (abdomen, eyes, or forehead) for 20-30 minutes.",
      "For full body mud bath, the patient is covered in mud and sits in sunlight.",
      "After drying, the mud is washed off with a cold shower."
    ],
    iconName: 'Leaf',
    reviews: [
      { author: "Rajesh Kumar", text: "Best mud therapy in Lucknow.", rating: 5 },
      { author: "Anita Singh", text: "I had severe skin issues, but after 5 sessions of mud therapy, my skin is clear and glowing. Highly recommended!", rating: 5 }
    ]
  },
  {
    id: 'hydrotherapy',
    title: 'Hydrotherapy',
    shortDescription: 'Therapeutic use of water including Hip Bath, Spinal Bath, Steam Bath, and Jacuzzi to revitalize the system.',
    fullDescription: [
      "Hydrotherapy is the treatment of disease by the use of water. Water has great healing properties and exhibits different physiological effects at different temperatures.",
      "At our Lucknow center, we use various forms of hydrotherapy to manipulate blood circulation. Cold water contracts blood vessels, while hot water dilates them. Alternating treatments acts as a pump to flush toxins."
    ],
    benefits: [
      "Improves digestion and cures constipation (Hip Bath).",
      "Relieves chronic back pain and sciatica (Spinal Bath).",
      "Detoxifies the skin through sweating (Steam Bath).",
      "Boosts immunity and blood circulation.",
      "Relieves stress and insomnia."
    ],
    iconName: 'Droplets'
  },
  {
    id: 'massage-therapy',
    title: 'Therapeutic Massage',
    shortDescription: 'Ayurvedic and Naturopathic massages to relax muscles, improve lymphatic drainage, and reduce stress.',
    fullDescription: [
      "Massage is a systematic manipulation of the body's soft tissues. In Naturopathy, massage is not just for relaxation but is a passive exercise that helps the body eliminate waste products.",
      "We use specific herbal oils suited to your body type (Vata, Pitta, Kapha). The strokes are designed to improve lymphatic drainage, ensuring toxins are moved towards excretory organs."
    ],
    benefits: [
      "Tones up the nervous system.",
      "Eliminates poisons and toxins from the body.",
      "Improves respiration and circulation.",
      "Reduces swelling and pain in arthritic joints.",
      "Promotes deep sleep and mental relaxation."
    ],
    iconName: 'HeartPulse',
    reviews: [
      { author: "Suresh Verma", text: "Very relaxing and effective massage.", rating: 5 },
      { author: "Pooja Mishra", text: "The therapeutic massage relieved my chronic back pain completely. The oils used were very soothing and the therapist was expert.", rating: 5 },
      { author: "Amit Srivastava", text: "Great relief from joint pain.", rating: 5 }
    ]
  },
  {
    id: 'detox',
    title: 'Detoxification',
    shortDescription: 'Deep cleansing via Colon Hydrotherapy, Enema, and Sankh Prakshalan to remove morbid matter.',
    fullDescription: [
      "Detoxification is the cornerstone of Naturopathy. We believe disease is just the accumulation of waste. Our detox programs are designed to cleanse the colon, liver, and kidneys.",
      "Treatments like Enema and Shankh Prakshalana (Master Cleanse) completely flush the digestive tract, resetting your metabolism and digestion."
    ],
    benefits: [
      "Complete removal of impacted fecal matter.",
      "Instant relief from gas, acidity, and bloating.",
      "Improves nutrient absorption.",
      "Promotes weight loss.",
      "Clears skin and brightens complexion."
    ],
    iconName: 'Activity'
  },
  {
    id: 'yoga-therapy',
    title: 'Yoga & Meditation',
    shortDescription: 'Customized Asanas and Pranayama to align the mind and body for total holistic wellness.',
    fullDescription: [
      "Yoga is not just exercise; it is a science of living. Our medical yoga sessions are tailored to specific diseases. For example, we teach 'Mandukasana' for diabetes and 'Bhujangasana' for back pain.",
      "Pranayama (Breath Control) is used to balance the vital life force (Prana), which directly effects the nervous system and mental state."
    ],
    benefits: [
      "Increases flexibility and muscle strength.",
      "Balances hormones (Thyroid, Insulin).",
      "Reduces stress and anxiety.",
      "Lowers blood pressure.",
      "Improves lung capacity."
    ],
    iconName: 'Sun',
    customLink: '/yoga-meditation-lucknow'
  },
  {
    id: 'shirodhara',
    title: 'Shirodhara',
    shortDescription: 'A classic Ayurvedic therapy that pours warm oil over the forehead to treat insomnia and anxiety.',
    fullDescription: [
      "Shirodhara comes from the Sanskrit words 'Shiro' (head) and 'Dhara' (flow). It involves gently pouring liquids (usually herbal oil) over the forehead.",
      "This treatment creates a profound state of relaxation. It works on the 'Ajna Chakra' (Third Eye), calming the hypothalamus and regulating the pituitary gland."
    ],
    benefits: [
      "Ultimate cure for Insomnia and sleep disorders.",
      "Reduces anxiety, stress, and depression.",
      "Improves concentration and memory.",
      "Treats hair loss and premature greying.",
      "Relieves migraines and tension headaches."
    ],
    iconName: 'Brain'
  },
  {
    id: 'acupressure',
    title: 'Acupressure',
    shortDescription: 'Stimulating specific energy points to relieve pain and balance the body’s energy flow.',
    fullDescription: [
      "Acupressure is an ancient healing art using the fingers to gradually press key healing points, which stimulate the body's natural self-curative abilities.",
      "It is based on the concept of Life Energy (Chi) which flows through 'meridians' in the body. Blockage in this flow causes pain and disease."
    ],
    benefits: [
      "Instant pain relief (Back, Knee, Neck).",
      "Releases muscle tension.",
      "Promotes circulation of blood.",
      "Enhances spirituality and mental clarity.",
      "Effective for sinus and allergy problems."
    ],
    iconName: 'Flower',
    customLink: '/acupressure-acupuncture-lucknow'
  },
  {
    id: 'diet-therapy',
    title: 'Diet Therapy',
    shortDescription: 'Food is medicine. We design specific diet plans to help the body repair and maintain itself.',
    fullDescription: [
      "In Naturopathy, 'Food is Medicine'. We advocate that your kitchen is your pharmacy. An alkaline diet is essential for health.",
      "We design Elimination Diets, Soothing Diets, and Constructive Diets depending on the stage of your disease. We emphasize raw juices, sprouts, and seasonal fruits."
    ],
    benefits: [
      "Restores the body's pH balance (Acid-Alkaline balance).",
      "Provides live enzymes for digestion.",
      "Reduces inflammation naturally.",
      "Sustainable weight loss.",
      "Reverses lifestyle diseases like Diabetes type 2."
    ],
    iconName: 'Wind',
    reviews: [
      { author: "Vikram Singh", text: "Dr. Yadav's diet plan is simple to follow and very effective. I lost 5kg in a month without starving myself.", rating: 5 }
    ]
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    id: 'diabetes',
    title: 'Diabetes Management',
    shortDescription: 'Control blood sugar naturally without heavy medication through diet and yoga.',
    symptoms: ['Excessive thirst & hunger', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Slow healing wounds'],
    causes: ['Sedentary lifestyle', 'Stress', 'Obesity', 'Poor diet (high refined sugar)', 'Genetic factors'],
    naturopathicTreatment: [
      "Mud packs on abdomen to improve pancreatic function.",
      "Bitter Gourd (Karela) and Jamun juice therapy.",
      "Mandukasana and Kapalbhati Pranayama.",
      "Hip bath to improve circulation to abdominal organs.",
      "Strict low-glycemic, alkaline diet plan."
    ],
    relatedTreatments: ['mud-therapy', 'yoga-therapy', 'diet-therapy']
  },
  {
    id: 'hypertension',
    title: 'Hypertension (High BP)',
    shortDescription: 'Reduce blood pressure naturally using stress-relief therapies and cardiac-friendly diet.',
    symptoms: ['Headaches', 'Shortness of breath', 'Nosebleeds', 'Chest pain', 'Dizziness'],
    causes: ['High sodium intake', 'Stress & Anxiety', 'Lack of physical activity', 'Smoking/Alcohol', 'Obesity'],
    naturopathicTreatment: [
      "Shirodhara to calm the nervous system.",
      "Spinal bath to relax the sympathetic nervous system.",
      "Diet rich in potassium (Banana, Coconut water).",
      "Meditation and Yoga Nidra.",
      "Massage therapy to improve peripheral circulation."
    ],
    relatedTreatments: ['shirodhara', 'hydrotherapy', 'massage-therapy']
  },
  {
    id: 'digestive-disorders',
    title: 'Digestive Disorders',
    shortDescription: 'Cure IBS, Constipation, Gas, and Acidity by resetting your gut health.',
    symptoms: ['Bloating', 'Chronic Constipation', 'Acid Reflux', 'Abdominal Pain', 'Irregular bowel movements'],
    causes: ['Low fiber diet', 'Dehydration', 'Antibiotic overuse', 'Stress', 'Eating processed foods'],
    naturopathicTreatment: [
      "Enema for immediate colon cleansing.",
      "Mud pack on abdomen to absorb heat.",
      "Hip bath to tone digestive organs.",
      "Fasting therapy (Lemon water/Fruit juice) to rest the gut.",
      "Probiotic-rich natural diet."
    ],
    relatedTreatments: ['detox', 'mud-therapy', 'hydrotherapy']
  },
  {
    id: 'arthritis',
    title: 'Arthritis & Joint Pain',
    shortDescription: 'Reduce inflammation and improve mobility with heat therapy and anti-inflammatory diet.',
    symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Redness', 'Decreased range of motion'],
    causes: ['Accumulation of uric acid', 'Autoimmune response', 'Wear and tear', 'Obesity', 'Previous injuries'],
    naturopathicTreatment: [
      "Steam bath to eliminate toxins through sweat.",
      "Potli Massage with herbal pouches.",
      "Anti-inflammatory diet (avoiding sour/fermented foods).",
      "Sun bath (Vitamin D absorption).",
      "Magnetic therapy and Acupressure."
    ],
    relatedTreatments: ['massage-therapy', 'hydrotherapy', 'acupressure']
  },
  {
    id: 'obesity',
    title: 'Obesity & Weight Loss',
    shortDescription: 'Sustainable weight loss programs that boost metabolism and detoxify the body.',
    symptoms: ['Excess body fat', 'Breathlessness', 'Fatigue', 'Joint pain', 'Snoring'],
    causes: ['Overeating', 'Hormonal imbalance (Thyroid/PCOS)', 'Slow metabolism', 'Lack of sleep', 'Sedentary life'],
    naturopathicTreatment: [
      "Udvartana (Dry Powder Massage) to break cellulite.",
      "Steam bath and Sauna to burn calories.",
      "Juice fasting and raw diet.",
      "Power Yoga and Surya Namaskar.",
      "Enema to remove old waste contributing to weight."
    ],
    relatedTreatments: ['detox', 'yoga-therapy', 'diet-therapy']
  }
];

export const DOCTOR: DoctorProfile = {
  name: "Dr. Nand Lal Yadav",
  title: "Naturopathic Doctor & Yoga Expert",
  qualifications: ["B.N.Y.S (Bachelor of Naturopathy & Yogic Sciences)", "Diploma in Acupressure", "Yoga Expert"],
  specializations: ["Chronic Disease Reversal", "Medical Yoga", "Lifestyle Disorders"],
  experience: "28+ Years",
  bio: [
    "Dr. Nand Lal Yadav is a pioneer in Medical Yoga and Naturopathy with over 28 years of experience. He has treated over 1,00,000 patients, specializing in reversing chronic diseases like diabetes and hypertension.",
    "His approach combines the ancient wisdom of Yoga with the healing power of Naturopathy to provide a holistic cure that targets the root cause of the ailment."
  ],
  image: "/images/team/dr-nand-lal-yadav.jpg"
};

export const PACKAGES: PackageItem[] = [
  {
    id: 'ipd-program',
    title: 'INTENSIVE RESIDENTIAL (IPD)',
    price: '₹15,000 - ₹55,000',
    duration: '7 - 21 Days',
    recommendedFor: "Chronic Disease Reversal",
    features: [
      "Private AC/Non-AC accommodation",
      "3 wholesome therapeutic meals daily",
      "Minimum 3-4 therapies per day",
      "Daily doctor consultation & monitoring",
      "All medicines & herbal preparations",
      "Medical yoga classes (morning & evening)",
      "Blood tests (initial & final)",
      "Diet chart for home"
    ],
    reviews: [
      { author: "Deepak Gupta", text: "The 15-day stay changed my life. Staff is very caring and the environment is peaceful. My diabetes is under control now.", rating: 5 },
      { author: "Ritu Sharma", text: "Excellent facilities.", rating: 5 }
    ]
  },
  {
    id: 'opd-program',
    title: 'OUTPATIENT PROGRAM (OPD)',
    price: '₹4,500 - ₹20,000',
    duration: '10 - 30 Sessions',
    recommendedFor: "Daily Visitors & Professionals",
    features: [
      "Doctor consultation & treatment plan",
      "1-2 therapies per visit (45-90 mins)",
      "Personalized diet chart",
      "Exercise/yoga guidance",
      "Weekly progress monitoring",
      "WhatsApp support",
      "Flexible timings (Morning/Evening)"
    ]
  },
  {
    id: 'yoga-classes',
    title: 'YOGA & MEDITATION CLASSES',
    price: '₹2,000 / month',
    duration: 'Daily Sessions',
    recommendedFor: "Group & Personal Training",
    features: [
      "Medical yoga sequences",
      "Pranayama (breathing exercises)",
      "Meditation techniques",
      "Asana practice with alignment",
      "Trained instructors (RYT certified)",
      "Group Classes (Morning/Evening)",
      "Personal Training available",
      "Medical Yoga Therapy available"
    ]
  },
  {
    id: 'detox-program',
    title: 'DETOXIFICATION PROGRAMS',
    price: '₹8,000 - ₹38,000',
    duration: '7 - 21 Days',
    recommendedFor: "Complete Body Cleanse",
    features: [
      "Colon hydrotherapy / Enema",
      "Juice fasting or raw food diet",
      "Steam bath & Sauna",
      "Liver detox protocol",
      "Full Panchakarma (in 21-day plan)",
      "Yoga & Meditation",
      "Complete system reset"
    ],
    reviews: [
      { author: "Sanjay Patel", text: "Feeling very light and active.", rating: 5 },
      { author: "Neha Tiwari", text: "The 7-day detox program was a life changer. My digestion has improved and I feel so much lighter and healthier now.", rating: 5 },
      { author: "Rahul Khanna", text: "Best detox center.", rating: 5 }
    ]
  }
];

export const FAQS: FAQItem[] = [
    {
      question: "What is naturopathy and how does it work?",
      answer: "Naturopathy is a drugless system of healing that uses natural elements like water, mud, diet, yoga, and massage to treat diseases. It works by removing toxins (morbid matter) from the body and activating the body's natural healing mechanisms. Unlike conventional medicine that suppresses symptoms, naturopathy addresses the root cause of disease."
    },
    {
      question: "Is naturopathy scientifically proven or just alternative medicine?",
      answer: "While classified as alternative medicine, many therapies are backed by research. Studies show yoga reduces HbA1c, hydrotherapy improves circulation, and the DASH diet lowers BP. We integrate traditional wisdom with modern diagnostics (blood tests, monitoring) to ensure evidence-based results."
    },
    {
      question: "How long does naturopathy treatment take to show results?",
      answer: "It varies. Quick relief (1-2 weeks) for constipation, acidity, and pain. Moderate timeline (4-8 weeks) for BP, weight loss, and stress. Longer timeline (3-6 months) for diabetes reversal and chronic conditions. It's not a quick fix but aims for permanent cure."
    },
    {
      question: "Do I have to stop my current medications to start naturopathy?",
      answer: "NO. Never stop essential medications abruptly. We start naturopathy alongside your current treatment. As your health parameters (BP, sugar) improve, your doctor will gradually reduce the dosage. Complete elimination happens only under medical supervision when safe."
    },
    {
      question: "What is the success rate of naturopathy for diabetes?",
      answer: "Based on 15+ years of data: 92% show blood sugar improvement in 3 months. 68% reduce medication by half. 34% achieve medication-free status. Results depend on patient compliance and disease duration. Type 2 diabetes is highly reversible."
    },
    {
      question: "Can naturopathy cure arthritis completely?",
      answer: "For Osteoarthritis, we can't regenerate lost cartilage but can reduce pain by 70-90% and improve mobility, often avoiding surgery. For Rheumatoid Arthritis, we can reduce inflammation and dependency on steroids significantly."
    },
    {
      question: "Is naturopathy treatment painful or uncomfortable?",
      answer: "Most treatments like massage, steam bath, and yoga are relaxing. Some like enema or acupressure might have mild discomfort initially but are not painful. We always work within your comfort level."
    },
    {
      question: "What should I bring if I'm admitted for residential treatment (IPD)?",
      answer: "Comfortable cotton clothes, toiletries, current medications, recent medical reports, and walking shoes. We provide linens, therapy materials, and food. No outside food is allowed."
    },
    {
      question: "Can I continue working while undergoing outpatient (OPD) treatment?",
      answer: "YES. OPD is designed for working professionals. You can visit for 1-2 hours in the morning (6:30-8:00 AM) or evening (5:00-7:00 PM). We schedule appointments to suit your work life."
    },
    {
      question: "Is your center certified and doctors qualified?",
      answer: "YES. We are AYUSH registered. Dr. Nand Lal Yadav (BNYS, MD) and Dr. Neelam Kumari (BNYS) are qualified naturopathy doctors. Our therapists are certified. We are ISO certified for hygiene."
    },
    {
      question: "Do you provide diet charts and can I follow them at home?",
      answer: "YES. You get a personalized chart with simple Indian recipes, portion guides, and shopping lists. It's designed to be practical and sustainable, not boring or impossible to follow."
    },
    {
      question: "What is the difference between Naturopathy and Ayurveda?",
      answer: "Naturopathy focuses on the 5 elements (Panchamahabhuta) and detoxification without medicines. Ayurveda uses herbs, constitution analysis (Doshas), and formulations. At our center, we practice an integrated approach combining drugless naturopathy with proven Ayurvedic therapies like Abhyanga and Shirodhara."
    },
    {
      question: "Is naturopathy safe for elderly patients (60+ years)?",
      answer: "YES, it's ideal for seniors as it uses no harsh chemicals. We modify therapies to be gentle (chair yoga, light massage). It improves quality of life for arthritis, BP, and diabetes significantly."
    },
    {
      question: "Can children be treated with naturopathy?",
      answer: "YES, naturopathy is safe for children (5+ years). We treat chronic constipation, obesity, asthma, allergies, and weak immunity. Treatments like gentle mud packs and fun yoga sessions are child-friendly. Children under 5 need case-by-case evaluation."
    },
    {
      question: "Will I have to follow a boring, tasteless diet?",
      answer: "NO! Our diet includes familiar Indian foods like roti, dal, and sabzi, just prepared healthily (less oil, better grains). We focus on portion control and timing rather than starving you. It's practical and sustainable."
    },
    {
      question: "How is your center different from other naturopathy centers in Lucknow?",
      answer: "We offer experienced doctors (28+ years), a complete hospital facility (IPD & OPD), scientific evidence-based protocols (not guesswork), honest communication about results, and affordable pricing. We are a medical facility, not just a spa."
    }
  ];

export const TESTIMONIALS: TestimonialItem[] = [
    {
      id: 1,
      name: "Rajesh Verma",
      age: "52 Years",
      location: "Aliganj, Lucknow",
      condition: "Type 2 Diabetes (HbA1c 9.2)",
      duration: "4 months",
      title: "REVERSED TYPE 2 DIABETES IN 4 MONTHS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "My HbA1c was 9.2, fasting sugar 240. After 3 months at Lucknow Naturopathy Center, HbA1c is now 6.5 and fasting sugar 110. I've reduced my medication from 3 tablets to just 1.",
      story: "I was diagnosed with diabetes 8 years ago. Traditional doctors said I'd need medication for life. That's when my friend recommended Dr. Nand Lal Yadav. The treatment included a personalized low-GI diet plan, medical yoga, mud therapy, and gradual medication tapering.",
      verified: true
    },
    {
      id: 2,
      name: "Meera Gupta",
      age: "58 Years",
      location: "Hazratganj, Lucknow",
      condition: "Severe Osteoarthritis",
      duration: "6 weeks",
      title: "AVOIDED KNEE SURGERY WITH NATURAL TREATMENT",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "I couldn't climb stairs due to severe knee pain. Doctors suggested knee replacement. After 6 weeks of Janu Basti, mud therapy and yoga, I'm now pain-free and can walk 3 km daily.",
      story: "I was terrified of surgery. My daughter found this center. Dr. Yadav examined my X-rays and started conservative treatment. Week 1: Pain reduced by 30%. Week 6: Painkiller-free. Surgery cancelled! Saved ₹5 lakhs.",
      verified: true
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: "34 Years",
      location: "Indira Nagar, Lucknow",
      condition: "Obesity (82 kg)",
      duration: "3 months",
      title: "LOST 12 KG NATURALLY WITHOUT CRASH DIETS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "I tried every diet – keto, intermittent fasting. Lost weight but gained it back. Dr. Neelam Kumari's approach was different. Lost 12 kg in 3 months and kept it off for 1 year now.",
      story: "Dr. Neelam explained I was losing muscle, not fat. She designed a sustainable program with balanced 1400-calorie diet, Udvartana massage, and medical yoga. This is the FIRST time I haven't regained weight.",
      verified: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: "41 Years",
      location: "Jankipuram, Lucknow",
      condition: "Chronic Acidity & GERD",
      duration: "3 weeks",
      title: "STOPPED ANTACIDS AFTER 8 YEARS OF DAILY USE",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "I haven't taken a single antacid in 6 months. Can eat everything in moderation. The key was healing my gut lining and managing stress, not suppressing acid production.",
      story: "I had severe acidity for 8 years and was dependent on Pantoprazole. Dr. Yadav's approach focused on healing my gut with colon cleansing, mud packs, and a gut-healing diet. Within 3 weeks, I had zero acidity and was medication-free.",
      verified: true
    },
    {
      id: 5,
      name: "Anjali Mishra",
      age: "31 Years",
      location: "Vikas Nagar, Lucknow",
      condition: "PCOD & Infertility",
      duration: "7 months",
      title: "CONCEIVED NATURALLY AFTER 4 YEARS OF TRYING",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "Don't lose hope. PCOD can be managed naturally. We saved ₹2.5 lakhs and avoided IVF stress. Natural conception is possible with the right treatment.",
      story: "We tried to conceive for 4 years. Fertility doctors suggested IVF. Dr. Neelam Kumari designed a PCOD reversal program with diet, seed cycling, and yoga. Month 4: Regular cycles. Month 7: Naturally conceived!",
      verified: true
    }
  ];

export const SEO_AREAS = [
  "Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar", "Mahanagar", 
  "Jankipuram", "Lucknow Cantonment", "Aminabad", "Ashiyana", "Vikas Nagar",
  "Chowk", "Rajajipuram", "Charbagh", "Telibagh"
];
