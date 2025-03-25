'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/constants/animations';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className={cn('w-full text-black bg-white relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="py-12 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            <motion.div
              {...fadeInUp}
              className="text-center md:text-left space-y-6"
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-black.svg"
                  alt="logo"
                  width={160}
                  height={120}
                  className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                  priority
                />
              </Link>
              <div className="space-y-2">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
                  © 2025 INNO-LINK-LLC. Все права защищены
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black/60">
                  Разработка и производство автокомпонентов
                </p>
              </div>
            </motion.div>

            <motion.nav
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-x-8 gap-y-6 sm:gap-10 md:gap-16"
            >
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-[16px] sm:text-[18px] md:text-[20px] leading-none tracking-[0] uppercase font-medium hover:text-black/80 transition-colors duration-200 text-center whitespace-nowrap"
              >
                О нас
              </a>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="text-[16px] sm:text-[18px] md:text-[20px] leading-none tracking-[0] uppercase font-medium hover:text-black/80 transition-colors duration-200 text-center whitespace-nowrap"
              >
                Продукция
              </a>
              <a
                href="#partners"
                onClick={(e) => scrollToSection(e, 'partners')}
                className="text-[16px] sm:text-[18px] md:text-[20px] leading-none tracking-[0] uppercase font-medium hover:text-black/80 transition-colors duration-200 text-center whitespace-nowrap"
              >
                Партнеры
              </a>
              <a
                href="#contacts"
                onClick={(e) => scrollToSection(e, 'contacts')}
                className="text-[16px] sm:text-[18px] md:text-[20px] leading-none tracking-[0] uppercase font-medium hover:text-black/80 transition-colors duration-200 text-center whitespace-nowrap"
              >
                Контакты
              </a>
            </motion.nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
