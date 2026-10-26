import React, { useState } from 'react';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product.id);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  return (
    <div
      className="group relative bg-surface-card flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-surface-elevated">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-heading font-700 text-[10px] tracking-widest px-2 py-1 uppercase">
          {product.badge}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-surface-base/70 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-primary-container text-on-primary-container font-heading font-700 text-xs tracking-widest uppercase px-5 py-3 hover:bg-accent-hover transition-colors w-48 justify-center"
          >
            <ShoppingBag size={14} />
            {addedFeedback ? 'DITAMBAHKAN!' : 'TAMBAH KE TAS'}
          </button>
          <button className="flex items-center gap-2 border border-text-primary text-text-primary font-heading font-600 text-xs tracking-widest uppercase px-5 py-3 hover:bg-surface-elevated transition-colors w-48 justify-center">
            <Eye size={14} />
            LIHAT PRODUK
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {/* Shades */}
        <p className="text-text-muted text-xs font-heading tracking-widest uppercase">
          {product.shadeCount} Shades
        </p>

        {/* Name */}
        <h3 className="font-heading font-600 text-text-primary text-sm leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.round(product.rating)
                    ? 'fill-primary-container text-primary-container'
                    : 'text-border-strong'
                }
              />
            ))}
          </div>
          <span className="text-text-muted text-xs">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <p className="font-heading font-700 text-text-primary text-base mt-auto">
          {product.priceFormatted}
        </p>
      </div>

      {/* Mobile add to cart */}
      <button
        onClick={handleAddToCart}
        className="md:hidden flex items-center justify-center gap-2 bg-primary-container text-on-primary-container font-heading font-700 text-xs tracking-widest uppercase py-3 hover:bg-accent-hover transition-colors"
      >
        <ShoppingBag size={13} />
        {addedFeedback ? 'DITAMBAHKAN!' : 'TAMBAH KE TAS'}
      </button>
    </div>
  );
};

export default ProductCard;
