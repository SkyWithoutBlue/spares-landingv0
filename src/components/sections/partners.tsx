'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import Image from 'next/image';
import Link from 'next/link';

interface PartnersProps {
  className?: string;
}

const partners = [
  { id: 1, name: 'Adayo', logo: '/images/partners/ADAYO.png' },
  { id: 2, name: 'Hankook', logo: '/images/partners/Hankook.png' },
  { id: 3, name: 'Ametek', logo: '/images/partners/ametek.png' },
  { id: 4, name: 'Flextronics', logo: '/images/partners/Flextronics.png' },
  { id: 5, name: 'Continental', logo: '/images/partners/Continental.png' },
  { id: 6, name: 'Himile', logo: '/images/partners/Himile.png' },
  { id: 7, name: 'Nokian Tyres', logo: '/images/partners/Nokian_Tyres.png' },
  { id: 8, name: 'Pirelli', logo: '/images/partners/PIRELLI.png' },
  { id: 9, name: 'SKF', logo: '/images/partners/skf_logo.png' },
  { id: 10, name: 'IMI', logo: '/images/partners/IMI.png' },
  { id: 11, name: 'Honda', logo: '/images/partners/Honda.png' },
  { id: 12, name: 'Michelin', logo: '/images/partners/MICHELIN.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Partners = ({ className }: PartnersProps) => {
  return (
    <section id="partners" className={cn('w-full relative overflow-hidden bg-gradient-to-b from-[#014B9F] to-[#003366]', className)}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 translate-y-1/2" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-32 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center gap-12 p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl">
            <motion.h2
              {...fadeInLeft}
              className="text-[32px] md:text-[48px] lg:text-[60px] font-bold mb-6"
            >
              Наши партнеры
            </motion.h2>
            <p className="text-lg text-gray-200">
              Мы осуществляем поставки ведущим мировым производителям шин, их подрядчикам и производственным компаниям
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative aspect-[2/1] w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                  <span className="text-white text-base font-medium">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
