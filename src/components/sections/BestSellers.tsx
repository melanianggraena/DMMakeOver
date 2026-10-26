import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { products, filterCategories } from '../../data/products';
import { ProductCategory } from '../../types';

interface BestSellersProps {
  onAddToCart: (productId: string) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('ALL');

  const filteredProducts =
    activeFilter === 'ALL'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <SectionHeading
          label="KOLEKSI POPULER"
          title="BEST SELLERS"
          subtitle="Produk terlaris yang dipilih jutaan perempuan Indonesia."
        />

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={[
                'font-heading font-600 text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-200 border',
                activeFilter === cat.value
                  ? 'bg-primary-container text-on-primary-container border-primary-container'
                  : 'bg-transparent text-text-muted border-border-subtle hover:border-border-strong hover:text-text-primary',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))
          ) : (
            <p className="col-span-2 md:col-span-4 text-center text-text-muted py-16">
              Tidak ada produk dalam kategori ini.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            LIHAT SEMUA PRODUK
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
