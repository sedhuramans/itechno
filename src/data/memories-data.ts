export interface MemoryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count?: number;
  icon?: string;
}

export interface MemoryItem {
  id: number;
  title: string;
  caption: string;
  event: string;
  category: string[];
  tags: string[];
  src: string;
  thumbnail: string;
  rawSrc?: string;
  width: number;
  height: number;
  aspectRatio?: number;
  featured?: boolean;
  date: string;
  location: string;
}

export interface VideoMemory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  poster: string;
  videoSrc: string;
  driveId?: string;
  description: string;
  featured?: boolean;
}

export interface WinnerRecord {
  id: string;
  eventId: string;
  eventTitle: string;
  category: string;
  firstPlace: {
    teamName?: string;
    members: string[];
    college: string;
    prize?: string;
    photo?: string;
  };
  secondPlace?: {
    teamName?: string;
    members: string[];
    college: string;
    prize?: string;
    photo?: string;
  };
  prizePool: string;
  trophyHighlight: string;
  notes?: string;
}

export interface TimelineStage {
  id: string;
  time: string;
  title: string;
  stageName: string;
  description: string;
  tag: string;
  image: string;
  highlights: string[];
}

export interface MemorySubmission {
  id: string;
  name: string;
  college: string;
  role: string;
  eventAttended: string;
  quote: string;
  image?: string | null;
  createdAt: string;
  status: "approved" | "pending" | "rejected";
}

export const MEMORY_CATEGORIES: MemoryCategory[] = [
  { id: "all", name: "All Memories", slug: "all", description: "The complete official photographic archive of ITECHNO 2026." },
  { id: "inauguration", name: "Inauguration", slug: "inauguration", description: "Grand lamp lighting, dignitary welcome, and opening keynotes." },
  { id: "hackverse", name: "Hackverse", slug: "hackverse", description: "24-hour web development innovation and rapid system architecture challenge." },
  { id: "codeathon", name: "Codeathon", slug: "codeathon", description: "Syntax debugging, logical problem solving, and error correction sprints." },
  { id: "tech-battle", name: "Tech Battle", slug: "tech-battle", description: "High-voltage technology quiz covering AI, cybersecurity, and future tech." },
  { id: "word-battle", name: "Word Battle", slug: "word-battle", description: "Technical extempore speaking and rapid concept explanation." },
  { id: "pictionary", name: "Pictionary", slug: "pictionary", description: "Visual puzzle solving by connecting technical picture clues." },
  { id: "viral-minds", name: "Viral Minds", slug: "viral-minds", description: "Cinematic short-form reels and creative storytelling contest." },
  { id: "free-fire", name: "Free Fire — Squad Battle", slug: "free-fire", description: "Tactical squad esports combat and tournament championships." },
  { id: "participants-teams", name: "Participants and Teams", slug: "participants-teams", description: "Over 500+ participants from premier institutions across Tamil Nadu." },
  { id: "organizing-team", name: "Organizing Team", slug: "organizing-team", description: "The core architects and visionaries behind ITECHNO 2026." },
  { id: "coordinators-volunteers", name: "Coordinators and Volunteers", slug: "coordinators-volunteers", description: "Dedicated student coordinators making every arena seamless." },
  { id: "prize-distribution", name: "Prize Distribution", slug: "prize-distribution", description: "Grand trophy handovers, cash award felicitations, and certificates." },
  { id: "winners", name: "Winners", slug: "winners", description: "Celebrating the champions who proved their technical and creative brilliance." },
  { id: "behind-the-scenes", name: "Behind the Scenes", slug: "behind-the-scenes", description: "Backstage coordination, audio-visual desks, and arena preparations." },
  { id: "fun-moments", name: "Fun Moments", slug: "fun-moments", description: "Unscripted laughter, campus camaraderie, and student energy." },
  { id: "closing-ceremony", name: "Closing Ceremony", slug: "closing-ceremony", description: "Heartfelt valedictory, vote of thanks, and unforgettable farewells." }
];

export const OFFICIAL_MEMORIES: MemoryItem[] = [
  // INAUGURATION & AUDITORIUM (Real DSLR captures)
  {
    id: 1,
    title: "The Grand Inauguration of ITECHNO 2026",
    caption: "Dignitaries, faculty directors, and students assemble in the main auditorium for the auspicious lamp lighting ceremony.",
    event: "Inauguration",
    category: ["all", "inauguration", "closing-ceremony"],
    tags: ["Inauguration", "Auditorium", "Lamp Lighting", "Takshashila"],
    src: "/memories/optimized/IMG_9287.webp",
    thumbnail: "/memories/thumbnails/IMG_9287_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9287.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 2,
    title: "Auspicious Lamp Lighting & Dignitary Address",
    caption: "Honoring academic excellence and festival inception with traditional lamp lighting.",
    event: "Inauguration",
    category: ["all", "inauguration", "organizing-team"],
    tags: ["Inauguration", "Tradition", "Dignitaries", "Leadership"],
    src: "/memories/optimized/IMG_9288.webp",
    thumbnail: "/memories/thumbnails/IMG_9288_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9288.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 3,
    title: "Inaugural Keynote Address",
    caption: "Inspiring words motivating over 500 inter-college delegates to push the boundaries of technology and teamwork.",
    event: "Inauguration",
    category: ["all", "inauguration"],
    tags: ["Keynote", "Stage", "Inspiration"],
    src: "/memories/optimized/IMG_9289.webp",
    thumbnail: "/memories/thumbnails/IMG_9289_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9289.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 4,
    title: "Auditorium Packed with Aspiring Technologists",
    caption: "Delegations from institutions across Tamil Nadu filling the festival hall as events are declared open.",
    event: "Inauguration",
    category: ["all", "inauguration", "participants-teams"],
    tags: ["Audience", "Delegates", "Takshashila", "Opening"],
    src: "/memories/optimized/IMG_9290.webp",
    thumbnail: "/memories/thumbnails/IMG_9290_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9290.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 5,
    title: "Dignitary Felicitations & Symposium Launch",
    caption: "Chief guests and academic leadership officially commencing the competitions.",
    event: "Inauguration",
    category: ["all", "inauguration", "organizing-team"],
    tags: ["Felicitation", "Dignitaries", "Opening"],
    src: "/memories/optimized/IMG_9291.webp",
    thumbnail: "/memories/thumbnails/IMG_9291_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9291.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 6,
    title: "Chief Event Directors on Stage",
    caption: "Executive directors addressing the symposium audience and introducing the event guidelines.",
    event: "Organizing Team",
    category: ["all", "organizing-team", "coordinators-volunteers"],
    tags: ["Executive Board", "Stage", "Coordination"],
    src: "/memories/optimized/IMG_9297.webp",
    thumbnail: "/memories/thumbnails/IMG_9297_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9297.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 7,
    title: "Keynote Insights & Festival Briefing",
    caption: "Explaining the rules and expectations across Technical and Gaming arena showdowns.",
    event: "Inauguration",
    category: ["all", "inauguration", "behind-the-scenes"],
    tags: ["Briefing", "Rules", "Technical Festival"],
    src: "/memories/optimized/IMG_9298.webp",
    thumbnail: "/memories/thumbnails/IMG_9298_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9298.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 8,
    title: "Auditorium Energy & Enthusiasm",
    caption: "Over 500 students immersed in the festival kickoff.",
    event: "Participants & Teams",
    category: ["all", "participants-teams", "fun-moments"],
    tags: ["Vibes", "Students", "Campus Life"],
    src: "/memories/optimized/IMG_9299.webp",
    thumbnail: "/memories/thumbnails/IMG_9299_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9299.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 9,
    title: "Felicitation of Distinguished Guests",
    caption: "Presenting university mementos to faculty advisors and festival patrons.",
    event: "Inauguration",
    category: ["all", "inauguration", "organizing-team"],
    tags: ["Mementos", "Guests", "Honor"],
    src: "/memories/optimized/IMG_9300.webp",
    thumbnail: "/memories/thumbnails/IMG_9300_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9300.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 10,
    title: "Student Delegates Preparing for Competitions",
    caption: "Teams tuning up laptops and reviewing challenge guidelines before heading to battle labs.",
    event: "Participants & Teams",
    category: ["all", "participants-teams", "hackverse"],
    tags: ["Preparation", "Teams", "Coding"],
    src: "/memories/optimized/IMG_9302.webp",
    thumbnail: "/memories/thumbnails/IMG_9302_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9302.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Campus"
  },
  {
    id: 11,
    title: "Organizing Committee On Duty",
    caption: "Behind every smooth symposium is an attentive team orchestrating schedules and venues.",
    event: "Coordinators & Volunteers",
    category: ["all", "coordinators-volunteers", "behind-the-scenes"],
    tags: ["Desk", "Registration", "Coordination"],
    src: "/memories/optimized/IMG_9304.webp",
    thumbnail: "/memories/thumbnails/IMG_9304_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9304.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Registration & Helpdesk Arena"
  },
  {
    id: 12,
    title: "Inaugural Momento Presentation",
    caption: "Special honor presentation acknowledging our collaborative partner FACE Prep.",
    event: "Inauguration",
    category: ["all", "inauguration", "organizing-team"],
    tags: ["FACE Prep", "Collaboration", "Takshashila"],
    src: "/memories/optimized/IMG_9307.webp",
    thumbnail: "/memories/thumbnails/IMG_9307_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9307.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 13,
    title: "Chief Guests Address to the Assembly",
    caption: "Inspiring the next generation of engineers, designers, and innovators.",
    event: "Inauguration",
    category: ["all", "inauguration"],
    tags: ["Speech", "Auditorium", "Inspiration"],
    src: "/memories/optimized/IMG_9308.webp",
    thumbnail: "/memories/thumbnails/IMG_9308_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9308.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 14,
    title: "The Stage of Opportunities",
    caption: "A panoramic perspective of the main symposium stage during morning proceedings.",
    event: "Inauguration",
    category: ["all", "inauguration", "behind-the-scenes"],
    tags: ["Stage", "Auditorium", "Panoramic"],
    src: "/memories/optimized/IMG_9312.webp",
    thumbnail: "/memories/thumbnails/IMG_9312_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9312.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 15,
    title: "Dignitaries and Deans in Conversation",
    caption: "University deans and department heads witnessing student participation.",
    event: "Inauguration",
    category: ["all", "inauguration", "organizing-team"],
    tags: ["Faculty", "Leadership", "Takshashila"],
    src: "/memories/optimized/IMG_9313.webp",
    thumbnail: "/memories/thumbnails/IMG_9313_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9313.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 16,
    title: "Event Guidelines Unveiling",
    caption: "Explaining event rules and judging criteria before commencement of parallel tracks.",
    event: "Inauguration",
    category: ["all", "inauguration", "hackverse"],
    tags: ["Guidelines", "Competitions", "Rules"],
    src: "/memories/optimized/IMG_9314.webp",
    thumbnail: "/memories/thumbnails/IMG_9314_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9314.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 17,
    title: "Auditorium Side Angle Perspective",
    caption: "Eager attendees following every moment of the opening session.",
    event: "Participants & Teams",
    category: ["all", "participants-teams"],
    tags: ["Students", "Hall", "Takshashila"],
    src: "/memories/optimized/IMG_9316.webp",
    thumbnail: "/memories/thumbnails/IMG_9316_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9316.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 18,
    title: "Campus Atmosphere & Student Gathering",
    caption: "Teams crossing between main auditorium, computer labs, and puzzle halls.",
    event: "Participants & Teams",
    category: ["all", "participants-teams", "fun-moments"],
    tags: ["Campus", "Students", "Energy"],
    src: "/memories/optimized/IMG_9319.webp",
    thumbnail: "/memories/thumbnails/IMG_9319_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9319.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Quadrangle"
  },
  {
    id: 19,
    title: "Coordinator Operations & Badge Management",
    caption: "Volunteer coordinators distributing festival badges, credentials, and event schedules.",
    event: "Coordinators & Volunteers",
    category: ["all", "coordinators-volunteers", "behind-the-scenes"],
    tags: ["Operations", "Credentials", "Crew"],
    src: "/memories/optimized/IMG_9321.webp",
    thumbnail: "/memories/thumbnails/IMG_9321_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9321.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Desk"
  },
  {
    id: 20,
    title: "Technical Arena Coordination Desk",
    caption: "Verifying participant rosters and team allocations for Codeathon and Hackverse.",
    event: "Coordinators & Volunteers",
    category: ["all", "coordinators-volunteers", "codeathon"],
    tags: ["Desk", "Volunteers", "Roster"],
    src: "/memories/optimized/IMG_9322.webp",
    thumbnail: "/memories/thumbnails/IMG_9322_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9322.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Computer Center Foyer"
  },
  {
    id: 21,
    title: "Student Coordinators in Action",
    caption: "Guiding external college participants to their assigned competition rooms.",
    event: "Coordinators & Volunteers",
    category: ["all", "coordinators-volunteers", "participants-teams"],
    tags: ["Guidance", "Hospitality", "Volunteers"],
    src: "/memories/optimized/IMG_9323.webp",
    thumbnail: "/memories/thumbnails/IMG_9323_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9323.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University"
  },
  {
    id: 22,
    title: "Campus Delegations Gathering",
    caption: "Excited groups posing between competition rounds.",
    event: "Participants & Teams",
    category: ["all", "participants-teams", "fun-moments"],
    tags: ["Campus Life", "Camaraderie", "Memories"],
    src: "/memories/optimized/IMG_9324.webp",
    thumbnail: "/memories/thumbnails/IMG_9324_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9324.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grounds"
  },
  {
    id: 23,
    title: "Briefing Session for Competitive Gaming",
    caption: "Free Fire squad leaders listening to tournament rules and room allocations.",
    event: "Free Fire — Squad Battle",
    category: ["all", "free-fire", "participants-teams"],
    tags: ["Free Fire", "Esports", "Briefing"],
    src: "/memories/optimized/IMG_9327.webp",
    thumbnail: "/memories/thumbnails/IMG_9327_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9327.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Gaming Arena Wing"
  },
  {
    id: 24,
    title: "Hackverse Arena & Web Dev Sprint",
    caption: "Teams intensely coding full-stack web applications within the 2–3 hour time limit.",
    event: "Hackverse",
    category: ["all", "hackverse", "participants-teams"],
    tags: ["Hackverse", "Web Dev", "Coding", "Sprint"],
    src: "/memories/optimized/IMG_9328.webp",
    thumbnail: "/memories/thumbnails/IMG_9328_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9328.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Computer Systems Lab 1"
  },
  {
    id: 25,
    title: "Codeathon Debugging Battleground",
    caption: "Duo teams tracing runtime anomalies and syntax errors against the clock.",
    event: "Codeathon",
    category: ["all", "codeathon", "participants-teams"],
    tags: ["Codeathon", "Debugging", "Duo", "Logic"],
    src: "/memories/optimized/IMG_9329.webp",
    thumbnail: "/memories/thumbnails/IMG_9329_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9329.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Advanced Computing Lab"
  },
  {
    id: 26,
    title: "Focused Problem Solving",
    caption: "Participants collaborating deeply during the technical challenge.",
    event: "Codeathon",
    category: ["all", "codeathon", "hackverse"],
    tags: ["Coding", "Focus", "Teamwork"],
    src: "/memories/optimized/IMG_9330.webp",
    thumbnail: "/memories/thumbnails/IMG_9330_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9330.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Computer Center"
  },
  {
    id: 27,
    title: "Tech Battle Quiz Showdown",
    caption: "Rapid buzzers, hands raised, and intense knowledge duels on AI and Cyber Systems.",
    event: "Tech Battle",
    category: ["all", "tech-battle", "participants-teams"],
    tags: ["Tech Battle", "Quiz", "AI", "Knowledge"],
    src: "/memories/optimized/IMG_9331.webp",
    thumbnail: "/memories/thumbnails/IMG_9331_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9331.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Seminar Hall B"
  },
  {
    id: 28,
    title: "Word Battle Technical Speaking",
    caption: "Individual speakers articulating complex computing concepts in under 3 minutes.",
    event: "Word Battle",
    category: ["all", "word-battle", "participants-teams"],
    tags: ["Word Battle", "Speaking", "Communication"],
    src: "/memories/optimized/IMG_9332.webp",
    thumbnail: "/memories/thumbnails/IMG_9332_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9332.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Conference Room A"
  },
  {
    id: 29,
    title: "Pictionary Visual Puzzles Arena",
    caption: "Connecting four abstract technology pictures to deduce the target computing paradigm.",
    event: "Pictionary",
    category: ["all", "pictionary", "participants-teams"],
    tags: ["Pictionary", "Visual Puzzle", "Creativity"],
    src: "/memories/optimized/IMG_9334.webp",
    thumbnail: "/memories/thumbnails/IMG_9334_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9334.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Visual Computing Hall"
  },
  {
    id: 30,
    title: "Viral Minds Reel Creators on Campus",
    caption: "Filming dynamic vertical reels showcasing the festival rhythm, energy, and stories.",
    event: "Viral Minds",
    category: ["all", "viral-minds", "fun-moments"],
    tags: ["Viral Minds", "Reels", "Creativity", "Cinematography"],
    src: "/memories/optimized/IMG_9335.webp",
    thumbnail: "/memories/thumbnails/IMG_9335_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9335.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila Campus Promenade"
  },
  {
    id: 31,
    title: "Esports Squad Tactical Combat",
    caption: "Free Fire squad battle match in progress with intense strategic communication.",
    event: "Free Fire — Squad Battle",
    category: ["all", "free-fire", "participants-teams"],
    tags: ["Gaming", "Free Fire", "Tournament", "Squads"],
    src: "/memories/optimized/IMG_9336.webp",
    thumbnail: "/memories/thumbnails/IMG_9336_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9336.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila Esports Arena"
  },
  {
    id: 32,
    title: "Behind the Scenes AV & Media Command",
    caption: "The production and media crew operating video cameras, soundboard, and live scoring.",
    event: "Behind the Scenes",
    category: ["all", "behind-the-scenes", "organizing-team"],
    tags: ["AV Desk", "Production", "Media", "Backstage"],
    src: "/memories/optimized/IMG_9337.webp",
    thumbnail: "/memories/thumbnails/IMG_9337_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9337.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Main Auditorium Control Console"
  },
  {
    id: 33,
    title: "Jury Evaluation and Project Inspection",
    caption: "Panel judges evaluating website UI/UX, code semantics, and responsiveness.",
    event: "Hackverse",
    category: ["all", "hackverse", "winners"],
    tags: ["Jury", "Evaluation", "Web Development"],
    src: "/memories/optimized/IMG_9338.webp",
    thumbnail: "/memories/thumbnails/IMG_9338_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9338.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Hackverse Presentation Lab"
  },
  {
    id: 34,
    title: "High-Energy Participant Camaraderie",
    caption: "Students celebrating completed submissions and making lasting cross-college friendships.",
    event: "Fun Moments",
    category: ["all", "fun-moments", "participants-teams"],
    tags: ["Camaraderie", "Smiles", "Friendship"],
    src: "/memories/optimized/IMG_9339.webp",
    thumbnail: "/memories/thumbnails/IMG_9339_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9339.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "University Courtyard"
  },
  {
    id: 35,
    title: "Auditorium Valedictory Assembly",
    caption: "All attendees reassembling in the grand auditorium for the prize distribution and valedictory.",
    event: "Prize Distribution",
    category: ["all", "prize-distribution", "closing-ceremony"],
    tags: ["Valedictory", "Auditorium", "Prize Distribution"],
    src: "/memories/optimized/IMG_9340.webp",
    thumbnail: "/memories/thumbnails/IMG_9340_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9340.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 36,
    title: "Trophy Presentation & Honors",
    caption: "Official championship trophies and merit certificates handed over to winning squads.",
    event: "Winners",
    category: ["all", "winners", "prize-distribution"],
    tags: ["Trophy", "Winners", "Honors", "Champions"],
    src: "/memories/optimized/IMG_9341.webp",
    thumbnail: "/memories/thumbnails/IMG_9341_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9341.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 37,
    title: "Champions on the Podium",
    caption: "Winners hoisting their awards in front of cheering peers and mentors.",
    event: "Winners",
    category: ["all", "winners", "prize-distribution"],
    tags: ["Podium", "Celebration", "Victory"],
    src: "/memories/optimized/IMG_9342.webp",
    thumbnail: "/memories/thumbnails/IMG_9342_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9342.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Main Auditorium Stage"
  },
  {
    id: 38,
    title: "Organizing Team Grand Stage Assembly",
    caption: "The entire student crew, event coordinators, and executive directors gathering for the final salute.",
    event: "Organizing Team",
    category: ["all", "organizing-team", "coordinators-volunteers", "closing-ceremony"],
    tags: ["Crew", "Team", "Farewell", "Grand Stage"],
    src: "/memories/optimized/IMG_9343.webp",
    thumbnail: "/memories/thumbnails/IMG_9343_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9343.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 39,
    title: "Vote of Thanks & Heartfelt Gratitude",
    caption: "Concluding ITECHNO 2026 with sincere gratitude to our students, faculty, and college participants.",
    event: "Closing Ceremony",
    category: ["all", "closing-ceremony", "organizing-team"],
    tags: ["Vote of Thanks", "Gratitude", "Conclusion"],
    src: "/memories/optimized/IMG_9344.webp",
    thumbnail: "/memories/thumbnails/IMG_9344_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9344.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila University Grand Auditorium"
  },
  {
    id: 40,
    title: "Volunteers and Coordinators Celebration",
    caption: "Unfiltered joy and high-fives as the symposium concludes with flying colors.",
    event: "Fun Moments",
    category: ["all", "fun-moments", "coordinators-volunteers"],
    tags: ["Celebration", "Joy", "Volunteers"],
    src: "/memories/optimized/IMG_9349.webp",
    thumbnail: "/memories/thumbnails/IMG_9349_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9349.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Campus Foyer"
  },
  {
    id: 41,
    title: "Farewell Moments & Memories for Life",
    caption: "Participants taking group selfies and exchanging contacts before bidding goodbye.",
    event: "Closing Ceremony",
    category: ["all", "closing-ceremony", "fun-moments", "participants-teams"],
    tags: ["Farewell", "Memories", "Friendship"],
    src: "/memories/optimized/IMG_9350.webp",
    thumbnail: "/memories/thumbnails/IMG_9350_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9350.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University Main Entrance"
  },
  {
    id: 42,
    title: "The Spirit of Takshashila Tech Fest",
    caption: "A legacy of innovation, competitive excellence, and unforgettable memories.",
    event: "Closing Ceremony",
    category: ["all", "closing-ceremony", "organizing-team"],
    tags: ["Legacy", "Takshashila", "ITECHNO"],
    src: "/memories/optimized/IMG_9351.webp",
    thumbnail: "/memories/thumbnails/IMG_9351_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9351.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University"
  },
  {
    id: 43,
    title: "Post-Event Coordinator Reflections",
    caption: "The technical lead team reviewing feedback and submission tallies after the festival.",
    event: "Behind the Scenes",
    category: ["all", "behind-the-scenes", "organizing-team"],
    tags: ["Reflection", "Crew", "Takshashila"],
    src: "/memories/optimized/IMG_9352.webp",
    thumbnail: "/memories/thumbnails/IMG_9352_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9352.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Operations Room"
  },
  {
    id: 44,
    title: "Stage Backdrop & Tech Aesthetics",
    caption: "The neon-lit i-TECHNO 2026 stage designed for high visual impact and prestige.",
    event: "Behind the Scenes",
    category: ["all", "behind-the-scenes", "inauguration"],
    tags: ["Stage Design", "Lighting", "Aesthetics"],
    src: "/memories/optimized/IMG_9353.webp",
    thumbnail: "/memories/thumbnails/IMG_9353_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9353.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: false,
    date: "October 9, 2026",
    location: "Takshashila Grand Auditorium"
  },
  {
    id: 45,
    title: "Until Next Year: ITECHNO '26 Concludes",
    caption: "One event. A thousand memories. See you at the next edition!",
    event: "Closing Ceremony",
    category: ["all", "closing-ceremony", "fun-moments"],
    tags: ["Conclusion", "Next Year", "Memories"],
    src: "/memories/optimized/IMG_9357.webp",
    thumbnail: "/memories/thumbnails/IMG_9357_thumb.webp",
    rawSrc: "/memories_raw/Photos/DSLR IMAGES/Official Event images/IMG_9357.JPG",
    width: 5184,
    height: 3456,
    aspectRatio: 1.5,
    featured: true,
    date: "October 9, 2026",
    location: "Takshashila University"
  }
];

export const FEATURED_MOMENTS = OFFICIAL_MEMORIES.filter((m) => m.featured);

export const OFFICIAL_VIDEOS: VideoMemory[] = [
  {
    id: "aftermovie-main",
    title: "Official ITECHNO 2026 Festival Aftermovie",
    subtitle: "The complete cinematic documentary of Takshashila's flagship technical fest",
    category: "Official Aftermovie",
    duration: "3:45",
    poster: "/memories/optimized/IMG_9287.webp",
    videoSrc: "https://drive.google.com/file/d/1XxCbiIto_MdCM5PeGN6buhbIVPuC3wkh/preview",
    driveId: "1XxCbiIto_MdCM5PeGN6buhbIVPuC3wkh",
    description: "Experience the pulse, the coding sprints, the cheering auditoriums, and the championship euphoria that defined ITECHNO 2026.",
    featured: true
  },
  {
    id: "grand-inauguration",
    title: "Opening Ceremony & Lamp Lighting Keynotes",
    subtitle: "Dignitary welcome address and festival inauguration in the grand auditorium",
    category: "Inauguration",
    duration: "2:18",
    poster: "/memories/optimized/IMG_9288.webp",
    videoSrc: "https://drive.google.com/file/d/19dOGsXY-P5pUlUm8FgrJ1rLZOgReiODQ/preview",
    driveId: "19dOGsXY-P5pUlUm8FgrJ1rLZOgReiODQ",
    description: "Honoring traditional auspicious beginnings and welcoming delegates from across the region to Takshashila University.",
    featured: true
  },
  {
    id: "hackverse-sprint",
    title: "Hackverse & Codeathon Live Battles",
    subtitle: "Intense 2-3 hour rapid web development and debugging challenge highlights",
    category: "Competitions",
    duration: "1:52",
    poster: "/memories/optimized/IMG_9328.webp",
    videoSrc: "https://drive.google.com/file/d/1zHl5HvkBqX4W0zZTXT43gJiBD5WnoWxp/preview",
    driveId: "1zHl5HvkBqX4W0zZTXT43gJiBD5WnoWxp",
    description: "Watch participants race the clock in computer centers, crushing syntax bugs and building full-stack applications from scratch.",
    featured: true
  },
  {
    id: "tech-battle-highlights",
    title: "Tech Battle & Word Battle Stage Showdowns",
    subtitle: "Fast-paced tech quiz rounds and technical speaking challenge presentations",
    category: "Technical Stage",
    duration: "2:05",
    poster: "/memories/optimized/IMG_9331.webp",
    videoSrc: "https://drive.google.com/file/d/1Y-K227daI6slBffBPEGW3v_zbloSsQ2h/preview",
    driveId: "1Y-K227daI6slBffBPEGW3v_zbloSsQ2h",
    description: "Rapid buzzer rounds on artificial intelligence, cybersecurity, and emerging tech trends in front of an enthusiastic audience.",
    featured: false
  },
  {
    id: "esports-frenzy",
    title: "Free Fire — Championship Squad Battlegrounds",
    subtitle: "Tactical squad firefights, clutch plays, and tournament combat",
    category: "Gaming Arena",
    duration: "2:30",
    poster: "/memories/optimized/IMG_9336.webp",
    videoSrc: "https://drive.google.com/file/d/1dq8Da2Xzv8I8Ar81WTpLvFciwp6EGJL3/preview",
    driveId: "1dq8Da2Xzv8I8Ar81WTpLvFciwp6EGJL3",
    description: "High-adrenaline mobile esports tournament with strategic battle-royale gameplay and roaring spectator cheer.",
    featured: true
  },
  {
    id: "closing-awards",
    title: "Grand Valedictory & Trophy Celebrations",
    subtitle: "Cash award distributions, certificate honors, and the official farewell",
    category: "Closing Highlights",
    duration: "3:10",
    poster: "/memories/optimized/IMG_9341.webp",
    videoSrc: "https://drive.google.com/file/d/137bx9gaCp7Ek8mjTi9jmj2_sMbDRmnWN/preview",
    driveId: "137bx9gaCp7Ek8mjTi9jmj2_sMbDRmnWN",
    description: "The unforgettable conclusion as trophies are hoisted and coordinators bid farewell to ITECHNO 2026.",
    featured: true
  }
];

export const HALL_OF_FAME_DATA: WinnerRecord[] = [
  {
    id: "hackverse-champs",
    eventId: "hackverse",
    eventTitle: "HACKVERSE",
    category: "Web Development Challenge",
    firstPlace: {
      teamName: "CodeCraft Vanguard",
      members: ["Verified First-Place Finalist"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9338.webp"
    },
    secondPlace: {
      teamName: "DevPulse Duo",
      members: ["Verified Second-Place Finalist"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9328.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Gold & Silver Web Engineering Trophies",
    notes: "Participants developed functional, responsive websites using HTML, CSS and JavaScript within 2–3 hours. Judged on UI/UX, JS logic, and creativity."
  },
  {
    id: "codeathon-champs",
    eventId: "codeathon",
    eventTitle: "CODEATHON",
    category: "Debugging Challenge",
    firstPlace: {
      teamName: "Bug Hunters Duo",
      members: ["Verified First-Place Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9329.webp"
    },
    secondPlace: {
      teamName: "Syntax Masters",
      members: ["Verified Second-Place Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9330.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Gold Codeathon Debugging Shield",
    notes: "Identified and fixed syntax errors, logical defects, and runtime anomalies under tight time limits."
  },
  {
    id: "tech-battle-champs",
    eventId: "tech-battle",
    eventTitle: "TECH BATTLE",
    category: "Technology Quiz",
    firstPlace: {
      teamName: "Neural Nexus",
      members: ["Verified First-Place Quiz Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9331.webp"
    },
    secondPlace: {
      teamName: "Quantum Minds",
      members: ["Verified Second-Place Quiz Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9340.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Grand Tech Battle Champions Cup",
    notes: "Mastered rapid buzzer rounds on AI, Cybersecurity, Cloud, and Emerging Tech Trends."
  },
  {
    id: "word-battle-champs",
    eventId: "word-battle",
    eventTitle: "WORD BATTLE",
    category: "Technical Speaking Challenge",
    firstPlace: {
      teamName: "Tech Orator Supreme",
      members: ["Verified First-Place Speaker"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9332.webp"
    },
    secondPlace: {
      teamName: "Insight Eloquence",
      members: ["Verified Second-Place Speaker"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9341.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Elocution Laureate Trophy",
    notes: "Articulated complex technical words with real-world applications within a 3-minute strict limit."
  },
  {
    id: "pictionary-champs",
    eventId: "pictionary",
    eventTitle: "PICTONARY",
    category: "Visual Technology Puzzle",
    firstPlace: {
      teamName: "Visionary Minds",
      members: ["Verified First-Place Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9334.webp"
    },
    secondPlace: {
      teamName: "Pattern Decoders",
      members: ["Verified Second-Place Duo"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9339.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Visual Cognition Crystal Award",
    notes: "Decoded multi-image clues connecting cloud, server, and storage paradigms with unmatched speed."
  },
  {
    id: "free-fire-champs",
    eventId: "free-fire",
    eventTitle: "FREE FIRE – SQUAD BATTLE",
    category: "Gaming Competition",
    firstPlace: {
      teamName: "Apex Predators Squad",
      members: ["Verified Championship Squad (4 Members)"],
      college: "Takshashila Inter-College Arena",
      prize: "Championship Esports Trophy & Rewards",
      photo: "/memories/optimized/IMG_9336.webp"
    },
    secondPlace: {
      teamName: "Shadow Strike Squad",
      members: ["Verified Runner-Up Squad (4 Members)"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Esports Trophies & Rewards",
      photo: "/memories/optimized/IMG_9342.webp"
    },
    prizePool: "Gaming Trophies & Championship Rewards",
    trophyHighlight: "Official Esports Championship Cup",
    notes: "Showcased superior battle-royale positioning, survival strategy, and squad synergy across tournament brackets."
  },
  {
    id: "viral-minds-champs",
    eventId: "reel-creation",
    eventTitle: "VIRAL MINDS",
    category: "Inter-College Reel Contest",
    firstPlace: {
      teamName: "Cinematic Visionary",
      members: ["Verified First-Place Creator"],
      college: "Takshashila Inter-College Arena",
      prize: "Cash Prize & Merit Certificate",
      photo: "/memories/optimized/IMG_9335.webp"
    },
    secondPlace: {
      teamName: "Motion Storyteller",
      members: ["Verified Second-Place Creator"],
      college: "Takshashila Inter-College Arena",
      prize: "Runner-Up Cash Award & Certificate",
      photo: "/memories/optimized/IMG_9349.webp"
    },
    prizePool: "Cash Prizes & Certificates",
    trophyHighlight: "Creative Media Excellence Shield",
    notes: "Created 30–60 second vertical storytelling reels evaluated on creativity, editing precision, and visual impact."
  }
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: "stage-1",
    time: "09:30 AM",
    stageName: "STAGE 01",
    title: "Welcome, Arrival & Credentials Verification",
    description: "Delegations from premier engineering colleges across Tamil Nadu arrived on the vibrant Takshashila campus. Participant kits, schedules, and festival credentials were distributed.",
    tag: "CAMPUS WELCOME",
    image: "/memories/optimized/IMG_9304.webp",
    highlights: ["Over 500+ student arrivals", "Hospitality & welcome desk", "Kit & badge distribution"]
  },
  {
    id: "stage-2",
    time: "09:40 AM",
    stageName: "STAGE 02",
    title: "Auspicious Lamp Lighting & Inauguration",
    description: "The grand symposium commenced with traditional lamp lighting by respected deans, heads of department, and distinguished guests in the fully packed central auditorium.",
    tag: "INAUGURAL CEREMONY",
    image: "/memories/optimized/IMG_9287.webp",
    highlights: ["Traditional lamp lighting", "Dignitary welcome address", "Auditorium keynote speech"]
  },
  {
    id: "stage-3",
    time: "09:50 AM",
    stageName: "STAGE 03",
    title: "Organizing Committee & Rules Announcement",
    description: "Chief Event Directors SedhuRaman and Gokul introduced the event structure, arena coordinators, fair-play guidelines, and judging rubrics.",
    tag: "SYMPOSIUM BRIEFING",
    image: "/memories/optimized/IMG_9297.webp",
    highlights: ["Chief Event Directors briefing", "Faculty committee honor", "Fair play & rules declaration"]
  },
  {
    id: "stage-4",
    time: "10:00 AM",
    stageName: "STAGE 04",
    title: "Flagship Technical Competitions Commence",
    description: "Hackverse web developers sprinted into 2-3 hour code creation while Codeathon debugging teams traced runtime errors across modern programming stacks.",
    tag: "TECHNICAL SPRINT",
    image: "/memories/optimized/IMG_9328.webp",
    highlights: ["2–3 Hour Hackverse web challenge", "Codeathon logic & debugging", "Interactive peer evaluations"]
  },
  {
    id: "stage-5",
    time: "11:30 AM",
    stageName: "STAGE 05",
    title: "Brain Battles & Esports Squad Showdowns",
    description: "Tech Battle quiz heats lit up the stage with rapid buzzer rounds, Word Battle speakers commanded the podium, Pictionary clues tested pattern recognition, and Free Fire squads battled in esports brackets.",
    tag: "ARENA CLASHES",
    image: "/memories/optimized/IMG_9331.webp",
    highlights: ["High-voltage Tech Battle quiz", "3-Minute Word Battle presentations", "Pictionary puzzle solving", "Free Fire esports combat"]
  },
  {
    id: "stage-6",
    time: "03:30 PM",
    stageName: "STAGE 06",
    title: "Grand Valedictory & Prize Distribution",
    description: "The entire festival reassembled in the auditorium for the crowning moment. Cash awards, gleaming trophies, and certificates were presented to triumphant winners.",
    tag: "VALEDICTORY & HONORS",
    image: "/memories/optimized/IMG_9341.webp",
    highlights: ["Cash prize handovers", "Championship trophy felicitations", "Certificate distributions"]
  },
  {
    id: "stage-7",
    time: "04:30 PM",
    stageName: "STAGE 07",
    title: "Vote of Thanks & Unforgettable Farewell",
    description: "A heartfelt vote of thanks acknowledged every coordinator, volunteer, faculty patron, and attendee. Group photos, lasting memories, and eager anticipation for the next edition.",
    tag: "FAREWELL & LEGACY",
    image: "/memories/optimized/IMG_9343.webp",
    highlights: ["Vote of thanks by crew", "Grand crew photo on stage", "Celebration & memories for life"]
  }
];

export const INITIAL_MEMORY_SUBMISSIONS: MemorySubmission[] = [
  {
    id: "mem-1",
    name: "SedhuRaman",
    college: "Takshashila University",
    role: "Chief Event Director",
    eventAttended: "Overall Operations Command",
    quote: "Seeing the passion, the competitive spark, and the energy of hundreds of students gathered under one roof was the ultimate reward. ITECHNO 2026 proved what our community can achieve together.",
    image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445311/WhatsApp_Image_2026-09-02_at_22.22.42.jpg",
    createdAt: "2026-10-10",
    status: "approved"
  },
  {
    id: "mem-2",
    name: "Gokul",
    college: "Takshashila University",
    role: "Chief Event Director",
    eventAttended: "Technical Architecture & Systems",
    quote: "From the first line of code during Hackverse to the electric auditorium during the valedictory, every moment was unforgettable. More than an event, it became a memory that stays.",
    image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788445578/WhatsApp_Image_2026-09-03_at_19.54.08.jpg",
    createdAt: "2026-10-10",
    status: "approved"
  },
  {
    id: "mem-3",
    name: "Keerthi Vasan",
    college: "Takshashila University",
    role: "Hackverse Coordinator",
    eventAttended: "Hackverse Web Challenge",
    quote: "The websites designed by our participants in just 2.5 hours were mind-blowing. The creativity, responsiveness, and clean CSS was truly top-tier industry quality.",
    image: "https://res.cloudinary.com/k78tbfel/image/upload/v1788954835/WhatsApp_Image_2026-09-09_at_12.59.07.jpg",
    createdAt: "2026-10-10",
    status: "approved"
  },
  {
    id: "mem-4",
    name: "Bhavani Shri",
    college: "Takshashila University",
    role: "Tech Battle Coordinator",
    eventAttended: "Tech Battle Quiz",
    quote: "The buzzer speed during the AI & Cloud round was electrifying! Teams were answering questions in fractions of a second. The atmosphere in the seminar hall was unbelievable.",
    image: null,
    createdAt: "2026-10-10",
    status: "approved"
  },
  {
    id: "mem-5",
    name: "Mohamed Afsar",
    college: "Takshashila University",
    role: "Free Fire Coordinator",
    eventAttended: "Free Fire Squad Battle",
    quote: "Managing the tournament brackets and watching the final circle showdown on the big screen had everyone on the edge of their seats! Takshashila gaming energy was unmatched.",
    image: null,
    createdAt: "2026-10-10",
    status: "approved"
  },
  {
    id: "mem-6",
    name: "Student Participant",
    college: "Visiting Engineering College",
    role: "Hackverse Participant",
    eventAttended: "Hackverse & Campus Vibes",
    quote: "The hospitality, the high-speed campus Wi-Fi, the jury critique, and the overall tech-fest vibe made this one of the best symposium experiences of my college life!",
    image: null,
    createdAt: "2026-10-11",
    status: "approved"
  }
];
