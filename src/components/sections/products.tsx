'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp } from '@/lib/constants/animations';
import Image from 'next/image';

interface ProductsProps {
  className?: string;
}

const productCategories = [
  {
    title: 'ПЛАСТИНЫ СКОЛЬЖЕНИЯ',
    images: [
      { src: '/images/products/sliding-plate-1.jpg', alt: 'Пластина скольжения 1' },
      { src: '/images/products/sliding-plate-2.jpg', alt: 'Пластина скольжения 2' },
      { src: '/images/products/sliding-plate-3.jpg', alt: 'Пластина скольжения 3' },
    ]
  },
  {
    title: 'SPRING VENTS',
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
    <section id="products" className={cn('w-full bg-white text-black relative overflow-hidden', className)}>
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-[#014B9F] transform -skew-y-3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[#014B9F] transform -skew-y-3 translate-y-1/2" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <motion.h2
            {...fadeInLeft}
            className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-center text-white mb-8"
          >
            Продукты
          </motion.h2>

          <div className="space-y-12 w-full max-w-5xl">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#013B6E] text-center border border-[#014B9F] py-2 rounded-lg max-w-[400px] mx-auto">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="group relative aspect-square p-3 flex items-center justify-center border border-[#014B9F]/20 rounded-lg bg-white hover:border-[#014B9F] transition-all duration-300"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
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
        </motion.div>
      </div>
    </section>
  );
};
