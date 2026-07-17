export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  type: "image" | "video";
  media: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "1st Annivesary",
    date: "NOv 2025",
    type: "video",
    media: "/videos/1.mp4",
    description:
      "ഒരു കൊല്ലം പോഴ ഒരു പോക്കേ ...... മറക്കില്ല മുത്തുമണിയേ ",
  },
  {
    id: 2,
    title: "Chamma Mwolde മആദ് 😘📸",
    date: "July 2023",
    type: "video",
    media: "/videos/2.mp4",
    description: "This wasn't just our first photo together.",
  },
  {
    id: 3,
    title: "Beach Day 🌊",
    date: "August 2023",
    type: "video",
    media: "/videos/timeline/3.mp4",
    description: "The sunset had competition that day.",
  },
];
