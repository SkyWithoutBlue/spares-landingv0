'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';

interface AboutProps {
  className?: string;
}

export const About = ({ className }: AboutProps) => {
  return (
    <section id="about" className={cn('w-full bg-white text-black', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
          <motion.h2
            {...fadeInLeft}
            className="text-[40px] md:text-[80px] uppercase font-bold text-nowrap"
          >
            О НАС
          </motion.h2>
          <div className="space-y-8">
            <motion.p
              {...fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-[24px] md:text-[35px] leading-[120%] uppercase"
            >
              Компания <b>INNO LINK LLC</b> специализируется на производстве компонентов для различных отраслей промышленности, включая автомобильную, судостроительную и полупроводниковую, предоставляя высококачественные, надежные и быстрые решения.
            </motion.p>
            <motion.p
              {...fadeInLeft}
              transition={{ delay: 0.4 }}
              className="text-[24px] md:text-[35px] leading-[120%] uppercase"
            >
              Мы предлагаем <b>собственное производство</b>, гарантируя качество и своевременную доставку. Учитываем все пожелания наших партнеров обеспечивая комфортное сопровождение от начала производства до доставки товара до склада партнера.
            </motion.p>
            <motion.p
              {...fadeInLeft}
              transition={{ delay: 0.6 }}
              className="text-[24px] md:text-[35px] leading-[120%] uppercase"
            >
              Благодаря современным технологиям, постоянным исследованиям и разработкам мы поддерживаем <b>передовые технологии в производстве</b> автомобильной отрасли, особенно большое внимание уделяем расширению производства шинных компонентов.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
