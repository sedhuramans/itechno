interface Event {
  date: number;
  month: number;
  title: string;
  type: "tech" | "esports" | "holiday";
  startTime?: string;
  endTime?: string;
  description?: string;
  venue?: string;
}

interface TimelineEntry {
  title: string;
  events: Event[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "September 29, 2026 - Takshashila University, Ongur, Tamil Nadu, India",
    events: [
      {
        date: 29,
        month: 8,
        title: "Welcome & Registration",
        startTime: "09:30 AM",
        endTime: "09:40 AM",
        type: "holiday",
        description: "Participant check-in, credentials verification, and festival kit distribution.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Welcome Speech",
        startTime: "09:40 AM",
        endTime: "09:50 AM",
        type: "holiday",
        description: "Inaugural welcome address for Itechno 2026 at Takshashila University, Ongur, Tamil Nadu, India.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Introduction of Event & Organizing Team",
        startTime: "09:50 AM",
        endTime: "10:00 AM",
        type: "holiday",
        description: "Introduction of flagship competitions, guidelines, and chief event directors & crew.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Event Competitions",
        startTime: "10:00 AM",
        endTime: "Onwards",
        type: "tech",
        description: "Event competitions commence. Hackverse duration: 2–3 hours. Other event durations: Based on the number of participants.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Winners & Prize Distribution",
        startTime: "Final 30 Mins",
        endTime: "",
        type: "holiday",
        description: "Official announcement of event winners, cash prizes, and certificate distribution.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Vote of Thanks / Thank You Note",
        startTime: "Closing",
        endTime: "",
        type: "holiday",
        description: "Vote of thanks by the organizing committee.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      },
      {
        date: 29,
        month: 8,
        title: "Event Closing",
        startTime: "Official Conclusion",
        endTime: "",
        type: "holiday",
        description: "Acknowledgements, official photographs and event conclusion.",
        venue: "Takshashila University, Ongur, Tamil Nadu, India"
      }
    ]
  }
];