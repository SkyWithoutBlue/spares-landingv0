'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProductsProps {
  className?: string;
}

const categories = [
  'ВСЕ',
  'ШАРИКО-ВИНТОВЫЕ ПЕРЕДАЧИ',
  'РОЛИКОВЫЕ ВИНТЫ',
  'ПЕРЕДАЧИ'
] as const;

type Category = typeof categories[number];

const products = [
  {
    id: 1,
    title: 'РОЛИКОВЫЕ ВИНТЫ',
    image: '/images/products/1.png',
    category: 'РОЛИКОВЫЕ ВИНТЫ' as Category,
  },
  {
    id: 2,
    title: 'ВИНТОВЫЕ ПЕРЕДАЧИ',
    image: '/images/products/2.png',
    category: 'ШАРИКО-ВИНТОВЫЕ ПЕРЕДАЧИ' as Category,
  },
  {
    id: 3,
    title: 'ПЕРЕДАЧИ',
    image: '/images/products/3.png',
    category: 'ПЕРЕДАЧИ' as Category,
  },
];

export const Products = ({ className }: ProductsProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('ВСЕ');

  const filteredProducts = activeCategory === 'ВСЕ'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className={cn('w-full bg-white text-black px-[50px]', className)}>
      <h2 className="text-[60px] leading-3xl uppercase font-bold mb-12">
        ПРОДУКЦИЯ
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mt-[40px] mb-[50px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'text-3xl uppercase',
              activeCategory === category
                ? 'text-black font-bold'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {category}
            {category !== 'ВСЕ' && ' |'}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="text-3xl uppercase mb-[54px]">
        ИЗГОТАВЛИВАЕМ ШИПЫ И МИНИВЕНТИЛИ ПО ЧЕРТЕЖАМ ЗАКАЗЧИКА. ВОЗМОЖНО ИЗГОТОВЛЕНИЕ
        КАК ИЗ ОБЫЧНОЙ СТАЛИ, ТАК И ИЗ НЕРЖАВЕЮЩЕЙ СТАЛИ. ВОЗМОЖНО ТОЧЕНИЕ ВНУТРЕННЕЙ
        И НАРУЖНОЙ РЕЗЬБЫ. ПОВЕРХНОСТНАЯ ОБРАБОТКА ПО ЗАПРОСУ.
      </p>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-3xl leading-[24px] uppercase font-medium">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
