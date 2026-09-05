export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788456805/WhatsApp_Image_2026-09-02_at_17.22.23.jpg",
    alt: "Itechno '26 Hackathon & Technical Arena",
    title: "Hackverse Arena & Rapid Prototyping",
    tag: "TECHNICAL SPRINT",
    description: "Participants collaborating and coding intensively during the 24-hour rapid prototyping hackathon sprint."
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788456798/WhatsApp_Image_2026-09-02_at_17.22.22.jpg",
    alt: "Takshashila University Grand Auditorium Stage",
    title: "Grand Stage & Keynote Operations",
    tag: "FESTIVAL AUDITORIUM",
    description: "Takshashila University, Ongur, Tamil Nadu, India packed with students and dignitaries for keynote tech sessions."
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788456798/WhatsApp_Image_2026-09-02_at_17.22.21.jpg",
    alt: "Project Presentation & Jury Evaluation",
    title: "Innovation Showcase & Jury Evaluations",
    tag: "PROJECT EXPO",
    description: "Teams presenting hardware prototypes, software solutions, and emerging technologies to the evaluation panel."
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788497354/WhatsApp_Image_2026-09-04_at_10.14.57.jpg",
    alt: "Esports Arena & Gaming Squad Showdowns",
    title: "Esports Arena & Championship Energy",
    tag: "GAMING ARENA",
    description: "High-octane esports tournament with intense tactical squad combat and cheering audience."
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788497341/WhatsApp_Image_2026-09-03_at_22.13.39.jpg",
    alt: "Technical Workshop & Interactive Labs",
    title: "Technical Workshop & Interactive Labs",
    tag: "HANDS-ON LABS",
    description: "Immersive technical workshops, live coding challenges, and interactive peer problem-solving sessions."
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788497316/WhatsApp_Image_k.jpg",
    alt: "Festival Ambience & Creative Moments",
    title: "Creative Media & Festival Atmosphere",
    tag: "CAMPUS VIBES",
    description: "Capturing the vibrant festival atmosphere, backstage coordination, and student engagement across campus."
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788497236/VCK.jpg",
    alt: "Valedictory Ceremony & Victory Celebrations",
    title: "Valedictory Ceremony & Victory Celebrations",
    tag: "CEREMONY & HONORS",
    description: "Grand trophy presentations, winner felicitations, and unforgettable celebrations closing the festival."
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/k78tbfel/image/upload/v1788456797/WhatsApp_Image_2026-09-02.jpg",
    alt: "Takshashila University Fest Highlights & Campus Delegation",
    title: "Campus Delegation & Fest Highlights",
    tag: "CAMPUS HIGHLIGHTS",
    description: "Students, organizers, and delegates gathering across the festival grounds during the premier tech fest."
  }
];