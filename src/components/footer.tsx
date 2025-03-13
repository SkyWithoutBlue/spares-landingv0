'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

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
    <footer className={cn('w-full bg-white text-black relative', className)}>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-black"></div>
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium">
              Логотип
            </Link>
            <p className="mt-3 md:mt-4 text-sm md:text-base">ALL RIGHT RESERVED, 2025</p>
          </div>

          <nav className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              О нас
            </a>
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Продукция
            </a>
            <a
              href="#partners"
              onClick={(e) => scrollToSection(e, 'partners')}
              className="text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Партнеры
            </a>
            <a
              href="#contacts"
              onClick={(e) => scrollToSection(e, 'contacts')}
              className="text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Контакты
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
