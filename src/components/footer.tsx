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
    <footer className={cn('w-full bg-white text-black px-[50px]', className)}>
        <div className="w-full h-[3px] bg-black"></div>
      <div className="max-w-[1920px] mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-[32px] leading-none tracking-[0] uppercase font-medium">
              Логотип
            </Link>
            <p className="mt-4 text-base">ALL RIGHT RESERVED, 2025</p>
          </div>

          <nav className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              О нас
            </a>
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Продукция
            </a>
            <a
              href="#partners"
              onClick={(e) => scrollToSection(e, 'partners')}
              className="text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Партнеры
            </a>
            <a
              href="#contacts"
              onClick={(e) => scrollToSection(e, 'contacts')}
              className="text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              Контакты
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
