export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'adventure' | 'simulation' | 'action' | 'puzzle';
  rating: number;
  features: string[];
  trailer?: string;
  screenshots: string[];
}