export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploaded: string;
  duration: string;
  thumbnail?: string; // optional
};

export const videos: Video[] = [
  {
    id: "1",
    title: "React Login Project",
    channel: "Bby Dev",
    views: "12K views",
    uploaded: "2 days ago",
    duration: "10:24",
  },
  {
    id: "2",
    title: "TypeScript Basics",
    channel: "Code Snacks",
    views: "88K views",
    uploaded: "1 week ago",
    duration: "8:05",
  },
  {
    id: "3",
    title: "CSS Layout Tips",
    channel: "Frontend Lab",
    views: "33K views",
    uploaded: "4 days ago",
    duration: "12:41",
  },
];