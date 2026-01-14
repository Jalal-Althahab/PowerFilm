export interface Movie {
  id: number;
  title: string;
  year: string;
  quality: string;
  duration: string;
  rating: string;
  image: string;
  description?: string;
  genres?: string[];
}