export interface TeamMember {
  name: string;
  role: string;
  department: string;
  departments?: string[];
  image?: string | null;
  initials?: string;
  badge?: string;
  bio?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}

export interface EventSection {
  id: string;
  number: string;
  title: string;
  category: "Technical" | "Non-Technical" | "Gaming" | "Creative" | "Operations";
  description: string;
  iconName: string;
  accentColor: "cyan" | "blue" | "violet" | "emerald" | "amber";
  coordinators: TeamMember[];
}

export const chiefDirectors: TeamMember[] = [
  {
    name: "SedhuRaman",
    role: "Chief Event Director",
    department: "Executive Board",
    departments: ["Executive Leadership", "Operations Command", "Campus Coordination"],
    badge: "CHIEF EVENT DIRECTOR",
    bio: "Leading the event experience and coordinating the overall execution. Overseeing festival infrastructure, campus logistics, and inter-collegiate event management.",
    phone: "90433 78567",
    email: "sedhur425@gmail.com",
    linkedin: "https://www.linkedin.com/in/sedhu-raman",
    image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_22.22.42.jpg",
    initials: "SR"
  },
  {
    name: "Gokul",
    role: "Chief Event Director",
    department: "Executive Board",
    departments: ["Executive Leadership", "Technical Architecture", "Experience Design"],
    badge: "CHIEF EVENT DIRECTOR",
    bio: "Leading the event experience and coordinating the overall execution. Directing technical systems, digital operations, and festival arena workflows.",
    phone: "6380958284",
    email: "demontxt.01@gmail.com",
    linkedin: "https://www.linkedin.com/in/gokul-p-3179b6387",
    image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445578/WhatsApp_Image_2026-09-03_at_19.54.08.jpg",
    initials: "GK"
  }
];

export const eventSections: EventSection[] = [
  {
    id: "hackverse",
    number: "01",
    title: "HACKVERSE",
    category: "Technical",
    description: "24-hour rapid prototyping, software innovation, and system architecture sprint.",
    iconName: "Code2",
    accentColor: "cyan",
    coordinators: [
      {
        name: "Farzana Kalesha",
        role: "Event Coordinator",
        department: "Hackverse",
        departments: ["HACKVERSE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Hackverse event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788511101/FRa.jpg",
        initials: "FK"
      },
      {
        name: "Rajesh. S",
        role: "Event Coordinator",
        department: "Hackverse",
        departments: ["HACKVERSE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Hackverse event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788496972/rajesh.png.jpg",
        initials: "RS"
      },
      {
        name: "Praveenkumar",
        role: "Event Coordinator",
        department: "Hackverse",
        departments: ["HACKVERSE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Hackverse event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788447201/WhatsApp_Image_2026-09-03_at_18.56.02.jpg",
        initials: "PK"
      }
    ]
  },
  {
    id: "codeathon",
    number: "02",
    title: "CODEATHON",
    category: "Technical",
    description: "High-speed algorithmic challenges, data structures mastery, and competitive syntax duels.",
    iconName: "Terminal",
    accentColor: "blue",
    coordinators: [
      {
        name: "Vignesh. B",
        role: "Event Coordinator",
        department: "Codeathon",
        departments: ["CODEATHON"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Codeathon event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788496971/vicky.png.jpg",
        initials: "VB"
      },
      {
        name: "Jaishitha",
        role: "Event Coordinator",
        department: "Codeathon",
        departments: ["CODEATHON"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Codeathon event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788509212/WhatsApp_Image_2026-09-04_at_13.32.34.jpg",
        initials: "JS"
      },
      {
        name: "Udhayaraj",
        role: "Event Coordinator",
        department: "Codeathon",
        departments: ["CODEATHON"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Codeathon event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788527496/file_00000000d4288211a3de79d99f02a22e.png",
        initials: "UR"
      }
    ]
  },
  {
    id: "tech-battle",
    number: "03",
    title: "TECH BATTLE",
    category: "Technical",
    description: "Intense multi-round technical quizzes, logic riddles, and speed debugging showdowns.",
    iconName: "Cpu",
    accentColor: "violet",
    coordinators: [
      {
        name: "Bhavani Shri",
        role: "Event Coordinator",
        department: "Tech Battle",
        departments: ["TECH BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Tech Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445322/WhatsApp_Image_2026-09-02_at_21.55.21.jpg",
        initials: "BS"
      },
      {
        name: "Madhesh",
        role: "Event Coordinator",
        department: "Tech Battle",
        departments: ["TECH BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Tech Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788509294/Madesh.jpg",
        initials: "MD"
      },
      {
        name: "Tanusri",
        role: "Event Coordinator",
        department: "Tech Battle",
        departments: ["TECH BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Tech Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788446838/WhatsApp_Image_2026-09-03_at_20.15.11.jpg",
        initials: "TS"
      }
    ]
  },
  {
    id: "word-battle",
    number: "04",
    title: "WORD BATTLE",
    category: "Non-Technical",
    description: "Linguistic dexterity, tech jargon puzzles, prompt engineering, and vocabulary mastery.",
    iconName: "Sparkles",
    accentColor: "cyan",
    coordinators: [
      {
        name: "Lakshitha",
        role: "Event Coordinator",
        department: "Word Battle",
        departments: ["WORD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Word Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445328/WhatsApp_Image_2026-09-02_at_21.55.03.jpg",
        initials: "LK"
      },
      {
        name: "Vidhula Valancya",
        role: "Event Coordinator",
        department: "Word Battle",
        departments: ["WORD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Word Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445323/WhatsApp_Image_2026-09-02_at_22.30.43.jpg",
        initials: "VV"
      },
      {
        name: "Akram Javid",
        role: "Event Coordinator",
        department: "Word Battle",
        departments: ["WORD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Word Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788496633/akram_bhai.png.jpg",
        initials: "AJ"
      }
    ]
  },
  {
    id: "pictonary",
    number: "05",
    title: "PICTONARY",
    category: "Non-Technical",
    description: "Visual deduction, rapid tech sketch recognition, and abstract conceptual challenges.",
    iconName: "Palette",
    accentColor: "violet",
    coordinators: [
      {
        name: "Aafiya",
        role: "Event Coordinator",
        department: "Pictonary",
        departments: ["PICTONARY"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Pictonary event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_22.19.24.jpg",
        initials: "AF"
      },
      {
        name: "Farjana",
        role: "Event Coordinator",
        department: "Pictonary",
        departments: ["PICTONARY"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Pictonary event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_22.22.25.jpg",
        initials: "FJ"
      },
      {
        name: "Mohan Harish",
        role: "Event Coordinator",
        department: "Pictonary",
        departments: ["PICTONARY"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Pictonary event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788510253/WhatsApp_Image_2026-09-04_at_13.52.54.jpg",
        initials: "MH"
      }
    ]
  },
  {
    id: "free-fire",
    number: "06",
    title: "FREE FIRE – SQUAD BATTLE",
    category: "Gaming",
    description: "High-octane esports battle royale tournament with intense tactical squad combat.",
    iconName: "Gamepad2",
    accentColor: "blue",
    coordinators: [
      {
        name: "Mohamed Afsar",
        role: "Event Coordinator",
        department: "Free Fire – Squad Battle",
        departments: ["FREE FIRE – SQUAD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Free Fire – Squad Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788454998/WhatsApp_Image_2026-09-02_at_21.54.36.jpg",
        initials: "MA"
      },
      {
        name: "Balaji Meshak Jebastine",
        role: "Event Coordinator",
        department: "Free Fire – Squad Battle",
        departments: ["FREE FIRE – SQUAD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Free Fire – Squad Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_21.02.11.jpg",
        initials: "BM"
      },
      {
        name: "Nourash S B",
        role: "Event Coordinator",
        department: "Free Fire – Squad Battle",
        departments: ["FREE FIRE – SQUAD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Free Fire – Squad Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788527500/file_000000004d10821193685597bc040153.png",
        initials: "NS"
      },
      {
        name: "Divakar",
        role: "Event Coordinator",
        department: "Free Fire – Squad Battle",
        departments: ["FREE FIRE – SQUAD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Free Fire – Squad Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788527780/WhatsApp_Image_2026-09-04_at_18.41.36.jpg",
        initials: "DK"
      },
      {
        name: "Sybudheen K",
        role: "Event Coordinator",
        department: "Free Fire – Squad Battle",
        departments: ["FREE FIRE – SQUAD BATTLE"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Free Fire – Squad Battle event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788533426/WhatsApp_Image_2026-09-04_at_20.05.00.jpg",
        initials: "SK"
      }
    ]
  },
  {
    id: "reel-creation",
    number: "07",
    title: "VIRAL MINDS",
    category: "Creative",
    description: "Cinematography, viral storytelling, dynamic video editing, and fest highlights.",
    iconName: "Film",
    accentColor: "cyan",
    coordinators: [
      {
        name: "Sumanraj",
        role: "Event Coordinator",
        department: "VIRAL MINDS",
        departments: ["VIRAL MINDS", "CREATIVE MEDIA"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the VIRAL MINDS event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_23.01.18.jpg",
        initials: "SR"
      },
      {
        name: "Sanjay",
        role: "Event Coordinator",
        department: "VIRAL MINDS",
        departments: ["VIRAL MINDS"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the VIRAL MINDS event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-03_at_09.02.40.jpg",
        initials: "SJ"
      },
      {
        name: "Younis",
        role: "Event Coordinator",
        department: "VIRAL MINDS",
        departments: ["VIRAL MINDS"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the VIRAL MINDS event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788509966/WhatsApp_Image_2026-09-04_at_13.48.04.jpg",
        initials: "YN"
      }
    ]
  },
  {
    id: "media-department",
    number: "08",
    title: "MEDIA DEPARTMENT",
    category: "Operations",
    description: "Event photography, videography, media coverage and social documentation.",
    iconName: "Video",
    accentColor: "violet",
    coordinators: [
      {
        name: "Suman",
        role: "Event Coordinator",
        department: "Media Department",
        departments: ["MEDIA DEPARTMENT", "PHOTOGRAPHY"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Media Department event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_23.01.18.jpg",
        initials: "SM"
      },
      {
        name: "Sasi",
        role: "Event Coordinator",
        department: "Media Department",
        departments: ["MEDIA DEPARTMENT", "LIVE BROADCAST"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Media Department event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445310/WhatsApp_Image_2026-09-02_at_21.54.37.jpg",
        initials: "SS"
      },
      {
        name: "Yoganandhan",
        role: "Event Coordinator",
        department: "Media Department",
        departments: ["MEDIA DEPARTMENT", "DIGITAL ASSETS"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for supporting the Media Department event and participant experience.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445325/WhatsApp_Image_2026-09-02_at_22.43.00.jpg",
        initials: "YN"
      }
    ]
  },
  {
    id: "registration-team",
    number: "09",
    title: "REGISTRATION TEAM",
    category: "Operations",
    description: "Participant onboarding, registration desk operations, delegate badge issuance, and entry access verification.",
    iconName: "UserCheck",
    accentColor: "emerald",
    coordinators: [
      {
        name: "Avanthi kumar",
        role: "Event Coordinator",
        department: "Registration Team",
        departments: ["REGISTRATION TEAM", "DELEGATE VERIFICATION"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for delegate verification, on-desk registration, and participant access control.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788534700/IMG_5648.png",
        initials: "AK"
      },
      {
        name: "Arun Karthikeyan",
        role: "Event Coordinator",
        department: "Registration Team",
        departments: ["REGISTRATION TEAM", "ENTRY ACCREDITATION"],
        badge: "EVENT COORDINATOR",
        bio: "Coordinator responsible for registration management, credential distribution, and attendee guidance.",
        image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788534689/WhatsApp_Image_2026-09-04_at_20.38.39.jpg",
        initials: "AK"
      }
    ]
  }
];

export const mediaDepartment = eventSections.find(s => s.id === "media-department")?.coordinators || [];
export const registrationTeam = eventSections.find(s => s.id === "registration-team")?.coordinators || [];
export const eventCoordinators = eventSections.flatMap(s => s.coordinators);
export const teamMembers: TeamMember[] = [
  ...chiefDirectors,
  ...eventCoordinators
];
