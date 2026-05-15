export interface Bhajan {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  youtubeId: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string; // ISO date string
  description: string;
}

export interface Wallpaper {
  id: string;
  url: string;
  title: string;
}

export interface ZodiacSign {
  id: string;
  name: string;
  bengaliName: string;
  symbol: string;
  prediction: string;
}
