'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, staggerContainer, staggerItem } from '@/lib/constants/animations';

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

const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const Products = ({ className }: ProductsProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('ВСЕ');

  const filteredProducts = activeCategory === 'ВСЕ'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className={cn('w-full bg-white text-black px-6', className)}>
      <motion.h2 {...fadeInLeft} className="text-[40px] md:text-[60px] leading-normal md:leading-[32px] uppercase font-bold mb-8 md:mb-12">
        ПРОДУКЦИЯ
      </motion.h2>

      {/* Categories */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 mt-[40px] mb-[50px]"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={staggerItem}
            transition={{ duration: 0.5 }}
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
          </motion.button>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p {...fadeInUp} className="text-3xl uppercase mb-[54px]">
        ИЗГОТАВЛИВАЕМ ШИПЫ И МИНИВЕНТИЛИ ПО ЧЕРТЕЖАМ ЗАКАЗЧИКА. ВОЗМОЖНО ИЗГОТОВЛЕНИЕ
        КАК ИЗ ОБЫЧНОЙ СТАЛИ, ТАК И ИЗ НЕРЖАВЕЮЩЕЙ СТАЛИ. ВОЗМОЖНО ТОЧЕНИЕ ВНУТРЕННЕЙ
        И НАРУЖНОЙ РЕЗЬБЫ. ПОВЕРХНОСТНАЯ ОБРАБОТКА ПО ЗАПРОСУ.
      </motion.p>

      {/* Products Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={productVariants}
            transition={{ duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                loading="lazy"
              />
            </div>
            <h3 className="text-3xl leading-[24px] uppercase font-medium">
              {product.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
