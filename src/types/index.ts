// ============================================================
// Types for Make Over Indonesia Landing Page
// ============================================================

export interface Product {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  badge: string;
  rating: number;
  reviewCount: string;
  shadeCount: number;
  image: string;
  category: ProductCategory;
  isNew?: boolean;
}

export type ProductCategory = 'ALL' | 'WAJAH' | 'MATA' | 'BIBIR' | 'KULIT';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  productName: string;
  date: string;
  verified: boolean;
}

export interface UGCImage {
  id: string;
  image: string;
  alt: string;
  username: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: string;
  href: string;
}
