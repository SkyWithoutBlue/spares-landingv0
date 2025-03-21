'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInScale, staggerContainer, staggerItem } from '@/lib/constants/animations';

interface AboutProps {
  className?: string;
}

interface StatisticItemProps {
  title: string;
  value: string;
}

const StatisticItem = ({ title, value }: StatisticItemProps) => (
  <motion.div
    variants={staggerItem}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center"
  >
    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-gray-200 mb-3 md:mb-4"></div>
    <div className="text-2xl md:text-3xl leading-[20px] md:leading-[24px] uppercase font-bold mb-2">{value}</div>
    <div className="font-roboto-condensed text-2xl md:text-3xl leading-none tracking-[0] text-center uppercase font-black" dangerouslySetInnerHTML={{ __html: title }}></div>
  </motion.div>
);

export const About = ({ className }: AboutProps) => {
  const statistics = [
    { title: 'ВЫСОЧАЙШЕЕ <br> КАЧЕСТВО', value: '' },
    { title: 'НА РЫНКЕ', value: '25 ЛЕТ' },
    { title: 'БИЗНЕС', value: 'B2B' },
    { title: 'ЗАКАЗОВ', value: '121 090' },
    { title: 'ДОВОЛЬНЫХ КЛИЕНТОВ', value: '200' },
    { title: 'ПАРТНЕРОВ ПО МИРУ', value: '3000' },
  ];

  return (
    <section id="about" className={cn('py-8 md:py-20 bg-white text-black px-4 gap-8 md:px-[50px] flex', className)}>
      <motion.h2 {...fadeInLeft} className="text-[40px] md:text-[60px] uppercase text-nowrap whitespace-nowrap">
        О НАС
      </motion.h2>
      <div className="gap-8 md:gap-12 items-center mb-12 md:mb-20">
        <motion.div {...fadeInLeft} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 md:space-y-10">
          <p className="text-[24px] md:text-[35px] leading-[120%] uppercase">
          Компания <b>INNO LINK LLC</b> специализируется на производстве компонентов для различных отраслей промышленности, включая автомобильную, судостроительную и полупроводниковую, предоставляя высококачественные, надежные и быстрые решения.
          </p>
          <p className="text-[24px] md:text-[35px] leading-[120%] uppercase">
          Мы предлагаем <b>собственное производство</b>, гарантируя качество и своевременную доставку. Учитываем все пожелания наших партнеров обеспечивая комфортное сопровождение от начала производства до доставки товара до склада парТнера.
          </p>
          <p className="text-[24px] md:text-[35px] leading-[120%] uppercase">
          Благодаря современным технологиям, постоянным исследованиям и разработкам мы поддерживаем <b>передовые технологии в производстве</b> автомобильной отрасли,особенно большое внимание уделяем расширению производства шинных компонентов.
          </p>
          <p className="text-[24px] md:text-[35px] leading-[120%] uppercase">
          Мы строим <b>стабильную и бесперебойную работу</b> с нашими партнерами по всему миру.Благодаря большому спросу рынок наших партнеров постоянно расширяется.
          </p>
        </motion.div>
      </div>

    </section>
  );
};
