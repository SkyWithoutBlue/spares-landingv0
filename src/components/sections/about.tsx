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
  icon?: string;
}

const StatisticItem = ({ title, value, icon }: StatisticItemProps) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#F3F3F3] rounded-lg mb-3 md:mb-4 flex items-center justify-center group-hover:bg-[#014B9F] transition-colors">
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="group-hover:brightness-0 group-hover:invert transition-all"
        />
      )}
    </div>
    <div className="text-2xl md:text-3xl leading-[20px] md:leading-[24px] uppercase font-bold mb-2 text-[#014B9F] group-hover:text-black transition-colors">
      {value}
    </div>
    <div
      className="font-roboto-condensed text-2xl md:text-3xl leading-none tracking-[0] text-center uppercase font-black text-black group-hover:text-[#014B9F] transition-colors"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </motion.div>
);

export const About = ({ className }: AboutProps) => {
  const statistics = [
    { title: 'ВЫСОЧАЙШЕЕ <br> КАЧЕСТВО', value: '', icon: '/icons/quality.svg' },
    { title: 'НА РЫНКЕ', value: '25 ЛЕТ', icon: '/icons/market.svg' },
    { title: 'БИЗНЕС', value: 'B2B', icon: '/icons/business.svg' },
    { title: 'ЗАКАЗОВ', value: '121 090', icon: '/icons/orders.svg' },
    { title: 'ДОВОЛЬНЫХ КЛИЕНТОВ', value: '200', icon: '/icons/clients.svg' },
    { title: 'ПАРТНЕРОВ ПО МИРУ', value: '3000', icon: '/icons/partners.svg' },
  ];

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
