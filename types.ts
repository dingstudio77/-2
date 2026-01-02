
export interface PortfolioItem {
  id: string;
  category: 'Cafe' | 'Beauty' | 'Startup' | 'Personal' | 'IT';
  title: string;
  description: string;
  imageUrls: string[]; // 다중 이미지 지원
  beforeImageUrl?: string;
  isBeforeAfter: boolean;
  applicationType: string; // e.g., "Signage", "Business Card"
}

export interface Review {
  id: string;
  author: string;
  brand: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Category = 'All' | 'Cafe' | 'Beauty' | 'Startup' | 'Personal' | 'IT';
