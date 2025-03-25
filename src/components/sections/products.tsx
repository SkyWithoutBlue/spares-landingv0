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
      { src: '/images/products/springs-2.png', alt: 'Springs Vents 2' },
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
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-12"
        >
          <motion.h2
            {...fadeInLeft}
            className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-center text-[#013B6E] mb-8"
          >
            Продукты
          </motion.h2>

          <div className="space-y-16 w-full max-w-6xl">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#013B6E] text-center border-b-2 border-[#014B9F] pb-3 max-w-[500px] mx-auto">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.5
                      }}
                      className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl will-change-transform"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                          loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                          quality={90}
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
