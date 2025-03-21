'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, staggerContainer, staggerItem } from '@/lib/constants/animations';


;




const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const CountriesPartners = () => {
  return (
    <section id="products" className={cn('w-full bg-white text-black px-6')}>
      <motion.h2 {...fadeInLeft} className="text-[40px] md:text-[60px] leading-normal md:leading-[32px] uppercase font-bold mb-8 md:mb-12">
        СТРАНЫ-ПАРТНЕРЫ
      </motion.h2>
        <Image className='w-full' src="/images/partners/countries-partners.jpg" alt="countries" width={1000} height={1000} />

    </section>
  );
};
