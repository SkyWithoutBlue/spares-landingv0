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

interface ResearchProps {
  className?: string;
}

export const Research = ({ className }: ResearchProps) => {
  return (
    <section id="research" className={cn('w-full bg-[#0066CC] text-white py-16', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <motion.h2
          {...fadeInLeft}
          className="text-[32px] md:text-[48px] font-bold mb-16"
        >
          ИССЛЕДОВАНИЯ И КОНТРОЛЬ КАЧЕСТВА
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <motion.div
              {...fadeInLeft}
              className="space-y-4"
            >
              <h3 className="text-[24px] md:text-[32px] font-bold">
                ИССЛЕДОВАНИЯ И РАЗРАБОТКИ
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed">
                НАШ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР ИСПОЛЬЗУЕТ <span className="font-bold">СОВРЕМЕННОЕ, СПЕЦИАЛЬНО РАЗРАБОТАННОЕ</span> ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ. ВСЕ ПРОДУКТЫ ПРОЕКТИРУЮТСЯ В СООТВЕТСТВИИ С ЗАПРОСАМИ КЛИЕНТА. ПОСЛЕ МОДЕЛИРОВАНИЯ РЕЗУЛЬТАТЫ ОТПРАВЛЯЮТСЯ НА ТЕСТ-ДРАЙВ. СЛЕДУЮЩИЙ ШАГ ВКЛЮЧАЕТ ИЗГОТОВЛЕНИЕ ОБРАЗЦОВ И ПОСЛЕДУЮЩИЙ АНАЛИЗ СОВМЕСТНО С ЗАКАЗЧИКОМ. УЧИТЫВАЯ РЕАЛЬНУЮ КОНКУРЕНЦИЮ НА МИРОВОМ РЫНКЕ АВТОМИЛЬНОЙ ИНДУСТРИИ, МЫ ВСЕГДА СТАВИМ В ПРИОРИТЕТ ВЫСОЧАЙШЕЕ КАЧЕСТВО ПРОДУКЦИИ.
              </p>
            </motion.div>

            <motion.div
              {...fadeInLeft}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-[24px] md:text-[32px] font-bold">
                УПРАВЛЕНИЕ КАЧЕСТВОМ
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed">
                СИСТЕМА УПРАВЛЕНИЯ ПРОЦЕССАМИ ПРОИЗВОДСТВА И КОНТРОЛЯ КАЧЕСТВА ПРОДУКЦИИ СОСТОИТ ИЗ НЕСКОЛЬКИХ ЭТАПОВ. НА КАЖДОМ ЭТАПЕ <span className="font-bold">КОМАНДА СПЕЦИАЛИСТОВ ТЩАТЕЛЬНО СЛЕДИТ</span> ЗА ТЕХНОЛОГИЕЙ ПРОИЗВОДСТВА. В ПРОЦЕССЕ ПРОИЗВОДСТВА ВСЯ ПАРТИЯ ПРОДУКЦИИ ПРОХОДИТ ПРОВЕРКУ НА БРАК, А ПО ОКОНЧАНИЮ ЕЩЁ ПОВТОРНУЮ РУЧНУЮ ПРОВЕРКУ СОТНИ СОТРУДНИКОВ ПРОВЕРЯЮТ КАЖДУЮ ДЕТАЛЬ В РУЧНУЮ.
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeInScale}
            className="relative aspect-video bg-gray-200"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[32px] md:text-[48px] text-black font-bold">
                ВИДЕО
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
