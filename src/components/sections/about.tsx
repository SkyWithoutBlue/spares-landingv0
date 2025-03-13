'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AboutProps {
  className?: string;
}

interface StatisticItemProps {
  title: string;
  value: string;
}

const StatisticItem = ({ title, value }: StatisticItemProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-[100px] h-[100px] bg-gray-200 mb-4"></div>
    <div className="text-3xl leading-[24px] uppercase font-bold mb-2">{value}</div>
    <div className="font-roboto-condensed text-3xl leading-none tracking-[0] text-center uppercase  font-black" dangerouslySetInnerHTML={{ __html: title }}></div>
  </div>
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
    <section id="about" className={cn('py-20 bg-white text-black  px-[50px]', className)}>
      <h2 className="text-[60px] leading-[32px] uppercase font-bold mb-12">О НАС</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 ">
        <div className="space-y-10">
          <p className="text-[35px] leading-[120%] uppercase">
            МЫ - ЛИДЕРЫ В СФЕРЕ ОПТОВОЙ ТОРГОВЛИ АВТОМОБИЛЬНЫМИ ЗАПЧАСТЯМИ ДЛЯ
            РЕМОНТА И ОБСЛУЖИВАНИЯ АВТОМОБИЛЕЙ.
          </p>
          <p className="text-[35px] leading-[120%] uppercase">
            МЫ ПРЕДЛАГАЕМ ШИРОКИЙ АССОРТИМЕНТ ДЕТАЛЕЙ ДЛЯ ЛЕГКОВЫХ И КОММЕРЧЕСКИХ
            АВТОМОБИЛЕЙ, ОБЕСПЕЧИВАЯ ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ КАЖДОЙ
            ПРОДУКЦИИ.
          </p>
        </div>
        <div className="relative h-[443px] w-full">
          <Image
            src="/images/world-map.png"
            alt="Карта мира с маркерами"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative grid grid-cols-2 before:content-[''] before:absolute before:left-[-50px] before:right-[-50px] before:top-0 before:h-[3px] before:bg-black md:grid-cols-3 lg:grid-cols-6 text-3xl py-12 after:content-[''] after:absolute after:left-[-50px] after:right-[-50px] after:bottom-0 after:h-[3px] after:bg-black">

        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  );
};
