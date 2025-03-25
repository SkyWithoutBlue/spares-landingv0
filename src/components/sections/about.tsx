'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import { Building2, Globe2, Users, Target, Award, Clock, Shield, Zap, Factory, Ship, Car, Microchip } from 'lucide-react';

interface AboutProps {
  className?: string;
}

const industries = [
  { icon: Car, title: 'Автомобильная' },
  { icon: Ship, title: 'Судостроительная' },
  { icon: Microchip, title: 'Полупроводниковая' },
  { icon: Factory, title: 'Производство' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const About = ({ className }: AboutProps) => {
  return (
    <section id="about" className={cn('w-full relative overflow-hidden bg-gradient-to-b from-[#014B9F] to-[#003366]', className)}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 translate-y-1/2" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-32 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center gap-16 p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl">
            <motion.h2
              {...fadeInLeft}
              className="text-[32px] md:text-[48px] lg:text-[60px] font-bold mb-6"
            >
              О компании
            </motion.h2>
            <p className="text-lg text-gray-200">
              INNO-LINK - ваш надежный партнер в сфере поставок электронных компонентов
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-6">
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Компания INNO LINK LLC специализируется на производстве компонентов для различных отраслей промышленности, включая автомобильную, судостроительную и полупроводниковую, предоставляя высококачественные, надежные и быстрые решения.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {industries.map((industry, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                          <industry.icon className="w-6 h-6 text-blue-400" />
                          <span className="text-gray-200">{industry.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-6">
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Мы предлагаем собственное производство, гарантируя качество и своевременную доставку. Учитываем все пожелания наших партнеров обеспечивая комфортное сопровождение от начала производства до доставки товара до склада партнера.
                    </p>
                    <div className="flex items-center gap-4 text-blue-400">
                      <Clock className="w-6 h-6" />
                      <span className="text-gray-200">Быстрая доставка</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-6">
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Благодаря современным технологиям, постоянным исследованиям и разработкам мы поддерживаем передовые технологии в производстве автомобильной отрасли, особенно большое внимание уделяем расширению производства шинных компонентов.
                    </p>
                    <div className="flex items-center gap-4 text-blue-400">
                      <Zap className="w-6 h-6" />
                      <span className="text-gray-200">Современные технологии</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-3">
                      <Target className="w-8 h-8 text-blue-400" />
                      <span className="text-gray-200">Качество</span>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-3">
                      <Shield className="w-8 h-8 text-blue-400" />
                      <span className="text-gray-200">Надежность</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
