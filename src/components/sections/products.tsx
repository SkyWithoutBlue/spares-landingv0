'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp } from '@/lib/constants/animations';

interface ProductsProps {
  className?: string;
}

const productCategories = [
  {
    title: 'ПЛАСТИНА СКОЛЬЖЕНИЯ',
    images: [
      { src: '/images/products/sliding-plate-1.jpg', alt: 'Пластина скольжения 1' },
      { src: '/images/products/sliding-plate-2.jpg', alt: 'Пластина скольжения 2' },
      { src: '/images/products/sliding-plate-3.jpg', alt: 'Пластина скольжения 3' },
    ]
  },
  {
    title: 'SPRINGS VENTS',
    images: [
      { src: '/images/products/springs-1.jpg', alt: 'Springs Vents 1' },
      { src: '/images/products/springs-2.jpg', alt: 'Springs Vents 2' },
      { src: '/images/products/springs-3.jpg', alt: 'Springs Vents 3' },
    ]
  },
  {
    title: 'ДЕТАЛИ С РЕЗЬБОЙ',
    images: [
      { src: '/images/products/threaded-1.jpg', alt: 'Детали с резьбой 1' },
      { src: '/images/products/threaded-2.jpg', alt: 'Детали с резьбой 2' },
      { src: '/images/products/threaded-3.jpg', alt: 'Детали с резьбой 3' },
    ]
  }
];

export const Products = ({ className }: ProductsProps) => {
  return (
    <section id="products" className={cn('w-full bg-white py-16 max-w-[1920px] mx-auto', className)}>
      <motion.h2
        {...fadeInLeft}
        className="text-[32px] md:text-[80px] font-bold mb-16 bg-[url('/images/label-bg.png')] text-center bg-cover bg-no-repeat text-white h-[270px] flex items-center justify-center uppercase"
      >
        Продукты
      </motion.h2>

      <div className="space-y-16 px-6 md:px-12">
        {productCategories.map((category, index) => (
          <motion.div
            key={category.title}
            {...fadeInUp}
            transition={{ delay: index * 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-[24px] md:text-[32px] font-bold text-[#013B6E] text-center border-[2px] border-black py-2 rounded-[8px] max-w-[580px]">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {category.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="aspect-square p-4 flex items-center justify-center border-[2px] border-black rounded-[8px] bg-white transition-shadow"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                      quality={85}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
