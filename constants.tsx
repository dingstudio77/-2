
import { PortfolioItem, Review, FAQItem } from './types.ts';

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: 'Cafe',
    title: 'Brew & Bloom',
    description: '자연과 커피가 어우러진 감성 카페 브랜드 로고',
    imageUrls: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop'],
    applicationType: 'Signage & Cup Mockup',
    isBeforeAfter: false
  },
  {
    id: '2',
    category: 'Startup',
    title: 'NexGen IT',
    description: '혁신적인 기술력을 상징하는 미니멀리즘 로고',
    imageUrls: ['https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'],
    applicationType: 'Web & App Identity',
    isBeforeAfter: true
  },
  {
    id: '3',
    category: 'Beauty',
    title: 'Glow Skin Care',
    description: '고급스러운 우아함을 담은 프리미엄 뷰티 브랜드',
    imageUrls: ['https://images.unsplash.com/photo-1596462502278-27bfad450216?q=80&w=800&auto=format&fit=crop'],
    applicationType: 'Package Design',
    isBeforeAfter: false
  },
  {
    id: '4',
    category: 'Personal',
    title: 'Artisan Jack',
    description: '장인 정신이 깃든 가죽 공방 개인 브랜드',
    imageUrls: ['https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800&auto=format&fit=crop'],
    applicationType: 'Leather Stamp',
    isBeforeAfter: false
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '김민준',
    brand: '카페 브룸',
    content: '막연했던 제 아이디어를 로고 하나로 완벽하게 시각화해주셨습니다. 덕분에 오픈 첫날부터 반응이 너무 좋았어요.',
    rating: 5,
    imageUrl: 'https://picsum.photos/id/64/200/200'
  },
  {
    id: 'r2',
    author: '이서연',
    brand: '넥스트 IT',
    content: '수정 과정에서 제 요구사항을 정말 정확하게 파악하시더라고요. 결과물이 너무 고급스러워서 대만족입니다.',
    rating: 5,
    imageUrl: 'https://picsum.photos/id/65/200/200'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "수정은 몇 번까지 되나요?",
    answer: "선택하신 패키지에 따라 다릅니다. 베이직은 2회, 스탠다드 이상은 무제한 수정을 제공하여 만족하실 때까지 작업합니다."
  },
  {
    question: "저작권은 누구에게 있나요?",
    answer: "최종 확정된 결과물의 저작권은 고객님께 귀속되며, 상업적 이용이 가능합니다."
  },
  {
    question: "기간은 얼마나 걸리나요?",
    answer: "평균적으로 첫 시안은 3-5일 이내에 제공되며, 전체 프로세스는 약 1~2주 정도 소요됩니다."
  },
  {
    question: "로고 초보 브랜드도 가능한가요?",
    answer: "물론입니다. 브랜드 네이밍만 있어도 괜찮습니다. 상담을 통해 브랜드의 가치를 찾아드리는 과정부터 함께합니다."
  }
];
