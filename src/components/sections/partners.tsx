'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInScale } from '@/lib/constants/animations';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface PartnersProps {
  className?: string;
}

const partners = [
  { id: 1, name: 'Mindray', logo: '/images/partners/mindray.png' },
  { id: 2, name: 'Comen', logo: '/images/partners/comen.png' },
  { id: 3, name: 'Medcaptain', logo: '/images/partners/medcaptain.png' },
  { id: 4, name: 'BE Aerospace', logo: '/images/partners/be-aerospace.png' },
  { id: 5, name: 'Nike', logo: '/images/partners/nike.png' },
  { id: 6, name: 'Danfoss', logo: '/images/partners/danfoss.png' },
  { id: 7, name: 'Ametek', logo: '/images/partners/ametek.png' },
  { id: 8, name: 'SKF', logo: '/images/partners/skf.png' },
  { id: 9, name: 'Chiaphua', logo: '/images/partners/chiaphua.png' },
];

export const Partners = ({ className }: PartnersProps) => {
  return (
    <section id="partners" className={cn('w-full bg-white text-black', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Заголовок и описание */}
          <motion.div {...fadeInLeft} className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[40px] md:text-[60px] leading-normal md:leading-[32px] uppercase font-bold mb-8 md:mb-12 font-roboto-condensed"
            >
              ПАРТНЕРЫ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl leading-[140%] font-roboto-condensed uppercase"
            >
              МЫ ОСУЩЕСТВЛЯЕМ ПОСТАВКИ ВЕДУЩИМ МИРОВЫМ ПРОИЗВОДИТЕЛЯМ ШИН,
              ИХ ПОДРЯДЧИКАМ И ПРОИЗВОДСТВЕННЫМ КОМПАНИЯМ.
            </motion.p>
          </motion.div>

          {/* Слайдер */}
          <motion.div {...fadeInScale} className="w-full lg:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              watchSlidesProgress={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
                bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 !mx-2 !inline-block !opacity-100',
                bulletActiveClass: 'swiper-pagination-bullet-active !w-4 !h-4 !bg-black !transition-all !duration-300',
              }}
              loop={true}
              className="partners-swiper [&_.swiper-slide]:opacity-50 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-300"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[3/2] relative bg-white p-4 flex items-center justify-center"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={85}
                      loading="lazy"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination !relative mt-8"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
