'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp } from '@/lib/constants/animations';

interface CountriesPartnersProps {
  className?: string;
}

export const CountriesPartners = ({ className }: CountriesPartnersProps) => {
  return (
    <section id="countries-partners" className={cn('w-full bg-white text-black py-16', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <motion.h2
          {...fadeInLeft}
          className="text-[32px] md:text-[80px] font-bold mb-16 uppercase"
        >
          СТРАНЫ-ПАРТНЕРЫ
        </motion.h2>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative aspect-[16/9] w-full rounded-lg overflow-hidden"
        >
          <Image
            src="/images/partners/countries-partners.jpg"
            alt="Карта стран-партнеров"
            fill
            priority
            className="object-cover transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          />
        </motion.div>
      </div>
    </section>
  );
};
