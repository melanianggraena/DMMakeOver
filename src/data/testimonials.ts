import { Testimonial, UGCImage } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dewi Rahayu',
    rating: 5,
    review:
      'Powerstay Matte Foundation benar-benar tahan lama sampai 12 jam! Cocok banget untuk kulit berminyak seperti saya. Coveragenya bagus dan shade NW25 cocok dengan warna kulit saya.',
    productName: 'Powerstay Matte Powder Foundation',
    date: '15 Oktober 2026',
    verified: true,
  },
  {
    id: 't2',
    name: 'Sari Indah',
    rating: 5,
    review:
      'Color Hypnose Lipmatte warnanya pigmented banget! Tidak bikin bibir kering dan tahan lama. Sudah beli 3 shade berbeda dan semuanya jadi favorit. Sangat direkomendasikan!',
    productName: 'Color Hypnose Creamy Lipmatte',
    date: '10 Oktober 2026',
    verified: true,
  },
  {
    id: 't3',
    name: 'Anisa Putri',
    rating: 5,
    review:
      'Hydrastay Glow Cushion formulanya ringan tapi coverage tetap bagus. Memberikan efek glow natural yang saya suka. Kulitku jadi tampak lebih sehat dan bercahaya seharian.',
    productName: 'Hydrastay Lite Glow Cushion',
    date: '5 Oktober 2026',
    verified: true,
  },
];

export const ugcImages: UGCImage[] = [
  {
    id: 'u1',
    image: 'https://images.unsplash.com/photo-1588516903720-8cef720f8bbb?w=400&q=80',
    alt: 'MOTD dengan Make Over',
    username: '@dewi_beauty',
  },
  {
    id: 'u2',
    image: 'https://images.unsplash.com/photo-1643185539104-3622eb1f1ce0?w=400&q=80',
    alt: 'Review Make Over Lipmatte',
    username: '@sari_glam',
  },
  {
    id: 'u3',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80',
    alt: 'Full Makeup Look Make Over',
    username: '@anisa_makeup',
  },
  {
    id: 'u4',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&q=80',
    alt: 'Everyday Look dengan Make Over',
    username: '@reni_cantik',
  },
];
