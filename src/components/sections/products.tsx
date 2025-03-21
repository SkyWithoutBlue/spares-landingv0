'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/constants/animations';

interface ProductsProps {
  className?: string;
}

const productCategories = [
  {
    title: 'ПЛАСТИНА СКОЛЬЖЕНИЯ',
    images: [
      '/images/products/sliding-plate-1.jpg',
      '/images/products/sliding-plate-2.jpg',
      '/images/products/sliding-plate-3.jpg',
    ]
  },
  {
    title: 'SPRINGS VENTS',
    images: [
      '/images/products/springs-1.jpg',
      '/images/products/springs-2.jpg',
      '/images/products/springs-3.jpg',
    ]
  },
  {
    title: 'ДЕТАЛИ С РЕЗЬБОЙ',
    images: [
      '/images/products/threaded-1.jpg',
      '/images/products/threaded-2.jpg',
      '/images/products/threaded-3.jpg',
    ]
  }
];

export const Products = ({ className }: ProductsProps) => {
  return (
    <section id="products" className={cn('w-full bg-white py-16', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <motion.div
          {...fadeInUp}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-[/images/label-bg.jpg] transform origin-left" />
          <h2 className="relative text-[32px] md:text-[48px] font-bold text-white text-center py-4">
            ПРОДУКТЫ
          </h2>
        </motion.div>

        <div className="space-y-16">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-[24px] md:text-[32px] font-bold text-center border border-black py-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="aspect-square border border-gray-300 p-4 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`${category.title} ${imageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
