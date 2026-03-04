export type Short = {
  id: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
};

export const shorts: Short[] = [
  {
    id: "short-1",
    title: "Quick React Tip in 20s",
    channel: "Dev Clips",
    views: "210K views",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  },
  {
    id: "short-2",
    title: "CSS Trick You’ll Use Daily",
    channel: "UI Snacks",
    views: "98K views",
    thumbnail: "https://i.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg",
  },
  {
    id: "short-3",
    title: "TypeScript: One Feature That Saves You",
    channel: "TS Bites",
    views: "150K views",
    thumbnail: "https://i.ytimg.com/vi/BwuLxPH8IDs/hqdefault.jpg",
  },
  {
    id: "short-4",
    title: "This keyboard shortcut = speedrun",
    channel: "Productive Dev",
    views: "320K views",
    thumbnail: "https://i.ytimg.com/vi/SWYqp7iY_Tc/hqdefault.jpg",
  },
];