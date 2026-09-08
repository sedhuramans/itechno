export type EventDataType = {
  id: string;
  title: string;
  category: string;
  image: string;
  buttonText: string;
  prizePool: string;
  prize: number | string;
  fee: string;
  feeDetails: string;
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: '2–3 Hours',
    teamSize: '2–3 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Farzana Kalesha', 'Rajesh. S', 'Praveenkumar'],
    description: 'Hackverse is a web development challenge where participants create a functional and attractive website using HTML, CSS and JavaScript within the given time.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: 'Time-Limited',
    teamSize: 'Duo / 2 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Vignesh', 'Jaishitha', 'Udhayaraj'],
    description: 'Challenges include syntax errors, logical errors, runtime errors, incorrect outputs and programming mistakes.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
      'Team Size: Duo / Exactly 2 members per team.',
      'Type: Debugging Challenge.',
      'Registration Deadline: Online registration closes on September 28 at 5:30 PM. On-the-spot registration will be available at the venue.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: 'Time-Limited',
    teamSize: 'Duo / 2 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Bhavani Shri', 'Madhesh', 'Tanusri'],
    description: 'Time-limited technology quiz covering AI, Machine Learning, Cybersecurity, Cloud Computing, Web Development, Programming, Data Science, Robotics, Emerging Technologies and Current Tech Trends.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: '3 Minutes per Participant',
    teamSize: 'Individual',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Lakshitha', 'Vidhula Valancya', 'Akram Javid'],
    description: 'Participants explain a given technical word within the allotted time.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant needs to pay ₹100.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: 'Time-Limited',
    teamSize: 'Duo / 2 Participants',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Aafiya', 'Farjana', 'Mohan'],
    description: 'Pictionary is a visual technology puzzle challenge where participants identify a tech word or concept by connecting 4+ pictures (e.g., Cloud + Server + Storage + Internet = Cloud Computing).',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
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
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: 'As Scheduled',
    teamSize: 'Squad',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Mohamed Afsar', 'Balaji Meshak Jebastine', 'Nourash S B', 'Divakar', 'Sybudheen K'],
    description: 'Free Fire – Squad Battle is an esports gaming competition where squads compete in intense Free Fire tournament matches.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
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
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
    eventDate: 'September 29, 2026',
    type: 'gaming'
  },
  {
    id: 'reel-creation',
    title: 'VIRAL MINDS',
    category: 'Inter-College Reel Contest',
    image: 'https://res.cloudinary.com/k78tbfel/image/upload/v1788616724/llgkrkcdqflkrkkx1adm.jpg',
    buttonText: 'Register Now',
    prizePool: 'Cash Prizes & Certificates',
    prize: 'Exciting Rewards',
    fee: '💰 Payment: ₹100 per head',
    feeDetails: 'Each participant in the team needs to pay ₹100',
    time: '30–60 Seconds',
    teamSize: 'Individual / Duo (Max 2 Members)',
    location: 'Takshashila University, Ongur, Tamil Nadu, India',
    coordinators: ['Sumanraj', 'Sanjay', 'Younis'],
    description: 'Inter-College Reel Contest where participants showcase storytelling, creativity, and technical editing in 30–60 second vertical reels.',
    rules: [
      '💰 Payment: ₹100 per head. Each participant in the team needs to pay ₹100.',
      '1. Eligibility: Open to students from all recognized colleges. Individual or team participation (maximum 2 members).',
      '2. Theme: The Reel must follow the given competition theme and present it creatively.',
      '3. Duration: Reel must be 30–60 seconds long.',
      '4. Format: Submit the Reel in vertical 9:16 format, preferably 1080 × 1920 px, in MP4/MOV format.',
      '5. Originality: The Reel must be original work. Plagiarism or copied content will lead to disqualification.',
      '6. Editing: Participants may use any editing software/app such as CapCut, VN, Premiere Pro, DaVinci Resolve, etc.',
      '7. Content: Vulgar, offensive, discriminatory, political, hateful or inappropriate content is strictly prohibited.',
      '8. Copyright: Participants must have permission to use all music, footage, images and other external content used in the Reel.',
      '9. Judging: Entries will be judged based on Creativity, Storytelling, Theme Relevance, Editing Quality, Visual/Audio Quality and Overall Impact.',
      '10. Submission & Decision: Submit the Reel before the announced deadline. Late submissions may be rejected, and the judges\' decision will be final.'
    ],
    evaluation: [
      'Creativity',
      'Storytelling',
      'Theme Relevance',
      'Editing Quality',
      'Visual/Audio Quality',
      'Overall Impact'
    ],
    lastDate: 'Online Closes: Sep 28, 5:30 PM (On-Spot Available)',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegCSZJ1sg1HH92bwMOBfoU29DEbzxvGlS0mSoNZfpI9WhfCA/viewform?usp=dialog',
    eventDate: 'September 29, 2026',
    type: 'media'
  }
];
