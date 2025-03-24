'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import Image from 'next/image';

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
  { id: 9, name: 'SKF', logo: '/images/partners/SKF.png' },
  { id: 10, name: 'IMI', logo: '/images/partners/IMI.png' },
  { id: 11, name: 'Honda', logo: '/images/partners/Honda.png' },
  { id: 12, name: 'Michelin', logo: '/images/partners/MICHELIN.png' },
];

export const Partners = ({ className }: PartnersProps) => {
  return (
    <section id="partners" className={cn('w-full bg-white', className)}>
      <motion.h2
        {...fadeInLeft}
        className="text-[32px] md:text-[80px] font-bold mb-16 bg-[url('/images/label-bg.png')] text-center bg-cover bg-no-repeat text-white h-[270px] flex items-center justify-center uppercase"
      >
        ПАРТНЕРЫ
      </motion.h2>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col md:flex-row md:gap-32 justify-start space-y-4 md:space-y-0">
            <motion.h3
              {...fadeInLeft}
              className="text-[24px] md:text-[60px] font-bold text-black"
            >
              ПАРТНЕРЫ
            </motion.h3>
            <motion.p
              {...fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-[16px] md:text-[30px]  text-black font-[var(--font-roboto)]"
            >
              МЫ ОСУЩЕСТВЛЯЕМ ПОСТАВКИ ВЕДУЩИМ МИРОВЫМ ПРОИЗВОДИТЕЛЯМ ШИН, ИХ ПОДРЯДЧИКАМ И ПРОИЗВОДСТВЕННЫМ КОМПАНИЯМ.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center justify-center p-4 rounded-lg bg-white hover:shadow-lg pointer-events-auto "
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={80}
                  className="object-contain group-hover:brightness-75 transition-all"
                  loading={partner.id <= 4 ? 'eager' : 'lazy'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
