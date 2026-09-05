export type FAQItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const participationRules: FAQItem[] = [
  {
    id: "pr1",
    category: "Participation Rules",
    question: "1. Hackverse Participation Exclusivity",
    answer: "Hackverse participants can participate ONLY in Hackverse. Hackverse participants cannot participate in any other event."
  },
  {
    id: "pr2",
    category: "Participation Rules",
    question: "2. Multi-Event Participation (Non-Hackverse)",
    answer: "Participants who do NOT participate in Hackverse can participate in multiple other events. Non-Hackverse participants must participate in a minimum of 3 events."
  },
  {
    id: "pr3",
    category: "Participation Rules",
    question: "3. Specified Event Team Sizes",
    answer: "Every participant must follow the specified team size for each event: Hackverse (2–3 participants), Codeathon (4 participants), Tech Battle (Duo / 2 participants), Word Battle (Individual), Pictionary (Duo / 2 participants), Free Fire – Squad Battle (Squad), and VIRAL MINDS (2–3 participants)."
  }
];

export const generalGuidelines: FAQItem[] = [
  {
    id: "g1",
    category: "General Rules",
    question: "1. Registration Requirement",
    answer: "Participants must register before the registration deadline to secure entry to Itechno '26 arenas."
  },
  {
    id: "g2",
    category: "General Rules",
    question: "2. Student Identification",
    answer: "Participants must carry their valid original college or school ID card at all times during the festival."
  },
  {
    id: "g3",
    category: "General Rules",
    question: "3. Reporting Time",
    answer: "Participants must report to the venue at least 30 minutes before the scheduled event time."
  },
  {
    id: "g4",
    category: "General Rules",
    question: "4. Event Instructions",
    answer: "Participants must adhere strictly to all instructions provided by the event coordinators and judges."
  },
  {
    id: "g5",
    category: "General Rules",
    question: "5. Fair Play",
    answer: "Use of unfair means, unauthorized assistance, or malicious activity will lead to immediate disqualification."
  },
  {
    id: "g6",
    category: "General Rules",
    question: "6. Personal Belongings",
    answer: "Participants are responsible for their own laptops, accessories, and personal belongings throughout the event."
  },
  {
    id: "g7",
    category: "General Rules",
    question: "7. Code of Conduct",
    answer: "Any form of misconduct, aggressive behavior, or disrespect will result in instant ejection from the festival."
  },
  {
    id: "g8",
    category: "General Rules",
    question: "8. Respect & Sportsmanship",
    answer: "Participants must maintain sportsmanship and respect fellow competitors, volunteers, and faculty."
  },
  {
    id: "g9",
    category: "General Rules",
    question: "9. Rule Modifications",
    answer: "The chief organizing crew reserves the right to update or modify event rules if deemed necessary."
  },
  {
    id: "g10",
    category: "General Rules",
    question: "10. Final Decision",
    answer: "The decision of the official judges and event directors will be final and binding in all circumstances."
  }
];

export const faqData: FAQItem[] = [
  {
    id: "f1",
    category: "Overview",
    question: "What is Itechno 2026?",
    answer: "Itechno 2026 is the premier Inter-College Technical Festival hosted by Takshashila University, bringing together students to compete across web development, debugging, tech quizzes, visual puzzles, gaming, speaking, and VIRAL MINDS."
  },
  {
    id: "f2",
    category: "Eligibility",
    question: "Who can participate in Itechno '26?",
    answer: "Students currently enrolled in recognized schools, colleges, institutes, and universities with a valid student photo ID card are eligible to participate. School students are also welcome to participate!"
  },
  {
    id: "f3",
    category: "Registration",
    question: "How do I register for events?",
    answer: "Click the 'Register Now' button anywhere on the website to access the official Takshashila University Google Form registration portal."
  },
  {
    id: "f4",
    category: "Registration",
    question: "Can I participate in multiple events?",
    answer: "Hackverse participants can participate ONLY in Hackverse and cannot participate in any other event. Participants who do NOT participate in Hackverse can participate in multiple other events, but must participate in a minimum of 3 events."
  },
  {
    id: "f5",
    category: "Venue & Dates",
    question: "When and where is the event being held?",
    answer: "Itechno '26 takes place on September 29, 2026, at Takshashila University, Ongur, Tamil Nadu, India."
  },
  {
    id: "f6",
    category: "Certificates & Rewards",
    question: "Will certificates and trophies be awarded?",
    answer: "Yes! All verified participants will receive digital or physical Certificates of Participation, and winners will receive trophies and cash rewards."
  },
  {
    id: "f7",
    category: "Equipment",
    question: "Do I need to bring my own laptop?",
    answer: "For coding challenges, web dev, and esports, bringing your personal laptop/equipment is recommended unless specified in the event rules."
  },
  ...participationRules,
  ...generalGuidelines
];

export const FAQData = faqData;
