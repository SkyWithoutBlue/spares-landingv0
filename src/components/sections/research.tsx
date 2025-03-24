'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInScale } from '@/lib/constants/animations';

interface ResearchProps {
  className?: string;
}

export const Research = ({ className }: ResearchProps) => {
  return (
    <section id="research" className={cn('w-full bg-white py-16', className)}>
      <motion.h2
        {...fadeInLeft}
        className="text-[32px] md:text-[60px] 2xl:text-[80px] font-bold mb-16 bg-[url('/images/label-bg.png')] text-center bg-cover bg-no-repeat text-white h-[270px] flex items-center justify-center uppercase"
      >
        ИССЛЕДОВАНИЯ И КОНТРОЛЬ КАЧЕСТВА
      </motion.h2>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="space-y-8">
            <motion.div
              {...fadeInLeft}
              className="space-y-4"
            >
              <h3 className="text-[24px] md:text-[35px] font-bold text-black">
                ИССЛЕДОВАНИЯ И РАЗРАБОТКИ
              </h3>
              <p className="text-[16px] md:text-[30px] leading-[1.6] text-black font-[var(--font-roboto)]">
                НАШ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР ИСПОЛЬЗУЕТ <span className="font-bold text-black">СОВРЕМЕННОЕ, СПЕЦИАЛЬНО РАЗРАБОТАННОЕ</span> ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ. ВСЕ ПРОДУКТЫ ПРОЕКТИРУЮТСЯ В СООТВЕТСТВИИ С ЗАПРОСАМИ КЛИЕНТА. ПОСЛЕ МОДЕЛИРОВАНИЯ РЕЗУЛЬТАТЫ ОТПРАВЛЯЮТСЯ НА ТЕСТ-ДРАЙВ. СЛЕДУЮЩИЙ ШАГ ВКЛЮЧАЕТ ИЗГОТОВЛЕНИЕ ОБРАЗЦОВ И ПОСЛЕДУЮЩИЙ АНАЛИЗ СОВМЕСТНО С ЗАКАЗЧИКОМ. УЧИТЫВАЯ РЕАЛЬНУЮ КОНКУРЕНЦИЮ НА МИРОВОМ РЫНКЕ АВТОМИЛЬНОЙ ИНДУСТРИИ, МЫ ВСЕГДА СТАВИМ В ПРИОРИТЕТ ВЫСОЧАЙШЕЕ КАЧЕСТВО ПРОДУКЦИИ.
              </p>
            </motion.div>

            <motion.div
              {...fadeInLeft}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-[24px] md:text-[35px] font-bold text-black">
                УПРАВЛЕНИЕ КАЧЕСТВОМ
              </h3>
              <p className="text-[16px] md:text-[30px] leading-[1.6] text-black font-[var(--font-roboto)]">
                СИСТЕМА УПРАВЛЕНИЯ ПРОЦЕССАМИ ПРОИЗВОДСТВА И КОНТРОЛЯ КАЧЕСТВА ПРОДУКЦИИ СОСТОИТ ИЗ НЕСКОЛЬКИХ ЭТАПОВ. НА КАЖДОМ ЭТАПЕ <span className="font-bold text-black">КОМАНДА СПЕЦИАЛИСТОВ ТЩАТЕЛЬНО СЛЕДИТ</span> ЗА ТЕХНОЛОГИЕЙ ПРОИЗВОДСТВА. В ПРОЦЕССЕ ПРОИЗВОДСТВА ВСЯ ПАРТИЯ ПРОДУКЦИИ ПРОХОДИТ ПРОВЕРКУ НА БРАК, А ПО ОКОНЧАНИЮ ЕЩЁ ПОВТОРНУЮ РУЧНУЮ ПРОВЕРКУ СОТНИ СОТРУДНИКОВ ПРОВЕРЯЮТ КАЖДУЮ ДЕТАЛЬ В РУЧНУЮ.
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeInScale}
          >
            <div className="relative w-[320px] md:w-[406px] md:h-[720px] rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-[#F3F3F3]">
              <video
                className="w-[320px] h-[240px] md:w-[406px] md:h-[720px]"
                controls
                preload="metadata"
                poster="/images/square-play.svg"
              >
                <source src="images/products/VIDEO PRODUCT.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
