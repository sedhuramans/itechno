export type EventDataType = {
  id: string;
  title: string;
  category: string;
  image: string;
  buttonText: string;
  prizePool: string;
  prize: number | string;
  time: string;
  teamSize: string;
  location: string;
  coordinators: string[];
  description: string;
  rules: string[];
  evaluation: string[];
  lastDate: string;
  registrationLink: string;
  eventDate: string;
  type: 'hackathon' | 'coding' | 'quiz' | 'speaking' | 'puzzle' | 'gaming' | 'media';
};

export const ItechnoEventsData: EventDataType[] = [
  {
    id: 'hackverse',
    title: 'HACKVERSE',
    category: 'Web Development Challenge',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616690/zprbwwbwqhubn2jiyvte.webp',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: '2–3 Hours',
    teamSize: '2–3 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Farzana Kalesha', 'Rajesh. S', 'Praveenkumar'],
    description: 'Hackverse is a web development challenge where participants create a functional and attractive website using HTML, CSS and JavaScript within the given time.',
    rules: [
      'IMPORTANT: Hackverse participants can participate ONLY in Hackverse.',
      'Hackverse participants cannot participate in any other event.',
      'Team Size: 2–3 Participants per team.',
      'Event Duration: 2–3 Hours.',
      'Participants create a functional and attractive website using HTML, CSS and JavaScript within the given time.',
      'Focus areas: HTML, CSS, JavaScript, Creativity, UI/UX, Responsiveness and Presentation.',
      'The required website content will be provided by the organizers.',
      'Participants must develop the website during the event.',
      'Participants are not allowed to use pre-built website templates.',
      'Participants must not copy another participant\'s work.',
      'The website must be submitted before the given deadline.',
      'The judges\' decision will be final.'
    ],
    evaluation: [
      'HTML/CSS Implementation',
      'JavaScript Functionality',
      'Creativity & Originality',
      'UI/UX Design',
      'Responsiveness',
      'Completion of Requirements',
      'Overall Presentation'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'hackathon'
  },
  {
    id: 'codeathon',
    title: 'CODEATHON',
    category: 'Debugging Challenge',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616693/cbyu2jscwawiqfygv0iy.webp',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: 'Time-Limited',
    teamSize: '4 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Vignesh. B', 'Jaishitha', 'Udhayaraj'],
    description: 'Challenges include syntax errors, logical errors, runtime errors, incorrect outputs and programming mistakes.',
    rules: [
      'Team Size: 4 Participants per team.',
      'Type: Debugging Challenge.',
      'The code will be provided by the organizing team.',
      'Challenges include syntax errors, logical errors, runtime errors, incorrect outputs and programming mistakes.',
      'Participants must identify and fix the errors in the given code within the time limit.',
      'Participants should not completely replace the given program unless permitted by the organizers.',
      'The corrected program must produce the expected output.',
      'Participants must submit their solution before the deadline.',
      'Any form of unfair assistance or copying will result in disqualification.',
      'The judges\' decision will be final.'
    ],
    evaluation: [
      'Error identification',
      'Correction accuracy',
      'Final output',
      'Time',
      'Understanding of the code'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'coding'
  },
  {
    id: 'tech-battle',
    title: 'TECH BATTLE',
    category: 'Technology Quiz',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616706/kjihabi3xlhghnj0fhn4.jpg',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: 'Time-Limited',
    teamSize: 'Duo / 2 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Bhavani Shri', 'Madhesh', 'Tanusri'],
    description: 'Time-limited technology quiz covering AI, Machine Learning, Cybersecurity, Cloud Computing, Web Development, Programming, Data Science, Robotics, Emerging Technologies and Current Tech Trends.',
    rules: [
      'Team Size: Duo / 2 Participants per team.',
      'Format: Time-limited technology quiz.',
      'Topics: AI, Machine Learning, Cybersecurity, Cloud Computing, Web Development, Programming, Data Science, Robotics, Emerging Technologies and Current Tech Trends.',
      'Questions will be asked by the event coordinator.',
      'Participants must raise their hands to answer.',
      'Participants must wait until they are recognized by the coordinator.',
      'Shouting out answers before being recognized is not allowed.',
      'Each question will have a specified time limit.',
      'Participants must give only one answer for each question.',
      'The decision of the quiz coordinator/judges will be final.'
    ],
    evaluation: [
      'Correct answers receive designated points.',
      'Speed and accuracy of answering.',
      'Overall quiz score.'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'quiz'
  },
  {
    id: 'word-battle',
    title: 'WORD BATTLE',
    category: 'Technical Speaking Challenge',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616712/ybs4mjsv7tanawh93ax8.jpg',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: '3 Minutes per Participant',
    teamSize: 'Individual',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Lakshitha', 'Vidhula Valancya', 'Akram Javid'],
    description: 'Participants explain a given technical word within the allotted time.',
    rules: [
      'Team Size: Individual participation.',
      'Duration: 3 Minutes per Participant.',
      'Type: Technical Speaking Challenge.',
      'The word will be provided by the organizing team and will be related to technology.',
      'Participants explain a given technical word within the allotted time.',
      'Participants must explain the word clearly using their own knowledge.',
      'Participants should not simply read a prepared definition.',
      'Participants are encouraged to provide examples or real-world applications.',
      'Participants must stop when the time limit ends.',
      'Offensive or inappropriate content is not permitted.',
      'Judges\' decisions will be final.'
    ],
    evaluation: [
      'Technical understanding',
      'Clarity',
      'Communication',
      'Relevance',
      'Examples/applications',
      'Time management'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'speaking'
  },
  {
    id: 'pictionary',
    title: 'PICTONARY',
    category: 'Visual Technology Puzzle',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616715/tgqeojy0zqia6qwdguzi.webp',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: 'Time-Limited',
    teamSize: 'Duo / 2 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Aafiya', 'Farjana', 'Mohan Harish'],
    description: 'Pictionary is a visual technology puzzle challenge where participants identify a tech word or concept by connecting 4+ pictures (e.g., Cloud + Server + Storage + Internet = Cloud Computing).',
    rules: [
      'Team Size: Duo / 2 Participants per team.',
      'Type: Visual Technology Puzzle.',
      'Participants will be shown multiple images representing a tech word or concept.',
      'Participants must identify the connection between the images within the given time.',
      'Participants must not use mobile phones or external assistance.',
      'Answers must be given according to instructions of event coordinator.',
      'Multiple guesses may be restricted depending on the round.',
      'Correct answers receive designated points.',
      'Judges\' decisions will be final.'
    ],
    evaluation: [
      'Correct identification of concept/word',
      'Speed of answering',
      'Number of correct answers',
      'Overall score'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'puzzle'
  },
  {
    id: 'free-fire',
    title: 'FREE FIRE – SQUAD BATTLE',
    category: 'Gaming Competition',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616720/vokrnnoggxvqwcbk0weq.webp',
    buttonText: 'Register Now',
    prizePool: 'Gaming Trophies & Rewards',
    prize: 'Championship Rewards',
    time: 'As Scheduled',
    teamSize: 'Squad',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Mohamed Afsar', 'Balaji Meshak Jebastine', 'Nouresh', 'Divakar', 'Sybudheen K'],
    description: 'Free Fire – Squad Battle is an esports gaming competition where squads compete in intense Free Fire tournament matches.',
    rules: [
      'Team Size: Squad.',
      'Type: Gaming Competition.',
      'No hacks, cheats, scripts, exploits or unauthorized third-party software.',
      'Each squad must have the required number of players.',
      'Participants must use their own registered accounts/devices unless specified.',
      'Players must join the match within the given time.',
      'Teaming with other squads outside assigned team is prohibited.',
      'Players must follow instructions of event coordinators.',
      'Intentional exploitation of game bugs/glitches results in disqualification.',
      'The organizers\' decision will be final.'
    ],
    evaluation: [
      'Placement',
      'Eliminations',
      'Survival',
      'Overall performance'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'gaming'
  },
  {
    id: 'reel-creation',
    title: 'VIRAL MINDS',
    category: 'Creative Media Challenge',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616724/llgkrkcdqflkrkkx1adm.jpg',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    time: 'Time-Limited Submission',
    teamSize: '2–3 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Sumanraj', 'Sanjay', 'Younis'],
    description: 'Participants create a short promotional/creative reel based on the event requirements.',
    rules: [
      'Team Size: 2–3 Participants.',
      'Type: Creative Media Challenge.',
      'Participants create a short promotional/creative reel based on the event requirements.',
      'Every participating team must create a short reel related to given theme/event.',
      'The reel should creatively showcase or promote the participating college, team, company, or organization.',
      'The reel must be created within time specified by organizers.',
      'The content must be original and created by participants.',
      'Content must not contain offensive, abusive, or inappropriate material.',
      'Copyrighted content should be used only when permitted.',
      'Reel must be submitted in required format before deadline.',
      'The organizers\' decision will be final.'
    ],
    evaluation: [
      'Creativity',
      'Presentation',
      'Originality',
      'Event/Organization Promotion',
      'Engagement',
      'Overall Production Quality'
    ],
    lastDate: 'Registration Open',
    registrationLink: 'https://forms.google.com',
    eventDate: 'September 29, 2026',
    type: 'media'
  }
];
