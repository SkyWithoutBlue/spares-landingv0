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
    <section id="countries-partners" className={cn('w-full bg-white text-black', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 md:h-screen flex flex-col justify-center">
        <motion.h2
          {...fadeInLeft}
          className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-black"
        >
          СТРАНЫ-ПАРТНЕРЫ
        </motion.h2>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative w-full rounded-lg overflow-hidden"
        >
          <Image
            src="/images/partners/countries-partners.jpg"
            alt="Карта стран-партнеров"
            width={1920}
            height={1080}
            quality={100}
            priority
            className="w-full h-auto"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
};
