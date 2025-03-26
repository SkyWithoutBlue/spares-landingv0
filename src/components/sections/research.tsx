'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInScale } from '@/lib/constants/animations';
import { useState, useRef } from 'react';

interface ResearchProps {
  className?: string;
}

export const Research = ({ className }: ResearchProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section id="research" className={cn('w-full px-24 bg-gradient-to-b from-[#014B9F] to-[#013B6E] relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-16"
        >
          <motion.div
            {...fadeInLeft}
            className="text-center space-y-4"
          >
            <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-white">
              Исследования и контроль качества
            </h2>
            <p className="text-[18px] md:text-[20px] text-white/80 max-w-2xl mx-auto">
              Современный подход к разработке и контролю качества продукции
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-[80%]">
            <div className="space-y-8 max-w-3xl">
              <motion.div
                {...fadeInLeft}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#014B9F]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-[24px] md:text-[32px] font-bold text-white">
                      Исследования и разработки
                    </h3>
                  </div>
                  <p className="text-[16px] md:text-[18px] leading-relaxed text-white/80">
                    Наш исследовательский центр использует <span className="font-semibold text-white">современное, специально разработанное</span> программное обеспечение. Все продукты проектируются в соответствии с запросами клиента. После моделирования результаты отправляются на тест-драйв. Следующий шаг включает изготовление образцов и последующий анализ совместно с заказчиком. Учитывая реальную конкуренцию на мировом рынке автомобильной индустрии, мы всегда ставим в приоритет высочайшее качество продукции.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fadeInLeft}
                transition={{ delay: 0.2 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#014B9F]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-[24px] md:text-[32px] font-bold text-white">
                      Управление качеством
                    </h3>
                  </div>
                  <p className="text-[16px] md:text-[18px] leading-relaxed text-white/80">
                    Система управления процессами производства и контроля качества продукции состоит из нескольких этапов. На каждом этапе <span className="font-semibold text-white">команда специалистов тщательно следит</span> за технологией производства. В процессе производства вся партия продукции проходит проверку на брак, а по окончании ещё повторную ручную проверку сотни сотрудников проверяют каждую деталь в ручную.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              {...fadeInScale}
              className="w-full max-w-[320px] lg:max-w-[406px]"
            >
              <div
                className={cn(
                  "relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer group",
                  isVideoPlaying ? "scale-[1.02]" : "scale-100"
                )}
                onClick={handleVideoClick}
              >
                {!isVideoPlaying && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-[#014B9F] transform translate-x-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="mt-4 text-white/90 text-sm sm:text-base font-medium">Смотреть видео</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  poster="/images/research-poster.jpg"
                >
                  <source src="images/products/VIDEO PRODUCT.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
